import NavBar from "../persistent/navbar";

const MainLayout = (props) => {
    return (
        <div>
            <NavBar />
            <div
                className={`w-full h-full bg-${props.background} flex justify-center items-center mt-10`}>
                {props.innerJSX}
            </div>
        </div>

    );
};

MainLayout.defaultProps = {
    background: "isabelline",
};

export default MainLayout;
