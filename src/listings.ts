interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export const listings: Listing[] = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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