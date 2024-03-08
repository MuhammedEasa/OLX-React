import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { AuthContext,FirebaseContext } from "../../store/Context";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const date = new Date()
  const history = useHistory()
  const handleSubmit = ()=>{
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url);
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createdAt:date.toDateString()
          })
          history.push('/')
        })
      })
  }
  return (
    <Fragment>
      <Header />

      <br />
      <br />
      <br />
      <br />
      <br />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="Price"
            />
            <br />
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : null}
          />

         
            <br />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
