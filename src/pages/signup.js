import "../components/signup/style.scss";

function SignUp() {
  return (
    <div className="signUpPage">
      <div className="backlayer">
        <div className="gradientOne"></div>
        <div className="gradientTwo"></div>

        <div className="st starOne"></div>
        <div className="st starTwo"></div>
        <div className="st starThree"></div>
        <div className="st starFour"></div>
        <div className="st starFour"></div>
      </div>

      <div className="grid">
        <div className="icon mansitting"></div>

        <div className="inputBox">
          <div className="mid">
            <div className="title">Register</div>

            <div className="t_flex">
              <div className="span_t">Be a part of the movement</div>
              <div className="movingpeople"></div>
            </div>

            <div className="c_text">CREATE YOUR ACCOUNT</div>

            <div className="inputgrid">

              <div className="each_input_grid">
                <div className="formtitle">Team's Name</div>
                <input className="input" placeholder="Enter The name of your group" />
              </div>

              <div className="each_input_grid">
              <div className="formtitle">Phone</div>
              <input className="input" placeholder="Enter your phone number" />
              </div>

              <div className="each_input_grid">
              <div className="formtitle">Email</div>
              <input className="input" placeholder="Enter your email address" />
              </div>

              <div className="each_input_grid">
              <div className="formtitle">Project Topic</div>
              <input className="input" placeholder="What is your group project topic" />
              </div>

              <div className="each_input_grid">
              <div className="formtitle">Category</div>

              <select className="select">
                <option>Select your category </option>
              </select>

             
              </div>

              <div className="each_input_grid">
              <div className="formtitle">Group Size</div>
              <select className="select" >
                <option>Select</option>
              </select>
              </div>
            </div>


            <div className="ps_text">Please review your registration details before submitting</div>

            <div className="ch_flex">
                <input type="checkbox" className="checkbox" />
                <div className="span_y">I agreed with the event terms and conditions  and privacy policy</div>
            </div>


            <div className="register_btn">Submit</div>
          </div>
        </div>
      </div>

     

     <div className="overlay">

        <div className="ov_content">

                  
       <div className="banner">

<div className="happyman"></div>

<div className='htext'>
 Congratulations<br/>
you have successfully Registered!
</div>

<div className="xtext">
Yes, it was easy and you did it!
check your mail box for next step 
</div>

<div className="register_btn">Back</div>

</div>

        </div>


     </div>

    </div>
  );
}

export default SignUp;
