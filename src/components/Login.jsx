import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";
const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const [user, setUser] = useState(null);
  const handleSignInbtn = () => {
    // console.log("test");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOutbtn = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Please Login</h2>
      {/* <button onClick={handleSignInbtn}> Sign in With Google </button>
      <button onClick={handleSignOutbtn}> SignOut </button> */}

      {user ? (
        <button onClick={handleSignOutbtn}> SignOut </button>
      ) : (
        <button onClick={handleSignInbtn}> Sign in With Google </button>
      )}
      {/* <div>
        <h3>{user?.displayName}</h3>
        <img src={user?.photoURL} alt="UserPhoto" />
      </div> */}
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <img src={user.photoURL} alt="UserPhoto" />
        </div>
      )}
    </div>
  );
};

export default Login;
