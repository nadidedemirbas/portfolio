import {FiMoon, FiSun} from "react-icons/fi";
import React from "react";

export default function Footer(props) {
  return (
    <div>
      <div
          onClick={props.switchTheme}
          className={`transition-all duration-300 z-30 cursor-pointer absolute bottom-5 self-justify-end right-0 h-5 w-10 rounded-lg hover:bg-${
              props.lightTheme ? "independenceHover" : "isabellineHover"
          } bg-${props.lightTheme ? "cadet" : "isabelline"} text-xs text-${
              props.lightTheme ? "isabelline" : "cadet"
          } flex justify-center items-center z-30`}>
        {props.lightTheme ? <FiMoon /> : <FiSun />}
      </div>
      <span
          className={`hidden md:block absolute bottom-5 self-justify-center text-${
              props.lightTheme ? "independence" : "silverpink"
          } lg:text-silverpink text-xs z-30`}>
            © 2023
          </span>
    </div>
  );
}
