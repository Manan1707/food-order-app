import React from "react";
import ReactDOM from "react-dom";

import classes from "./Model.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onBack}></div>;
}

function Modeloverlay(props) {
  return <div className={classes.modal}>{props.children}</div>;
}

function Model(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onBack={props.onBackDrop} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <Modeloverlay>{props.children}</Modeloverlay>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
}

export default Model;
