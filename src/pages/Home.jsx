import React from "react";
import mainPic from "../assets/Home/main-pic.png";
import shape1 from "../assets/shapes/shape1.png";
import shape2 from "../assets/shapes/shape2.svg";
import monitor from "../assets/Home/big-monitor.png";
import creative from "../assets/Home/creative.png";
import developer from "../assets/Home/developer.png";
import service from "../assets/Home/main.png";
import flower from "../assets/Home/flower.png";
import smallMonitor from "../assets/Home/small-monitor.png";
import table2 from "../assets/Home/table2.png";
import circle from "../assets/Home/circle.png";
import shape3 from "../assets/shapes/shape3.svg";
import triangle from "../assets/shapes/triangle.svg";
import shape5 from "../assets/shapes/shape5.png";
import Clients from "./Clients.jsx";
import "./Home.css";
function Home() {
  return (
    <>
      <div>
        <div>
          <div className="main-banner4">
            <div className="main-banner-row">
              <div className="main-banner-col1">
                <h1 class="aos-init aos-animate" style={{ color: "#0e314c" }}>
                  IT Management Service & Support for Your Business.
                </h1>
                <p class="aos-init aos-animate" style={{ color: "#6084a4" }}>
                  Great Innovations Ahead..!
                  <br />A company with a vision to innovate, build and deliver
                  amazing software solutions.
                </p>
              </div>
              <div className="main-banner-col2">
                <img
                  alt="mainPic"
                  // loading="lazy"
                  width="580"
                  height="560"
                  // decoding="async"
                  // data-nimg="1"
                  // class="animate_animated animaterollIn animate_delay-0.1"
                  src={mainPic}
                />
              </div>
            </div>
          </div>
          <div class="shape1">
            <img alt="shape" width="202" height="202" src={shape1} />
          </div>
          <div class="shape2 rotateme2">
            <img alt="shape" width="22" height="22" src={shape2} />
          </div>
          <div class="shape3">
            <img
              alt="shape"
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              data-nimg="1"
              src={shape3}
            />
          </div>
          <div class="shape4">
            <img
              alt="shape"
              loading="lazy"
              width="21"
              height="20"
              decoding="async"
              data-nimg="1"
              src={triangle}
            />
          </div>
          <div class="shape5">
            <img
              alt="shape"
              loading="lazy"
              width="182"
              height="146"
              decoding="async"
              data-nimg="1"
              src={shape5}
            />
          </div>
          <div class="shape6 rotateme2">
            <img
              alt="shape"
              loading="lazy"
              width="21"
              height="20"
              decoding="async"
              data-nimg="1"
              src={triangle}
            />
          </div>
          <div class="shape8 rotateme2">
            <img
              alt="shape"
              loading="lazy"
              width="22"
              height="22"
              decoding="async"
              data-nimg="1"
              src={shape2}
            />
          </div>
        </div>
        {/* ************************************************* */}
        {/* **************************************** */}
        <div className="boxes-area2">
          <div className="box-col">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h3>
              <a className="card-heading">Software Development</a>
            </h3>
            <p className="card-desc">
              We provide expertise in full front to back program delivery using
              Scrum, Lean, Agile, Hybrid methodologies, and continuous
              integration. We establish efficient processes and a robust
              structure for communication and implementation.
            </p>
          </div>
          <div className="box-col bg-f78acb">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>
              <a className="card-heading">Resource Hiring & Outsourcing</a>
            </h3>
            <p className="card-desc">
              Technology expertise coupled with award-winning UX skills and
              innovative design solutions makes us the leading web development
              company in India—and helps us build world-class websites,
              cutting-edge applications, and digital platforms.
            </p>
          </div>
          <div className="box-col bg-c679e3">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>
              <a className="card-heading">PR & Brand Management</a>
            </h3>
            <p className="card-desc">
              SEO, SEM, PPC, SMO, content marketing, influencer partnerships,
              and social media networking, etc., comprise a perfect digital
              marketing strategy. We offer unique and innovative digital
              marketing solutions that'd load your inbox with inquiries.
            </p>
          </div>
          <div className="box-col bg-eb6b3d">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
            </div>
            <h3>
              <a className="card-heading">Training & Placement</a>
            </h3>
            <p className="card-desc">
              Any part of a design that affects the user is UX design. At
              StackMentalist, we offer mobile UX design, UX design for SAAS,
              Product UX design for startups and more, while ensuring that the
              end user enjoys a great value-added experience.
            </p>
          </div>
        </div>
        {/* *********************************************** */}
        <div class="features-area pt-80 pb-50 bg-f7fafd">
          <div class="container4">
            <div class="section-title">
              <h2>About Stackmentalist</h2>
              <div class="bar"></div>
            </div>

            <div className="row4">
              <div class="col-lg-66 col-md-66">
                <div class="single-features ">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <h3>
                    <a>Innovation-driven Solutions</a>
                  </h3>
                  <p className="section-desc">
                    StackMentalist is committed to staying at the forefront of
                    technological innovation. We continually explore emerging
                    technologies and methodologies to ensure that our clients
                    receive solutions that are not only current but also
                    future-proof.
                  </p>
                </div>
                <div
                  class="single-features aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div class="icon bg-c679e3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </div>
                  <h3>
                    <a>Customer-Centric Approach</a>
                  </h3>
                  <p className="section-desc">
                    Our approach revolves around understanding the unique needs
                    and challenges of each client. By prioritizing customer
                    satisfaction and actively listening to feedback, we tailor
                    our solutions to exceed expectations and deliver tangible
                    results.
                  </p>
                </div>
                <div class="single-features">
                  <div class="icon bg-eb6b3d">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <h3>
                    <a>Expert Team</a>
                  </h3>
                  <p className="section-desc">
                    At StackMentalist, we pride ourselves on our team of experts
                    who bring diverse skills and experiences to the table. From
                    seasoned developers to creative designers and strategic
                    consultants, we have the talent pool to tackle projects of
                    any scale or complexity.
                  </p>
                </div>
              </div>

              <div class="col-lg-66 col-md-66">
                <div class="single-features">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <h3>
                    <a>Commitment to Quality</a>
                  </h3>
                  <p className="section-desc">
                    Quality is ingrained in everything we do. We adhere to
                    rigorous quality standards throughout the development
                    lifecycle, ensuring that our solutions are robust, scalable,
                    maintainable, future-proof, user-centric, and exceed client
                    expectations.
                  </p>
                </div>
                <div class="single-features ">
                  <div class="icon bg-c679e3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </div>
                  <h3>
                    <a>Transparent Communication</a>
                  </h3>
                  <p className="section-desc">
                    We believe in fostering open and transparent communication
                    with our clients at every stage of the project. From initial
                    discussions to regular progress updates and post-launch
                    support, we keep our clients informed and involved every
                    step of the way.
                  </p>
                </div>
                <div class="single-features">
                  <div class="icon bg-eb6b3d">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </div>
                  <h3>
                    <a>Global Reach, Local Presence</a>
                  </h3>
                  <p className="section-desc">
                    While we have a global footprint with clients spanning
                    across various industries and geographies, we maintain a
                    strong local presence to better understand regional nuances
                    and provide personalized support to our clients.
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* ****************************************************** */}
        <div className="main">
          <div className="col1 services-left-image2">
            {/* <div class="col-lg-6 col-md-12 services-left-image"> */}
            <img
              alt="big-monitor"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
              loading="lazy"
              width="252"
              height="149"
              decoding="async"
              data-nimg="1"
              src={monitor}
              class="aos-init aos-animate"
            />
            <img
              alt="creative"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="500"
              data-aos-once="true"
              loading="lazy"
              width="88"
              height="94"
              decoding="async"
              data-nimg="1"
              src={creative}
              class="aos-init aos-animate"
            />
            <img
              alt="developer"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
              loading="lazy"
              width="149"
              height="230"
              decoding="async"
              data-nimg="1"
              src={developer}
              class="aos-init aos-animate"
            />
            <img
              data-wow-delay="0.6s"
              alt="flower-top"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="500"
              data-aos-once="true"
              loading="lazy"
              width="127"
              height="203"
              decoding="async"
              data-nimg="1"
              src={flower}
              class="aos-init aos-animate"
            />
            <img
              alt="small-monitor"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
              loading="lazy"
              width="109"
              height="106"
              decoding="async"
              data-nimg="1"
              src={smallMonitor}
              class="aos-init aos-animate"
            />
            {/* <img alt="small-top" data-aos="fade-up" data-aos-delay="350" data-aos-duration="500" data-aos-once="true" loading="lazy" width="56" height="82" decoding="async" data-nimg="1" src="/_next/static/media/small-top.509c69c5.png" class="aos-init aos-animate"/> */}
            <img
              alt="table"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
              loading="lazy"
              width="337"
              height="138"
              decoding="async"
              data-nimg="1"
              src={table2}
              class="aos-init aos-animate"
            />
            {/* <img alt="target" data-aos="fade-up" data-aos-delay="450" data-aos-duration="500" data-aos-once="true" loading="lazy" width="91" height="96" decoding="async" data-nimg="1" src="/_next/static/media/target.65f374e8.png" class="aos-init aos-animate"/> */}

            <img
              alt="shape"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
              loading="lazy"
              width="524"
              height="518"
              decoding="async"
              data-nimg="1"
              class="bg-image rotateme aos-init aos-animate"
              src={circle}
            />
            <img
              alt="main-pic"
              data-aos="fade-up"
              data-aos-delay="550"
              data-aos-duration="500"
              data-aos-once="true"
              loading="lazy"
              width="418"
              height="378"
              decoding="async"
              data-nimg="1"
              src={service}
            ></img>
            {/*<img alt="main-pic" data-aos="fade-up" data-aos-delay="550" data-aos-duration="500" data-aos-once="true" loading="lazy" width="418" height="378" decoding="async" data-nimg="1" src="/_next/static/media/service-left-main-pic.62057aa2.png" class="aos-init aos-animate"/> */}
            {/* </div> */}
          </div>
          <div className="col2">
            {/* <div className="head"> */}
            <div class="section-title">
              <h2>Why we are different</h2>
              <div class="bar"></div>
              {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
            </div>
            {/* </div> */}
            <div className="points">
              <div className="points-col1">
                <div class="box2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>{" "}
                  Innovative Approach
                </div>
                <div class="box2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>{" "}
                  Client-Centric Focus
                </div>
                <div class="box2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>{" "}
                  Cutting-Edge Technologies
                </div>
              </div>
              <div className="points-col2">
                <div class="box2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>{" "}
                  Agile Development Methodology
                </div>

                <div class="box2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>{" "}
                  Robust Support and Maintenance
                </div>
                <div class="box2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>{" "}
                  Transparent Communication
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ****************************************************************** */}
        <div
          style={{
            display: "flex",
            flexDirection: "column ",
            justifyContent: "center",
            marginTop: "3rem",
            alignItems: "center",
            color: "#0e314c",
          }}
        >
          <h2 className="client-text">Our Clients and Partners</h2>
          <div className="client-div"
           
          >
            <Clients />
            {/* <div class="swiper swiper-initialized swiper-horizontal partner-slides swiper-backface-hidden">
          <div class="swiper-wrapper" >
           
           
             <div class="swiper-slide swiper-slide-prev" style={{width: "151.5px", marginRight: "30px"}}>
              <div class="single-ml-partner">
                <a href="#" target="_blank">
                  <img src={partner1} alt="image"/>
                  <img src={partner1hover} alt="image"/>
                </a>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-active" style={{width: "151.5px", marginRight: "30px"}}>
              <div class="single-ml-partner">
                <a href="#" target="_blank">
                  <img src={partner2hover} alt="image"/>
                  <img src={partner2} alt="image"/>
                </a>
                </div>
            </div>
            <div class="swiper-slide swiper-slide-next" style={{width: "151.5px", marginRight: "30px"}}>
              <div class="single-ml-partner">
                <a href="#" target="_blank">
                  <img src={partner3hover} alt="image"/>
                  <img src={partner3} alt="image"/>
                </a>
                </div>
                </div>
                <div class="swiper-slide" style={{width: "151.5px", marginRight: "30px"}}>
                <div class="single-ml-partner">
                <a href="#" target="_blank">
                <img src={partner4hover} alt="image"/>
                <img src={partner4} alt="image"/>
              </a>
            </div>
          </div>
          <div class="swiper-slide swiper-slide-prev" style={{width: "151.5px", marginRight: "30px"}}>
              <div class="single-ml-partner">
                <a href="#" target="_blank">
                  <img src={partner1} alt="image"/>
                  <img src={partner1hover} alt="image"/>
                </a>
              </div>
            </div>
            <div class="swiper-slide swiper-slide-active" style={{width: "151.5px", marginRight: "30px"}}>
              <div class="single-ml-partner">
                <a href="#" target="_blank">
                  <img src={partner2hover} alt="image"/>
                  <img src={partner2} alt="image"/>
                </a>
                </div>
            </div>
          
        </div>
       
        </div> */}
          </div>
        </div>
        {/* ******************************************************************* */}
      </div>
    </>
  );
}
export default Home;