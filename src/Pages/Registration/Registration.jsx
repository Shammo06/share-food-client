import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { Helmet } from "react-helmet-async";


const Registration = () => {
    
    const {createUser,logOut} = useContext(AuthContext);
    const navigate = useNavigate();
        
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        if (password.length < 6) {
            swal({
                text: "Password should be at least 6 letter",
                timer: 2000
              });
            return
        }
        if (!/[A-Z]/.test(password)) {
            swal({
                text: "Password must contain at least one capital letter",
                timer: 2000
              })
            return
        }
        // if (!/[!@#$%^&*()_+\-={};':"\\|,.<>/?]+/.test(password)){
        //     swal({
        //         text: "Password must contain at least one special character",
        //         timer: 2000
        //       })
        //     return
        // }    
  
        createUser(email,password)
        .then(result => {
            updateProfile(result.user, {
                displayName: name,
                photoURL:photo
            })
            logOut()
            swal('Successfully Registered Please Log In')
            navigate('/LogIn')      
                           
        })
        .catch((error) => {
            const message= error.message
            swal(message)
        })


    }
    return (        
        <div className="py-10 bg-purple-200 ">
            <Helmet>
                <title>Feeding World | Registration</title>
            </Helmet>
        <form onSubmit={handleSubmit} className="card-body w-80 md:w-96 bg-stone-200 mx-auto border-2 bg- border-green-500">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Name</span>
            </label>
            <input type="text" name='name' placeholder="write your Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Photo</span>
            </label>
            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
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
            
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-warning rounded-full bg-indigo-600  text-purple-50">Register</button>
            </div>           
            <div className="mb-6 px-9">
            <p>Already Register? <Link className="text-blue-500 font-bold" to='/logIn'>Go LogIn</Link></p> 
            </div>             
        </form>
        </div>
    );
};

export default Registration;