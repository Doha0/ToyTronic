import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import MyToysTable from './MyToysTable';
import Swal from 'sweetalert2';
import useTitle from '../../../Hook/useTitle';

const MyToys = () => {

    useTitle('MyToys');

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);



    const url = `https://toy-tronic-server.vercel.app/myToy/${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, []);

    const handleFilter = (value) => {
        fetch(`https://toy-tronic-server.vercel.app/sort?email=${user?.email}&sort=${value}`)
            .then((res) => res.json())
            .then((data) => setToys(data));
    };


    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-tronic-server.vercel.app/toys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id)
                            setToys(remaining);
                        }
                    })
            }
        })
    }



    return (
        <div>

            <h2 className='header-title mt-14'>My Toys</h2>


            <div className='grid justify-end'>
                <select
                    className="select select-info w-36"
                    defaultValue="filter"
                    onChange={(event) => handleFilter(event.target.value)}
                >
                    <option value="filter" disabled>
                        Filter By
                    </option>
                    <option value="-1">Price: High</option>
                    <option value="1">Price: Low</option>
                </select>
            </div>

            <div className="overflow-x-auto my-10">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Serial NO.</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, idx) => <MyToysTable
                                key={toy._id}
                                toy={toy}
                                idx={idx}
                                handleDelete={handleDelete}
                            ></MyToysTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;