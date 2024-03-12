import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUserDetail, isLoggedIn, doLogout,sellerUser } from '../auth';
import jquery from 'jquery';
import findUser from '../screens/LoginRetailer'
export default function SonaBar() {
    jquery(window).scroll(function() {
        jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
        })
    const navigate = useNavigate()
    
    
    const logout = () => {
        doLogout(() => {
            navigate("/")
        })
        window.location.reload();
    }
   
        if (!isLoggedIn()) {
            return(
                <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <Link className="navbar-brand" to="/">Bayer-Ecommerce</Link> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link className="navbar-brand black" to="/">Bayer E-MarketPlace</Link>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/choosing">Choose Profile</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                </>
            )
            
            
        } 
        else {
            if(!sellerUser()) {
                return (
                    <>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        {/* <Link className="navbar-brand" to="/">Bayer-Ecommerce</Link> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <Link className="navbar-brand black" to="/">Bayer E-MarketPlace</Link>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/CartPage">Cart</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/RetailerProfile">profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={logout} className="nav-link">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </>            
                );
            } else if(sellerUser()){
                return (
                    <>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        {/* <Link className="navbar-brand" to="/">Bayer-Ecommerce</Link> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <h2>Bayer E-MarketPlace</h2>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/seller/Addproducts">AddProducts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/seller/Viewproducts">ViewProducts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/seller/Myorders">My Orders</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/seller/Profile">profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={logout} className="nav-link">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </>
                );
            }
        }

    
}
