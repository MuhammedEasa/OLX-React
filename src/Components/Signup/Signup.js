import React, { useState, useContext } from "react";

import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../store/Context";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory()
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const handleLogin = () => {
    history.push('/login');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let userResult;
    firebase
       .auth()
       .createUserWithEmailAndPassword(userEmail, userPassword)
       .then((result) => {
         userResult = result;
         return result.user.updateProfile({ displayName: userName });
       })
       .then(() => {
         return firebase.firestore().collection('users').add({
           id: userResult.user.uid, 
           userName: userName,
           userPhone: userPhone,
         });
       })
       .then(() => {
         history.push("/login");
       })
       .catch((error) => {
         console.error("Error inserting data:", error);
       });
   };
   
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={handleLogin}>Login</a>
      </div>
    </div>
  );
}
