import React from "react";
import Typewriter from "typewriter-effect";

const style = {
  width: "300px",
  margin: "0 auto",
  display: "grid",
  fontSize: "40px",
  fontWeight: "800",
  textAlign: "center",
};

const Message = (props) => (
  <h1 name={"msg"} style={style}>
    <Typewriter
      options={{
        strings: [`${props.value}!`],
        autoStart: true,
        loop: true,
      }}
    />
  </h1>
);

export default Message;
