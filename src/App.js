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


// Typewriter Animation

let speed = 60;

let tx = 0;
let textone = "Igniting a Revolution in HR Innovation";

let tm=setInterval(()=>{

  if(tx < textone.length) {

    document.getElementById("typewriter").innerHTML += textone.charAt(tx);
    tx++;

  }

}, speed)


// Countdown Animation 

let countDownDate = new Date("September 25, 2023 12:00:00").getTime();


let cdown= setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("hour").innerHTML=hours;
  document.getElementById("min").innerHTML=minutes;
  document.getElementById("sec").innerHTML=seconds;


  // If the count down is finished
  if (distance < 0) {
    clearInterval(cdown);

    document.getElementById("hour").innerHTML="00";
  document.getElementById("min").innerHTML="00";
  document.getElementById("sec").innerHTML="00";
   
  }
}, 1000);





return () =>{
  clearInterval(tm);
  clearInterval(cdown);
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
