import React,{useEffect} from 'react'
import Card from '../components/Card'
import { toast } from 'react-toastify'
import ProductPage from '../customerScreen/ProductPage'

export default function Home() {
  // useEffect(() => {
  //   notify();
  // }, []);
  // const notify = () =>
  //   toast.info("Please login.", {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: 3000,
      
  //   });
  return (
    <>
       <div>
    <div>
            <div className="d-flex flex-column justify-content-center w-100 h-100">
              <div className="d-flex flex-column justify-content-center align-items-center">
                
              </div>
            </div>
    </div>
    <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
          <div className="carousel-indicators ">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="./images/vegi2.jpg" className="d-block w-100 imageSize" alt="..."/>
              <div className="carousel-caption d-none d-md-block text-light">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item  " data-bs-interval="2000">
              <img src="./images/vegitables.jpg " className="d-block w-100 imageSize" alt="..."/>
              <div className="carousel-caption d-none d-md-block text-light">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src="./images/vegi2.jpg" className="d-block w-100 imageSize" alt="..."/>
              <div className="carousel-caption d-none d-md-block text-light">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
    </div>
    {/* <h1 className='title-header'>this is home page</h1> */}
   
    
    </div> 

    <ProductPage/>
    {/* <Card/> */}
    </>
  )
}
