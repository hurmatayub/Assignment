
import React from 'react';

const shoes = [
  {
    id: 1,
    name: 'WICKFORD',
    price: 5580,
    image: '/images/img1.webp',
  },
  {
    id: 2,
    name: 'OSCAR',
    price: 5400,
    image: '/images/img2.webp',
  },
  {
    id: 3,
    name: 'GIANTE',
    price: 5520,
    image: '/images/img3.webp',
  },
  {
    id: 4,
    name: 'PIRLO',
    price: 5460,
    image: '/images/img4.webp',
  },
];

const formatPrice = (price) => {
  return price.toLocaleString('en-PK', { style: 'currency', currency: 'PKR' });
};


const ShoeStore = () => {
  return (
    <div  className='bg-black min-h-screen'>
    <div className="container mx-auto p-6">
      <div className="relative w-full h-64 mb-10 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
        <img
          src="/images/banner.jpg"
          alt="Shoe Store Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent flex justify-center items-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">Discover Your Perfect Pair</h1>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center text-white mb-8">Our Collection</h1>

      <div className="flex flex-col items-center mb-6">
        <div className="flex space-x-4 mb-4">
          {['Sport', 'Formal', 'Casual', 'Winter'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-black text-white rounded-md shadow transition-all duration-300 transform hover:bg-slate-500 hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        <div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl relative"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
              -40% OFF
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium text-center text-gray-800 mb-2">{shoe.name}</h2>
              <p className="text-gray-900  text-sm text-center mb-2">{formatPrice(shoe.price)}</p>
              <button
                className="mt-4 w-full px-4 py-2 bg-black hover:bg-slate-600 text-white rounded-md shadow transition duration-300 transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ShoeStore;
