import getConnection from "../../database/getConnection";

export default function reportPageViewed(req, res) {
    if (req.method === 'POST') {
        const pgClient = getConnection()
        pgClient.connect()

        pgClient.query(
            'INSERT INTO experiment_viewed (user_id, anonymous_id, received_at, experiment_id, variation_id, url, user_agent)'+
            'VALUES ($1, $2, TO_TIMESTAMP($3/1000.0), $4, $5, $6, $7)',
            [req.body.user_id, req.body.anonymous_id, req.body.received_at, req.body.experiment_id, req.body.variation_id, req.body.url, req.body.user_agent],
            (error, result) => {
                if (error) {
                    console.error(error)
                    return
                }

                console.log(`inserido ${result.oid}`)

                pgClient.end()
            }
        )
    } else res.status(404).json({ message: 'Page not found!' })

    res.status(200).json({ message: 'Reported!' })
}