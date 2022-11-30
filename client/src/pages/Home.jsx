import { Fragment } from "react"
import Banner from "../components/common/Banner"
import HeroSection from "../components/heroSection";

const Home = ( ) => {
    return(
        <Fragment>
            <h1>Home Component</h1>
            <Banner />
            <HeroSection />
        </Fragment>
    )
}

export default Home;