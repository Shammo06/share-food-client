import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';


const AddFood = () => {
    const {register, handleSubmit} = useForm();

    
    const onSubmit = data => console.log(data);

    const DonarInput =({label, name, value , readOnly}) =>(
        <div className="form-group ">
        <label className="input-label text-white">{label}</label>
        <input
            {...register(name, { required: true })} className="form-control input input-bordered w-80" readOnly ={readOnly} defaultValue={value} />
        </div>
    );

    const Input = ({ label, name }) => (
        <div className="form-group ">
          <label className="input-label text-white">
            {label}
          </label>
          <input {...register(name, { required: true })} className="form-control input input-bordered w-80" />
        </div>
      );
    Input.propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        readOnly: PropTypes.bool,
      };
    DonarInput.propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        readOnly: PropTypes.bool,
      };

    return (
        <div>
            <h1 className="text-center text-3xl font-bold">ADD FOOD</h1>
            <form className="grid grid-cols-2 pl-20 pt-8 mx-80 gap-3 bg-gray-600" onSubmit={handleSubmit(onSubmit)}>
                <Input label='Food Name' name='foodName'/>
                <Input label='Food Image' name='foodImage' />
                <Input label='Food Quantity' name='quantity' />
                <Input label='Pickup Location' name='pickup' />
                <Input label='Expired Date' name='date' />                
                <DonarInput label='Donator Name' name='donarName' value='Karim' readOnly={true}/>
                <DonarInput label='Donator Email' name='donarEmail' value='KarimEmail' readOnly={true}/>
                <DonarInput label='Donator Image' name='donarImage' value='KarimImage' readOnly={true}/>
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