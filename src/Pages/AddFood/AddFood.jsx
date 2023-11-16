/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import axios from "axios";
import swal from "sweetalert";


const AddFood = () => {
    const {register, handleSubmit,reset} = useForm();
    const {user} = useContext(AuthContext);
    
    const onSubmit = data => {
      axios.post('http://localhost:5000/food', data)
       .then(response  => {
         if(response.statusText==='OK'){
             swal("Successfully", "Your Food has been Added.", "success");
             reset();
         }
       })
       .catch(error=> {
         console.log(error);
       }); 
    }

    
    const DonarInput =({label, name, value , readOnly}) =>(
        <div className="form-group ">
        <label className="input-label text-white">{label}</label>
        <input
            {...register(name, { required: true })} className="form-control input input-bordered w-80" readOnly ={readOnly} defaultValue={value} />
        </div>
    );

    const Input = ({ label, name, placeholder }) => (
        <div className="form-group ">
          <label className="input-label text-white">
            {label}
          </label>
          <input {...register(name, { required: true })} className="form-control input input-bordered w-80" placeholder={placeholder} />
        </div>
      );
   
    return (
        <div>            
            <form className="md:grid grid-cols-2 md:pl-20 py-8 lg:mx-80 gap-3 bg-gray-600" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="col-span-2 mx-auto w-1/2 text-3xl font-bold text-white">ADD FOOD</h1>
                <Input label='Food Name' name='foodName' placeholder="Food Name"/>
                <Input label='Food Image' name='foodImage' placeholder="Image URL" />
                <Input label='Food Quantity' name='quantity' placeholder="Quantity" />
                <Input label='Pickup Location' name='pickup' placeholder="Location" />
                <Input label='Expired Date' name='date' placeholder="YYYY-MM-DD" />                                
                <DonarInput label='Donator Name' name='donorName' value={user.displayName} readOnly={true}/>
                <DonarInput label='Donator Email' name='donorEmail' value={user.email} readOnly={true}/>
                <DonarInput label='Donator Image' name='donorImage' value={user.photoURL} readOnly={true}/>
                <DonarInput label='Status' name='status' value='Available' readOnly={true}/>
                <div className="form-group col-span-2">
                    <label className="input-label text-white">Additional Notes</label>
                    <input {...register('additionalNotes', { required: true })} className="form-control input input-bordered h-20 w-3/4" />
                </div>                               
                <button className="btn btn-primary col-span-2 mx-auto w-1/2">ADD</button>                
            </form>
        </div>
    );
    
};


export default AddFood;