import React from 'react'
import { Link } from 'react-router-dom'
export default function Choosing() {
  return (
    <>
    <div className='profile'>
      <h1>Choose Your Preference </h1>
      <Link to="/Register"><button className='btn-primary'>Farmer</button></Link>
      <span className='distance'/>
      <Link to="/Registerbuyer"><button className='btn-primary'>Buyer</button></Link>
    </div>
    
    </>
  )
}
