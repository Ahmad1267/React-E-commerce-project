import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <div className='w-full'>
<footer className="bg-slate-800 w-full">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

    <span className="text-sm text-center text-white leading-relaxed">
      © 2026{" "}
      <a
        href="https://flowbite.com/"
        className=" font-semibold hover:underline"
      >
        Flowbite™
      </a>
      . All Rights Reserved.
    </span>

    <ul className="flex flex-wrap justify-center text-white items-center gap-x-4 gap-y-3 md:gap-6 text-sm font-medium ">

      <li>
          Privacy Policy
      </li>

      <li>
        
          Licensing
      </li>

      <li>
        <Link to={"/contact"} className="hover:text-white transition duration-300">
          Contact
        </Link>
      </li>
    </ul>

  </div>
</footer>

    </div>
   
  )
}

export default Footer
