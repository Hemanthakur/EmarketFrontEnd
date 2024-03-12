import React,{useState} from 'react'
import  Axios  from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Updateproducts(props) {
    // const url=`http://localhost:9091/${}/update/${from.productId}`
    const navigate = useNavigate(); 
    const location = useLocation()
    console.log(location);
    console.log(props);
    const  from  = location.state?.data;
    const sellerId=localStorage.getItem("sellerId");
    console.log(sellerId);
    const url=`http://localhost:9091/${sellerId}/update/${from.productId}`
    const [product,setProduct]=useState({
        name:from.name,
        category:from.category,
        price:from.price,
        countInStock:from.countInStock,
        description:from.description,
        location:from.location
      });
      function handle(e){
        const newProduct={...product}
        newProduct[e.target.id]=e.target.value
        console.log(newProduct)
        setProduct(newProduct);
      }
      function submit(e){
        e.preventDefault();
        Axios.put(url,{
          name:product.name,
          category:product.category,
          price:product.price,
          countInStock:product.countInStock,
          description:product.description,
          location:product.location
        })
        .then(res=>{
          console.log(res.product)
    
        })
        navigate("/seller/ViewProducts")
      }
  return (
    <>
      <div className='profile'>
        <h1 className="login-register-h1">Update the Product </h1>
            <form className="register-form " 
            onSubmit={(e)=>submit(e)}
            >
              
              <label className="register-page-label" htmlFor="Name">Product Name</label>
                <input className="register-page-input" 
                      onChange={(e) => handle(e)}
                      value={product.name} 
                      name="name" 
                      id="name" 
                      placeholder="Enter your Product Name" 
                      required/>
                
                <label className="register-page-label" htmlFor="category">Category</label>
                <input className="register-page-input" 
                      onChange={(e) => handle(e)}
                      value={product.category} 
                      name="category" 
                      id="category" 
                      placeholder="Enter the category of Product" 
                      required/>
               
                
                
                <label className="register-page-label" htmlFor="Price">Price</label>
                <input className="register-page-input" 
                      onChange={(e) => handle(e)}
                      value={product.price} 
                      name="price" 
                      id="price" 
                      placeholder="Enter Price of Product" 
                      required/>
                
                
                
                <label className="register-page-label" htmlFor="CountInStock">CountInStack</label>
                <input className="register-page-input" 
                      onChange={(e) => handle(e)}
                      value={product.countInStock}
                      autoComplete="off"
                      type="number" 
                      placeholder="Enter the available stock quantity" 
                      id="countInStock" 
                      name="countInStock" 
                      required/>



                <label className="register-page-label" htmlFor="Desc">Description</label>
                <input className="register-page-input" 
                      onChange={(e) => handle(e)}
                      value={product.description}
                      autoComplete="off"
                      type="text" 
                      placeholder="Enter the Product details" 
                      id="description" 
                      name="description" 
                      required/>
                <label className="register-page-label" htmlFor="Desc">location</label>
                <input className="register-page-input" 
                      onChange={(e) => handle(e)}
                      value={product.location}
                      autoComplete="off"
                      type="text" 
                      placeholder="Enter the Location" 
                      id="location" 
                      name="location" 
                      required/>
                
                
              
                
                <button className="login-register-btn">Update Product</button>
            </form>
            {/* <Link to={"/login"} className="logreg-btn">Already have an account? Login here.</Link> */}
      </div>
    </>
  )
}
