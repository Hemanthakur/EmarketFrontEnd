import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
export default function () {
   // const url="";
   const [user,setUser]=useState({
    Phone:"",
    Password:""
  });
  function handle(e){
    const newUser={...user}
    newUser[e.target.id]=e.target.value
    console.log(newUser)
    setUser(newUser);
  }
  function submit(e){
    e.preventDefault();
    // Axios.post(url,{
    //   Name:user.Name,
    //   Address:user.Address,
    //   Phone:user.Phone,
    //   Password:user.Password
    // })
    // .then(res=>{
    //   console.log(res.user)

    // })
  }
  return (
    <>
        <div className='profile'>
        <h1 className="login-register-h1">Login</h1>
        <div className='container d-flex justify-content-center mt-5'>
            <Link to="/login/LoginFarmer"><button className=' btn-primary'>Farmer</button></Link>
            <span className='distance'/>
            <Link to="/login/LoginRetailer"><button className=' btn-primary'>Buyer</button></Link>
        </div>
            
            
            <Link to={"/Choosing"} className="logreg-btn">Don't have an account? choose and Register here.</Link>
        </div>
    </>
  )
}
