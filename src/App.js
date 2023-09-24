import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import { useEffect } from "react";

function App() {


  useEffect(()=>{
    // Star Animation
var i;
var star = document.getElementsByClassName("st").length;


for (i = 0; i < star; i++) {

let y = Math.floor(Math.random() * 8);
let sp= Math.floor(Math.random() * 4);

document.getElementsByClassName("st")[i].style.animationDelay = y + "s";  
document.getElementsByClassName("st")[i].style.animationDuration = sp + "s";  
} 
  },[])


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
      </Route>
      </Routes>
      </BrowserRouter>
  )  
}

export default App;
