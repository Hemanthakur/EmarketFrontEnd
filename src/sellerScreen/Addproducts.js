import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Addproducts() {
  const navigate = useNavigate();
  const sellerId = localStorage.getItem("sellerId");
  // const[ab,setAb] = useState("")
  // const [cd,setCd]=useState("")
  const url = `http://localhost:9091/addProduct/${sellerId}`;

  // const Category=["vegitables","fruits","grains"]
  // const itemsCategory={
  //   "vegitables":["g","h","i"],
  //   "fruits":["a","b","c"],
  //   "grains":["e","f","l"]
  // }

  // const Category = [
  //   { id: "1", catName: "vegitable" },
  //   { id: "2", catName: "fruit" }
  // ]
  // const itemCat = [
  //   { catname: "patato", catName: "vegitable" },
  //   { catname: "onion", catName: "vegitable" },
  //   { catname: "mango", catName: "fruit" },
  //   { catname: "apple", catName: "fruit" }
  // ]
  // const [item, setItem] = useState([])
  // const [itemcat, setItemcat] = useState("")
  // console.log(item);
  useEffect(() => {
    // setItem(Category);
    // console.log(catName)
  }, []);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    countInStock: "",
    description: "",
    location: ""
  });
  function handle(e) {
    const newProduct = { ...product }
    newProduct[e.target.id] = e.target.value
    console.log(newProduct)
    setProduct(newProduct);
  }
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: product.name,
      category: product.category,
      price: product.price,
      countInStock: product.countInStock,
      description: product.description,
      location: product.location
    })
      .then(res => {
        // console.log(res.product)

      })
    navigate("/seller/ViewProducts")
  }

  // const handleitem = (catName) => {
  //   const dt = itemCat.filter(x => x.catName === catName);
  //   setItemcat(dt)
  //   // console.log(catName)
  //   // setAb(catName);
  //   // console.log(ab);
  //   console.log(itemcat);
  //   // const name=
  // }
  // const handleitemcat=(catname)=>{
  //   // console.log(catname)
  //   // setCd(catname)
  //   // console.log(cd)
  // }
  return (
    <>
      <div>
        {/* <select id="ddlCategory" onChange={(e) => handleitem(e.target.value)}>
          <option value="0">select Category</option>
          {
            item &&
              item !== undefined ?
              item.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>{ctr.catName}</option>
                )
              })
              : "noCategory"
          }
        </select> */}
        <br></br>
        {/* <select id="ddlitemCAt" >
          <option value="0">select your option</option>
          {
            itemcat &&
              itemcat !== undefined ?
              itemcat.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>{ctr.catname}</option>
                )
              })
              : "noCategory"
          }
        </select> */}
      </div>





      <div className='profile'>
        <h1 className="login-register-h1">Add Your Products Here</h1>
        <form className="register-form "
          onSubmit={(e) => submit(e)}
        >

          <label className="register-page-label" htmlFor="category">Category</label>
          {/* <select className="register-page-input" id="category" onChange={(e) => handleitem(e.target.value)} value={itemCat.catName} >
            <option id="category"  >select Category</option>
            {
              // item &&
              //   item !== undefined ?
                item.map((ctr, index) => {
                  return (
                    <option key={index}  id="category"  value={ctr.catName}>{ctr.catName}</option>
                  )
                })
                // : "noCategory"
            }
          </select> */}

          <input className="register-page-input"
            onChange={(e) => handle(e)}
            value={product.category}
            name="category"
            id="category"
            placeholder="Enter the category of Product"
            required />







          <label className="register-page-label" htmlFor="Name">Product Name</label>
          {/* <select className="register-page-input" id="name" onChange={(e) => handleitemcat(e.target.value)} value={itemcat.catname}>
            <option >select your option</option>
            {
              itemcat &&
                itemcat !== undefined ?
                itemcat.map((ctr, index) => {
                  return (
                    <option id="name" key={index}  value={ctr.catname}>{ctr.catname}</option>
                  )
                })
                : "noCategory"
            }
          </select> */}


          <input className="register-page-input"
            onChange={(e) => handle(e)}
            value={product.name}
            name="name"
            id="name"
            placeholder="Enter your Product Name"
            required />



          <label className="register-page-label" htmlFor="Price">Price</label>
          <input className="register-page-input"
            onChange={(e) => handle(e)}
            value={product.price}
            name="price"
            id="price"
            placeholder="Enter Price of Product"
            required />



          <label className="register-page-label" htmlFor="CountInStock">CountInStack</label>
          <input className="register-page-input"
            onChange={(e) => handle(e)}
            value={product.countInStock}
            autoComplete="off"
            type="number"
            placeholder="Enter the available stock quantity"
            id="countInStock"
            name="countInStock"
            required />



          <label className="register-page-label" htmlFor="Desc">Description</label>
          <input className="register-page-input"
            onChange={(e) => handle(e)}
            value={product.description}
            autoComplete="off"
            type="text"
            placeholder="Enter the Product details"
            id="description"
            name="description"
            required />
          {/* <label htmlFor="imageFile">Image File</label>
                <input
                  type="file"
                  id="imageFile"
                  label="Choose Image"
                  onChange={uploadFileHandler}
                ></input> */}

          <label className="register-page-label" htmlFor="Desc">Location</label>
          <input className="register-page-input"
            onChange={(e) => handle(e)}
            value={product.location}
            autoComplete="off"
            type="text"
            placeholder="Enter the Location"
            id="location"
            name="location"
            required />

          <button className="login-register-btn">Add Product</button>
        </form>
        {/* <Link to={"/login"} className="logreg-btn">Already have an account? Login here.</Link> */}
      </div>
    </>
  )
}

