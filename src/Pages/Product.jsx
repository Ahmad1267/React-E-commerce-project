import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addTocart } from '../Redux/CartSlice';
import { ToastContainer, toast } from 'react-toastify';



function Product() {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(1)
  const perPage = 6;
  const indexOfLastItem = page * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItem = cart.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(cart.length / perPage)
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(1)
  const [activeBtn, setActiveBtn] = useState("")
  
  let getPro = () =>{
    axios.get(`https://dummyjson.com/carts`) 
    .then((res)=> {
      // console.log(res.data.carts)
      setCart(res.data.carts)
      
   setLoading(false)
  })
    
   
    }
  
  useEffect(()=>{
    getPro()
  },[])

  return (
    <>
    <ToastContainer position='top-center'/>
          { loading ? (<div className='fixed flex items-center justify-center bg-white inset-0'><div className='border border-gray-400 border-4 border-r-white h-10 w-10 rounded-full animate-spin'></div></div>):(

    <div className='flex flex-col items-center bg-gray-100 w-full min-h-screen'>
      
        
        <div className="mb-8 mt-3 text-center">
      <p className="text-sm font-bold uppercase tracking-[3px] text-orange-500">
        Discover Your Favorites
      </p>

      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Our <span className="text-orange-500">Products</span>
      </h1>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
        Explore our collection of quality products at great prices.
        Find something you'll love.
      </p>

      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-orange-500"></div>
    </div>

      <div className='mt-5 grid grid-cols-3 p-5 gap-8 '>
          {currentItem.map((obj)=>(
             <Cart key={obj.id} data={obj}
             />
          ))}
        </div>
        
        <div className="flex justify-center mt-9 gap-5 mb-4">
          <button onClick={() => {setPage(page - 1); setActive(page - 1); setActiveBtn("prev")}} disabled={page === 1}  className={`cursor-pointer border rounded-md px-3 py-1 disabled:opacity-30 ${active === "page - 1" ? "bg-gray-500 text-white":""}, ${activeBtn === "prev" ? "bg-orange-500 text-white":""}`}>Previous</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i + 1} onClick={() => {setPage(i + 1); setActive(i + 1)}} className={`cursor-pointer border rounded-md px-3 py-1 ${active ===i + 1 ? "bg-orange-500 text-white":""}`}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => {setPage(page + 1); setActive(page + 1); setActiveBtn("next")}} disabled={page === totalPages} className={`cursor-pointer border rounded-md px-3 py-1 disabled:opacity-30 w-20 ${active === page + 1  ? "bg-gray-500 text-white":""}, ${activeBtn === "next" ? "bg-orange-500 text-white" : ""}`}>
            Next
          </button>
        </div>
      </div>
      )}
    </>
  )
}

export default Product

const Cart = ({data})=>{
  const navigate = useNavigate()
const product = data.products[0];
  const dispatch = useDispatch();

  const handleAddCart = ()=>{
    const IsLogin = localStorage.getItem("isLogin")
  
    if(IsLogin === "true"){
      dispatch(addTocart(product));
      toast.success("Item added")
    }
    else{
       navigate("/login")
    }
  }
  
  return(
    <>
    
    <div className='h-100 w-80 rounded-xl flex flex-col bg-white cursor-pointer hover:scale-105 transition duration-500'>
    <Link to = {`/productdet/${data.id}`}>
      <div className='mt-5 px-10 border rounded-md bg-gray-200 w-70 ml-5 border-gray-100'>
      <img src={product.thumbnail} alt={product.title} className=' h-60 w-60 rounded-xl'/>
</div>
 <div className='ml-5 text-lg font-bold font-serif truncate w-71'>
  <p>{product.title}</p>
 </div>
<div className='flex justify-between items-center w-full px-4'>

  <div className='flex'>
    <span className='text-sm font-medium mr-1 ml-1'>Rs</span>
    <span className='font-bold text-xl'>{product.price}</span>
  </div>
  <div className='bg-emerald-50 rounded-lg px-2 py-1'>
    <p className='text-emerald-500 text-sm font-semibold'>{product.discountPercentage}%</p>
  </div>
</div>
{/* <div className='flex justify-between items-center w-full px-2'> */}
 <div className='flex px-2'>

 <div className='bg-pink-400 flex justify-center w-9 rounded-md ml-3 mt-1'>
  <p className=' text-xs text-white font-bold font-serif'>Fast</p>
 </div>
 <div className='bg-yellow-300 rounded-md w-16 justify-center flex mt-1 ml-1'>
  <p className='font-bold text-xs font-serif'>Delivery</p>
 </div>
 <div className='ml-34'>
 <p className={`text-sm font-medium ${
   product.quantity > 3
    ? "text-green-600"
    : product.quantity > 0
    ? "text-orange-500"
    : "text-red-600"
}`}>
  {product.quantity > 0 ? `Stock ${product.quantity}` : "Out of Stock"}
</p>
 </div>
{/* </div> */}
 </div>
 </Link>
 
 <button className='bg-orange-500 text-white mt-2 mx-3 rounded-md h-10 cursor-pointer font-bold' onClick={() =>handleAddCart()}>Add to cart</button>
        
      </div>
    </>
    
  )
}
