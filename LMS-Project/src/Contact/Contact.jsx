import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaPhoneAlt, FaTwitter, FaSkype, FaFacebookF } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdEmail, MdHomeWork, MdOutlinePhoneIphone, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { IoPaperPlane, IoLogoYoutube } from "react-icons/io5";
import { BsFillPhoneFill } from "react-icons/bs";
import "./Contact.css";

function Contact() {
  const [task, setTask] = useState("");
  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setStudents([...students, task]);
      setTask("");
    }
  };

  return (
    <div className="Contact">
      <nav className="nav1">
        <a href="#">
          <img src="/lms-logo.png" alt="LMS" className="logo1" />
        </a>
        <div className="site">
          <a href="/" className="page">
            Home
          </a>
          <a href="/Courses" className="page">
            Courses
          </a>
          <a href="/Teacher" className="page">
            Pages
          </a>
          <a href="#" className="page">
            Blog
          </a>
          <a href="#" className="page">
            Gallery
          </a>
          <a href="#" className="page">
            Shop
          </a>
          <a href="#" className="page">
            Contact
          </a>
          <div className="site1">
            <a href="#" className="con">
              <FaUser />
            </a>
            <a href="#" className="site-login">
              Login
            </a>
            <a style={{ color: "grey" }}> | </a>
            <a href="#" className="site-login">
              Register
            </a>
            <a href="#" className="con1">
              <FaShoppingCart />
            </a>
          </div>
        </div>
      </nav>
      <div className="site-body">
        <h1>Contact - layout-3</h1>
        <div className="site2">
          <a href="#">Home</a>
          <a> / Contact - layout-3</a>
        </div>
      </div>
      <div className="gg-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.748019201523!2d106.65325727480457!3d10.753893189393546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef382357bb1%3A0x63988b7680e1d9ad!2zNDQxIMSQLiBI4buTbmcgQsOgbmcsIFBoxrDhu51uZyAxNCwgUXXhuq1uIDUsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1719909665928!5m2!1sen!2s"
          width="1170"
          height="500"
          style={{ borderRadius: "0px", paddingTop:'50px', paddingLeft:'150px' }}
          allowFullscreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="site-body1">
        <div className="site3">
          <div className="message">
            <h2>Give Us A Message</h2>
            <span className="site-gap"></span>
            <div className="username">
              <div className="name1">
                <FaUser
                  style={{
                    border: "2px solid rgb(173, 170, 170)",
                    padding: "19.5px",
                    backgroundColor: "white",
                    color: "gray",
                  }}
                />
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    style={{ color: "black" }}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Your Name"
                    className="searcher"
                  />
                </form>
              </div>
              <div className="name2">
                <MdEmail
                  style={{
                    border: "2px solid rgb(173, 170, 170)",
                    padding: "19.5px",
                    backgroundColor: "white",
                    color: "gray",
                  }}
                />
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    style={{ color: "black" }}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Email"
                    className="searcher"
                  />
                </form>
              </div>
              <div className="name2">
                <BsFillPhoneFill
                  style={{
                    border: "2px solid rgb(173, 170, 170)",
                    padding: "19.6px",
                    backgroundColor: "white",
                    color: "gray",
                  }}
                />
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    style={{ color: "black" }}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Phone"
                    className="searcher"
                  />
                </form>
              </div>
              <div className="name2">
                <IoIosDocument
                  style={{
                    border: "2px solid rgb(173, 170, 170)",
                    padding: "20px",
                    backgroundColor: "white",
                    color: "gray",
                    height: "17vh",
                  }}
                />
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    style={{ color: "black" }}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Message"
                    className="searcher1"
                  />
                </form>
              </div>
              <button type="submit">Send Email</button>
            </div>
          </div>
          <div className="site4">
            <h2>Contact Info</h2>
            <span className="site-gap"></span>
            <div className="site5">
              <div className="contactUs">
                <a href="#">
                  <IoPaperPlane style={{ color: "orange", fontSize: "30px" }} />
                  The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.
                </a>
              </div>
              <span className="site-gap1"></span>
              <div className="contactUs">
                <a href="#">
                  <FaPhoneAlt style={{ color: "orange", fontSize: "30px" }} />
                  +1 200 258 2145
                </a>
              </div>
              <span className="site-gap1"></span>
              <div className="contactUs">
                <a href="#">
                  <MdHomeWork style={{ color: "orange", fontSize: "30px" }} />
                  +1 100 458 2345
                </a>
              </div>
              <span className="site-gap1"></span>
              <div className="contactUs">
                <a href="#">
                  <MdOutlinePhoneIphone
                    style={{ color: "orange", fontSize: "30px" }}
                  />
                  +91 12345 67890
                </a>
              </div>
              <span className="site-gap1"></span>
              <div className="contactUs">
                <a href="#">
                  <MdEmail style={{ color: "orange", fontSize: "30px" }} />
                  super@email.com
                </a>
              </div>
              <span className="site-gap1"></span>
              <div className="contactUs">
                <a href="#">
                  <FaEarthAmericas
                    style={{ color: "orange", fontSize: "30px" }}
                  />
                  google.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-body2">
        <div className="site6">
          <a href="#">
            <img src="lms-logo.png" alt="LMS logo" className="Love"/>
          </a>
        </div>
        <div className="site7">
          <div className="foot2">
            <div className="site8">
              <h2>About Us</h2>
              <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              lobortis diam.
              </h6>
              <h6>
              Duis tellus enim, vestibulum eget varius id, vulputate et mi.
              Nullam feugiat, diam quis interdum varius
              </h6>
              <a href="#">START LEARNING NOW</a>
            </div>

            <div className="site9">
              <h2>Popular Courses</h2>
              <div className="D1">
                <a href="#">Power Electronics</a>
                <h4>Free</h4>
                <span className="site-gap2"></span>
              </div>
              <div className="D1">
                <a href="#">Introduce to Calculus</a>
                <h4>Free</h4>
                <span className="site-gap2"></span>
              </div>
              <div className="D1">
                <a href="#">Basic Laws and Policies</a>
                <h4>Free</h4>
              </div>
            </div>

            <div className="site10">
              <h2>Quick Links</h2>
              <div className="quicker">
                <a href="#">
                    <MdKeyboardArrowRight />
                    All Courses
                </a>
              </div>
                <span className="site-gap3"></span>
                <div className="quicker">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Summer Sessions
                  </a>
              </div>
                <span className="site-gap3"></span>
                <div className="quicker">
                  <a href="#">
                    <MdKeyboardArrowRight />
                      Professional Courses
                  </a>
                </div>
                  <span className="site-gap3"></span>
                  <div className="quicker">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Privacy Policy
                  </a>
                </div>
                  <span className="site-gap3"></span>
                  <div className="quicker">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Terms of Use
                  </a>
                </div>
            </div>

            <div className="site11">
              <h2>Contact Us</h2>
                <div className="contact3">
                  <a href="#">
                      <IoPaperPlane style={{ color: "green" }} />
                      The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.
                  </a>
                  </div>
                  <span className="site-gap3"></span>
                  <div className="contact3">
                  <a href="#">
                      <FaPhoneAlt style={{ color: "green" }} />
                      +11 (2) 7654 2233
                  </a>
                  </div>
                  <span className="site-gap3"></span>
                  <div className="contact3">
                  <a href="#">
                      <MdHomeWork style={{ color: "green" }} />
                      +11 (5) 7654 2244
                  </a>
                  </div>
                  <span className="site-gap3"></span>
                  <div className="contact3">
                  <a href="#">
                    <MdEmail style={{ color: "green" }} />
                    lms@gmail.com
                  </a>
                  </div>
            </div>

            <div className="site12">
              <div className="ended">
                <h6>
                    Copyright © 2020 LMS Theme All Rights Reserved |{" "}
                    <a href="#">Design Themes</a>
                </h6>
                <div className="ended1">
                    <a href="#">
                    <FaTwitter />
                    <IoLogoYoutube style={{ marginLeft: "30px" }} />
                    <FaFacebookF style={{ marginLeft: "30px" }} />
                    <FaSkype style={{ marginLeft: "30px" }} />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
