import React from "react";
import "./work.css";
import project from "./project1.jpg";

const Work = () => {
  return (
    <div
      className="work"
      style={{ display: "flex", flexDirection: "column", marginTop: "45px" }}
    >
      <img className="img" src={project} max-width="100%" height="auto" />

      <iframe
        className="iframe a"
        src="https://netfix-clone-reactjs.web.app/"
        width="100%"
        height="550px"
      />
      <iframe
        className="iframe b"
        src="https://amaznclone-ea763.web.app/"
        width="100%"
        height="550px"
      />
      <iframe
        className="iframe c"
        src="https://teslareactclone.herokuapp.com/"
        width="90%"
        height="550px"
        scrolling="yes"
        frameborder="10px"
        marginwidth="0"
        marginheight="0"
      />
      <iframe
        className="iframe d"
        src="https://6059548f3f0f1a245e25fb98--adarshairbnbclonemern.netlify.app/"
        width="90%"
        height="550px"
        scrolling="yes"
      />
    </div>
  );
};

export default Work;
