import { ObjectId } from 'mongodb'
import { connectDatabase } from '../src/db'
import { Listing } from '../src/lib/types'

require('dotenv').config()

const seed = async () => {
  try {
    const db = await connectDatabase()
    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        title: 'Clean and fully furnished apartament',
        image: 'https://www.lotustherm.ro/images/phocagallery/ApartamentVIP/thumbs/phoca_thumb_l_apartament%20vip%20-%207.jpg',
        address: '3020 Scotchmere Dr W, Toronto, ON, Canada',
        price: 55000,
        numOfGuests: 4, 
        numOfBeds: 2,
        numOfBaths: 1,
        rating: 5,
      },
      {
        _id: new ObjectId(),
        title: 'Luxorious home with a pool',
        image: 'https://i.ytimg.com/vi/3Ob_uk0cJFI/maxresdefault.jpg',
        address: '3020 Scotchmere Dr W, Toronto, ON, Canada',
        price: 120000,
        numOfGuests: 8, 
        numOfBeds: 5,
        numOfBaths: 3,
        rating: 5,
      },
      {
        _id: new ObjectId(),
        title: 'Old house',
        image: 'https://1.bp.blogspot.com/_c_8fUslYOHw/TM_ofisDgAI/AAAAAAAAB00/mAgtBtubPAg/s1600/bucatarie1.jpg',
        address: '3020 Scotchmere Dr W, Toronto, ON, Canada',
        price: 12000,
        numOfGuests: 2, 
        numOfBeds: 1,
        numOfBaths: 1,
        rating: 2,
      },
    ]

    for (const listing of listings) {
      await db.listings.insertOne(listing)
    }
    console.log('seed success')
  } catch {
    throw new Error('failed to seed db')
  }
}

seed()