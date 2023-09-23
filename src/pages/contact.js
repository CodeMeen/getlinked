import { useState } from "react";
import "../components/contact/style.scss";

function Contact() {

  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    // );
};


  return (
    <div className="contactPage">
      <div className="backlayer">
        <div className="gradientOne"></div>
        <div className="gradientTwo"></div>

        <div className="st starOne"></div>
        <div className="st starTwo"></div>
        <div className="st starThree"></div>
        <div className="st starFour"></div>


      </div>

      <div className="grid">

        <div className="textOne">
          <div className="gtext">Get In Touch</div>

          <div className="rtext">
            Contact <br />
            Information
          </div>

          <div className="rtext">
            27,Alara Street
            <br />
            Yaba 100012 <br />
            Lagos State <br />
          </div>

          <div className="rtext">Call Us : 07067981819</div>

          <div className="rtext">
            we are open from Monday-Friday <br />
            08:00am - 05:00pm
          </div>

<div className="colort">Share on</div>


          <div className="s_flex">
    <div className="s_icon ig"></div>
    <div className="s_icon x"></div>
    <div className="s_icon fb"></div>
    <div className="s_icon in"></div>
  </div>






        </div>


        <div className="inputBox">

            <div className="mid">

                <div className="title">Questions or need assistance?
                Let us know  about it!</div>


                <input className="input" type="text" placeholder="First Name" id="name" name="name" value={formData.name} onChange={handleChange}/> 

                <input className="input" placeholder="Mail" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

                <textarea className="textarea" placeholder="Message" type="text" id="message" name="message" value={formData.message} onChange={handleChange}>
                </textarea>


              <div className="register_btn" onClick={handleSubmit}>Submit</div>

            </div>

        </div>


      </div>
    </div>
  );
}

export default Contact;
