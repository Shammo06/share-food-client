import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';


const AvailableFood = () => {
    const navigate = useNavigate();
    const [value,setValue] = useState({value:''});
    const [sort,setSort] = useState({value:1}); 
    const [data,setData] = useState([])    
    
    useEffect(()=>{
        axios(`http://localhost:5000/food?foodName=${value?.value}&date=${sort?.value}`,{withCredentials:true})
        .then(res=> {
            const data = res.data
            const remaining = data.filter(data => data.status === 'Available');
            setData(remaining);
        })
    })

        const options = [
            { value: '', label: 'All Food' },
            { value: 'Biriyani', label: 'Biriyani' },
            { value: 'Mutton', label: 'Mutton' },
            { value: 'Chicken', label: 'Chicken' },
            { value: 'Curd', label: 'Curd' },
            { value: 'Khichuri', label: 'Khichuri' }
        ];
        const sorting = [
            { value: 1, label: 'Oldest' },
            { value: -1, label: 'Newest' },
        ];



        const handleClick = (id) => {
            navigate(`/food/${id}`)
        }

    return (
       <div className="">
            <div>
                <div className="w-80 gap-4">
                    <h1>Sort By Food Name</h1>
                    <Select className='w-44'
                    options={options}
                    defaultValue={value}
                    onChange={setValue}
                    placeholder={'All Food'} 
                    />
                    <h1>Sort By Date</h1>
                    <Select className='w-44'
                    options={sorting}
                    defaultValue={sort}
                    onChange={setSort}
                    placeholder={'sort'} 
                    />                
                </div>
               
            </div>
            <div className="text-center text-5xl text-fuchsia-900 font-bold py-4">
                {
                    value.value?<h1>{value.value}</h1>
                    :
                    <h1>All Food</h1>
                }
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2  md:px-20 lg:px-28">
                {
                    data ? data.map(data =>
                       <div key={data._id} className="">
                       <div className="card w-full md:w-96 bg-base-100 shadow-xl">
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
                                Donate By:<br/> {data.donorName}
                                <div className="w-14 rounded-full">
                                    <img src={data.donorImage} />
                                </div>
                                </h2>
                                Email: {data.donorEmail}
                            </div>
                            <button onClick={() => handleClick(data._id)} className='btn btn-primary'>View Details</button>
                        </div>
                        </div>
                       </div>
                    )
                    :
                    <h1>No food available</h1>
                }
            </div>
       </div>

    );
};

export default AvailableFood;