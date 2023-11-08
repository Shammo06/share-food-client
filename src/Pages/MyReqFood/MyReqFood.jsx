import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";


const MyReqFood = () => {

    const {user} = useContext(AuthContext)
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/requestfood?reqEmail=aaaa@gmail.com')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Request error:', error);
            });
    }, []);

    console.log(data,user)

    return (
        <div>
            {
                data? 
                <><div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                      <th>Donar Name</th>
                      <th>Pickup</th>
                      <th>Expire</th>
                      <th>Request Date</th>
                      <th>Donation Amount</th>
                      <th>Status</th>
                      <th>Action</th>                      
                    </tr>
                  </thead>                 
                  <tbody>
                  {data.map(data =>
                    <tr key={data._id}>
                      <th>{data.donationName}</th>
                      <td>{data.pickup}</td>
                      <td>{data.expire}</td>
                      <td>{data.reqDate}</td>
                      <td>{data.money}</td>
                      <td>{data.status}</td>
                      <td>
                        <button className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button></td>
                    </tr>)}
                  </tbody>
                </table>
                </div></>
                
              :
              <p>No Food Request Available</p>

            }
            
        </div>
    );
};

export default MyReqFood;