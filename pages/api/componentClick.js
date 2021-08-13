import getConnection from "../../database/getConnection";

export default function handler(req, res) {
    if (req.method === 'POST') {
        const pgClient = getConnection()
        pgClient.connect()

        pgClient.query(
            'INSERT INTO component_click (user_id, received_at) '+
            'VALUES ($1, TO_TIMESTAMP($2/1000.0))',
            [req.body.user_id, req.body.received_at],
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