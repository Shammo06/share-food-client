import picture from '../../../public/pexels-rachel-claire-4997810.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${picture})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="mx-auto">
            <h1 className="mb-5 text-5xl font-bold">DO NOT WASTE FOOD</h1>
            <p className="mb-5">Share your food, Remove hunger from Earth</p>
            <button className="btn btn-primary">Donate Food</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;