import { useLoaderData } from "react-router-dom";

const Manage = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            <h1>{data.money}</h1>            
        </div>
    );
};

export default Manage;