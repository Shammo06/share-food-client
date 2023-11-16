import Banner from "./Banner";
import Food from "./Food";
import Help from "./Help";
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <div className='px-5 lg:px-20'>
            <Banner></Banner>
            <Help></Help>
            <Food></Food>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;