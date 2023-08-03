export default function ContactButton() {
    return (
        <div
            className={`w-full flex md:self-end justify-center lg:justify-center mt-5`}
            style={{ flexBasis: "100%" }}>
            <a href={'/iletisim'}
                className={`transition-all duration-300 rounded-md bg-independence focus:outline-none py-2 px-4 text-isabelline hover:bg-independenceHover z-40 cursor-pointer text-base text-bold`}>
                BANA ULAŞIN
            </a>
        </div>
    )
}