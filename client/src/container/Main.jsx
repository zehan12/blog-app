import { Fragment } from "react";
import Header from "../components/common/Header";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "../Route/AllRoutes";
import Footer from "../components/common/Footer";


const Main = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                <AllRoutes />
                <Footer />
            </BrowserRouter>
        </Fragment>
    )
}

export default Main;