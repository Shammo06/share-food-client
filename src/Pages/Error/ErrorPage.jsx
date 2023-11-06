import { Link } from "react-router-dom";
import error from '../../../public/error.jpg'

const ErrorPage = () => {
    return (
        <div className="text-center">
            <img className="w-2/4 py-10 mx-auto" src={error} alt="" />   
            <Link to='/'><button className="btn btn-warning w-40">Go Home</button></Link>         
        </div>
    );
};

export default ErrorPage;