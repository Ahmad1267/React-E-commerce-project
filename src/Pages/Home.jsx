import React from 'react'
import { Link } from 'react-router'
import Slider from './Slider'


function Home() {
  return (

    <>
       <div className="min-h-screen w-full bg-gray-100 pb-7">

  {/* Main Heading */}
  <div className="max-w-5xl mx-auto flex justify-center">
    <div>
    <h1 className="text-4xl md:text-5xl font-bold text-center mt-4">
      Welcome to Our Products
    </h1>

    <p className="mt-6 text-lg font-serif text-gray-700 text-center">
      Discover a wide range of products in one simple and easy-to-use
      application.
    </p>

    <p className="mt-3 text-lg font-serif text-gray-700 text-center">
      Explore products, check their prices, view ratings, and find detailed
      information about the items you are interested in.
    </p>
    </div>
  </div>

  {/* Features  */}
  <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-6 mb-6">

    
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold">
        <img src="/im26.jfif" alt="" className='rounded-xl' />
      </h2>

<div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>

</div>
    
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold">
        <img src="image1.jfif" alt="" className='h-81 rounded-xl'/>
      </h2>
       <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>

    
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold ">
        <img src="watch.jfif" alt="" className='h-81 w-90 rounded-xl'/>
      </h2>
     <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>

       <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold">
        <img src="/load.jfif" alt="" className='h-81 w-90 rounded-xl'/>
      </h2>
      <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>

   
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold">
        <img src="images3.jfif" alt="" className='h-81 w-90 rounded-xl'/>
      </h2>
      <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>

    
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold ">
        <img src="img27.jfif" alt="" className='h-81 w-90 rounded-xl'/>
      </h2>
      <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>

     <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold">
        <img src="/images6.jfif" alt="" className='h-81 w-90 rounded-xl'/>
      </h2>
     <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>

    
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold">
        <img src="car.webp" alt="" className='h-81 w-90 rounded-xl'/>
      </h2>
      <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>

    
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold ">
        <img src="32.jpg" alt="" className='h-81 w-90 rounded-xl'/>
      </h2>
    <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>

     <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold">
        <img src="/images17.jfif" alt="" className='h-81 w-90 rounded-xl'/>
      </h2>
      <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>

    
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold">
        <img src="bike.jfif" alt="" className='h-81 w-90 rounded-xl'/>
      </h2>
      <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>

    
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-500 cursor-pointer">
      <h2 className="text-2xl font-bold ">
        <img src="watch11.jfif" alt="" className='h-81 w-90 rounded-xl'/>
      </h2>
      <div className="flex justify-between">
  <div>
    <p className="mt-2 font-bold text-2xl ml-2">
      Mini Sports Bike
    </p>

    <p className="ml-2 text-sm text-gray-500 flex mb-2">
      458 reviews |
      <span className="text-yellow-400 font-bold flex ml-1">
        ★
        <span className="text-black ml-1">4.5</span>
      </span>
    </p>
  </div>

  <button className="bg-orange-500 rounded-md mt-4 mb-3 mr-2 text-white font-bold w-25 h-10">
    View Detail
  </button>
</div>
    </div>    

  </div>
<Slider/>
  
  <div className="max-w-5xl mx-auto mt-7 bg-white p-8 rounded-xl text-center shadow-lg ">
    <h2 className="text-3xl font-bold">
      Start Exploring
    </h2>

    <p className="mt-3 font-[Arial]">
      Explore our products and find something you like!
    </p>
    <Link to={"/product"} >
    <button className="mt-5 bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-700 transition duration-300 cursor-pointer"> 
      Explore Products
    </button>
     </Link>
  </div>

</div>

    </>
  )
}

export default Home
