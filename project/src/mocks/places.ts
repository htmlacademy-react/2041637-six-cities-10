import { Hotel } from '../types/hotel';

export const places: Hotel[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 57,
        longitude: 2,
        zoom: 2,
      },
      name: 'Aberdeen',
    },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, vitae? Asperiores maxime autem adipisci fuga eum! Praesentium magnam suscipit dignissimos ipsum ex ducimus, exercitationem quam corrupti qui illum neque vero placeat unde quasi. Vero repellat modi alias deleniti quas non a, error sunt ad in, rem incidunt nulla eligendi sapiente.',
    goods: ['Heating', 'WiFi', 'Kitchen'],
    host: {
      avatarUrl: 'http://picsum.photos/300/200?random=4',
      id: 1,
      isPro: true,
      name: 'Tiffany',
    },
    id: 1,
    images: ['http://picsum.photos/300/200?random=4', 'http://picsum.photos/300/200?random=4', 'http://picsum.photos/300/200?random=4'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 57,
      longitude: 2,
      zoom: 2,
    },
    maxAdults: 3,
    previewImage: 'http://picsum.photos/300/200?random=4',
    price: 130,
    rating: 3.3,
    title: 'Aberdeen Resort & Spa 3*',
    type: 'house',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 13,
        longitude: 100,
        zoom: 2,
      },
      name: 'Bangkok',
    },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, vitae? Asperiores maxime autem adipisci fuga eum! Praesentium magnam suscipit dignissimos ipsum ex ducimus, exercitationem quam corrupti qui illum neque vero placeat unde quasi. Vero repellat modi alias deleniti quas non a, error sunt ad in, rem incidunt nulla eligendi sapiente.',
    goods: ['Heating', 'Cable TV', 'Kitchen', 'WiFi'],
    host: {
      avatarUrl: 'http://picsum.photos/300/200?random=4',
      id: 2,
      isPro: true,
      name: 'Sam',
    },
    id: 2,
    images: ['http://picsum.photos/300/200?random=4', 'http://picsum.photos/300/200?random=4', 'http://picsum.photos/300/200?random=4'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 13,
      longitude: 100,
      zoom: 2,
    },
    maxAdults: 1,
    previewImage: 'http://picsum.photos/300/200?random=4',
    price: 70,
    rating: 2.5,
    title: 'Bangkok Resort & Spa 2*',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 53,
        longitude: 6,
        zoom: 2,
      },
      name: 'Dublin',
    },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, vitae? Asperiores maxime autem adipisci fuga eum! Praesentium magnam suscipit dignissimos ipsum ex ducimus, exercitationem quam corrupti qui illum neque vero placeat unde quasi. Vero repellat modi alias deleniti quas non a, error sunt ad in, rem incidunt nulla eligendi sapiente.',
    goods: ['Cable TV', 'Wifi', 'Kitchen'],
    host: {
      avatarUrl: 'http://picsum.photos/300/200?random=4',
      id: 3,
      isPro: false,
      name: 'Monika',
    },
    id: 3,
    images: ['http://picsum.photos/300/200?random=4', 'http://picsum.photos/300/200?random=4', 'http://picsum.photos/300/200?random=4'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 53,
      longitude: 6,
      zoom: 2,
    },
    maxAdults: 4,
    previewImage: 'http://picsum.photos/300/200?random=4',
    price: 200,
    rating: 4.8,
    title: 'Dublin Resort & Spa 5*',
    type: 'hotel',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 22,
        longitude: 114,
        zoom: 2,
      },
      name: 'Hong Kong',
    },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, vitae? Asperiores maxime autem adipisci fuga eum! Praesentium magnam suscipit dignissimos ipsum ex ducimus, exercitationem quam corrupti qui illum neque vero placeat unde quasi. Vero repellat modi alias deleniti quas non a, error sunt ad in, rem incidunt nulla eligendi sapiente.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'http://picsum.photos/300/200?random=4',
      id: 4,
      isPro: true,
      name: 'Chan',
    },
    id: 4,
    images: ['http://picsum.photos/300/200?random=4', 'http://picsum.photos/300/200?random=4', 'http://picsum.photos/300/200?random=4'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 22,
      longitude: 114,
      zoom: 2,
    },
    maxAdults: 1,
    previewImage: 'http://picsum.photos/300/200?random=4',
    price: 30,
    rating: 0.5,
    title: 'Hong Kong Resort & Spa',
    type: 'room',
  },
];
