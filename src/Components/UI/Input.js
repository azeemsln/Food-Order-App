import React from "react";

const Input= React.forwardRef((props,ref)=> {
  return (
    <>
      <div className="flex mb-3">
        <label className="font-semibold " htmlFor={props.input.id}>{props.label}</label>
        <input className="w-10 ml-5 border rounded-md border-[#ccc]" {...props.input} ref={ref}/>
      </div>
    </>
  );
});

export default Input;
