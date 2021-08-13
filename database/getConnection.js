import pg from "pg";

export default function getConnection() {
    // const connectionString = 'postgres://user:pass@172.17.0.1:5433/db'
    const client = new pg.Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      })

    return client
}