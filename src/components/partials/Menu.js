import ContactButton from "./ContactButton";

export default function Menu(props) {

    const lightTheme = props.lightTheme

    return (
        <div className={`flex flex-col`}>
            <div className="flex flex-col lg:flex-row mb-1">
                <a href="/">
                    <span
                        className={`transition-all duration-300 text-${
                            lightTheme ? "cadet" : "isabelline"
                        } text-base mb-1 lg:mb-0 lg:text-sm hover:text-isabelline text-center lg:text-right leading-tight hover:bg-independence py-1 px-2 rounded-md cursor-pointer hover:shadow-sm`}>
                    Ana Sayfa
                  </span>
                </a>
                <span
                    className={`font-base text-base text-${
                        lightTheme ? "cadet" : "isabelline"
                    } hidden lg:block mx-1 rounded-sm`}>
                    |
                  </span>
                <a href="/hakkimda">
                    <span
                        className={`transition-all duration-300 text-${
                            lightTheme ? "independence" : "silverpink"
                        } text-base mb-1 lg:mb-0 lg:text-sm hover:text-isabelline text-center lg:text-right leading-tight hover:bg-independence py-1 px-2 rounded-md cursor-pointer hover:shadow-sm`}>
                    Hakkımda
                  </span>
                </a>

                <span
                    className={`font-base text-base text-${
                        lightTheme ? "cadet" : "isabelline"
                    } hidden lg:block mx-1 rounded-sm`}>
                    |
                  </span>
                <a href="/isler">
                    <span
                        className={`transition-all duration-300 text-${
                            lightTheme ? "independence" : "silverpink"
                        } text-base mb-1 lg:mb-0 lg:text-sm hover:text-isabelline text-center lg:text-right leading-tight hover:bg-independence py-1 px-2 rounded-md cursor-pointer hover:shadow-sm`}>
                    Yaptığım İşler
                  </span>
                </a>

                <span
                    className={`font-base text-base text-${
                        lightTheme ? "cadet" : "isabelline"
                    } hidden lg:block mx-1 rounded-sm`}>
                    |
                  </span>
                <a href="/iletisim">
                    <span
                        className={`transition-all duration-300 text-${
                            lightTheme ? "independence" : "silverpink"
                        } text-base mb-1 lg:mb-0 lg:text-sm hover:text-isabelline text-center lg:text-right leading-tight hover:bg-independence py-1 px-2 rounded-md cursor-pointer hover:shadow-sm`}>
                    İletişim
                </span>
                </a>

            </div>
            {props.contactButton ? <ContactButton /> : ''}
        </div>
    )
}