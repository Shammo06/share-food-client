import { useLoaderData } from "react-router-dom";

const Manage = () => {
    const data = useLoaderData();

    return (
        <div>
            <h1>{data.money}</h1>            
        </div>
    );
};

export default Manage;