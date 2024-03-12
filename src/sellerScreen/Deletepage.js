import React,{useState} from 'react';
import Axios from "axios";
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Deletepage(props) {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    console.log(props);
    const  deleteProduct  = location.state?.data;


    const url=`http://localhost:9091/delete/${deleteProduct.productId}`
    const [product, setProduct] = useState({
        productId:""
    
      })

    function handle(e){
        const newProduct={...product}
        newProduct[e.target.id]=e.target.value
        console.log(newProduct)
        setProduct(newProduct);
        
    }
    function submit(e){
        e.preventDefault();
        
        Axios.delete(url,{
            productId:deleteProduct.productId
            
        })
        .then(res=>{
            console.log(res.product)
            toast.success("sucessfully deleted your Product")
        })
        navigate("/seller/ViewProducts")
    }
  return (
    <>
    <div className='profile'>
        <h1 className='login-register-h1 '>Once you click delete Button Your Product Will be deleted</h1>
        <form action="" className='container' onSubmit={(e)=>submit(e)}>
        <div className='mb-3'>
              <label htmlFor='productId' className="form-label"><h1>Product Id</h1></label>
              <input type="number" className="form-control" 
                value={deleteProduct.productId}
                onChange={(e)=>handle(e)}
                name='productId' 
                id="productId" 
                placeholder="Enter your ProductId"
                required
                />
        </div>
        <button type="submit" className="btn-primary">DELETE</button>
        </form>
        </div>
        </>
  )
}
