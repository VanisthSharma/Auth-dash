import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/navbar";
import { UserContext } from "./store/context";
import { useRef, useReducer, useEffect, useState } from "react";
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Dashboard from './components/dashboard';

export function infoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const newState = [
        {
          Name: action.payload.name,
          Email: action.payload.email,
          Password: action.payload.password,
        },
        ...state,
      ];
      localStorage.setItem("users", JSON.stringify(newState));
      return newState;

    case "LOAD":
      return action.payload;

    default:
      return state;
  }
}

export default function Navbar() {
  const [users, dispatchInfo] = useReducer(infoReducer, []);
  const [auth, setAuth] = useState(false);
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPass = useRef(null);
  const confirmPass = useRef(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    dispatchInfo({ type: "LOAD", payload: storedUsers });
  }, []);

  const handleSignin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users"))||[];
    const user = storedUsers.find((u) => u.Email === userEmail.current.value && u.Password === userPass.current.value);

    if (user) {
      alert("Login successful!"); 
      setAuth(!auth);
    } else {
      alert("No user was found!");
    }
    userEmail.current.value = "";
    userPass.current.value = "";
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (userPass.current.value !== confirmPass.current.value) {
      alert("Passwords do not match!");
      return;
    } else{
      setAuth(!auth);
    }
    
    const userData = {
      name: userName.current.value,
      email: userEmail.current.value,
      password: userPass.current.value,
    };

  dispatchInfo({ type: "ADD", payload: userData });

    userName.current.value = "";
    userEmail.current.value = "";
    userPass.current.value = "";
    confirmPass.current.value = "";
  };
  return (
    <UserContext.Provider value={{auth,handleSubmit,userEmail,userName,userPass,confirmPass, handleSignin, setAuth}}>
        <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
      </Routes>

    </UserContext.Provider>
  );
}
