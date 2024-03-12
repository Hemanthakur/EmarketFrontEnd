import React,{useState,useEffect} from 'react'
import { Link , useNavigate} from 'react-router-dom';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { doLogin, isLoggedIn } from '../auth';

export default function LoginFarmer() {
    const navigate = useNavigate()
    const url="http://localhost:9091/seller/loginseller";
   const [user,setUser]=useState({
    phoneNumber:"",
    password:""
  });
  function handle(e){
    const newUser={...user}
    newUser[e.target.id]=e.target.value
    console.log(newUser)
    setUser(newUser);
  }
  function submit(e){
    e.preventDefault();
    
    Axios.post(url,{
      phoneNumber:user.phoneNumber,
      password:user.password
    })
    .then((res)=>{
        doLogin(res,()=>{
            console.log("login detail is saved to local storage")
            localStorage.setItem("name",res.data.name)
            localStorage.setItem("sellerId",res.data.sellerId)
            
        })
        // console.log(localStorage.getItem("name"))
        
      
      
      navigate("/seller/Addproducts");
      window.location.reload();
    }).catch(error=>{
        console.log(error)
        toast.error("Something went wrong!!!")
    })
    // window.location.reload();
  }
  const buyer=localStorage.getItem("buyerId")
    console.log(buyer);
    function findUser(){
        if(buyer!=null){
            return true
        }
        else{
            return false
        }
        
    }
    useEffect(()=>{
        // findUser();
        console.log(findUser())
        console.log(isLoggedIn());
    },[])
  return (
    <>
    <div className='profile'>
        <h1 className="login-register-h1">Login for Farmer</h1>
            <form className="login-form" 
            onSubmit={(e)=>submit(e)}
            >

                {/*Phone field*/}

                <label className="login-page-label" htmlFor="phoneNumber">Phone</label>
                <input className="login-page-input"
                       value={user.phoneNumber} 
                       onChange={(e) => handle(e)} 
                       type="number" 
                       placeholder="Enter your phone Number" 
                       id="phoneNumber" 
                       name="phoneNumber" 
                       />

                {/*password field*/}

                <label className="login-page-label" htmlFor="Password">Password</label>
                <input className="login-page-input" 
                       value={user.password} 
                       onChange={(e) => handle(e)} 
                       type="password" 
                       placeholder="Enter you password" 
                       id="password" 
                       name="password" 
                       />

                <button className="login-register-btn">Log In</button>
            </form>
            <Link to={"/Choosing"} className="logreg-btn">Don't have an account? choose and Register here.</Link>
        </div>
    </>
  )
}
