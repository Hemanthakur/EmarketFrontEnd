import React  from 'react'


export default function RetailerProfile() {
    
  return (
    <>
            <div className=' profile'>
                <h1>Information Of User</h1>
                <h3>name :- {localStorage.getItem("name")}</h3>
                {/* <h2>Name Of User :- {seller.name} </h2> */}
                <h3>Customer Id :- {localStorage.getItem("buyerId")}</h3>
                
            </div>
           


            
        </>
  )
}
