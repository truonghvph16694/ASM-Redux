import { Outlet } from "react-router-dom";
import Footer from "./layoutWebsite/Footer";
import Header from "./layoutWebsite/Header";

type Props = {};

const LayoutWebsite = (props: Props) => {
    return (
        <div>
            <header>{<Header />}</header>
            <main>
                <Outlet />
            </main>
            <footer>{<Footer />}</footer>
        </div>
    );
};

export default LayoutWebsite;
