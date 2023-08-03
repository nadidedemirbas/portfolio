import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/main";
import MainBackMp4 from "./../../img/mainback.mp4";
import Footer from "../persistent/footer";

const Iletisim = (props) => {
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
                        } transition-all duration-500 bg-opacity-60 lg:w-full z-20 absolute w-screen h-full lg:h-2/3 flex flex-col items-center justify-center pt-36 lg:pt-0 px-3 lg:rounded-xl shadow-lg`}>
                        <div
                            className={`w-full pl-2 lg:pl-10 lg:w-full flex flex-col items-center justify-center`}>
                                <form className="px-10 w-full" action={'https://api.web3forms.com/submit'} method={'post'}>
                                    <input type="hidden" name="access_key" value="770e44f2-4bde-4a70-a662-7a39fec6e37a" />
                                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                                    <div className="mb-4">
                                        <label className={`block text-sm font-bold mb-2 text-${
                                            lightTheme ? "independence" : "nadide1"
                                        }`}
                                               htmlFor="username">
                                            İsminiz
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="isim" type="text"/>
                                    </div>
                                    <div className="mb-6">
                                        <label className={`block text-gray-700 text-sm font-bold mb-2 text-${
                                            lightTheme ? "independence" : "nadide1"
                                        }`}
                                               htmlFor="password">
                                            E-Mail Adresiniz
                                        </label>
                                        <input
                                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="email" type="email"/>
                                    </div>
                                    <div className="mb-6">
                                        <label className={`block text-gray-700 text-sm font-bold mb-2 text-${
                                            lightTheme ? "independence" : "nadide1"
                                        }`}
                                               htmlFor="password">
                                            Notlarınız
                                        </label>
                                        <textarea
                                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                            name="notlar" rows={'4'}></textarea>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit">
                                            Gönder
                                        </button>
                                    </div>
                                </form>

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

export default Iletisim;
