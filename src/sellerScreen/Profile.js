import React, { useState, useEffect } from 'react'
import { isLoggedIn, getCurrentUserDetail } from '../auth'
export default function Profile() {
    const [login, setLogin] = useState(false)
    const [seller, setSeller] = useState([])
    //   const newSeller = seller.data;
    useEffect(() => {
        setLogin(isLoggedIn())
        console.log(isLoggedIn())
        setSeller(getCurrentUserDetail())
       
    }, [login])
    
    return (
        <>
            <div className=' profile'>
                <h1>Information Of User</h1>
                <h3>name :- {localStorage.getItem("name")}</h3>
                {/* <h2>Name Of User :- {seller.name} </h2> */}
                <h3>Customer Id :- {localStorage.getItem("sellerId")}</h3>
               
            </div>
           


            
        </>
    )
}
