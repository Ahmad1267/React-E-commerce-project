
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {  FiUser, FiMail,FiLock,FiEye, FiEyeOff,} from "react-icons/fi";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [signEmailError, setSignEmailError] = useState("");
  const [signPasswordError, setSignPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    setNameError("");
    setSignEmailError("");
    setSignPasswordError("");
    setConfirmPasswordError("");

    if (!name.trim()) {
      setNameError("Please enter your name.");
      return;
    }

    if (name.trim().length < 3) {
      setNameError("Name must be at least 3 characters.");
      return;
    }

    if (!signEmail.trim()) {
      setSignEmailError("Please enter your email.");
      return;
    }

    if (!signEmail.includes("@gmail.com")) {
      setSignEmailError("Please enter a valid email address.");
      return;
    }

    if (!signPassword) {
      setSignPasswordError("Please enter a password.");
      return;
    }

    if (signPassword.length < 6) {
      setSignPasswordError("Password must be at least 6 characters.");
      return;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password.");
      return;
    }

    if (signPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
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

    if (
      savedUsers.some((user)=>(user.signEmail || user.email)?.toLowerCase() ===  signEmail.trim().toLowerCase())
   ) {
      setSignEmailError("This email is already registered.");
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify([...savedUsers,
        {
        name: name.trim(),
        signEmail: signEmail.trim(),
        signPassword: signPassword,
      }])
    );
    localStorage.removeItem("currentUser")
    localStorage.removeItem("isLogin");

    setName("");
    setSignEmail("");
    setSignPassword("");
    setConfirmPassword("");

    navigate("/login");
  };

  return (

<div className="h-[calc(100vh-136px)] bg-slate-100 flex items-center justify-center px-3 py-2 overflow-hidden">

  <div className="w-full max-w-4xl max-h-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

    {/* Left Side Image */}
    <div className="hidden md:flex relative min-h-0 bg-slate-900 items-end p-6 lg:p-8">

      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000"
        alt="Shopping collection"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"></div>

      <div className="relative z-10 text-white">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
          Shop Smart.
          <br />
          Live Better.
        </h2>

        <p className="mt-3 text-sm text-slate-200 leading-relaxed">
          Join our community and discover products
          you'll love with an amazing shopping experience.
        </p>

        <div className="flex gap-2 mt-5">
          <span className="w-8 h-1.5 rounded-full bg-orange-500"></span>
          <span className="w-3 h-1.5 rounded-full bg-white/60"></span>
          <span className="w-3 h-1.5 rounded-full bg-white/60"></span>
        </div>
      </div>
    </div>

    {/* Right Side Signup Form */}
    <div className="flex flex-col justify-center min-w-0 px-5 py-4 sm:px-7 md:px-6 lg:px-8">

      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800">
          Create Account
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Sign up to get started with your account.
        </p>
      </div>

      <form onSubmit={handleSignUp} className="mt-4 space-y-3">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Full Name
          </label>

          <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 h-10 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10 transition">
            <FiUser className="text-gray-400 text-lg shrink-0" />

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full min-w-0 outline-none text-sm text-slate-800 bg-transparent"
            />
          </div>

          {nameError && (
            <p className="text-red-500 text-xs mt-1">{nameError}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Email Address
          </label>

          <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 h-10 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10 transition">
            <FiMail className="text-gray-400 text-lg shrink-0" />

            <input
              type="email"
              placeholder="you@example.com"
              value={signEmail}
              onChange={(e) => setSignEmail(e.target.value)}
              className="w-full min-w-0 outline-none text-sm text-slate-800 bg-transparent"
            />
          </div>

          {signEmailError && (
            <p className="text-red-500 text-xs mt-1">{signEmailError}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Password
          </label>

          <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 h-10 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10 transition">
            <FiLock className="text-gray-400 text-lg shrink-0" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={signPassword}
              onChange={(e) => setSignPassword(e.target.value)}
              className="w-full min-w-0 outline-none text-sm text-slate-800 bg-transparent"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-slate-700 shrink-0"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {signPasswordError && (
            <p className="text-red-500 text-xs mt-1">{signPasswordError}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Confirm Password
          </label>

          <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 h-10 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10 transition">
            <FiLock className="text-gray-400 text-lg shrink-0" />

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full min-w-0 outline-none text-sm text-slate-800 bg-transparent"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-gray-400 hover:text-slate-700 shrink-0"
              aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {confirmPasswordError && (
            <p className="text-red-500 text-xs mt-1">{confirmPasswordError}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-10 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold shadow-lg shadow-orange-500/20 transition duration-200"
        >
          Create Account
        </button>

      </form>

      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-[10px] text-gray-400 whitespace-nowrap">
          WELCOME TO OUR STORE
        </span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-orange-500 font-bold hover:text-orange-600"
        >
          Sign In
        </Link>
      </p>

    </div>
  </div>
</div>

  );
}
