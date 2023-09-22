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

          <span className="textgh">
            <div>Igniting a Revolution in HR Innovation</div>
            <div className="bentline"></div>
          </span>
        </div>

        <div className="header">
          <div className="textlogo">
            <span className="whitetext">get</span>
            <span className="colortext">linked</span>
          </div>

          <div className="header_menu">
            <div className="each_menu">Timeline</div>
            <div className="each_menu">Overview</div>
            <div className="each_menu">FAQs</div>
            
            <Link to='/contact'><div className="each_menu">Contact</div></Link>

            <button className="register_btn">Register</button>
          </div>
        </div>

        <span className="containerOne">
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

          <button className="register_btn">Register</button>

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
        </span>

        <div className="containerTwo">
          <div className="relative_box">
            <div className="guy_in_googles"></div>
            <div className="circle_sparkles"></div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Head;