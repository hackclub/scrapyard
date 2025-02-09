import AirtablePlus from 'airtable-plus'
import renderSignup from '../../../../../lib/api/renderSignup';

export default async function handler (req, res) {
    const eventSlug = req.query.event;
    const signup = req.query.id;

    if (!process.env.AIRTABLE_API_KEY) {
        return res.status(500).json({
            error: "Misconfigured server API key. Report this in #scrapyard"
        })
    }

    if (!signup) {
        return res.status(400).json({
            error: "Missing signup ID"
        });
    }

    if (!req.body) {
        return res.status(400).json({
            error: "Missing request body"
        });
    }

    let { authorization } = req.headers;
    if (authorization.startsWith('Bearer ')) authorization = authorization.substring(7);

    if (!authorization) {
        return res.status(401).json({
            error: "Missing API key"
        });
    }

    const eventsTable = new AirtablePlus({
        baseID: process.env.AIRTABLE_BASE_ID,
        apiKey: process.env.AIRTABLE_API_KEY,
        tableName: 'Events'
    });

    const signupsTable = new AirtablePlus({
        baseID: process.env.AIRTABLE_BASE_ID,
        apiKey: process.env.AIRTABLE_API_KEY,
        tableName: 'Local Attendees'
    });

    const events = await eventsTable.read({
        filterByFormula: `AND({Status} = 'Approved', {API Password} = '${authorization}')`
    });

    const event = events[0];

    if (!event || event?.fields?.['API Password'] != authorization || event?.fields?.['Slug'] != eventSlug) {
        return res.status(401).json({
            error: "Invalid API key"
        });
    }

    const signups = await signupsTable.read({
        filterByFormula: `AND({Event Slug} = '${event.fields['Slug']}', RECORD_ID() = '${signup}')`
    });


    if (!signups[0]) {
        return res.status(404).json({
            error: "Signup not found"
        });
    }

    const updatedSignup = await signupsTable.update(signups[0].id, {
        "Organizer Notes": JSON.stringify(req.body, null, 4),
    });



    return res.status(200).json(renderSignup(updatedSignup));
}