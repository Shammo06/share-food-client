import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Food from "./Food";
import Help from "./Help";
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <div className='md:px-10 lg:px-20'>
            <Helmet>
                <title>Feeding World</title>
            </Helmet>
            <Banner></Banner>
            <Help></Help>
            <Food></Food>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;