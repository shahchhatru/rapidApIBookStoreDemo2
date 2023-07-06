"use client";

import Image from "next/image";



const CustomButton = ({ isDisabled, btnType, containerStyles, textStyles, title, handleClick }) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <div className="justify-between items-center">
    <span className={`flex-1 ${textStyles}`}>{title}</span>
   
      
    </div>
   
   
  </button>
);

export default CustomButton;