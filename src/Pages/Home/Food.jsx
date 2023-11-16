import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Food = () => {
    const [data,setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:5000/food')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    })
    
    const handleClick = (id) => {
        navigate(`/food/${id}`)
    }

    const handleView = () =>{
        navigate('/availableFood')
    }

    return (
        <div className="">
            <div className="text-4xl text-center text-fuchsia-900 font-bold py-4">Available Food</div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    data.slice(0,6).map(data =>
                       <div key={data._id} className="">
                       <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='h-96' src={data.foodImage} alt="food" /></figure>
                        <div className="card-body">
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">Expire: {data.date}</div> 
                            <div className="badge badge-outline">Pickup: {data.pickup}</div>                             
                            </div>
                            <h2 className="card-title">
                            {data.foodName}
                            <div className="badge badge-secondary">{data.quantity}</div>
                            </h2>
                            <p>{data.additionalNotes}</p>                            
                            <div className="">
                                <h2 className="card-title">
                                Donate By:<br/> {data.donatorName}
                                <div className="badge badge-secondary">{data.donatorImage}</div>
                                </h2>
                                Email: {data.donatorEmail}
                            </div>
                            <button onClick={() => handleClick(data._id)} className='btn btn-primary '>View Details</button>
                        </div>
                        </div>
                       </div>
                    )
                   
                }
            </div>
            <div className="text-center py-4">
                <button onClick={handleView} className='btn btn-primary mx-auto '>See All Available Food</button>
            </div>
        </div>
    );
};

export default Food;