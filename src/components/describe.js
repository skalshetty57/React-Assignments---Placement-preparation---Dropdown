import React from "react";

function Description(props) {
  return (
    <>
      <div id={props.id + "-name"}>
        <div id={props.id + "-title"}>{props.name}</div>
        <div id={props.id + "-description"}>{props.desc}</div>
      </div>
      <br />
    </>
  );
}
export default Description;
