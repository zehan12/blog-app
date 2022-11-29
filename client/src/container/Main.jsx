import { Fragment } from "react";
import Header from "../component/Header";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "../Route/AllRoutes";
import Footer from "../component/Footer";


const Main = ( ) => {
    return(
        <Fragment>
            <BrowserRouter>
            <Header />
              <AllRoutes />
              <Footer />
            </BrowserRouter>
            {/* <AllRoutes /> */}
            {/* <footer /> */}
        </Fragment>
    )
}

export default Main;