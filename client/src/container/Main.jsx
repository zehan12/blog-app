import { Fragment } from "react";
import Header from "../components/commaon/Header";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "../Route/AllRoutes";
import Footer from "../components/commaon/Footer";


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