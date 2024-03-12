import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export default function CartPage() {

    const buyerId = localStorage.getItem("buyerId")
    const url = `http://localhost:9091/cart/${buyerId}`
    // var totalcartprice=0;


    //   to delete record
    
    function deleterecord(id){
        axios.delete(`http://localhost:9091/cart/delete/${id}`).then((res)=>{
            console.log(res);
            records();
        })
    }

    //   to display in cart
    const [product, setProducts] = useState(null);
    const [total,setTotal]=useState(null)
   
    function records(){
        axios.get(url).then((res) => {
            debugger
            setTotal(res.data.totalCost)
            setProducts(res.data.cartItems);
            // console.log(setProducts());
            
        })
    }
    useEffect(() => {
        records();
        
        console.log(setProducts());
    }, []);
    function editQuantity(cid,pid,Quantity){
        
        const QUANT = prompt("enter the quantity",Quantity)
        console.log(QUANT);
        axios.put(`http://localhost:9091/update/${buyerId}/${pid}/${cid}`,{
            quantity:QUANT
        }).then(res=>{
            console.log(res.quantity);
            window.location.reload()
        })
        
    }
    if (!product) return "no product found";
    else

        return (
            <>

                <div className="container d-flex justify-content-center m-4">
                <h1 className='login-register-h1 m-4'>List of Products</h1>
                </div>
                <div className='container '>
                    <div className='row mt-3'>
                        <div className='col-md-12 mt-3 mb-3'>
                            {/* <h1 className='login-register-h1'>List of Products</h1> */}
                            <div className='col-md-12'>
                                <table className="table" style={{ color: "#FFFF" }}>
                                    <thead>
                                        <tr>
                                            <th>sl no </th>
                                            <th>price</th>
                                            <th>quantity</th>
                                            <th>Product name</th>
                                            <th>Edit</th>
                                            <th>remove</th>
                                            <th>Sub Total</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            product.map((getUser, index) => {
                                            //    totalcartprice += getUser.product.price * getUser.quantity
                                                return(
                                                    <>
                                                    <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>RS {getUser.product.price}</td>
                                                    <td>{getUser.quantity} kg</td>
                                                    
                                                    <td>{getUser.product.name}</td>
                                                    <td><button  onClick={()=>editQuantity(getUser.cartId,getUser.product.productId,getUser.quantity)}className=" btn-primary">edit</button></td>
                                                    <td><button onClick={()=>deleterecord(getUser.cartId)} className="btn-primary">delete</button></td>
                                                    <td>RS {getUser.product.price * getUser.quantity}</td>


                                                </tr>
                                                    
                                                    </>
                                                )
                                                
                                                
                                                })
                                        }
                                        {
                                   
                                            <h1 >Grand Total Cost = RS {total}</h1>
                                        
                                        }
                                    </tbody>
                                    
                                    
                                </table>

                                {/* <h1>Total Price is {totalcartprice} Rs</h1> */}
                                <NavLink to="/CheckoutPage"><button className="btn-primary">proceed to checkout</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>







            </>
        )
}
