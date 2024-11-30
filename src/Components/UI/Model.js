import React from "react";
import ReactDOM from "react-dom";
function Backdrop(props) {
  return <div className="fixed mt-0 ml-0 w-[100%] h-[100vh] z-20 " onClick={props.onClose}></div>;
}

function ModelOverlay(props) {
  return (
    <div className="flex justify-center">
      <div
        className={`fixed mt-[20vh] w-[45%] bg-white p-[1rem] rounded-[14px] z-20  ${
          props.cartDetails ? 'animate-cart-appear' : 'animate-cart-close'
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
const portalElement = document.getElementById("overlays");

function Model(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModelOverlay cartDetails={props.cartDetails}>
          {props.children}
        </ModelOverlay>,
        portalElement
      )}
    </>
  );
}

export default Model;
