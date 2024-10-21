import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-white mb-8">Contact Me</h1>

        <div className="flex flex-col lg:flex-row justify-between mb-10">
          <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 mb-6 lg:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-2">
              If you have any questions or need assistance, feel free to reach out to us through the information below:
            </p>
            <p className="mb-2"><strong>Email:</strong> hurmatayub64@gmail.com</p>
            <p className="mb-2"><strong>Phone:</strong> 0123456789</p>
            <p className="mb-2"><strong>Address:</strong>abc road, Karachi, Pakistan</p>
          </div>

          <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4">Contact Form</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
