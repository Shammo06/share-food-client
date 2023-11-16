
import React, { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useTable } from 'react-table';
import swal from 'sweetalert';

const ManageFood = () => {
    //const navigate = useNavigate();
    const [data,setData] = useState([]) 
   
    useEffect(()=>{
        fetch(`http://localhost:5000/food?foodName=Chicken`)
        .then(res => res.json())
        .then(data=> setData(data))
    })

    

    const handleDelete = (data) =>{
      console.log(data)        
        fetch(`http://localhost:5000/food/${id}`, {
            method: 'DELETE'
             })
            .then(res => res.json())
            .then(data => {
                console.log(data._id)
                if (data.deletedCount > 0) {
                    swal("Deleted!", "Your product has been removed.", "success");
                    
                    const remaining = data.filter(item => item._id !== id);
                    setData(remaining);
                    
                }
            })
        }
    

    const handleEdit = (id) =>{
      console.log(id)
      //navigate(`manage/${data._id}`)
    }

const columns = React.useMemo(
    () => [
      {
        Header: 'Food Name',
        accessor: 'foodName',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
      },
      {
        Header: 'Pickup Location',
        accessor: 'pickup',
      },
      {
        Header: 'Additional Notes',
        accessor: 'additionalNotes',
      },
      {
        Header: 'Donor Name',
        accessor: 'donorName',
      },
      {
        Header: 'Donor Email',
        accessor: 'donorEmail',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Edit',
        accessor: '_id',
        Cell: ({row}) => (
            <button onClick={()=>handleEdit(row.values._id)} className="btn btn-circle btn-outline">
            Edit
            </button>
        ),
      },
      {
        Header: 'Delete',
        accessor: 'delete',
        Cell: ({row}) => (
            <button onClick={()=> handleDelete (row.values._id)} className="btn btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        ),
      },
    ],
    []
  );


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={data._id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={data._id} {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={data._id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td key={data._id} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};


export default ManageFood;

