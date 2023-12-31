import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";


const MyReqFood = () => {

    const {user} = useContext(AuthContext)
    const [data, setData] = useState([]);

    useEffect(()=>{
      axios.get(`https://share-food-omega.vercel.app/requestfood?reqEmail=${user?.email}`,{withCredentials:true})
      .then(data=> setData(data.data))
    })

    const handleClick = (id,status) =>{
      if(status==="Available"){
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover your request",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            fetch(`https://share-food-omega.vercel.app/requestfood/${id}`, {
            method: 'DELETE'
             })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    swal("Deleted!", "Your product has been removed.", "success");                    
                    const remaining = data.filter(item => item._id !== id);
                    setData(remaining);
                    
                }
            })
          } 
        });
        
      }
      else{
        swal("Already Delivered", "Cannot Remove.", "error");   
      }
      
    }

    

    return (
        <div>
            <Helmet>
                <title>Feeding World | Request Food</title>
            </Helmet>
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
                        <button onClick={()=>handleClick(data._id,data.status)} className="btn btn-circle btn-outline">
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