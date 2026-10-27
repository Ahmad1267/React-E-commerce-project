
import { useState } from "react"
import { useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../Redux/CartSlice" 
import { TiTick } from "react-icons/ti";


export default function Checkout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const myCart = useSelector((store) => store.cartStore.cart)

  // Signup ke waqt save kiya gaya user
  const savedUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  )

  const [name, setName] = useState(savedUser?.name || "")
  const [errorName, setErrorName] = useState("")
  const [address, setAddress] = useState("")
  const [errorAddress, setErrorAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [errorPhone, setErrorPhone] = useState("")
  const [method, setMethod] = useState("")
  const [errorMethod, setErrorMethod] = useState("")
  const [pin, setPin] = useState("")
  const [errorPin, seterrorPin] = useState("")
  const [success, setSuccess] = useState(false)

  const subtotal = myCart.reduce(
    (total, product) =>
      total + product.price * (product.quantity || 1),
    0
  )

  const deliveryCharges = 10;
  const total = subtotal + deliveryCharges

  const handlePayment = (e) => {
    e.preventDefault()
    setErrorName("")
    setErrorAddress("")
    setErrorPhone("")
    setErrorMethod("")
    seterrorPin("")

    

    if (name === "") {
      setErrorName("Enter your name.")
      return
    }

    if (address === "") {
      setErrorAddress("Enter your shipping address.")
      return
    }

    if (!/^03\d{9}$/.test(phone)) {
      setErrorPhone("Enter a valid phone number.")
      return
    }
  if(!method){
    setErrorMethod("Select payment method")
    return
  }

    if (!/^\d{4}$/.test(pin)) {
      seterrorPin("Enter 4-digit PIN.")
      return
    }

    // Demo payment only — no real money is transferred
    dispatch(clearCart())
    setSuccess(true)
  }

  return (
  <div className="min-h-screen bg-gray-100 py-8 px-4">

    {success ? (
      <div className="min-h-screen flex items-center justify-center px-4 py-8">

        <div className="bg-white rounded-xl shadow-md p-8 text-center w-full max-w-lg">

          <div className="text-green-600 text-8xl mb-4 text-center ml-48">
            <TiTick />

          </div>

          <h2 className="text-2xl font-bold text-green-600">
            Order Placed Successfully!
          </h2>

          <p className="text-gray-600 mt-3">
            Thank you, {name}. Your order has been placed.
          </p>

          <button
            type="button"
            onClick={() => navigate("/product")}
            className="bg-orange-500 text-white font-bold px-6 py-3 rounded-md mt-6 hover:bg-orange-600 cursor-pointer"
          >
            Continue Shopping
          </button>

        </div>
      </div>
    ) : (
      <>
        <h1 className="text-3xl font-bold text-center mb-8">
          Checkout
        </h1>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Shipping and Payment Form */}
          <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">
              Shipping Details
            </h2>

            <form onSubmit={handlePayment}>

              <label className="block font-semibold mb-2">
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full h-11 border border-gray-300 rounded-md px-3 outline-none focus:border-orange-500 mb-4"
              />
              {errorName && (
                  <p className="text-red-500 ml-3 mt-2">
                    {errorName} </p>)}

              <label className="block font-semibold mb-2">
                Shipping Address
              </label>

              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter complete shipping address"
                rows={3}
                className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-orange-500 mb-4"
              />
               {errorAddress && (
                  <p className="text-red-500 ml-3 mb-2">
                    {errorAddress} </p>)}

              <label className="block font-semibold mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="03XXXXXXXXX"
                pattern="[0-9+ \-]{7,12}"
                title="Enter a valid phone number"
                className="w-full h-11 border border-gray-300 rounded-md px-3 outline-none focus:border-orange-500 mb-3"
              />
               {errorPhone && (
                  <p className="text-red-500 ml-3 ">
                    {errorPhone} </p>)}

              <h2 className="text-2xl font-bold mb-4">
                Payment Method
              </h2>

              <div className="grid grid-cols-2 gap-3 mb-3">

                <label
                  className={`border rounded-lg p-4 cursor-pointer text-center ${
                    method === "JazzCash"
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="JazzCash"
                    checked={method === "JazzCash"}
                    onChange={(e) => {
                      setMethod(e.target.value)
                      setPin("")
                      setErrorMethod("")
                    }}
                    className="mr-2 accent-orange-500"
                  />

                  <span className="font-semibold">
                    JazzCash
                  </span>
                </label>

                <label
                  className={`border rounded-lg p-4 cursor-pointer text-center ${
                    method === "Easypaisa"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Easypaisa"
                    checked={method === "Easypaisa"}
                    onChange={(e) => {
                      setMethod(e.target.value)
                      setPin("")
                      setErrorMethod("")
                    }}
                    className="mr-2 accent-green-600"
                  />

                  <span className="font-semibold">
                    Easypaisa
                  </span>
                </label>

              </div>
               {errorMethod && (
    <p className="text-red-500 text-sm mt-2">
      {errorMethod}
 </p>      )} 

              <label className="block font-semibold mb-2">
                PIN
              </label>

              <input
                type="password"
                value={pin}
                onChange={(e) =>
                  setPin(e.target.value.replace(/\D/g, "").slice(0, 4))
                }
                placeholder="Enter 4-digit PIN"
                inputMode="numeric"
                maxLength={4}
                className="w-full h-11 border border-gray-300 rounded-md px-3 outline-none focus:border-orange-500"
              />

              {errorPin && (
                <p className="text-red-500 mt-2">
                  {errorPin}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold h-12 rounded-md mt-6 hover:bg-orange-600 cursor-pointer"
              >
                Pay Rs {total.toFixed(2)}
              </button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">

            <h2 className="text-2xl font-bold mb-5">
              Order Summary
            </h2>

            {myCart.length === 0 ? (
              <p className="text-gray-500">
                No products in your cart.
              </p>
            ) : (
              <div className="space-y-4">

                {myCart.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 border-b border-gray-200 pb-4"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate">
                        {product.title}
                      </p>

                      <p className="text-gray-500 text-sm">
                        Quantity: {product.quantity || 1}
                      </p>
                    </div>

                    <p className="font-bold">
                      Rs {(product.price * (product.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                ))}

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span>Rs {deliveryCharges.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-xl font-bold border-t pt-4">
                  <span>Total</span>
                  <span>Rs {total.toFixed(2)}</span>
                </div>

              </div>
            )}

          </div>

        </div>
      </>
    )}

  </div>
    )
}
