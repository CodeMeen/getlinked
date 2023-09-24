
import React, { useState,useRef } from 'react';
import { Outlet, Link } from "react-router-dom";


import '../components/layout/style.scss';

function Layout(){

  const [toggle, setToggle] = useState(false);
  const header=useRef()


  var className = "blur";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    header.current.classList.add(className);
  } else {
    header.current.classList.remove(className);
  }
};



    return (
        <>
        <div className="layoutPage">

        <div className="header" ref={header}>

        <Link to='/'>
          <div className="textlogo" >
            <span className="whitetext">get</span>
            <span className="colortext">linked</span>
          </div>
        </Link>

          <div className="header_menu">
            <div className="each_menu" onClick={() => setToggle(false)} >Timeline</div>
            <div className="each_menu" onClick={() => setToggle(false)} >Overview</div>
            <div className="each_menu" onClick={() => setToggle(false)} >FAQs</div>
            
            <Link to='/contact'><div className="each_menu" onClick={() => setToggle(false)} >Contact</div></Link>

            <Link to='/signup'> <button className="register_btn" onClick={() => setToggle(false)} >Register</button></Link>

            <div className="mobile_menu" onClick={() => setToggle(!toggle)} >
                <div className="li lineOne"></div>
                <div className="li lineTwo"></div>
                <div className="li lineThree"></div>
            </div>

          </div>
        </div>


        {toggle && (
     <div className="sidenav">

      <div className='closediv'  onClick={() => setToggle(false)} >x</div>


           <div className="ul">


            <div className="li">
              Timeline
            </div>

            <div className="li">
              Overview
            </div>

          <div className="li">FAQs</div>

          <Link to='contact'>   <div className="li">Contact</div></Link>

           </div>


          <Link to='signup'><button className="register_btn">Register</button></Link> 

      </div>
        )}


</div>
  


        <Outlet/>
        </>
    )

}

export default Layout;