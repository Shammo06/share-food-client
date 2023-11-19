import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import auth from "../../firebase/firebase.config";
import swal from "sweetalert";
import axios from "axios";


const LogIn = () => {
    
    const provider = new GoogleAuthProvider();
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
   

    const handleSubmit = e =>{       
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;        
        logIn(email,password)
        .then(result=>{
            console.log(result)
            const user = {email}
            axios.post('http://localhost:5000/jwt',user,{withCredentials:true} )
            .then(res => console.log(res.data))
            navigate(location.state ? location.state : '/')
                     
        })
        .catch((error)=>{
            swal(`${error.message}`)
        })
    }

    const handleClick = () => {
        signInWithPopup(auth,provider)
        .then(result =>{
            console.log(result.user.email)
            const email = result.user.email
            const user = {email}
            axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
            .then(res => console.log(res.data))
            navigate(location.state ? location.state : '/')
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div className="py-10 bg-purple-200 ">
            
        <form onSubmit={handleSubmit} className=" w-80 md:w-96 bg-stone-200 mx-auto card-body border-2 bg- border-green-500">
            <div className="form-control">
            <span className="text-2xl text-center font-semibold text-green-500">Please Log In</span>
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>
            <div className="form-control mt-4 ">
            <button className="btn btn-warning bg-indigo-600 rounded-full  text-purple-50">Log In</button>
            </div>
            <div  className="form-control mt-2">
            <button onClick={handleClick} className="btn btn-warning bg-indigo-600 rounded-full  text-purple-50">Log In With Google</button>
            </div>
            <div className="mb-6 mx-auto">
            <p>Do not Have Account? <Link className="text-blue-500 font-bold" to='/registration'>Go Register</Link></p> 
            </div>             
        </form>
        </div>
    );
};

export default LogIn;