// import React, { useState } from 'react'
// import { useNavigate } from 'react-router'


// function Login({}) {
//   const navigate = useNavigate()
//     const [email, setEmail] = useState("")
//     const [emailError, setEmailError] = useState("")
//     const [password, setPassword] = useState("")
//     const [passwordError, setPasswordError] = useState("")

//     const handleSubmit = (e)=>{
//       e.preventDefault() 
//       setEmailError("")
//       setPasswordError("")


//        // Pehle check karo user ne signup kiya hai ya nahi
//   const savedUser = JSON.parse(
//     localStorage.getItem("registeredUser") || "null"
//   );

//     if(email === ""){
//       setEmailError("Email is required")
//      return
//     }
//     if(!email.includes("@gmail")){
//         setEmailError("Enter valid email")
//         return
//     }
//     if(password === ""){
//         setPasswordError("password is required")
//         return
//     }
//     // Signup wale email aur password se match karo
//   if (
//     !savedUser ||
//     savedUser.email !== email ||
//     savedUser.password !== password
//   ) {
//     setPasswordError("User can't exist");
//     setEmail("")
//     setPassword("")
//      setTimeout(()=>{
//     setPasswordError("")
//   },1000)
//     return;
//   }
 
//     localStorage.setItem("isLogin", "true");
//     window.dispatchEvent(new Event("loginStatusChanged"));

//       setEmail("")
//     setPassword("")
//     navigate("/")
//   }
//    return (
//     <form onSubmit={handleSubmit}>
//       <div className='w-full min-h-screen bg-gray-300 flex justify-center'>
//       <div className="w-[900px] h-[600px] bg-white mt-16 rounded-md flex mb-4 overflow-hidden">
//        <div className="w-1/2 flex items-center justify-center p-5">
//         <img
//           src="/lock.avif"
//           alt="Login"
//           className="w-full h-[400px] object-cover rounded-md"
//         />
//       </div>

//       {/* Right Side - Login Form */}
//       <div className="w-1/2 flex flex-col justify-center items-center px-8 py-6">
//              <h1 className="text-4xl font-bold text-center">Welcome Back</h1>
//               <p className="text-gray-500 mt-2 text-center">
//           Please login to your account
//         </p>
//                      <div className="w-full mt-6">
//           <input
//             type="email"
//             value={email}
//             placeholder="Enter Email"
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full h-[40px] bg-gray-200 px-3 rounded-md outline-none"
//           />

//           {emailError && (
//             <p className="text-red-500 mt-2">
//               {emailError}
//             </p>
//           )}
//         </div>

//         <div className="w-full mt-4">
//           <input
//             type="password"
//             value={password}
//             placeholder="Enter Password"
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full h-[40px] bg-gray-200 px-3 rounded-md outline-none"
//           />

//           {passwordError && (
//             <p className="text-red-500 mt-2">
//               {passwordError}
//             </p>
//           )}
//         </div>
//             <button className='text-xl bg-orange-500 font-bold text-white cursor-pointer h-[40px] w-full rounded-md mt-6 hover:bg-orange-600' type='submit'>Login</button>    
//             <p className="mt-4 text-center">
//           Not A Member?{" "}
//           <a
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               navigate("/signup")
//             }}
//             className="text-orange-500 font-semibold cursor-pointer"
//           >
//             Sign Up
//           </a>
//         </p>
//         </div>
//         </div>
//         </div>
//     </form>
//   )
// }

// export default Login
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    if(!email.includes("@gmail")){
        setError("Enter valid email")
        return
    }
    if(password === ""){
        setError("password is required")
        return
    }
const storedUsers = JSON.parse(
      localStorage.getItem("registeredUser") || "[]"
    );

// Purana single user ho to usay array mein convert karo
const savedUsers = Array.isArray(storedUsers)
  ? storedUsers
  : storedUsers
    ? [storedUsers]
    : [];
    const foundUser = savedUsers.find((user)=>(
      user.signEmail === email && user.signPassword === password))
    if (!foundUser) {
      setError("Invalid email or password. Please try again.");
      
    setEmail("")
    setPassword('')
      return;
    }
     localStorage.setItem(
    "currentUser",
   JSON.stringify(foundUser)
    );
    localStorage.setItem("isLogin", "true");
    window.dispatchEvent(new Event("loginStatusChanged"));

    navigate("/");
  };

  return (
<div className="h-[calc(100vh-136px)] bg-slate-100 flex items-center justify-center px-4 py-2 overflow-hidden">
<div className="w-full max-w-4xl h-auto max-h-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side Image */}
        <div className="hidden md:flex relative min-h-[500px] bg-slate-900 items-center justify-center p-10">

          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000"
            alt="Shopping collection"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"></div>

          <div className="relative z-10 text-white mt-auto">
            <h2 className="text-4xl font-bold leading-tight">
              Shop Smart.
              <br />
              Live Better.
            </h2>

            <p className="mt-4 text-slate-200 leading-relaxed">
              Discover products you'll love, with a shopping
              experience designed around you.
            </p>

            <div className="flex gap-2 mt-6">
              <span className="w-8 h-1.5 rounded-full bg-orange-500"></span>
              <span className="w-3 h-1.5 rounded-full bg-white/60"></span>
              <span className="w-3 h-1.5 rounded-full bg-white/60"></span>
            </div>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="flex flex-col justify-center p-5 sm:p-7 md:p-8">

          <div className="mt-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Welcome Back!
            </h1>

            <p className="text-gray-500 mt-3">
              Sign in to continue to your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">

            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 h-12 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10 transition">
                <FiMail className="text-gray-400 text-lg shrink-0" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-sm text-slate-800 bg-transparent"
                />
              </div>
            </div>

            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  onClick={() =>
                    setError("Please contact support to reset your password.")
                  }
                  className="text-xs font-semibold text-orange-500 hover:text-orange-600"
                >
                  Forgot password?
                </button>
              </div>

              <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 h-12 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10 transition">
                <FiLock className="text-gray-400 text-lg shrink-0" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none text-sm text-slate-800 bg-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-slate-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

                        {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold shadow-lg shadow-orange-500/20 transition duration-200"
            >
              Sign In
            </button>

          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">WELCOME TO OUR STORE</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-500 font-bold hover:text-orange-600"
            >
              Create account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;