import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { useParams } from "react-router-dom";
import swal from "sweetalert";


const Manage = () => {
    const {user} = useContext(AuthContext);   
    const [data,setData] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5000/requestfood?reqEmail=${user?.email}`,{withCredentials:true})
        .then(res=> {
            const data = res.data
            const remaining = data.filter(data => data.foodId === id);
            setData(remaining);
           
        })
      })

      const handleClick = (reqId,foodId) => {
        //for reqfood
        fetch(`http://localhost:5000/requestfood/${reqId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Delivered' })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)                
                if (res.modifiedCount > 0) {
                    const remaining = data.filter(data => data._id !== reqId);
                    const updated = data.find(data => data._id === reqId);
                    const newData = [updated, ...remaining];
                    setData(newData);
                    swal("Your food successfully marked as delivered");
                }
            })
        //for all food    
        fetch(`http://localhost:5000/food/${foodId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Delivered' })
        })
            .then(res => res.json())
            
    }

    return (
        <div>
           {
                data? 
                <><div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                      <th>Requester Name</th>
                      <th>Requester Image</th>
                      <th>Requester Email</th>
                      <th>Request Date</th>
                      <th>Status</th>
                      <th>Mark Delivered</th>                      
                    </tr>
                  </thead>                 
                  <tbody>
                  {data.map(data =>
                    <tr key={data._id}>
                      <th>{data.reqName}</th>
                      <td>
                        <div className="w-24 rounded-xl">
                            <img src={data.reqImage} />
                        </div>
                      </td>
                      <td>{data.reqEmail}</td>
                      <td>{data.reqDate}</td>
                      <td>{data.status}</td>
                      <td>
                        <button className="btn btn-primary" onClick={()=>handleClick(data._id,data.foodId)}>Confirm</button></td>
                    </tr>)}
                  </tbody>
                </table>
                </div></>
                
              :
              <p>No Food Request Available for this food</p>

            }          
        </div>
    );
};

export default Manage;