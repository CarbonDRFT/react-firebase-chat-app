import React from "react";
import { signOut } from "firebase/auth";
import "./navbar.css";
import { auth } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="chatApp__navbar">
      <span className="chatApp__navbar-logo">Smile Chat</span>
      <div className="chatApp__navbar-user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
