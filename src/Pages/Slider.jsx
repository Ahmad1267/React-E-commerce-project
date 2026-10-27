import { current } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'

function Slider() {

const images = [
    "/mobile1.jfif",
    "/mobiles.jfif",
    "device.jfif",
    "/images3.jfif",
    "/mobile.jfif",
    "/bike.jfif",
    "/car.webp"
]

const [slider, setSlider] = useState(0)

useEffect(()=>{
    const interval = setInterval(()=>{
        setSlider((prev)=>(prev + 1) % images.length) 
    }, 3000)
    return()=> clearInterval(interval)
}, [images.length])

const prevSlide = () =>{
    setSlider((prev)=>(prev - 1 + images.length) % images.length)
}

const nextSlide = () =>{
    setSlider((prev)=> (prev + 1) % images.length)
}




  return (
       <>
       
           <div className='w-full'>

            <img src={images[slider]} alt="Slider" 
            className='h-[550px] w-full'/>
            <button onClick={prevSlide}
            className='bg-white rounded-full px-4 py-2 left-156 text-xl top-1/2-translate-y-1/2 absolute shadow mt-3 '>
            </button>
            
            <button onClick={nextSlide}
            className='bg-white rounded-full px-4 py-2 right-156 text-xl top-1/2-translate-y-1/2 absolute shadow mt-3'>
            </button>

            <div className='flex justify-center mt-4 gap-3'>
                {images.map((image, index)=>(
                    <button key={index}
                    onClick={()=>setSlider(index)}
                     className={`h-3 w-3 rounded-full transition-colors ${
              slider === index
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}/>
                ))}

            </div>
           </div>
         </>
  )
}

export default Slider