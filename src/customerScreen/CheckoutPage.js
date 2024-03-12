import React,{useState} from 'react'
import Axios from 'axios';

export default function CheckoutPage() {
    const buyerId = localStorage.getItem("buyerId");
    const [selectmenu,setSelectmenu]=useState("");
    const url=`http://localhost:9091/checkout/${buyerId}`;
  const [checkout,setCheckout]=useState({
    address:"",
    pincode:"",
    paymentmethod:""
  });
  function handle(e){
    const newCheckout={...checkout}
    newCheckout[e.target.id]=e.target.value
    console.log(newCheckout)
    setCheckout(newCheckout);
  }
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      address:checkout.address,
      pincode:checkout.pincode,
      paymentmethod:selectmenu
    })
    .then(res=>{
      console.log(res.checkout)
    //   navigate("/login/LoginRetailer")
        alert("your order is sucessfully placed, and we will notify the conserned person. ")
    })
  }
    return (
        <>
            <div className="container py-5">
                <div className="container d-flex justify-content-center">
                <h1>Wellcome to Check Out Page</h1>
                </div>
                
                <form className="register-form " 
                onSubmit={(e) => submit(e)}
                >
                    <div className="row py-5">
                        <div className="col-md-6">
                        <h3 className="display-6 fw-bold my-4">Please provide Shipping Address</h3>

                            <label className="register-page-label" htmlFor="address">Address</label>
                            <input className="register-page-input"
                                onChange={(e) => handle(e)}
                                value={checkout.address} 
                                name="address"
                                id="address"
                                placeholder="Enter you address"
                                required />
                                <br/>
                            <label className="register-page-label" htmlFor="pincode">Pincode</label>
                            <input className="register-page-input"
                                onChange={(e) => handle(e)}
                                value={checkout.pincode} 
                                name="pincode"
                                id="pincode"
                                placeholder="Enter your PinCode"
                                required />
                                <br/>
                            <label className="register-page-label" htmlFor="paymentmethod">Mode of Payment</label>
                    
                            <select className="register-page-input" value={selectmenu} onChange={(e) => setSelectmenu(e.target.value)}>
                             <option>Choose Payment Method</option>
                             <option value="Cash">Cash On Delivery</option>
                             <option value="Online">Online</option>
                            </select>
                            {/* <input className="register-page-input"
                                onChange={(e) => handle(e)}
                                value={checkout.paymentmethod} 
                                name="paymentmethod"
                                id="paymentmethod"
                                placeholder="Enter cash/online"
                                required /> */}
                          



                        </div>
                        
                        

                    </div>
                    <div>
                    <button className="btn btn-outline-dark "width="30">click me</button>
                    </div>
                    
                </form>
            </div>


        </>
    )
}
