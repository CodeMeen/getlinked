import { Outlet, Link } from "react-router-dom";

import '../components/layout/style.css';

function Layout(){

    return (
        <>
        <div className="layoutPage">
        <div className="header">

        <Link to='/'>
          <div className="textlogo">
            <span className="whitetext">get</span>
            <span className="colortext">linked</span>
          </div>
        </Link>

          <div className="header_menu">
            <div className="each_menu">Timeline</div>
            <div className="each_menu">Overview</div>
            <div className="each_menu">FAQs</div>
            
            <Link to='/contact'><div className="each_menu">Contact</div></Link>

            <Link to='/signup'> <button className="register_btn">Register</button></Link>
          </div>
        </div>
        </div>
  


        <Outlet/>
        </>
    )

}

export default Layout;