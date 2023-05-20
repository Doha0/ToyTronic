import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';

const AllToys = () => {

    const allToys = useLoaderData();

    const [toys, setToys] = useState(allToys);
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        fetch(`https://toy-tronic-server.vercel.app/search/${searchValue}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    };



    return (
        <div>
            <h2 className='header-title mt-14'>All Toys</h2>

            <form onSubmit={handleSearch} className='flex items-center justify-center my-10'>
                <input
                    onChange={(event) => setSearchValue(event.target.value)}
                    type="text"
                    name="search"
                    className="input input-bordered input-info h-12 w-2/12"
                    required
                    placeholder="Search Toys"
                />
                <input className="btn btn-info text-white ml-2" type="submit" value="Search" />
            </form>

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
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((allToy, idx) => <AllToysTable
                                key={allToy._id}
                                allToy={allToy}
                                idx={idx}
                            ></AllToysTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;