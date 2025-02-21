import AirtablePlus from 'airtable-plus'
import renderSignup from '../../../../lib/api/renderSignup';

export default async function handler (req, res) {
    let eventSlug = req.query.event; 
    if (Array.isArray(eventSlug)) eventSlug = eventSlug[0];

    if (!process.env.AIRTABLE_API_KEY) {
        return res.status(500).json({
            error: "Misconfigured server API key. Report this in #scrapyard"
        })
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

    console.log({ events, authorization, eventSlug });
    

    if (!event || event?.fields?.['API Password'] != authorization || event?.fields?.['Slug'] != eventSlug) {
        return res.status(401).json({
            error: "Invalid API key"
        });
    }

    const signups = await signupsTable.read({
        filterByFormula: `{Event Slug} = '${event.fields['Slug']}'`
    });

    return res.status(200).json(signups.map(renderSignup));
}
