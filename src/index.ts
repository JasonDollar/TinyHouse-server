import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'
import { connectDatabase } from './db'

require('dotenv').config()

// const app = express()


const mount = async (app: Application) => {
  const db = await connectDatabase()
  // console.log(db)
  const port = 9000
  
  const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: () => ({ db }), 
  })
  server.applyMiddleware({ app, path: '/api' })
  
  
  
  app.listen(port, () => {
    console.log('server running')
  })

  const listings = await db.listings.find({}).toArray()
  console.log(listings)
}

mount(express())