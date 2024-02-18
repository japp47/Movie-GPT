import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile 
} from "firebase/auth";
import {auth} from "../utils/firebase" 
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {BG_URL, USER_AVATAR} from "../utils/constants"
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const handleButtonClick=() => {
        const message = checkValidData(
          email?.current?.value, 
          password?.current?.value,
          name?.current?.value
          );
        setErrorMessage(message);

        if(message) return;

        if(!isSignInForm){ 
          createUserWithEmailAndPassword(
            auth, 
            email.current.value, 
            password.current.value
          )
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name?.current?.value, 
              photoURL: USER_AVATAR
            })
              .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                uid: uid, 
                email: email, 
                displayName: displayName, 
                photoURL: photoURL
              })
              );
           
            })
              .catch((error) => {
              // An error occurred
              setErrorMessage(error.message)
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);  
          });

        }
        else{
          signInWithEmailAndPassword(
            auth,
            email.current.value, 
            password.current.value
          )
          .then((userCredential) => {
           
            const user = userCredential.user;
        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message; 
            setErrorMessage(errorCode+"-"+errorMessage);
          });
        }
    };

    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img className='h-screen object-cover md:w-screen'
            src = {BG_URL}
            alt="Logo"
          />
        </div>
        <form 
        onSubmit={(e) => e.preventDefault()}
        className='absolute p-12 bg-black w-full md:w-3/12 mx-auto my-36 left-0 right-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-xl md:text-3xl py-4 px-1.5'>
                {isSignInForm? "Sign In" : "Sign Up"}
            </h1>

            { !isSignInForm && (
            <input 
              ref={name}
              type= "text" 
              placeholder='Full Name'
              className='p-4 my-4 w-full bg-gray-700'
            />)} 

            <input 
             ref={email}
              type= "text" 
              placeholder='Email Address'
              className='p-4 my-4 w-full bg-gray-700'
            />
            
            <input 
              ref={password}
              type= "password" 
              placeholder='Password'
              className='p-4 my-4 w-full bg-gray-700'
            />
            <p className='text-red-500 font-bold p-2 text-lg'>{errorMessage}</p>
            <button 
              className='p-4 my-6 bg-red-700 w-full rounded-lg'
              onClick={handleButtonClick}
            > 
              {isSignInForm ? "Sign In" : "Sign Up"} 
            </button>
            <p className='px- 1 p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now": "Already Registered? Sign In Now. "}</p>
        </form>
    </div>
  )
}

export default Login