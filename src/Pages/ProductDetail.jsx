import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { addTocart } from '../Redux/CartSlice';
import { ToastContainer, toast } from 'react-toastify';




export default function ProductDetail() {
  let [data, setData] = useState(null)
  const { id } = useParams();
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  const getDetail = () => {
    axios.get(`https://dummyjson.com/carts/${id}`)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
    // .then((res)=>console.log(res.data))
  }
  useEffect(() => {
    if (id) {
      getDetail()
    }
  }, [id])

  const product = data?.products?.[0]
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

  return (
    <>
      <ToastContainer position='top-center' /> 
       
      {loading ? (<div className='flex justify-center items-center inset-0 fixed bg-white'><div className='border border-4 border-black border-l-white rounded-full animate-spin h-10 w-10'></div></div>) : (
        <div className='flex flex-col w-full min-h-screen'>
            <div className='bg-white p-3 sm:p-4'>
              <button onClick={() => navigate("/product")} className='bg-orange-500 text-white rounded-md w-20 h-10 font-bold cursor-pointer'>
  Back
</button>
            </div>
          <div className='flex bg-white h-112  w-full'>
            <img className='mt-7 ml-20 border rounded-xl border-gray-400 h-100' src={product.thumbnail} alt={product.title} />
            <div className='object-cover'>
              <p className='font-bold ml-10 mt-8 text-2xl'>{product.title} Branded</p>
              <p className='bg-orange-100 ml-10 mt-2 rounded-md px-2 w-55'>Rating 4.6 | 226 Reviews</p>
              <div className='flex'>
                <p className='mt-6 ml-10 text-xl'>Rs</p>
                <div className='object-cover'>
                  <p className='mt-8 text-3xl font-bold'>{product.price}</p>
                </div>
              </div>
              <p className='ml-10 mt-4'>Everyday essentials are the products we use daily to make our lives easier, more comfortable, and convenient, such as mobile phones, watches, bicycles, and other useful items.</p>
              <button className='bg-orange-500 text-white rounded-md ml-10 mt-6 w-30 h-10 font-bold cursor-pointer' onClick={handleAddCart}>Add to cart</button>
           
            </div>

          </div>
          <div className='bg-white flex h-30'>
            <div className='flex ml-20 border border-gray-400 rounded-md w-160 h-25 mt-3 flex-col'>
              <p className='text-md font-bold ml-3'>Product Detail</p>
              <p className='ml-3 w-120'>Everyday essentials are the products we use daily to make our lives easier, more comfortable, and convenient, such as mobile phones, watches, bicycles, and other useful items.

</p>

            </div>
            
            </div>

        </div>
      )}
    </>
  )
}
