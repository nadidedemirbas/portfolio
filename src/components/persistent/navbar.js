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
                    <span id={'hamburger-button'} className={`ml-3 md:hidden`}><a href={`#`} onClick={() => setIsOpen(true)}>|||</a></span>
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
            <div id={'sidebar'} className={`fixed left-0 top-0 h-full w-2/4 ${isOpen ? 'block' : 'hidden'} md:hidden bg-${props.background} transition ease-in-out`}>
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
    );
}

NavBar.defaultProps =
    {
        background: "cadet",
        shadow: "md",
        lightTheme: false,
    }
;
