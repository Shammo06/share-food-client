
const Newsletter = () => {
    return (
        <div className="lg:flex bg-yellow-600 text-emerald-100 justify-between lg:h-80 lg:px-24 lg:pt-28 pt-10">
        <div className="">
            <h1 className="text-4xl  font-semibold ">Subscribe To Our Newsletter</h1>
            <p>Stay in touch with us to find out more about news, program updates, and opportunities to support our work. Thanks to your support we are able to reach more than 10k people.</p>
        </div>
         <div className="flex">
            <input  type="text" placeholder="Email Address" className="h-14 input-primary w-96 rounded-l-lg pl-3" />
            <button  className="text-white h-14 bg-indigo-700 w-32 rounded-r-lg">Subscribe</button>
        </div>         
        </div>
    );
};

export default Newsletter;