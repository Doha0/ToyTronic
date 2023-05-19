import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import MyToysTable from './MyToysTable';

const MyToys = () => {

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

    return (
        <div>

            <h2 className='header-title mt-14'>My Toys</h2>
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
                            ></MyToysTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;