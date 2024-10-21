import React from 'react';

const formalShoes = [
  {
    id: 1,
    name: 'COLTER',
    price: 6600,
    image: '/images/img9.webp',
  },
  {
    id: 2,
    name: 'SUEDE',
    price: 48550,
    image: '/images/img10.webp',
  },
  {
    id: 3,
    name: 'DYNASTY',
    price: 7750,
    image: '/images/img11.webp',
  },
  {
    id: 4,
    name: 'TROY',
    price: 6000,
    image: '/images/img12.webp',
  },
];

const formatPrice = (price) => {
  return price.toLocaleString('en-PK', { style: 'currency', currency: 'PKR' });
};

const Formal = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold text-center text-white mb-8">Formal Shoes</h1>

        <div className="flex flex-col items-center mb-6">
          <div className="flex space-x-4 mb-4">
            {['All', 'Men', 'Women'].map((category) => (
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
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {formalShoes.map((shoe) => (
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
                <p className="text-gray-900 text-sm text-center mb-2">{formatPrice(shoe.price)}</p>
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

export default Formal;
