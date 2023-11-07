import { Link, NavLink } from "react-router-dom";
import logo from '../../public/logo.png'



const Navbar = () => {
    const menu = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/availableFood">Available Food</NavLink></li>
    <li><NavLink to='/addFood'>Add Food</NavLink></li>
    <li><NavLink to='/manageFood'>Manage My Food</NavLink></li>
    <li><NavLink to='/requestFood'>My Food Request</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {menu}
            </ul>
            </div>
            <img className='w-24 rounded h-10' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {menu}
            </ul>
        </div>
        <div className="navbar-end">
            <Link to="/LogIn" className="btn">LogIn</Link>
        </div>
        </div>
    );
};

export default Navbar;