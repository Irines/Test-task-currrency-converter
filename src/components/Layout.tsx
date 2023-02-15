import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ ChildComponent }: { ChildComponent: FC<{}> }) {
    return (  
        <>
            <Header/>
            <ChildComponent />
            <Footer/>
        </>
    );
}

export default Layout;
