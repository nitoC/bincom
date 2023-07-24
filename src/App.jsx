import "./App.css";
import banner from "./assets/images/chionly.jpeg";
import distributed from "./assets/images/logo.png";
import utiva from "./assets/images/utiva.png";
import synergy from "./assets/images/synergy.png";
import chuks from "./assets/images/chuks.jpg";
import fch from "./assets/images/fch.jpg";
import chi from "./assets/images/chi.jpeg";
import chionly from "./assets/images/chionly.jpeg";
import suit from "./assets/images/suit.png";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function App() {
  const Ref = useRef();
  const [loading, setloading] = useState(true);
  const parent = useRef();
  const width = useRef();
  let count = useRef();
  const [transforms, settransforms] = useState(0);
  const styles = useMemo(() => {
    return {
      transform: "translate(" + transforms + "px)",
      transition: ".7s",
    };
  }, [transforms]);

  const handleTransform = useCallback(() => {
    console.log(count, "cc");
    console.log(width.current, "ssl");
    if (width.current - count.current > 0) {
      console.log(styles);
      settransforms(() => transforms + -332);
      count.current = count.current + 332;
      return;
    }
    console.log("wee");
    settransforms(0);
    count.current = parent.current.offsetWidth;
  }, [styles, transforms]);
  
  useEffect(() => {
    width.current = Ref.current.offsetWidth;
    console.log(width.current, "slide");
    console.log(count, "current");
    //console.log(width.current)
    setTimeout(() => {
      handleTransform();
    }, 3000);
  }, [count, handleTransform]);
  
  useEffect(() => {
    count.current = parent.current.offsetWidth;
    setloading(false)
  }, []);
 


  
  return (
    <div className="App">
      <div  className={loading === true?"loading":"notloading"}><h1>loading...</h1></div>
      <header className="App-header">&lt; chinedu &gt;</header>
      <div className="main">
        <div className="intro-wrapper">
          <div className="intro">
            <h1 className="intro-heading">My Name is Chinedu Mbaodoh</h1>
            <p className="intro-text">I am a fullstack javascript developer</p>
          </div>
          <div className="intro-image">
            <img src={banner} alt="banner" className="banner" />
            <div className="banner-style"></div>
          </div>
        </div>
        <div className="section section-2">
          <h2 className="section-heading">About Me</h2>
          <div className="section-2-content">
            <p className="section-2-text">
              I am a self taught web developer with 3 years of experience in
              developing in a wide range of programming languages. Knowledgeable
              of frontend, backend and I recently gaing a certification in aws
              cloud developmen. I have Strong creative and analytical skills.
              Team player with an eye for detail.
            </p>
          </div>
        </div>
        <div className="divider">
          <h1 className="divider-header">Hire Me !</h1>
        </div>
        <div className=" section section-3">
          <h2 className="section-heading">Skills</h2>
          <div className="section-3-content">
            <ul className="skills">
              <li>Web development</li>
              <li>Front-end web development</li>
              <li>backend Web development</li>
              <li>React/Next.js</li>
              <li>Node.js</li>
              <li>AWS</li>
              <li>C#</li>
            </ul>
          </div>
        </div>
        <div className=" section section-4">
          <h2 className="section-heading">Experience</h2>
          <div className="section-4-content">
            <div className="contents">
              <div className="each-content">
                <div className="logos">
                  <img
                    src={synergy}
                    alt="logos"
                    className="distributed logo-c-img"
                  />
                </div>
                <div className="roles">
                  <ul>
                    <li>ensured app performs to expection by performing unit and integration testing</li>
                    <li>created a secure authentication and authorisation api for users</li>
                  </ul>
                </div>
              </div>
              <div className="each-content">
                <div className="logos">
                  <img
                    src={distributed}
                    alt="logos"
                    className="synergy logo-c-img"
                  />
                </div>
                <div className="roles">
                  <ul>
                    <li>created technical problems for new intakes</li>
                    <li>created a text generator for the team</li>
                    <li>participated in technical review</li>
                  </ul>
                </div>
              </div>
              <div className="each-content">
                <div className="logos">
                  <img src={utiva} alt="logos" className="logo-c-img utiva" />
                </div>
                <div className="roles">
                  <ul>
                    <li>
                      created and managed server for managing current students
                      in the SME center
                    </li>
                    <li>tutored students on fundamentals of web development</li>
                  </ul>
                </div>
              </div>
                                </div>
          </div>
        </div>
        <div className="section section-5">
          <h2 className="section-heading">gallery</h2>
          <div className="content-wrapper">
            <div ref={parent} className="slide">
              <div ref={Ref} style={styles} className="section-5-content">
                <div className="image-wrapper">
                  <img src={chuks} alt="gallery" className="img1" />
                </div>
                <div className="image-wrapper">
                  <img src={fch} alt="gallery" className="img1" />
                </div>
                <div className="image-wrapper">
                  <img src={suit} alt="gallery" className="img1" />
                </div>
                <div className="image-wrapper">
                  <img src={chi} alt="gallery" className="img1" />
                </div>
                <div className="image-wrapper">
                  <img src={chionly} alt="gallery" className="img1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="contact">
            <h1 className="email">
              <span className="e-label">Email:  </span>daren2track@gmail.com
            </h1>
            <h1 className="mobile">
              <span className="m-label">Mobile:  </span>09032672139
            </h1>
          </div>
          <div className="copy">&copy; Chinedu_mbaodoh 2023</div>
        </div>
      </div>
    </div>
  );
}

export default App;
