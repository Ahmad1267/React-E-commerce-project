import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQty, decreaseQty, delCart, clearCart } from '../Redux/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { MdDelete } from "react-icons/md";


function Cart() {
  const [showConfirm, setShowConfirm] = useState(false)
  const [delId, setDelId] = useState(null)
    const myCart = useSelector((store) => store.cartStore.cart)
    // console.log(myCart)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // {show total add carts}

    const subtotal = myCart.reduce((total, product) => {
    return total + product.price * (product.quantity || 1)
  }, 0)

  const deliveryCharges = myCart.length > 0 ? 10 : 0
  const total = subtotal + deliveryCharges

    return (
<>
<ToastContainer position='top-center'/>
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
              <button onClick={() => navigate(-1)} className='bg-orange-500 text-white rounded-md w-20 h-10 font-bold cursor-pointer'>
  Back
</button>

      <h1 className="text-2xl font-bold mb-6 mt-7">
        My Shopping Cart
      </h1>

      {myCart.length === 0 ? (
        <p className="bg-white rounded-lg p-6 text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Products */}
          <div className="flex-1 flex flex-col gap-4">

            {myCart.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row gap-5"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-32 h-32 object-contain rounded-lg border border-gray-100"
                />

                <div className="flex-1">
                   <div className='flex justify-between'>
                  <h2 className="text-lg font-bold">
                    {product.title}
                  </h2>
                  
                  <button
                    onClick={() =>{
                      setDelId(product.id)
                      setShowConfirm(true)                    
                    }}
                    className="mt-4 bg-primary-500 hover:text-red-700 font-medium text-2xl cursor-pointer"
                  >
                    <MdDelete />

                  </button>
                  
{showConfirm && (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

    <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">

      <h2 className="text-xl font-bold mb-3">
        Remove Item?
      </h2>

      <p className="text-gray-600 mb-6">
        Are you sure you want to remove this item?
      </p>

      <div className="flex justify-center gap-4">

        <button
          onClick={() => {
            dispatch(delCart(delId));
            toast.error("Remove item");
            setShowConfirm(false);
            setDelId(null);
          }}
          className="bg-gray-300  px-5 py-2 rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
        >
          Yes
        </button>

        <button
          onClick={() => {
            setShowConfirm(false);
            setDelId(null);
          }}
          className="bg-gray-300 px-5 py-2 rounded-md cursor-pointer hover:bg-green-500 hover:text-white"
        >
          No
        </button>

      </div>
    </div>
  </div>
)}

</div>
                  <p className="text-sm text-gray-500 mt-1">
                    Brand: {product.brand || 'USA'}
                  </p>

                  <p className="text-xl font-bold mt-3">
                    Rs {(Number(product.price) *
                      (product.quantity || 1)).toFixed(2)}
                  </p>

                  <p className="text-sm text-emerald-600 mt-1">
                    {product.discountPercentage}% discount
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-4">

                    <span className="text-sm text-gray-500">
                      Quantity:
                    </span>

                    <button
                      onClick={() =>
                        dispatch(decreaseQty(product.id))
                      }
                      disabled={(product.quantity || 1) <= 1}
                      className="h-8 w-8 border rounded-md hover:bg-gray-100 disabled:opacity-40"
                    >
                      −
                    </button>

                    <span className="font-semibold min-w-5 text-center">
                      {product.quantity || 1}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(increaseQty(product.id))
                      }
                      className="h-8 w-8 border rounded-md hover:bg-gray-100"
                    >
                      +
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Price Details */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 w-full lg:w-[340px] h-fit">

            <h2 className="text-xl font-bold mb-5">
              Price Details
            </h2>

            {myCart.map((product) => (
    <div
      key={product.id}
      className="flex justify-between gap-4 mb-4"
    >
      <span className="text-gray-500 flex-1">
        {product.title} (x{product.quantity || 1})
      </span>

      <span className="font-medium whitespace-nowrap">
        Rs {(Number(product.price) * (product.quantity || 1)).toFixed(2)}
      </span>
    </div>
  ))}

  <div className="border-t border-gray-200 my-4"></div>

  {/* Subtotal */}
  <div className="flex justify-between gap-4 mb-4">
    <span className="text-gray-500">Subtotal</span>
    <span className="font-medium">
      Rs {subtotal.toFixed(2)}
    </span>
  </div>


            <div className="flex justify-between gap-4 mb-4">
              <span className="text-gray-500">
                Delivery Charges
              </span>
              <span>Rs {deliveryCharges.toFixed(2)}</span>
            </div>

            <div className="flex justify-between gap-4 mb-4">
              <span className="text-gray-500">Tax</span>
              <span>0%</span>
            </div>

            <div className="border-t pt-4 flex justify-between gap-4">
              <span className="font-bold text-lg">
                Total Price
              </span>

              <span className="font-bold text-lg">
                Rs {total.toFixed(2)}
              </span>
            </div>

            <button 
            onClick={()=>{
              navigate("/pay")
            }}
              className="mt-6 w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-700 cursor-pointer "
            >
              Proceed to Checkout
            </button>
   
          </div>
        </div>
      )}
              

    </div>
    </>
  )
}

export default Cart