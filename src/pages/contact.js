import "../components/contact/style.css";

function Contact() {
  return (
    <div className="contactPage">
      <div className="backlayer"></div>

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


                <input className="input" placeholder="First Name"/> 

                <input className="input" placeholder="First Name"/>

                <textarea className="textarea" placeholder="Message">
                </textarea>


            </div>

        </div>


      </div>
    </div>
  );
}

export default Contact;
