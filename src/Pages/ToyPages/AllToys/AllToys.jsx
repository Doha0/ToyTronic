import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';

const AllToys = () => {

    const allToys = useLoaderData();

    const {
        name,
        seller_name

    } = allToys;

    return (
        <div>
            <h2 className='header-title mt-10'>All Toys</h2>
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
                            allToys.map(allToy => <AllToysTable
                                key={allToy._id}
                                allToy={allToy}
                            ></AllToysTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;