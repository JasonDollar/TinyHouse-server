import { MongoClient } from 'mongodb'
import { Database } from '../lib/types'

export const connectDatabase = async (): Promise<Database> => {
  // connect() doesn't like possible undefined type
  const url = process.env.MONGO_URI || ''
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

  const db = client.db('tinyhouse')
  // console.log(db.collection('graphql'))
  return {
    listings: db.collection('listings'),
  }
}

