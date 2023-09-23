import { Link } from "react-router-dom";


function Head() {

    return (
        <>
           <div className="head">
        <div className="backlayer">
          <div className="gradientOne"></div>
          <div className="gradientTwo"></div>

          <div className="metrix"></div>

          <div className="st starOne"></div>
          <div className="st starTwo"></div>
          <div className="st starThree"></div>

          </div>

       

          <div className="frontlayer">


          <div className="textgh">
            <div className="vb">Igniting a Revolution in HR Innovation</div>
            <div className="bentline"></div>
          </div>
         
       
        <div className="containerOne">
          <div className="relative_box">
            <div className="bulb"></div>
            <div className="gtext">getlinkedTech</div>
          </div>

          <div className="flex_cont">
           
            <span className="gtext">Hackathon</span>
            <span className="gtext colortext"> 1.0</span>{" "}
            <div className="chain_icon"></div> <div className="fire_icon"></div>
          </div>

          <span className="participate_text">
            Participate in getlinked tech Hackathon 2023 stand <br />a chance to
            win a Big prize
          </span>

          <Link to='/signup'>  <button className="register_btn">Register</button> </Link>

          <div className="timer_container">
            <div>
              <span className="oo">00</span>
              <span className="oo_t">H</span>
            </div>
            <div>
              <span className="oo">00</span>
              <span className="oo_t">M</span>
            </div>
            <div>
              <span className="oo">00</span>
              <span className="oo_t">S</span>
            </div>
          </div>
        </div>

        <div className="containerTwo">
          <div className="relative_box">
            <div className="guy_in_googles"></div>
            <div className="circle_sparkles"></div>
          </div>
        </div>
          </div>

   


      </div>
        </>
    )
}

export default Head;