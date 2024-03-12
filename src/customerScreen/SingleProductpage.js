import React,{useState} from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action/Addtocart';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
export default function SingleProductpage(props) {
  const navigate=useNavigate();
  const location = useLocation()
  console.log(location);
  console.log(props);
  const productInfo = location.state?.data;
  const buyerId = localStorage.getItem("buyerId");
  const url = `http://localhost:9091/addToCart/${buyerId}/${productInfo.productId}`
  
  const [product, setProduct] = useState({
    quantity: "",
  });
  function handle(e) {
    const newProduct = { ...product }
    newProduct[e.target.id] = e.target.value
    console.log(newProduct)
    setProduct(newProduct);
  }
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      quantity: product.quantity,
    })
      .then(res => {
        console.log(res.product)
        navigate("/CartPage")
      })
    
  }

  // function handle(productInfo) {
  //   console.log(productInfo)

  // }
  return (
    <>

      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-6">
            <img src="./images/vegi2.jpg" alt="product image" height="500px" width="600px" />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{productInfo.category}</h4>
            <h1 className="display-5">{productInfo.name}</h1>
            <h3 className="display-6 fw-bold my-4">price = {productInfo.price} Rs</h3>
            <p className="lead">
              {productInfo.description}
            </p>
            <p className='red'>this product is only available in {productInfo.location}</p>
            <form className="register-form "
              onSubmit={(e) => submit(e)}
            >
              <label className="register-page-label" htmlFor="quantity">Quantity</label>
              <input type="number"className='register-page-input'placeholder='enter the number product' id="quantity"onChange={(e) => handle(e)} value={product.quantity} />
              <div className='container d-flex justify-content-center'>
              <button  className="btn-outline-dark m-4 px-4 py-2">Add to cart</button>
              </div>
              
            </form>

            {/* <button onClick={() => handle(productInfo)} className="btn btn-outline-dark px-4 py-2">
              Add to cart
            </button> */}

          </div>
        </div>
      </div>

    </>
  )
}
