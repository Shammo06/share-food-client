
const Help = () => {
    return (
        <div className=''>
            <h1 className='text-4xl text-center font-bold py-8'>How to help</h1>
            <div className="flex h-80 text-center gap-3">
                <div className="bg-yellow-600 pt-24 text-white">
                    <h1 className='pb-4 text-3xl font-semibold'>DONATE</h1>
                    <p className=''>We rescue nearly 2 million pounds of food each year from supermarkets, universities, corporate dining halls, wholesalers, farms, and other sources. Interested in donating?</p>
                </div>
                <div className="bg-green-600 pt-24 text-white">
                    <h1 className='pb-4 text-3xl font-semibold' >VOLUNTEER</h1>
                    <p>Help fight hunger in our community! We currently have in-person volunteer opportunities for individuals, families, and groups available.</p>
                </div>
            </div>
        </div>
    );
};

export default Help;