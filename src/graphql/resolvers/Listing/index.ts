import { IResolvers } from 'apollo-server-express'
import { ObjectId } from 'mongodb'
import { Database, Listing } from '../../../lib/types'


export const listingResolver: IResolvers = {

  Query: {
    listings: async (_root: undefined, _args: {}, { db }: { db: Database }): Promise<Listing[]> => await db.listings.find({}).toArray(),
  },
  Mutation: {
    deleteListing: async (_root: undefined, { id }: { id: string }, { db }: { db: Database }): Promise<Listing> => {
      const deleteRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      })

      if (!deleteRes.value) {
        throw new Error('failed to delete listing')
      }
      return deleteRes.value
    },
  },
  Listing: {
    //  field below, as others similar are taken care of by graphql itself - 1 to 1 map, trivial resolver
    // title: (listing: Listing) => listing.title,
    
    id: (listing: Listing): string => listing._id.toString(),
  },
}
