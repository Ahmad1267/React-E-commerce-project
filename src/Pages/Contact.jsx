import React from 'react'
import { useState } from 'react'
import { IoCallSharp } from "react-icons/io5";
import { IoMailOpenSharp } from "react-icons/io5";

function Contact() {
      const [message, setMessage] = useState("")
      const [name, setName]= useState("") 
       const [nameError, setNameError] = useState("")
       const [email, setEmail] = useState("")
       const [emailError, setEmailError] = useState("")
       const [subject, setSubject] = useState("")
       const [subjectError, setSubjectError] = useState("")
       const [detail, setDetail] = useState("")
       const [detailError, setDetailError] = useState("")
      
    

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameError("")
    setEmailError("")
    setSubjectError("")
    setDetailError("")
    setMessage("")
    

    if (name === "") {
      setNameError("Name is required")
      return
    }
    if (email === "") {
      setEmailError("Plz enter the email ")
      return
    }
    if (!email.includes("@gmail.")) {
      setEmailError("Plz enter valid email")
      return
    }
    if(subject === ""){
      setSubjectError("Enter subject")
    return
    }
    if(detail === ""){
      setDetailError("Enter details")
    return
    }
    if(detail.length < 6){
      setDetailError("Detail provide at least 6 characters")
    }
setMessage("Your message has been submitted successfully!")
setName("")
setEmail("")
setSubject("")
setDetail("")


  setTimeout(() => {
    setMessage("")
  }, 2000)
  }
  
  return (
    <>
       <div className="bg-gray-200 min-h-screen w-full px-4 sm:px-6 py-10 sm:py-16 md:py-10">
        <div className='flex justify-center'>
            <h1 className='text-center text-xl'>Contact Us</h1>
 
        </div>
               <p className='mt-5 text-center text-gray-700'>Have a question about our products? We'd love to hear from you.</p>
  <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-6 max-w-2xl mx-auto px-0 sm:px-4 md:px-6">
    <div className="border rounded-xl min-h-[100px] w-full max-w-[320px] bg-white border-gray-300 mt-4 sm:mt-6 mx-auto p-4">
                          <h1 className="text-lg sm:text-xl font-medium mt-1 sm:ml-4">Email</h1>
                          <p className="mt-2 flex items-center gap-2 sm:ml-4 text-sm sm:text-base break-all"><IoMailOpenSharp />
                           <span>productsupport@gmail.com</span>
                     </p>
                </div>
    <div className="border rounded-xl min-h-[100px] w-full max-w-[320px] bg-white border-gray-300 mt-4 sm:mt-6 mx-auto p-4">
                          <h1 className="text-lg sm:text-xl font-medium mt-1 sm:ml-4">Call Us</h1>
                          <p className="flex items-center mt-2 gap-2 sm:ml-4 text-sm sm:text-base"><IoCallSharp/>
                          <span>+9200 2345876</span>
                          </p>
                 </div>

              </div>
  <div className="bg-white w-full max-w-[630px] mx-auto border border-gray-300 rounded-xl mt-5 sm:mt-6">
         <form
          onSubmit={handleSubmit}
          className="bg-white p-8 sm:p-6 md:p-8 rounded-2xl shadow flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-gray-800">
            Send Us a Message
          </h2>

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>{ setName(e.target.value)
                setNameError("")
              }}
              
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {nameError && (
                  <p className="text-red-500 ml-3 mt-2">
                    {nameError} </p>)}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)
               setEmailError("") 
              }}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
             {emailError && (
                <p className="text-red-500  mt-2 ml-3">
                  {emailError}
                </p>)}
    
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(e)=> {setSubject(e.target.value)
              setSubjectError("")}}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
              {subjectError && (
                  <p className="text-red-500 ml-3 mt-2">
                    {subjectError} </p>)}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              value={detail}
              onChange={(e)=> {setDetail(e.target.value)
               setDetailError("")
              }}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {detailError && (
                  <p className="text-red-500 ml-3 mt-2">
                    {detailError} </p>)}
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
          {message && (
  <p className="text-green-600 text-center">
    {message}
  </p>
          )}
        </form>

              </div>
              

    </div>
    </>
    
  )
}

export default Contact