
import { Navigate } from 'react-router'

function GuestRoute({children}) {
    const isLogin = localStorage.getItem("isLogin") === "true"
    if(isLogin){
        return <Navigate to="/" replace/>
    }
  return (
    children
)}

export default GuestRoute