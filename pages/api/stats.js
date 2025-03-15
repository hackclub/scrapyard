import AirtablePlus from 'airtable-plus'

export default async function handler (req, res) {
    if (!process.env.AIRTABLE_API_KEY) {
        return res.status(500).json({
            error: "Misconfigured server API key. Report this in #scrapyard"
        })
    }

    const attendeesTable = new AirtablePlus({
        baseID: "appmCFCuFmxkvO1zc",
        apiKey: process.env.AIRTABLE_API_KEY,
        tableName: 'User',
    });

    const total = await attendeesTable.read({
        filterByFormula: `NOT({Loops - scrapyardFlagshipProjectSubmittedAt} = '')`
    }).length;

    const count = await attendeesTable.read({
        filterByFormula: `NOT({Loops - scrapyardFlagshipProjectYswsEligibleAt} = '')`
    }).length;
    
    return res.status(200).json({ total, count });
}