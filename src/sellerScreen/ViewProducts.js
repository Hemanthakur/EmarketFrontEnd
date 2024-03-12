import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"
export default function ViewProducts() {

const sellerId=localStorage.getItem("sellerId");
  // console.log(sellerId);
  const url=`http://localhost:9091/products/${sellerId}`
// const url="http://localhost:9091/products/1";
  const [product,setproducts]= useState(null);
  useEffect(()=>{
    axios.get(url).then((res)=>{
      setproducts(res.data);
    //   console.log(res.data.customerId );
    //   console.log(user.customerId)
    });
  },[]);
  if(!product) return null;
  else
    return (
        <>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-md-12 mt-3 mb-3'>
                        <h1 className='login-register-h1'>List of Products</h1>
                        <div className='col-md-12'>
                            <table className="table" style={{ color: "#FFFF" }}>
                                <thead>
                                    <tr>
                                        <th>sl no </th>
                                        <th>Product Id</th>
                                        <th>Product Name</th>
                                        <th>Category</th>
                                        <th>Price in RS</th>
                                        <th>In Stock in KG</th>
                                        <th>Description</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((getUser, index) => (
                                             <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{getUser.productId}</td>
                                                <td>{getUser.name}</td>
                                                <td>{getUser.category}</td>
                                                <td>RS {getUser.price}</td>
                                                <td>{getUser.countInStock} kg</td>
                                                <td>{getUser.description}</td>
                                                <td><NavLink to="/seller/Updateproducts" state={{data:getUser}}><button type='search' className="btn-primary">Edit</button></NavLink></td>
                                                <td><NavLink to="/seller/Deletepage" state={{data:getUser}}><button type='search' className="btn-primary">delete</button></NavLink></td>
                                                
                                            </tr>
                                        ))
                                        }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
