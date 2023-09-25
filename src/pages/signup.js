import { useState } from "react";
import "../components/signup/style.scss";

function SignUp() {


  const [formData, setFormData] = useState({groupname: "",phone: "",email: "",project_topic: "",category: "",groupsize: "",tc: false});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    // );
};



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
                <input className="input" placeholder="Enter The name of your group"  id="groupname" name="groupname" value={formData.groupname} onChange={handleChange} />
              </div>

              <div className="each_input_grid">
              <div className="formtitle">Phone</div>
              <input className="input" placeholder="Enter your phone number" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="each_input_grid">
              <div className="formtitle">Email</div>
              <input className="input" placeholder="Enter your email address" id="email" name="email" value={formData.email} onChange={handleChange}/>
              </div>

              <div className="each_input_grid">
              <div className="formtitle">Project Topic</div>
              <input className="input" placeholder="What is your group project topic" id="project_topic" name="project_topic" value={formData.project_topic} onChange={handleChange} />
              </div>

              <div className="each_input_grid">
              <div className="formtitle">Category</div>

              <select className="select" id="category" name="category" value={formData.category} onChange={handleChange}>
                <option>Select your category </option>
              </select>

             
              </div>

              <div className="each_input_grid">
              <div className="formtitle">Group Size</div>
              <select className="select" id="groupsize" name="groupsize" value={formData.groupsize} onChange={handleChange}>
                <option>Select</option>
              </select>
              </div>
            </div>


            <div className="ps_text">Please review your registration details before submitting</div>

            <div className="ch_flex">
                <input type="checkbox" className="checkbox" id="tc" name="tc" value={formData.tc} onChange={handleChange} />
                <div className="span_y">I agreed with the event terms and conditions  and privacy policy</div>
            </div>


            <div className="register_btn" onClick={handleSubmit}>Submit</div>
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
