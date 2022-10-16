import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../backend/firebaseInit";
import { userAgent } from "next/server";

function Account() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
      console.log({ user });
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const login = async () => {};
  const logout = async () => {};

  return (
    <div className="Account">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email"
          onChange={(e) => setRegisterEmail(e?.target.value)}
        />
        <input
          placeholder="Password"
          onChange={(e) => setRegisterPassword(e?.target.value)}
        />
        <button onClick={register}> Create User</button>
      </div>
      <div>
        <h3> Login </h3>
        <input
          placeholder="Email"
          onChange={(e) => setLoginEmail(e?.target.value)}
        />
        <input
          placeholder="Password"
          onChange={(e) => setLoginPassword(e?.target.value)}
        />

        <button> Login</button>
      </div>
      <h4> User Logged In:</h4> <p>{user}</p>
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default Account;
