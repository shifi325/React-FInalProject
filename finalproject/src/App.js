import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SignIn from './components/screens/user/SignIn'
import LogIn from './components/screens/user/LogIn'
import ProductList from './components/screens/products/ProductList'
import AddProduct from './components/screens/products/AddProduct'
import UserList from './components/screens/user/UserList'
import Product from './components/screens/products/Product';
import AdminNavBar from './components/navs/AdminNavBar';
import seUserNavBarcond from './components/navs/USerNavBar'
import GuestNavBar from './components/navs/GuestNavBar';
import USerNavBar from './components/navs/USerNavBar';
import './App.css';
import { AddToDriveRounded, Login, ShoppingCart } from '@mui/icons-material';
import UserNavBar from './components/navs/USerNavBar';
import OrderList from './components/screens/orders/OrderList';
import ProductToAdd from './components/screens/products/ProductToAdd';
import ShopCart from './components/screens/orders/ShopCart';

import Order from './components/screens/orders/Order';
import Navbar from './components/navs/Navbar';
import Payment from './components/screens/orders/Payment';
import Congrate from './components/screens/orders/Congrate';
import UpdateProduct from './components/screens/products/UpdateProduct';




function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />}> </Route>
      <Route path="payment" element={<Payment />}></Route> 
      <Route path="congrat" element={<Congrate />}></Route> 

      <Route path="UserList" element={<UserList />}></Route> 
      <Route path="AddProduct" element={<AddProduct />}></Route> 
      <Route path="UpdateProduct" element={<UpdateProduct />}></Route> 
         <Route path="login" element={<LogIn />}></Route> 
         <Route path="productToAdd" element={<ProductToAdd />}></Route> 
         <Route path="OrderList" element={<OrderList />}></Route> 
         <Route path="signin" element={<SignIn />}></Route> 
        <Route path="ProductList" element={<ProductList />}></Route>
       <Route path="ShoppingCart" element={<ShopCart/>}/>
       {/* <Route path="guest" element={<Navbar/>}/> */}
       <Route path="navbar" element={<Navbar/>}/>
{/* 
       <Route path="usernav" element={<Navbar/>}/>
       <Route path="adminnav" element={<Navbar/>}/> */}




          {/*  <Route path="users" element={<Users />}></Route>
          <Route path="listToDo" element={<ListToDo />}></Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  </div> 
  );
}

export default App;
