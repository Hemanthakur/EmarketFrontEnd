import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Axios from 'axios';
import { toast } from 'react-toastify';
export default function Register() {
  const navigate = useNavigate()
  const url="http://localhost:9091/seller/registerseller";
  const [farmer,setFarmer]=useState({
    name:"",
    // Address:"",
    phoneNumber:"",
    password:""
  });
  function handle(e){
    const newFarmer={...farmer}
    newFarmer[e.target.id]=e.target.value
    console.log(newFarmer)
    setFarmer(newFarmer);
  }
  function submit(e){
    e.preventDefault();
    toast.success("User is registered successfully!!")
    Axios.post(url,{
      name:farmer.name,
      // Address:farmer.Address,
      phoneNumber:farmer.phoneNumber,
      password:farmer.password
    })
    .then(res=>{
      console.log(res.farmer)
      
      navigate("/login/LoginFarmer")
    })
    .catch(error=>{
      console.log(error)
      toast.error("Something went wrong!!!")
    })
    
  }
  return (
    <>
    <div className='profile'>
        <h1 className="login-register-h1">Registration for farmer</h1>
            <form className="register-form " 
            onSubmit={(e)=>submit(e)}
            >   
            <label className="register-page-label" htmlFor="Name">name</label>
            <input className="register-page-input" 
                  onChange={(e) => handle(e)}
                  value={farmer.name} 
                  name="name" 
                  id="name" 
                  placeholder="Enter your First Name" 
                  required/>
            
            {/* <label className="register-page-label" htmlFor="Address">Address</label>
            <input className="register-page-input" 
                  onChange={(e) => handle(e)}
                  value={farmer.Address} 
                  name="Address" 
                  id="Address" 
                  placeholder="Enter your Address" 
                  required/> */}
           
            
            
            <label className="register-page-label" htmlFor="Phone">Phone Number</label>
            <input className="register-page-input" 
                  onChange={(e) => handle(e)}
                  value={farmer.phoneNumber} 
                  name="phoneNumber" 
                  id="phoneNumber" 
                  placeholder="Enter your Phone Number" 
                  required/>
            
            
            
            <label className="register-page-label" htmlFor="password">Password</label>
            <input className="register-page-input" 
                  onChange={(e) => handle(e)}
                  value={farmer.password}
                  autoComplete="off"
                  type="password" 
                  placeholder="Enter perfect password" 
                  id="password" 
                  name="password" 
                  required/>
              
              
                
                <button className="login-register-btn">Register</button>
            </form>
            <Link to={"/login"} className="logreg-btn">Already have an account? Login here.</Link>
    </div>
    </>
  )
}
