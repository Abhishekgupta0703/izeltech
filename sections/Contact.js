import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "6d86e249-d8fa-44aa-b7be-1d0ac14de596");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' />
            <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+91 936 969 8575</h3>
                  <span>Call us:  Mon - Sat 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Lucknow</h3>
                  <span> Lucknow, Uttar Pradesh 226020 </span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@izeltech.in</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>learn.izeltech@gmail.com</h3>
                  <span>Courses at izelTech</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>
                Got questions? Ideas? Fill out the form below to get our proposal.
              </p>

              <form onSubmit={onSubmit}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' name="name" required />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='email' name="email" required />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Mobile No.</span>
                    <input type='tel' name="phone" />
                  </div>
                  <div className='inputs'>
                    <span>Your budget</span>
                    <input type='text' name="budget" />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea name="message" cols='30' rows='10' required></textarea>
                </div>
                <button className='button-primary' type="submit">Submit</button>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
