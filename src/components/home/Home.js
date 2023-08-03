import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/main";
import MainBackMp4 from "./../../img/mainback.mp4";
import Menu from "../partials/Menu";
import Footer from "../persistent/footer";

const Home = (props) => {
  const [dotVisible, setDotVisible] = useState(true);
  const [lightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    let intervalId = setInterval(() => setDotVisible(!dotVisible), 500);
    return () => {
      clearInterval(intervalId);
    };
  }, [dotVisible]);

  const switchTheme = () => {
    setLightTheme(!lightTheme);
  };

  const home = (
    <main>
      <div
        className={`overflow-hidden absolute top-0 left-0 bg-mainback-img lg:bg-none bg-bottom bg-no-repeat lg:bg-cover h-screen w-screen flex justify-center`}>
        <video
          autoPlay
          loop
          muted
          className={`fixed content-center h-screen w-screen object-fill top-0 hidden lg:block`}>
          <source type="video/mp4" src={MainBackMp4} />
        </video>

        <div
          className={`container relative mx-auto h-full flex items-start lg:items-center justify-center`}>
          <div
            className={`bg-${
              lightTheme ? "isabelline" : "black"
            } transition-all duration-500 bg-opacity-60 lg:w-full z-20 absolute w-screen h-full lg:h-2/3 flex flex-col items-center justify-start lg:justify-center pt-36 lg:pt-0 px-3 lg:rounded-xl shadow-lg`}>
            <div
              className={`w-full pl-2 lg:pl-0 lg:w-full flex flex-col items-center lg:items-center lg:justify-center`}>

              <span
                className={`transition-all duration-300 text-6xl lg:text-7xl text-${
                  lightTheme ? "cadet" : "isabelline"
                } mb-3`}>
                FRONT-END
              </span>
              <span
                  className={`transition-all duration-300 text-4xl lg:text-5xl lg:ml-0.5 text-${
                      lightTheme ? "independence" : "silverpink"
                  } mb-4`}>
                DEVELOPER
                <span
                    className={`absolute text-${
                        lightTheme ? "independence" : "silverpink"
                    } text-4xl lg:text-5xl inline ${
                        !dotVisible ? "hidden" : "inline"
                    }`}>
                  |
                </span>
              </span>
              <Menu lightTheme={lightTheme} contactButton={true} />
            </div>
          </div>
          <Footer lightTheme={lightTheme} switchTheme={switchTheme} />
        </div>
      </div>
    </main>
  );
  return (
    <MainLayout
      innerJSX={home}
      background={`opacity-0`}
      shadow={`none`}
      lightTheme={lightTheme}
    />
  );
};

export default Home;
