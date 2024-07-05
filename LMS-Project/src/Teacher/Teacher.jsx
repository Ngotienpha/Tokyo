import React from "react";
import {
  FaUser,
  FaShoppingCart,
  FaRegComment,
  FaFacebookF,
  FaPhoneAlt,
  FaTwitter,
  FaSkype,
} from "react-icons/fa";
import { IoLogoTwitter, IoLogoYoutube, IoPaperPlane } from "react-icons/io5";
import { MdKeyboardArrowRight, MdHomeWork, MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import "./Teacher.css";

function Teacher() {
  return (
    <div className="teacher">
      <nav className="nav3">
        <a href="/">
          <img src="/lms-logo.png" alt="LMS Logo" className="ban" />
        </a>
        <div className="tree">
          <a href="/" className="web">
            Home
          </a>
          <a href="/Courses" className="web">
            Courses
          </a>
          <a href="/Teacher" className="web">
            Pages
          </a>
          <a href="#" className="web">
            Blog
          </a>
          <a href="#" className="web">
            Gallery
          </a>
          <a href="#" className="web">
            Shop
          </a>
          <a href="/Contact" className="web">
            Contact
          </a>
          <div className="tree1">
            <a href="#" className="jasmine">
              <FaUser />
            </a>
            <a href="#" className="register">
              Login
            </a>
            <a style={{ color: "grey" }}> | </a>
            <a href="#" className="register">
              Register
            </a>
            <a href="#" className="jasmine1">
              <FaShoppingCart />
            </a>
          </div>
        </div>
      </nav>

      <div className="main-tree">
        <h1>Teachers</h1>
        <div className="tree2">
          <a href="/">Home</a>
          <a> / Teachers</a>
        </div>
      </div>

      <div className="main-tree1">
        <div className="tree3">
          <div className="cate">
            <h2>Categories</h2>
            <span className="main-line"></span>
            <h5>
              <a href="#">Uncategorized</a> (7)
            </h5>
            <span className="main-line1"></span>
          </div>
          <div className="recent">
            <h2>Recent Comments</h2>
            <span className="main-line"></span>
            <h5>
              <a href="#">dtlmsele</a> on{" "}
              <a href="#">Application Development</a>
            </h5>
            <span className="main-line1"></span>
            <h5>
              dummy on <a href="#">Power Electronics</a>
            </h5>
            <span className="main-line1"></span>
            <h5>
              kowsi on <a href="#">Video Game Technologies</a>
            </h5>
            <span className="main-line1"></span>
            <h5>
              ram on <a href="#">Advanced Programming</a>
            </h5>
            <span className="main-line1"></span>
            <h5>
              ram on <a href="#">Processing Digital Signal</a>
            </h5>
          </div>
          <div className="archive">
            <h2>Archives</h2>
            <span className="main-line"></span>
            <h5>
              <a href="#">November 2023</a>
            </h5>
            <span className="main-line1"></span>
          </div>
          <div className="tag">
            <h2>Tags</h2>
            <span className="main-line"></span>
            <h5>
              <button>BLOG</button> <button>CHAT</button>
            </h5>
            <h5>
              <button>TIPS</button>
            </h5>
          </div>
          <div className="popular">
            <h3>Contrary to popular</h3>
            <div className="clock">
              {" "}
              <h5>
                <CiClock2 style={{ color: "green" }} /> 30 Thu{" "}
              </h5>
              <h5>
                <a href="#">
                  <FaRegComment style={{ color: "green" }} /> 0
                </a>
              </h5>
            </div>
            <span className="main-line1"></span>

            <h3>Omnis voluptas assumenda</h3>
            <div className="clock">
              {" "}
              <h5>
                <CiClock2 style={{ color: "green" }} /> 30 Thu{" "}
              </h5>
              <h5>
                <a href="#">
                  <FaRegComment style={{ color: "green" }} /> 0
                </a>
              </h5>
            </div>
            <span className="main-line1"></span>

            <h3>Piece of classical</h3>
            <div className="clock">
              {" "}
              <h5>
                <CiClock2 style={{ color: "green" }} /> 30 Thu{" "}
              </h5>
              <h5>
                <a href="#">
                  <FaRegComment style={{ color: "green" }} /> 0
                </a>
              </h5>
            </div>
            <span className="main-line1"></span>

            <h3>Latin professor ai Hampden</h3>
            <div className="clock">
              {" "}
              <h5>
                <CiClock2 style={{ color: "green" }} /> 30 Thu{" "}
              </h5>
              <h5>
                <a href="#">
                  <FaRegComment style={{ color: "green" }} /> 0
                </a>
              </h5>
            </div>
            <span className="main-line1"></span>

            <h3>Latin words Ipsum</h3>
            <div className="clock">
              {" "}
              <h5>
                <CiClock2 style={{ color: "green" }} /> 30 Thu{" "}
              </h5>
              <h5>
                <a href="#">
                  <FaRegComment style={{ color: "green" }} /> 0
                </a>
              </h5>
            </div>
          </div>
        </div>
        <div className="list-teacher">
          <div className="list-teacher1">
            <div className="teacher1">
              <img src="Teacher-image-3.jpg" />
              <a href="#">DEMIE GLENDELL</a>
              <h5>Co-Director</h5>
              <span className="main-line2"></span>
              <div className="go">
                <h6>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </h6>
                <h6>
                  <a href="#">
                    <IoLogoTwitter />
                  </a>
                </h6>
                <h6>
                  <a href="#">
                    <IoLogoInstagram />
                  </a>
                </h6>
              </div>
            </div>

            <div className="teacher1">
              <img src="Teacher-image-2.jpg" />
              <a href="#">JAMES CATWIN</a>
              <h5>Art Director</h5>
              <span className="main-line2"></span>
              <div className="go">
                <h6>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </h6>
                <h6>
                  <a href="#">
                    <IoLogoTwitter />
                  </a>
                </h6>
                <h6>
                  <a href="#">
                    <IoLogoInstagram />
                  </a>
                </h6>
              </div>
            </div>

            <div className="teacher1">
              <img src="Teacher-image-1.jpg" />
              <a href="#">JENNY SHEEN</a>
              <h5>Digital Media Programming</h5>
              <span className="main-line2"></span>
              <div className="go">
                <h6>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </h6>
                <h6>
                  <a href="#">
                    <IoLogoTwitter />
                  </a>
                </h6>
                <h6>
                  <a href="#">
                    <IoLogoInstagram />
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="list-teacher2">
            <div className="teacher1">
                <img src="Teacher-image-4.jpg" />
                <a href="#">JIM MORRISON</a>
                <h5>Chief Programmer</h5>
                <span className="main-line2"></span>
                <div className="go">
                  <h6>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </h6>
                  <h6>
                    <a href="#">
                      <IoLogoTwitter />
                    </a>
                  </h6>
                  <h6>
                    <a href="#">
                      <IoLogoInstagram />
                    </a>
                  </h6>
                </div>
              </div>
          </div>
        </div>

        <div className="site-foot">
          <div className="tree4">
            <a href="#">
              <img src="lms-logo.png" alt="LMS logo" />
            </a>
          </div>
          <div className="tree5">
            <div className="foot1">
              <div className="tree6">
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

              <div className="tree7">
                <h2>Popular Courses</h2>
                <div className="C1">
                  <a href="#">Power Electronics</a>
                  <h4>Free</h4>
                  <span className="main-line3"></span>
                </div>
                <div className="C1">
                  <a href="#">Introduce to Calculus</a>
                  <h4>Free</h4>
                  <span className="main-line3"></span>
                </div>
                <div className="C1">
                  <a href="#">Basic Laws and Policies</a>
                  <h4>Free</h4>
                </div>
              </div>

              <div className="tree8">
                <h2>Quick Links</h2>
                <div className="on-quick">
                  <a href="#">
                      <MdKeyboardArrowRight />
                      All Courses
                  </a>
                </div>
                  <span className="main-line4"></span>
                  <div className="on-quick">
                    <a href="#">
                      <MdKeyboardArrowRight />
                      Summer Sessions
                    </a>
                </div>
                  <span className="main-line4"></span>
                  <div className="on-quick">
                    <a href="#">
                      <MdKeyboardArrowRight />
                       Professional Courses
                    </a>
                  </div>
                    <span className="main-line4"></span>
                    <div className="on-quick">
                    <a href="#">
                      <MdKeyboardArrowRight />
                      Privacy Policy
                    </a>
                  </div>
                    <span className="main-line4"></span>
                    <div className="on-quick">
                    <a href="#">
                      <MdKeyboardArrowRight />
                      Terms of Use
                    </a>
                  </div>
              </div>

              <div className="tree9">
                <h2>Contact Us</h2>
                  <div className="contact2">
                    <a href="#">
                        <IoPaperPlane style={{ color: "green" }} />
                        The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.
                    </a>
                    </div>
                    <span className="main-line4"></span>
                    <div className="contact2">
                    <a href="#">
                        <FaPhoneAlt style={{ color: "green" }} />
                        +11 (2) 7654 2233
                    </a>
                    </div>
                    <span className="main-line4"></span>
                    <div className="contact2">
                    <a href="#">
                        <MdHomeWork style={{ color: "green" }} />
                        +11 (5) 7654 2244
                    </a>
                    </div>
                    <span className="main-line4"></span>
                    <div className="contact2">
                    <a href="#">
                      <MdEmail style={{ color: "green" }} />
                      lms@gmail.com
                    </a>
                    </div>
              </div>

              <div className="tree10">
                <div className="ending">
                  <h6>
                      Copyright © 2020 LMS Theme All Rights Reserved |{" "}
                      <a href="#">Design Themes</a>
                  </h6>
                  <div className="ending1">
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

export default Teacher;
