import { useContext } from "react";
import { UserContext } from "../store/context";
import { Link } from "react-router-dom";
import "../App.css"

export default function SignIn(){
    const {userEmail, userPass, handleSignin} = useContext(UserContext);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Sign In
          </h2>
          <form onSubmit={handleSignin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              ref={userEmail}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              required
            />
            <input
              type="password"
              placeholder="Password"
              ref={userPass}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              required
            />
            <button
              type="submit"
              className="cursor-pointer transition-all ease-in-out duration-300 w-5/11 mr-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            > Sign In
            </button>
            <button
              type="submit"
              className="cursor-pointer transition-all ease-in-out duration-300 w-5/11 place-self-end p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            > 
             <Link to="/"> Go to Dashboard </Link>
            </button>
          </form>
        </div>
      </div>
    )
}