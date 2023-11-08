import axios from "axios";
import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const data = useLoaderData();
    
    const handleClick = (note,money) => {  
        console.log(data.pickup,note,money)              
        axios.post('http://localhost:5000/requestfood', {
           pickup: data.pickup,
           reqDate: '2023-11-8',
           reqEmail:'aabaa@gmail.com',
           donation: data.donator.email,
           donationName: data.donator.name,
           status: data.status,
           money: money,
           notes:note
          })
          .then(response  => {
            console.log(response);
          })
          .catch(error=> {
            console.log(error);
          }); 
    }    

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                <h1 className="text-5xl font-bold">Donator Information</h1>
                <p className="py-6">Donator Name:{data.donator.name}<br/>Location: {data.pickup}</p>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-96' src={data.foodImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Expire-date: {data.date}</div> 
                                               
                    </div>
                    <h2 className="card-title">
                    {data.foodName}
                    <div className="badge badge-secondary">{data.quantity}</div>
                    </h2>                         
                    
                    <a href="#my_modal_8" className="btn btn-primary">Request Food</a>
                    {/* Put this part before </body> tag */}
                    <div className="modal" id="my_modal_8">
                    <div className="modal-box">
                        <img src={data.foodImage} alt="" />
                        <h3 className="font-bold text-lg">Food Name: {data.foodName}</h3>
                        <h3 className=" text-lg">Food Id:{data._id}</h3>
                        <h3 className="font-bold text-lg">Donar: {data.donator.name}</h3>
                        <h3 className=" text-lg">Donar Email: {data.donator.email}</h3>
                        <h3 className=" text-lg">User Email: {data.donator.email}</h3>
                        <h3 className=" text-lg">Date: current Date</h3>
                        <h3 className=" text-lg">Location: {data.pickup}</h3>
                        <h3 className=" text-lg">Expire: {data.date}</h3>
                        <h3 className=" text-lg">Additional Notes: <input type="text" id='text' placeholder={data.additionalNotes} /></h3>
                        <h3 className=" text-lg">Donate Money: <input type="text" id='money' defaultValue='00' placeholder='Donate Money' /></h3>
                        
                        <div className="modal-action">
                        <a href="#" onClick={()=>handleClick(text.value,money.value)} className="btn">Request</a>
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