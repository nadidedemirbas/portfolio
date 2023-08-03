import {FaLinkedinIn, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function NavBar(props) {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className={`fixed top-0 left-0 w-full bg-${props.background} z-50 shadow-${props.shadow}}`}>
            <div
                className={`container py-6 mx-auto flex justify-start items-center transparent`}>
                <div
                    className={`text-xl lg:text-silverpink text-${
                        props.lightTheme ? "cadet" : "silverpink"
                    } pb-1 mr-5 font-nadide ml-2 md:ml-0`}>
                    Nadide Demirbas
                    <span id={'hamburger-button'} className={`ml-3 lg:hidden`}><a href={`#`} onClick={() => setIsOpen(true)}>|||</a></span>
                </div>
                <div className={`hidden md:flex`}>
                    <Link to='/'>
                        <div className={`text-isabelline ml-5 text-sm`}>Ana Sayfa</div>
                    </Link>
                    <Link to='/hakkimda'>
                        <div className={`text-isabelline ml-5 text-sm`}>Hakkımda</div>
                    </Link>
                    <Link to='/isler'>
                        <div className={`text-isabelline ml-5 text-sm`}>Yaptığım İşler</div>
                    </Link>
                    <Link to='/iletisim'>
                        <div className={`text-isabelline ml-5 text-sm`}>İletişim</div>
                    </Link>
                </div>

                <div className={`text-indigo-200 ml-5 text-sm flex-grow mr-2 md:mr-0`}>
                    <div className={`flex justify-end w-full`}>
                        <button
                            className={`w-8 h-8 bg-twitter rounded-full pl-2 text-white`}>
                            <FaTwitter/>
                        </button>
                        <button
                            className={`w-8 h-8 bg-linkedin rounded-full pl-2 ml-2 text-white`}>
                            <FaLinkedinIn/>
                        </button>
                    </div>
                </div>
            </div>
            <div id={'sidebar'} className={`fixed left-0 top-0 h-full w-2/4 ${isOpen ? 'block' : 'hidden'} lg:hidden bg-${props.background} transition ease-in-out`}>
                <a href="#" className={'p-3'} onClick={() => setIsOpen(false)}>
                    <div id={'exit-button'} className={`absolute top-2 right-2 p-3 text-2xl text-isabelline`}>X</div>
                </a>
                <div id={`mobile-menu`} className={`px-5 pt-10`}>
                    <ul>
                        <li className={'mt-5 mb-5'}><a href={'/'} className={`text-isabelline text-xl`}>Ana Sayfa</a></li>
                        <li className={'mb-5'}><a href={'/hakkimda'} className={`text-isabelline text-xl`}>Hakkımda</a></li>
                        <li className={'mb-5'}><a href={'/isler'} className={`text-isabelline text-xl`}>Yaptığım İşler</a></li>
                        <li className={'mb-5'}><a href={'/iletisim'} className={`text-isabelline text-xl`}>İletişim</a></li>
                    </ul>
                </div>
            </div>
        </div>

        // <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 fixed top-0 z-30 w-full">
        //     <div
        //         className={`container mx-auto flex justify-start items-center transparent`}>
        //         <div className="flex items-center flex-shrink-0 text-white mr-6">
        //             <div
        //                 className={`text-xl lg:text-silverpink text-${
        //                     props.lightTheme ? "cadet" : "silverpink"
        //                 } pb-1 mr-5 font-nadide ml-2 md:ml-0`}>
        //                 Nadide Demirbas
        //             </div>
        //         </div>
        //         <div className="block lg:hidden">
        //             <button
        //                 className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        //                 <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        //                     <title>Menu</title>
        //                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        //                 </svg>
        //             </button>
        //         </div>
        //         <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        //             <div className="text-sm lg:flex-grow">
        //                 <Link to="/"
        //                       className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        //                     Ana Sayfa
        //                 </Link>
        //                 <Link to="/hakkimda"
        //                       className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        //                     Hakkımda
        //                 </Link>
        //                 <Link to="/isler"
        //                       className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        //                     Yaptığım İşler
        //                 </Link>
        //                 <Link to="/iletisim"
        //                       className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        //                     İletişim
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </nav>

        // <div className={'w-full fixed top-0 z-30 '}>
        //     <nav className="flex items-center justify-between flex-wrap p-6 container mx-auto">
        //         <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        //             Nadide Demirbaş
        //         </div>
        //         <div className="block lg:hidden">
        //             <button
        //                 onClick={() => setIsOpen(!isOpen)}
        //                 className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        //             >
        //                 <svg
        //                     className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
        //                     viewBox="0 0 20 20"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                 >
        //                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        //                 </svg>
        //                 <svg
        //                     className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
        //                     viewBox="0 0 20 20"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                 >
        //                     <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        //                 </svg>
        //             </button>
        //         </div>
        //         <div
        //             className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        //         >
        //             <div className="text-sm lg:flex-grow">
        //                 <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
        //                     First Link
        //                 </a>
        //                 <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
        //                     Second Link
        //                 </a>
        //                 <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
        //                     Third Link
        //                 </a>
        //                 <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
        //                     Fourth Link
        //                 </a>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    );
}

NavBar.defaultProps =
    {
        background: "cadet",
        shadow: "md",
        lightTheme: false,
    }
;
