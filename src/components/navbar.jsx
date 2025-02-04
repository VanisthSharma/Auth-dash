import "../App.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../store/context"
export default function NavBar(){
  const {auth, setAuth} = useContext(UserContext);  
  return(
        <nav className="w-full bg-white dark:bg-gray-900 shadow-md p-4 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-white font-bold text-gray-900 "><Link to="/">Dashboard</Link></h1>
          {!auth ? <div className="flex items-center gap-4">
            <button className="cursor-pointer transition-all ease-in-out duration-300 px-4 py-2 border text-white border-gray-300 dark:border-gray-600 text-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <Link to="/signin">Sign In</Link>
            </button>
            <button className="cursor-pointer transition-all ease-in-out duration-300 text-white px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
            <Link to="/signup">Sign Up</Link>
            </button>
          </div> : <button onClick={()=>{
            setAuth(!auth)
          }} className="cursor-pointer transition-all ease-in-out duration-300 text-white px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
            <Link to="/">Sign out</Link>
            </button> }
        </div>
      </nav>
    )
}