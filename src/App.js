import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Choosing from './components/Choosing';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './screens/Login';
import Register from './screens/Register';
import RegisterBuyer from './screens/RegisterBuyer';
import Header from './components/Header';
import Footer from './components/Footer';
import SingleProductpage from './customerScreen/SingleProductpage';
import LoginFarmer from './screens/LoginFarmer';
import LoginRetailer from './screens/LoginRetailer';
import Addproducts from './sellerScreen/Addproducts';
import Dashboard from './sellerScreen/Dashboard';
import ViewProducts from './sellerScreen/ViewProducts';
import Profile from './sellerScreen/Profile';
import Privateroute from './components/Privateroute';
import Navbar from './components/Navbar';
import Updateproducts from './sellerScreen/Updateproducts';
import Deletepage from './sellerScreen/Deletepage';
import SonaBar from './components/SonaBar';
import RetailerProfile from './customerScreen/RetailerProfile';
import {Provider} from 'react-redux';
import store from './redux/Store';
import CartPage from './customerScreen/CartPage';
import CheckoutPage from './customerScreen/CheckoutPage';
import Myorders from './sellerScreen/Myorders';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* <Provider store={store}> */}
    {/* <Header/> */}
    {/* <Navbar/> */}
    <SonaBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/choosing" element={<Choosing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/login/LoginFarmer" element={<LoginFarmer/>}/>
      <Route path="/login/LoginRetailer" element={<LoginRetailer/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/RegisterBuyer" element={<RegisterBuyer/>}/>
      <Route path="/Singleproductpage" element={<SingleProductpage/>}/>
      <Route path="/CartPage" element={<CartPage/>}/>
      <Route path="/CheckoutPage" element={<CheckoutPage/>}/>
      <Route path="/RetailerProfile" element={<RetailerProfile/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/seller' element={<Privateroute/>}>
        <Route path="Addproducts" element={<Addproducts/>}/>
        <Route path="Viewproducts" element={<ViewProducts/>}/>
        <Route path="Myorders" element={<Myorders/>}/>
        <Route path="Profile" element={<Profile/>}/>
        <Route path="Updateproducts" element={<Updateproducts/>}/>
        <Route path="Deletepage" element={<Deletepage/>}/>
      </Route>
      
    </Routes>
    {/* <footer>
    <Footer/>
    </footer> */}
    
    {/* </Provider> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
