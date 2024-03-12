import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default function ProductPage() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    const buyerId = localStorage.getItem("buyerId");
    let componentMounted = true
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch("http://localhost:9091/products");
            if (componentMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts()
    }, []);
    const Loading=()=> {
        return (
            <>
                Loading.....</>
        )
    }
    const filterProduct=(cat)=>{
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }
    const [product, setProduct] = useState({
        quantity: 1,
      });
    function addtocart(id){
        Axios.post(`http://localhost:9091/addToCart/${buyerId}/${id}`, {
            quantity: product.quantity,
          })
            .then(res => {
              console.log(res.product)
                alert("sucessfully added to cart")
            })
    }
    const Showproducts=() =>{
        return (
            <>
            {/* filter and product mapping is not provided here yet */}
                <div className="buttons d-flex justify-content-center mb-5 pb-5" >
                    <button className='btn btn-outline-dark me-2'onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("Fruit")}>Fruit</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("Vegetable")}>Vegetable</button>
                    <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("Grain")}>Grain</button>
                </div>
                {
                    filter.map((product,index) => {
                        return (
                            <>
                                <div className="col-md-3" key={index+1}>
                                    <div className="card mb-5" width="18rem">
                                        <img className="card-img-top" src="./images/vegi2.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p>Available for {product.location} only</p>
                                            <Link to="/SingleProductpage" state={{data:product}}className="btn btn-primary">view</Link>
                                            <button className="btn btn-primary m-4 " onClick={()=>addtocart(product.productId)}>add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Top products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <Showproducts />}
                </div>
            </div>
        </div>
    )
}
