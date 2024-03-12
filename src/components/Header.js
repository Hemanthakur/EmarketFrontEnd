// import React,{useState,useEffect} from 'react';
// import { Link ,useNavigate} from 'react-router-dom';
// import { getCurrentUserDetail,isLoggedIn,doLogout } from '../auth';

// export default function header() {
//     const navigate = useNavigate()
//     const [login, setLogin]=useState(false)
//     const [seller, setSeller]=useState(undefined)

//      useEffect(()=>{

//          setLogin(isLoggedIn())
//          setSeller(getCurrentUserDetail())

//     },[login])
//     const logout = () => {
//         doLogout(()=>{
//             //logged out
//             setLogin(false)
//             navigate("/")
//         })
//         window.location.reload();
//     }
//   return (
//     <>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <Link className="navbar-brand" to="/">Bayer-Ecommerce</Link>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav">
//                     {
//                         login &&(
//                             <>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/seller/Viewproducts">ViewProducts</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/seller/Addproducts">AddProducts</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/seller/Profile">{seller.name}</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link onClick={logout} className="nav-link">Logout</Link>
//                                 </li>
//                             </>
//                         )
//                     }

//                     {
//                         !login &&(
//                             <>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/Login">Login</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/choosing">Choose Profile</Link>
//                                 </li>
//                             </>
//                         )
//                     }
                    
//                 </ul>
//             </div>
//         </nav>
//     </>
//   )
// }
