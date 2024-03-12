import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios';
import { FaInfo } from 'react-icons/fa';
import { toast } from 'react-toastify';
export default function RegisterBuyer() {
  const navigate=useNavigate();
  const url="http://localhost:9091/buyer/register";
  const [retailer,setRetailer]=useState({
    name:"",
    phoneNumber:"",
    password:""
  });
  function handle(e){
    const newRetailer={...retailer}
    newRetailer[e.target.id]=e.target.value
    console.log(newRetailer)
    setRetailer(newRetailer);
  }
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      name:retailer.name,
      phoneNumber:retailer.phoneNumber,
      password:retailer.password
    })
    .then(res=>{
      console.log(res.retailer)
      toast.success("User is registered successfully!!")
      navigate("/login/LoginRetailer")
    })
  }
  return (
    <>
    <div className='profile'>
        <h1 className="login-register-h1">Registration for Buyer </h1>
            <form className="register-form " 
            onSubmit={(e)=>submit(e)}
            >
              
              <label className="register-page-label" htmlFor="name">name</label>
                <input className="register-page-input" 
                      onChange={(e) => handle(e)}
                      value={retailer.name} 
                      name="name" 
                      id="name" 
                      placeholder="Enter your First name" 
                      required/>
                
                {/* <label className="register-page-label" htmlFor="Address">Address</label>
                <input className="register-page-input" 
                      onChange={(e) => handle(e)}
                      value={retailer.Address} 
                      name="Address" 
                      id="Address" 
                      placeholder="Enter your Address" 
                      required/> */}
               
                
                
                <label className="register-page-label" htmlFor="phoneNumber">phoneNumber Number</label>
                <input className="register-page-input" 
                      onChange={(e) => handle(e)}
                      value={retailer.phoneNumber} 
                      name="phoneNumber" 
                      id="phoneNumber" 
                      placeholder="Enter your phoneNumber Number" 
                      required/>
                
                
                
                <label className="register-page-label" htmlFor="password">password</label>
                <input className="register-page-input" 
                      onChange={(e) => handle(e)}
                      value={retailer.password}
                      autoComplete="off"
                      type="password" 
                      placeholder="Enter perfect password" 
                      id="password" 
                      name="password" 
                      required/>
                
                
              
                
                <button className="login-register-btn">Register</button>
            </form>
            <Link to={"/login/LoginRetailer"} className="logreg-btn">Already have an account? Login here.</Link>
    </div>
    </>
  )
}
