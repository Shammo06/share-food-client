import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import moment from 'moment';
import swal from "sweetalert";


const SingleFood = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext);
    const reqDate = moment().format('YYYY-MM-DD')
       
    const handleClick = (note,money) => {                 
        axios.post('http://localhost:5000/requestfood', {
           foodName:data.foodName,
           foodImage:data.foodImage,
           foodId : data._id,
           pickup: data.pickup,
           reqDate: reqDate,
           reqEmail:user.email,
           donation: data.donorEmail,
           donationName: data.donorName,
           status: data.status,
           money: money,
           notes: note,
           expire: data.date
          })
          .then(response  => {
            if(response.statusText==='OK'){
                swal("Successfully", "Your Food has been Added.", "success");
            }
          })
          .catch(error=> {
            console.log(error);
          }); 
    }    

    return (
        <div>
            <div className="md:hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                <h1 className="text-5xl font-bold text-fuchsia-900">Donator Information</h1>
                <p className="py-6">Donator Name: {data.donorName}<br/>Pickup Location: {data.pickup}</p>
                </div>
                <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                <figure><img className='h-96' src={data.foodImage} alt="food" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Expire Date: {data.date}</div> 
                                               
                    </div>
                    <h2 className="card-title">
                    {data.foodName}
                    <div className="badge badge-secondary">Quantity{data.quantity}</div>
                    </h2>                         
                    
                    <a href="#my_modal_8" className="btn btn-primary">Request Food</a>
                    
                    <div className="modal" id="my_modal_8">
                    <div className="modal-box">
                        <img src={data.foodImage} alt="" />
                        <h3 className="font-bold text-lg">Food Name: {data.foodName}</h3>
                        <h3 className=" text-lg">Food Id:{data._id}</h3>
                        <h3 className="font-bold text-lg">Donar: {data.donorName}</h3>
                        <h3 className=" text-lg">Donar Email: {data.donorEmail}</h3>
                        <h3 className=" text-lg">User Email: {user.email}</h3>
                        <h3 className=" text-lg">Request Date: {reqDate}</h3>
                        <h3 className=" text-lg">Location: {data.pickup}</h3>
                        <h3 className=" text-lg">Expire Date: {data.date}</h3>
                        <h3 className=" text-lg">Additional Notes: <input type="text" id='text' defaultValue={data.additionalNotes} className='border-2 border-red-300' /></h3>
                        <h3 className=" text-lg">Donate Money: <input type="text" id='money' defaultValue='00' className='border-2 border-red-300' /></h3>
                        
                        <div className="modal-action">
                        {/* eslint-disable-next-line no-undef */}
                        <a href="#" onClick={()=>handleClick(text.value, money.value)} className="btn">Request</a>
                        <a href="#" className="btn">Cancel</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleFood;