import React, { useState } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaPhoneAlt,
  FaSkype,
  FaFacebookF,
  FaTwitter,
  FaCalendarAlt 
} from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { IoIosSearch, IoMdArrowDropright } from "react-icons/io";
import {
  MdArrowDropDown,
  MdKeyboardArrowRight,
  MdHomeWork,
  MdEmail,
} from "react-icons/md";
import { IoPaperPlane, IoLogoYoutube } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import "./Courses.css";

function Courses() {

  return (
    <div className="Courses">
      <div className="head">
        <nav className="nav2">
          <a href="/">
            <img src="/lms-logo.png" alt="LMS Logo" className="design" />
          </a>
          <div className="map">
            <a href="/" className="link">
              Home
            </a>
            <a href="/Courses" className="link">
              Courses
            </a>
            <a href="/Teacher" className="link">
              Pages
            </a>
            <a href="#" className="link">
              Blog
            </a>
            <a href="#" className="link">
              Gallery
            </a>
            <a href="#" className="link">
              Shop
            </a>
            <a href="/Contact" className="link">
              Contact
            </a>
            <div className="map1">
              <a href="#" className="site-con">
                <FaUser />
              </a>
              <a href="#" className="regis">
                Login
              </a>
              <a style={{ color: "grey" }}> | </a>
              <a href="#" className="regis">
                Register
              </a>
              <a href="#" className="site-con1">
                <FaShoppingCart />
              </a>
            </div>
          </div>
        </nav>
        <div className="main">
          <h1>Courses-Template</h1>
          <div className="map2">
            <a href="/">Home</a>
            <a> / Courses-Template</a>
          </div>
        </div>
        <div className="main1">
          <div className="map3">
            <div className="look-for">
              <div className="site-search">
                <input
                  type="text"
                  placeholder="Search Courses"
                  className="searching"
                />
                <button className="searching-button">
                  <IoIosSearch
                    style={{
                      fontSize: "20px",
                      color: "black",
                    }}
                  />
                </button>
              </div>
            </div>
            <div className="select">
              <div className="ticket">
                <h3>Course Categories</h3>
                <span className="line"></span>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                  />
                  Education
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                  />
                  Engineering
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                  />
                  Health
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                  />
                  Law
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                  />
                  Mathematics
                </label>
              </div>
            </div>
            <div className="cost">
              <div className="money">
                <h3>Cost</h3>
                <span className="line1"></span>
                <label className="checkbox-label">
                  <input
                    type="radio"
                    value="All"
                  />
                  All
                </label>
                <label className="checkbox-label">
                  <input
                    type="radio"
                    value="Free"
                  />
                  Free
                </label>
                <label className="checkbox-label">
                  <input
                    type="radio"
                    value="Paid"
                  />
                  Paid
                </label>
              </div>
            </div>
            <div className="day">
              <div className="start">
                <h3>Start Date</h3>
                <span className="line2"></span>
                <div className="site-look">
                  <input
                    type="text"
                    placeholder="Start Date"
                    className="look"
                  />
                  <button className="look-button">
                    <FaCalendarAlt
                      style={{ fontSize: "20px", color: "black" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="map4">
            <div className="grid">
              <button className="lyly">
                <RiLayoutGrid2Fill /> GRID
              </button>
              <button className="lyly1">
                <FaList /> LIST
              </button>
              <div className="order">
                <h4>Order by :</h4>
                <button >
                  Select Order 
                </button>
                <button><MdArrowDropDown /></button>
              </div>
            </div>
            <div className="map5">
              <div className="faculty1">
                <div className="one">
                  <img src="Courses-listing-image-1.jpg" />
                  <h2>Free</h2>
                  <a href="#">Power Electronics</a>
                  <div className="one1">
                    <a href="#">Education</a>
                    <a> | 7 curriculum</a>
                  </div>
                  <span className="line3"></span>
                  <h5>
                    <LuClock style={{ color: "black" }} /> 1d 1h 50m
                  </h5>
                  <h6>
                    <a href="#">
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star.gif" />
                    </a>
                    (9 votes, average: 4.11 out of 5, rated)
                  </h6>
                </div>
                <div className="one">
                  <img src="Courses-listing-image-2.jpg" />
                  <h2>Free</h2>
                  <a href="#">Introduction to Calculus</a>
                  <div className="one1">
                    <a href="#">Mathematics</a>
                    <a> | 5 curriculum</a>
                  </div>
                  <span className="line3"></span>
                  <h5>
                    <LuClock style={{ color: "black" }} /> 1m 21d 22h
                  </h5>
                  <h6>
                    <a href="#">
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star2.gif" />
                    </a>
                    (10 votes, average: 4.70 out of 5)
                  </h6>
                </div>
                <div className="one">
                  <img src="Courses-listing-image-3.jpg" />
                  <h2>Free</h2>
                  <a href="#">Basic Laws and Policies</a>
                  <div className="one1">
                    <a href="#">Law</a>
                    <a> | 5 curriculum</a>
                  </div>
                  <span className="line3"></span>
                  <h5>
                    <LuClock style={{ color: "black" }} /> 20d 18h 30m
                  </h5>
                  <h6>
                    <a href="#">
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star2.gif" />
                    <img src="star.gif" />
                    </a>
                    (8 votes, average: 3.75 out of 5)
                  </h6>
                </div>
              </div>

              <div className="faculty1">
                <div className="one">
                  <img src="Courses-listing-image-5.jpg" />
                  <h2>Free</h2>
                  <a href="#">General Business Law</a>
                  <div className="one1">
                    <a href="#">Law</a>
                    <a> | 7 curriculum</a>
                  </div>
                  <span className="line3"></span>
                  <h5>
                    <LuClock style={{ color: "black" }} /> 1m 25d 12h 50m
                  </h5>
                  <h6>
                    <a href="#">
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star2.gif" />
                    <img src="star.gif" />
                    </a>
                    (3 votes, average: 3.67 out of 5)
                  </h6>
                </div>
                <div className="one">
                  <img src="Courses-listing-image-6.jpg" />
                  <h2>Free</h2>
                  <a href="#">Emerging Trends and Technologies</a>
                  <div className="one1">
                    <a href="#">Engineering</a>
                    <a> | 4 curriculum</a>
                  </div>
                  <span className="line3"></span>
                  <h5>
                    <LuClock style={{ color: "black" }} /> 1m 16d 3h
                  </h5>
                  <h6>
                    <a href="#">
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star.gif" />
                    <img src="star.gif" />
                    </a>
                    (4 votes, average: 3.00 out of 5)
                  </h6>
                </div>
                <div className="one">
                  <img src="Courses-listing-image-4.jpg" />
                  <h2>$50</h2>
                  <a href="#">Healthcare Delivery</a>
                  <div className="one1">
                    <a href="#">Health</a>
                    <a> | 4 curriculum</a>
                  </div>
                  <span className="line3"></span>
                  <h5>
                    <LuClock style={{ color: "black" }} /> 3d 2h 50m
                  </h5>
                  <h6>
                    <a href="#">
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star1.gif" />
                    <img src="star2.gif" />
                    <img src="star.gif" />
                    </a>
                    (7 votes, average: 3.57 out of 5)
                  </h6>
                </div>
              </div>

              <div className="next">
                <button className="lyly2">1</button>
                <a href="/Courses2">
                  <button className="lyly3">2</button>
                </a>
                <a href="/Courses2">
                  <button className="lyly4">
                    Next <IoMdArrowDropright />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="main2">
          <div className="map6">
            <a href="#">
              <img src="lms-logo.png" alt="LMS logo" />
            </a>
          </div>
          <div className="map7">
            <div className="foot">
              <div className="map8">
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

              <div className="map9">
                <h2>Popular Courses</h2>
                <div className="B1">
                  <a href="#">Power Electronics</a>
                  <h4>Free</h4>
                  <span className="line4"></span>
                </div>
                <div className="B1">
                  <a href="#">Introduce to Calculus</a>
                  <h4>Free</h4>
                  <span className="line4"></span>
                </div>
                <div className="B1">
                  <a href="#">Basic Laws and Policies</a>
                  <h4>Free</h4>
                </div>
              </div>

              <div className="map10">
                <h2>Quick Links</h2>
                <div className="quickly">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    All Courses
                  </a>
                </div>
                <span className="line5"></span>
                <div className="quickly">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Summer Sessions
                  </a>
                </div>
                <span className="line5"></span>
                <div className="quickly">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Professional Courses
                  </a>
                </div>
                <span className="line5"></span>
                <div className="quickly">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Privacy Policy
                  </a>
                </div>
                <span className="line5"></span>
                <div className="quickly">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Terms of Use
                  </a>
                </div>
              </div>

              <div className="map11">
                <h2>Contact Us</h2>
                <div className="contact1">
                  <a href="#">
                    <IoPaperPlane style={{ color: "green" }} />
                    The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.
                  </a>
                </div>
                <span className="line5"></span>
                <div className="contact1">
                  <a href="#">
                    <FaPhoneAlt style={{ color: "green" }} />
                    +11 (2) 7654 2233
                  </a>
                </div>
                <span className="line5"></span>
                <div className="contact1">
                  <a href="#">
                    <MdHomeWork style={{ color: "green" }} />
                    +11 (5) 7654 2244
                  </a>
                </div>
                <span className="line5"></span>
                <div className="contact1">
                  <a href="#">
                    <MdEmail style={{ color: "green" }} />
                    lms@gmail.com
                  </a>
                </div>
              </div>

              <div className="map12">
                <div className="the-end">
                  <h6>
                    Copyright © 2020 LMS Theme All Rights Reserved |{" "}
                    <a href="#">Design Themes</a>
                  </h6>
                  <div className="the-end1">
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
    </div>
  );
}

export default Courses;
