import React, { useEffect, useState } from "react";
import "./about.css";

const About = () => {
  const [show, handleShow] = useState(false);
  const [wid, setwidth] = useState(10);

  return (
    <div className="about">
      <div className="top">
        <h1>I </h1> <h1>Design </h1> <h1>And </h1>
        <h1>Build </h1>
        <h1>Digital </h1>
        <h1>Stuffs </h1>
      </div>
      <div className="aboutme">
        <h2>
          {" "}
          Hello. I'm Adarsh.I'm a human with knowledge of React, MongoDB, Node,
          ExpressJS and also some design disciplines{" "}
        </h2>
        <div className="socialmedia">
          message me @
          <a
            className="socialmediaa"
            href="https://www.facebook.com/adarsh.murali.3979/"
          >
            <p>Facebook</p>
          </a>
          <a
            className="socialmediaa"
            href="https://www.instagram.com/adarshgupta.jpg/"
          >
            <p>Instagram</p>
          </a>
          <a className="socialmediaa" href="https://github.com/adarsh-gupta101">
            <p>Github</p>
          </a>
          <a
            className="socialmediaa"
            href="https://www.linkedin.com/in/adarsh-m-088393168/"
          >
            <p>Linkedin</p>
          </a>
        </div>
        <h3 className="" style={{ margin: "5px" }}>
          You can also call me Frontend-Developer,Freelancer,Music lover,Space
          lover,Animal lover,advisor
        </h3>
        <p className="P_text">
          I want to define myself by the work I love to do.Skill's can be
          developed, Character can be built & not everything is easy . I love to
          learn new stuffs and also loves to teach
        </p>

        <p className="P_text">
          I believe Humanity will end in another planet and not in our
          Earth.Coding and Space are my favourite things.{" "}
        </p>
        <p className="P_text">
          Want to travel around the world and see the so called{" "}
          <b>Mother Earth </b>
        </p>
        <p className="P_text">
          The First step is always the difficult one and it took one year to
          understand that coding is just pattern recognising and not learning
          each and every syntax
        </p>
        <p className="P_text">
          I'm a BTech Student,But a certificate does not define the real "Me"{" "}
        </p>
        <p className="P_text">
          Curiosity is the reason how I reach here & Iam stepping out of comfort
          zone.Alas,
          <br /> <i>A glass is Never Empty</i>
        </p>
      </div>
    </div>
  );
};

export default About;
