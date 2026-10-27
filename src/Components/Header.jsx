import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router'
import { IoPerson } from "react-icons/io5";
import { clearCart } from '../Redux/CartSlice';
import { FiShoppingCart } from "react-icons/fi";



function Header() {
  const dispatch = useDispatch();
  const profileRef = useRef(null)
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  )
  const [showProfile, setShowProfile] = useState(false)
  useEffect(()=>{
    const checkLogin = ()=>{
      setIsLogin(localStorage.getItem("isLogin") === "true")
    };
    window.addEventListener("loginStatusChanged", checkLogin)
    // return()=>{
    //   window.removeEventListener("loginStatusChanged", checkLogin)
    // }

  },[])
  useEffect(()=>{
    const clickOutSide = (e)=>{
      if(profileRef.current &&
        !profileRef.current.contains(e.target)
      ){
        setShowProfile(false)
      }
   
    }
       document.addEventListener("mousedown", clickOutSide)
  },[])
  
  const myCart = useSelector((store) => store.cartStore.cart)
  
  return (
    <>
<nav className="bg-slate-800 w-full min-h-[65px] sticky top-0 z-50 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 px-3 sm:px-5 md:px-7 py-2 sm:py-0">
              <h1 className='shrink-0'>
                <Link to = {"/"}  className="text-white text-xl sm:text-2xl font-serif cursor-pointer ml-0 md:ml-4 lg:ml-10"
>
                Coding Vibes
              </Link></h1>
  <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5 md:gap-x-8 lg:gap-x-12 text-base sm:text-lg md:text-xl font-serif mr-0 lg:mr-5">
                <li> <NavLink to={"/"} className={({isActive}) =>`text-white cursor-pointer ${isActive ? "text-white font-bold" : "text-black"}`}>Home </NavLink></li>
              
                <li> <NavLink to={"/product"} className={({isActive})=>`text-white cursor-pointer ${isActive ? "text-white font-bold" : "text-black"}`}>Products </NavLink></li>
                <li> <NavLink to={"/contact"} className={({isActive})=>`text-white cursor-pointer ${isActive ? "text-white font-bold" : "text-black"}`}> Contact </NavLink></li>
                   {isLogin && (               
                <li> <NavLink to = {"/cart"} className={({isActive})=>`relative flex items-center text-white cursor-pointer ${isActive ? "text-white font-bold" : "text-black"}`}
                 onClick={(e)=>{
                  if(!isLogin){
                    e.preventDefault()
                  }
                }}>  <FiShoppingCart />
                 {myCart.reduce( (total, product) => total + (product.quantity || 1),0) > 0 && (
                <span className="absolute -top-2 -right-3 flex h-4 min-w-4 items-center justify-center rounded-full  px-1 text-[10px] font-bold text-white">
                 {myCart.reduce( (total, product) => total + (product.quantity || 1),0)} </span>)}</NavLink>
                 </li>
                 )}
            <li className='relative shrink-0' ref={profileRef}>
              {isLogin ? (
                <>
                <button onClick={()=>setShowProfile(!showProfile)}
                className='text-white cursor-pointer mt-1'
                  >
                   <IoPerson />
 
                </button>
                {showProfile && (<div className='bg-white w-25 rounded-md top-full right-0 py-1 px-2 absolute z-50 shadow-lg'><Link to={"/profile"} onClick={()=>setShowProfile(false)}  className='flex hover:bg-gray-100 rounded-md w-full py-1 px-2 '>Profile</Link> 
                 <button onClick={()=>{localStorage.removeItem("isLogin")
                 window.dispatchEvent(new Event("loginStatusChanged"))
                 dispatch(clearCart())
                 setShowProfile(false)
                 navigate("/login")
                 }}
                className="bg-white hover:bg-gray-100 rounded-md cursor-pointer px-2 py-1 w-full text-left"
                 >Logout</button>
                </div> 
              )}
               </>):(
              <Link
                to={"/login"}
                className="text-white px-3 py-1 rounded-md cursor-pointer text-base">
                Login
              </Link>
              )}
            </li>
              </ul>
            </nav>      
    </>
  )
}

export default Header
