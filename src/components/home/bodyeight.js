import { Link } from "react-router-dom";

function BodyEight() {

    return (
        <>
 
 <div className="bd bodyEight">
      <div className="backlayer">

<div className="st starOne"></div>
<div className="st starTwo"></div>
<div className="st starThree"></div>


<div className="st starFour"></div>
<div className="st starFive"></div>
<div className="st starSix"></div>

<div className="st starSeven"></div>


<div className="gradientOne"></div>
</div>


<div className="grid">

<div className="kbox">
          <div className="title_text">
            <span className="gtext" data-aos="fade-up">Privacy Policy and</span>
            <br />
            <span className="gtext colortext" data-aos="fade-up">Terms</span>
            <br />
            <br />
            <span className="rtext dim" data-aos="fade-up">
             Last updated on September 12,2023
            </span>
            <br />
            <br />
            <span className="rtext" data-aos="fade-up"> 
            Below are our privacy & policy, which outline a lot of goodies. 
            it's our aim to always take of our participant
            </span>
          </div>

          <div className="others" data-aos="fade-up">
          <div className="rtext">
      At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.<br/> &nbsp;&nbsp;
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event.<br/><br/>
 &nbsp;&nbsp;By participating in our event, you consent 
to the practices described in this policy.
    </div>

    <div className="gtext">Licensing Policy</div>

    <div className="gtext nocolor">Here are terms of our Standard License:</div>

    <div className="checkdiv">

      <div className="check">
        <div className="checkimg"></div>
      </div>

      <div className="checktext">The Standard License grants you a non-exclusive right to

navigate and register for our event</div>

      <div className="check">
        <div className="checkimg"></div>
      </div>
      
      <div className="checktext">You are licensed to use the item available at any free source
     
sites, for your project development</div>

    </div>


    <Link to='/signup'>  <div className="register_btn">Read More</div> </Link>
     


          </div>
</div>


<div className="image_box" data-aos="fade-up">
  
</div>


</div>



</div>


        </>
    )
}

export default BodyEight;