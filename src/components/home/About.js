import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/main";
import MainBackMp4 from "./../../img/mainback.mp4";
import Footer from "../persistent/footer";

const About = (props) => {
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
            className={`p-1 lg:p-5 bg-${
              lightTheme ? "isabelline" : "black"
            } transition-all duration-500 bg-opacity-60 lg:w-full z-20 absolute w-screen h-full lg:h-2/3 flex flex-col items-center justify-start lg:justify-center pt-36 lg:pt-0 px-3 lg:rounded-xl shadow-lg`}>
            <div
              className={`w-full pl-2 lg:pl-0 lg:w-full flex flex-col items-center lg:items-center lg:justify-center overflow-y-auto`}>

              <div className={`mb-3 lg:mb-10 text-6xl lg:text-7xl text-${
                  lightTheme ? "independence" : "silverpink"
              } `}>Merhaba!</div>
              <div className={`p-10 text-xl text-${
                  lightTheme ? "independence" : "nadide1"
              }`}>
                Ben Nadide. Kullanıcı deneyimlerini etkileyici ve modern bir şekilde tasarlıyorum.
                <br/><br/>
                Her zaman güncel trendleri takip ediyor, duyarlı ve erişilebilir web siteleri oluşturmak için modern web standartlarına sadık kalıyorum. Kullanıcı dostu arayüzlerinizi optimize etmek, kod kalitesini en üst düzeye çıkarmak ve etkili işbirliği ile projenizin başarıya ulaşmasını sağlamak için uzmanlığımdan yararlanabilirsiniz.
                <br/><br/>
                Web dünyasının hızla değişen doğasının farkındayım ve sürekli kendimi güncel tutarak en son yenilikleri projenize entegre etmek için çalışıyorum.
                <br/><br/>
                Hemen benimle <a className={`text-${lightTheme ? 'independence' : 'silverpink'}`} href="/iletisim">iletişime geçin</a> ve projenizin büyüleyici bir front-end deneyimine dönüşmesine yardımcı olmak için birlikte çalışalım!
              </div>

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

export default About;
