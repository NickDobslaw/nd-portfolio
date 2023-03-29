import React, {useState, useEffect} from "react";
import Lottie from "lottie-react";
import Gradient from "../images/gradient.json";
import "./WebApp.css";
import NDlogo from "../images/ND-logo.png";
import NDlogoTrans from "../images/ND-logo-trans.png";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function WebApp() {
  return (
    <>
      <div className="bodyWrapper">
        <div className="gradient-bg">
          <Lottie animationData={Gradient} loop={true} />
        </div>
        <div className="wrapper">
          <div className="sidebar">
            <li className="textCell">
              <a
                onClick={() => {
                  document
                    .getElementById("page1")
                    .scrollIntoView({behavior: "smooth"});
                }}
                class="active"
              >
                <h3 class="item">PHOTOS</h3>
              </a>
            </li>
            <li className="textCell">
              <a
                onClick={() => {
                  document
                    .getElementById("page2")
                    .scrollIntoView({behavior: "smooth"});
                }}
                class="active"
              >
                <h3 class="item">ORGANIZATIONS</h3>
              </a>
            </li>
            <li className="logoCell">
              <a
                onClick={() => {
                  document
                    .getElementById("home")
                    .scrollIntoView({behavior: "smooth"});
                }}
                class="active"
              >
                <img src={NDlogoTrans} alt="sidebar_picture" />
              </a>
            </li>
            <li className="textCell">
              <a
                onClick={() => {
                  document
                    .getElementById("page3")
                    .scrollIntoView({behavior: "smooth"});
                }}
                class="active"
              >
                <h3 class="item">ABOUT</h3>
              </a>
            </li>
            <li className="textCell">
              <a
                onClick={() => {
                  document
                    .getElementById("page4")
                    .scrollIntoView({behavior: "smooth"});
                }}
                class="active"
              >
                <h3 class="item">LINKS</h3>
              </a>
            </li>
          </div>
        </div>

        <div className="page-wrap">
          <div className="homepage" id="home">
            <FadeInSection key="homepageFade">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </FadeInSection>
          </div>
          <div className="content">
            <div id="page1">
              <FadeInSection key="page1Fade">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>PHOTOS</h1>
                <br />

                <br />
                <br />
                <br />
              </FadeInSection>
            </div>

            <div id="page2">
              <FadeInSection key="page2Fade">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>ORGANIZATIONS</h1>
                <br />

                <br />
                <br />
                <br />
              </FadeInSection>
            </div>
            <div className="aboutPage" id="page3">
              <FadeInSection key="page3Fade">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>ABOUT</h1>

                <br />
                <br />
                <br />
              </FadeInSection>
            </div>
            <div className="links" id="page4">
              <FadeInSection key="page4Fade">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>LINKS</h1>
                <br />
                <br />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
