import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaShoppingCart,
  FaCss3,
  FaArrowLeft,
  FaArrowRight,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineAndroid,
  MdOutlineLocalGroceryStore,
  MdKeyboardArrowRight,
  MdHomeWork,
  MdEmail,
} from "react-icons/md";
import { FaHtml5, FaBookmark, FaSkype } from "react-icons/fa";
import { FaRegPaperPlane, FaRegClock } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { IoPaperPlane, IoLogoYoutube } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setStudents([...students, task]);
      setTask("");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  return (
    <div className="App">
      <div className="contain1">
        <div className="main-contain">
          <nav className="nav">
            <a href="/">
              <img src="/lms-logo.png" alt="LMS Logo" className="logo" />
            </a>
            <div className="contain2">
              <a href="#" className="home">
                Home
              </a>
              <a href="/Courses" className="home">
                Courses
              </a>
              <a href="/Teacher" className="home">
                Pages
              </a>
              <a href="#" className="home">
                Blog
              </a>
              <a href="#" className="home">
                Gallery
              </a>
              <a href="#" className="home">
                Shop
              </a>
              <a href="/Contact" className="home">
                Contact
              </a>
              <div className="contain3">
                <a href="#" className="icon">
                  <FaUser />
                </a>
                <a href="#" className="login">
                  Login
                </a>
                <a style={{ color: "grey" }}> | </a>
                <a href="#" className="login">
                  Register
                </a>
                <a href="#" className="icon1">
                  <FaShoppingCart />
                </a>
              </div>
            </div>
          </nav>
          <motion.div
            className="body"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                style={{ color: "black" }}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Keywords"
                className="search"
              />
              <button type="submit">
                <IoIosSearch />
              </button>
            </form>
            <h5>We have a largest collection of courses</h5>
            <div className="contain4">
              <a href="#">
                View All Courses{" "}
                <MdOutlineKeyboardDoubleArrowRight
                  style={{ fontSize: "30px" }}
                />
              </a>
            </div>
          </motion.div>
          <div className="body1">
            <div className="contain5">
              <h2>332</h2>
              <span className="gap"></span>
              <h4>Courses</h4>
            </div>
            <div className="contain5">
              <h2>1403</h2>
              <span className="gap"></span>
              <h4>Members</h4>
            </div>
            <div className="contain5">
              <h2>60</h2>
              <span className="gap"></span>
              <h4>Authors</h4>
            </div>
            <div className="contain5">
              <h2>120</h2>
              <span className="gap"></span>
              <h4>Subjects</h4>
            </div>
          </div>
        </div>

        <div className="body2">
          <div className="contain6">
            <div>
              <img
                src="/vector22.svg"
                className="img-con"
                alt="Best Stimulations"
              />
            </div>
            <h5>Best Stimulations</h5>
          </div>
          <div className="contain6">
            <div>
              <img
                src="/vector19.svg"
                className="img-con"
                alt="Group Seminars"
              />
            </div>
            <h5>Group Seminars</h5>
          </div>
          <div className="contain6">
            <div>
              <img
                src="/vector20.svg"
                className="img-con"
                alt="Analysed Syllabus"
              />
            </div>
            <h5>Analysed Syllabus</h5>
          </div>
          <div className="contain6">
            <div>
              {" "}
              <img
                src="/vector21.svg"
                className="img-con"
                alt="Practical Training"
              />
            </div>
            <h5>Practical Training</h5>
          </div>
        </div>

        <div className="body3">
          <div className="library">
            <div className="contain7">
              <h2>Courses</h2>
              <span className="gap1"></span>
            </div>
            <div className="library1">
              <div className="arrow">
                <a href="#">
                  <FaArrowLeft className="arrow1" />
                </a>
                <a href="#">
                  <FaArrowRight className="arrow2" />
                </a>
              </div>
            </div>
          </div>
          <div className="library">
            <div className="contain7">
              <h3>About Courses</h3>
              <h6>
                Student Registration and Administration Nemo enim ipsam
                voluptatem quia voluptas sit atur aut odit aut fugit, sed quia
                consequuntur magni res eos qui ratione voluptatem sequi
                nesciunt.
              </h6>
              <h6>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised believable.
              </h6>
              <button>VIEW ALL COURSES</button>
            </div>
            <div className="library4">
              <div className="course1">
                <img src="Courses-listing-image-1.jpg" />
                <h2>Free</h2>
                <a href="#">Power Electronics</a>
                <div className="course2">
                  <h6>
                    <a href="#" style={{ marginTop: "20px" }}>
                      Education
                    </a>
                  </h6>
                  <h6> | 7 Curriculum </h6>
                </div>
                <span className="gap10"></span>
                <h6 style={{ color: "gray", fontSize: "15px" }}>
                  <FaRegClock />
                  1d 1h 50m
                </h6>
                <div className="number1">
                  <h6>
                    <a href="#">
                      <img src="star1.gif" />
                      <img src="star1.gif" />
                      <img src="star1.gif" />
                      <img src="star1.gif" />
                      <img src="star.gif" />
                    </a>{" "}
                    (4 votes, average: 4.00 out of 5)
                  </h6>
                </div>
              </div>
            </div>
            <div className="library5">
              <div className="course1">
                <img src="Courses-listing-image-2.jpg" />
                <h2>Free</h2>
                <a href="#">Introduction to Calculus</a>
                <div className="course2">
                  <h6>
                    <a href="#" style={{ marginTop: "20px" }}>
                      Mathematics
                    </a>
                  </h6>
                  <h6> | 5 Curriculum </h6>
                </div>
                <span className="gap10"></span>
                <div>
                  <h6 style={{ color: "gray", fontSize: "15px" }}>
                    <FaRegClock />
                    1m 22d 22h
                  </h6>
                  <div className="number1">
                    <h6>
                      <a href="#">
                        <img src="star1.gif" />
                        <img src="star1.gif" />
                        <img src="star1.gif" />
                        <img src="star1.gif" />
                        <img src="star2.gif" />
                      </a>{" "}
                      (6 votes, average: 4.67 out of 5)
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="body4">
          <div className="contain9">
            <img src="/lms-banner1.jpg" />
          </div>
          <div className="contain9">
            <img src="/lms-banner2.jpg" />
          </div>
          <div className="contain9">
            <img src="/lms-banner3.jpg" />
          </div>
        </div>

        <div className="site-blog">
          <h1>BLOG</h1>
          <span className="gap2"></span>
        </div>

        <div className="body5">
          <div>
            <div className="image1">
              <img src="blog12.jpg" />
            </div>
            <div className="inform">
              <div className="date1">
                <h4>30 Thu</h4>
                <a href="#">
                  <GrDocumentText style={{ width: "3.4vw" }} />
                </a>
              </div>
              <div className="name">
                <a href="#">
                  <h2>Contrary to popular</h2>
                </a>
                <div className="anh1">
                  <a href="#">dtmlsele</a>
                  <a style={{ color: "gray" }}> | </a>
                </div>
                <div className="anh2">
                  <a style={{ color: "gray" }}>
                    <FaBookmark />
                  </a>
                  <a href="#">blog</a>
                  <a style={{ color: "gray" }}>, </a>
                  <a href="#">chat</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="image1">
              <img src="blog7.jpg" />
            </div>
            <div className="inform">
              <div className="date1">
                <h4>30 Thu</h4>
                <a href="#">
                  <GrDocumentText style={{ width: "3.4vw" }} />
                </a>
              </div>
              <div className="name">
                <a href="#">
                  <h2>Omnis Voluptas as sumenda</h2>
                </a>
                <div className="anh1">
                  <a href="#">dtmlsele</a>
                  <a style={{ color: "gray" }}> | </a>
                </div>
                <div className="anh2">
                  <a style={{ color: "gray" }}>
                    <FaBookmark />
                  </a>
                  <a href="#">blog</a>
                  <a style={{ color: "gray" }}>, </a>
                  <a href="#">chat</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="image1">
              <img src="blog11.jpg" />
            </div>
            <div className="inform">
              <div className="date1">
                <h4>30 Thu</h4>
                <a href="#">
                  <GrDocumentText style={{ width: "3.4vw" }} />
                </a>
              </div>
              <div className="name">
                <a href="#">
                  <h2>Piece of classical</h2>
                </a>
                <div className="anh1">
                  <a href="#">dtmlsele</a>
                  <a style={{ color: "gray" }}> | </a>
                </div>
                <div className="anh2">
                  <a style={{ color: "gray" }}>
                    <FaBookmark />
                  </a>
                  <a href="#">blog</a>
                  <a style={{ color: "gray" }}>, </a>
                  <a href="#">chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="body6">
          <div className="contain10">
            <div className="six">
              <div className="language">
                <div>
                  <FaHtml5
                    style={{
                      backgroundColor: "orange",
                      width: "1.5vw",
                      height: "3vh",
                      color: "white",
                      borderRadius: "50%",
                      objectFit: "cover",
                      padding: "30px",
                    }}
                  />
                </div>
                <h5>HTML</h5>
              </div>
              <div className="language">
                <FaCss3
                  style={{
                    backgroundColor: "#005bb6",
                    width: "1.5vw",
                    height: "3vh",
                    color: "white",
                    borderRadius: "50%",
                    objectFit: "cover",
                    padding: "30px",
                  }}
                />
                <h5>CSS</h5>
              </div>
              <div className="language">
                <MdOutlineAndroid
                  style={{
                    backgroundColor: "green",
                    width: "1.5vw",
                    height: "3vh",
                    color: "white",
                    borderRadius: "50%",
                    objectFit: "cover",
                    padding: "30px",
                  }}
                />
                <h5>Android</h5>
              </div>
              <div className="language">
                <div>
                  <FaRegPaperPlane
                    style={{
                      backgroundColor: "#0091ff",
                      width: "1.5vw",
                      height: "3vh",
                      color: "white",
                      borderRadius: "50%",
                      objectFit: "cover",
                      padding: "30px",
                    }}
                  />
                </div>
                <h5>Photoshop</h5>
              </div>
              <div className="language">
                <div>
                  <FaRegPaperPlane
                    style={{
                      backgroundColor: "yellow",
                      width: "1.5vw",
                      height: "3vh",
                      color: "white",
                      borderRadius: "50%",
                      objectFit: "cover",
                      padding: "30px",
                    }}
                  />
                </div>
                <h5>JQuery</h5>
              </div>
              <div className="language">
                <FaRegPaperPlane
                  style={{
                    backgroundColor: "red",
                    width: "1.5vw",
                    height: "3vh",
                    color: "white",
                    borderRadius: "50%",
                    objectFit: "cover",
                    padding: "30px",
                  }}
                />
                <h5>Ruby</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="body7">
          <div className="contain11">
            <div>
              <h2>UPCOMING EVENTS</h2>
              <span className="gap3"></span>
            </div>
            <div className="tin">
              <img src="event.jpg" />
              <div className="tin01">
                <a href="#">Welcoming 25th Batch</a>
                <h5>
                  December 12, 2024 @ 8:00 am - December 13, 2025 @ 5:00 pm
                </h5>
                <h5>Peppard Hill, United States</h5>
              </div>
            </div>
          </div>
          <div className="arrow">
            <a href="#">
              <FaArrowLeft className="arrow1" />
            </a>
            <a href="#">
              <FaArrowRight className="arrow2" />
            </a>
          </div>
        </div>

        <div className="body8">
          <div className="contain12">
            <div className="email">
              <h2>GET IN TOUCH WITH US</h2>
              <h5>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which Ipsum slightly
                believable
              </h5>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  style={{ color: "black" }}
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Your Email Address"
                  className="search"
                />
                <button type="submit">Subcribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="body9">
          <div className="contain13">
            <h1>OUR PROCESS</h1>
            <span className="gap4"></span>
          </div>
          <div className="contain14">
            <div className="step">
              <div className="step1">
                <h2>Step 01</h2>
                <h3>Search for your course</h3>
                <span className="gap5"></span>
                <div className="dis1">
                  <h6>
                    Nemo enim ipsam voluptatem quia voluptas sit atur aut odit
                    aut fugit, sed quia consequuntur magni res.
                  </h6>
                  <h2>
                    <IoIosSearch />
                  </h2>
                </div>
              </div>
            </div>
            <span className="gap6"></span>
          </div>

          <div className="contain14">
            <span className="gap7"></span>
            <div className="step2">
              <div className="step1">
                <h2>Step 02</h2>
                <h3>Take a Sample Lesson</h3>
                <span className="gap5"></span>
                <div className="dis1">
                  <h2>
                    <HiMiniComputerDesktop />
                  </h2>
                  <h6>
                    Nemo enim ipsam voluptatem quia voluptas sit atur aut odit
                    aut fugit, sed quia consequuntur magni res.
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="contain14">
            <div className="step">
              <div className="step1">
                <h2>Step 03</h2>
                <h3>Preview the Syllabus</h3>
                <span className="gap5"></span>
                <div className="dis1">
                  <h6>
                    Nemo enim ipsam voluptatem quia voluptas sit atur aut odit
                    aut fugit, sed quia consequuntur magni res.
                  </h6>
                  <h2>
                    <HiOutlineDocumentSearch />
                  </h2>
                </div>
              </div>
            </div>
            <span className="gap6"></span>
          </div>

          <div className="contain14">
            <span className="gap7"></span>
            <div className="step2">
              <div className="step1">
                <h2>Step 04</h2>
                <h3>Purchase the Course</h3>
                <span className="gap5"></span>
                <div className="dis1">
                  <h2>
                    <MdOutlineLocalGroceryStore />
                  </h2>
                  <h6>
                    Nemo enim ipsam voluptatem quia voluptas sit atur aut odit
                    aut fugit, sed quia consequuntur magni res.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="body10">
          <div className="contain15">
            <a href="#">
              <img src="lms-logo.png" alt="LMS logo" />
            </a>
          </div>
          <div className="contain16">
            <div className="footer">
              <div className="contain17">
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
              <div className="contain18">
                <h2>Popular Courses</h2>
                <div className="A1">
                  <a href="#">Power Electronics</a>
                  <h4>Free</h4>
                  <span className="gap8"></span>
                </div>
                <div className="A1">
                  <a href="#">Introduce to Calculus</a>
                  <h4>Free</h4>
                  <span className="gap8"></span>
                </div>
                <div className="A1">
                  <a href="#">Basic Laws and Policies</a>
                  <h4>Free</h4>
                </div>
              </div>
              <div className="contain19">
                <h2>Quick Links</h2>
                <div className="quick">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    All Courses
                  </a>
                </div>
                <span className="gap9"></span>
                <div className="quick">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Summer Sessions
                  </a>
                </div>
                <span className="gap9"></span>
                <div className="quick">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Professional Courses
                  </a>
                </div>
                <span className="gap9"></span>
                <div className="quick">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Privacy Policy
                  </a>
                </div>
                <span className="gap9"></span>
                <div className="quick">
                  <a href="#">
                    <MdKeyboardArrowRight />
                    Terms of Use
                  </a>
                </div>
              </div>

              <div className="contain20">
                <h2>Contact Us</h2>
                <div className="contact">
                  <a href="#">
                    <IoPaperPlane style={{ color: "green" }} />
                    The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.
                  </a>
                </div>
                <span className="gap9"></span>
                <div className="contact">
                  <a href="#">
                    <FaPhoneAlt style={{ color: "green" }} />
                    +11 (2) 7654 2233
                  </a>
                </div>
                <span className="gap9"></span>
                <div className="contact">
                  <a href="#">
                    <MdHomeWork style={{ color: "green" }} />
                    +11 (5) 7654 2244
                  </a>
                </div>
                <span className="gap9"></span>
                <div className="contact">
                  <a href="#">
                    <MdEmail style={{ color: "green" }} />
                    lms@gmail.com
                  </a>
                </div>
              </div>

              <div className="contain21">
                <div className="end">
                  <h6>
                    Copyright © 2020 LMS Theme All Rights Reserved |{" "}
                    <a href="#">Design Themes</a>
                  </h6>
                  <div className="end1">
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

export default App;
