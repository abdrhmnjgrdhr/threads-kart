import Home from "./Page/Home";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./Page/ProductDetail";
import Shop from "./Page/Shop";
import Footer from "./Component/Footer";
import NavbarBottom from "./Component/BottomNavbar";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Login from "./Page/Login";
import Register from "./Page/Register";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FireabseAuth/FireBaseAuth";

function App() {

  const [userName ,setUsername] = useState("")

  //userName Display

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUsername(user.displayName)
      }else{
        setUsername("")
      }
    })
  },[])

  return (
    <>
      <Navbar userName={userName}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productid" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster/>
      <Footer />
      <NavbarBottom />
    </>
  );
}

export default App;
