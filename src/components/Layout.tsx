import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
    children: JSX.Element
}

function Layout({children} : Props) {
    return (  
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;
