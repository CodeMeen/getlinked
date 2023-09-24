import { Link } from "react-router-dom";
import { useEffect,useState,useRef } from "react";


function Head() {

  const [hour,setHour] = useState('00');
  const [minute,setMinute] = useState('00');
  const [seconds,setSeconds] = useState('00');

  const [typewrite,setTypewrite] = useState('');

  const circ=useRef()


  useEffect(()=>{

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

  
  setHour(hours)
  setMinute(minutes)
  setSeconds(seconds)


  // If the count down is finished
  if (distance < 0) {
    clearInterval(cdown);

    setHour('00')
  setMinute('00')
  setSeconds('00')
   
  }
}, 1000);


// Typewriter Animation

let speed = 60;

let tx = 0;
let textone = "Iggniting a Revolution in HR Innovation";

let tm=setInterval(()=>{

  if(tx < textone.length) {

    setTypewrite((prevText)=>{
       return prevText +textone.charAt(tx);
    })

    tx++;
  }

}, speed)


//Sparkle Animation

let circAnim= setInterval(function() {

  let sp= Math.floor(Math.random() * 360);

 
  
  circ.current.style.rotate=sp+'deg';
  


},3200)








return () =>{

  clearInterval(cdown);
  clearInterval(tm);
  clearInterval(circAnim);
} 

  },[])

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
            <div className="vb" id="typewriter">{typewrite}</div>
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
              <span className="oo" id="hour">{hour}</span>
              <span className="oo_t">H</span>
            </div>
            <div>
              <span className="oo" id="min">{minute}</span>
              <span className="oo_t">M</span>
            </div>
            <div>
              <span className="oo" id="sec">{seconds}</span>
              <span className="oo_t">S</span>
            </div>
          </div>
        </div>

        <div className="containerTwo">
          <div className="relative_box">
            <div className="guy_in_googles"></div>
            <div className="circle_sparkles" ref={circ}></div>
          </div>
        </div>
          </div>

   


      </div>
        </>
    )
}

export default Head;