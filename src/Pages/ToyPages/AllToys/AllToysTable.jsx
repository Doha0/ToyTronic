import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({ allToy }) => {

    const {

        seller_name,
        name,
        sub_category,
        price,
        available_quantity } = allToy;


    return (


        <tr>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>Quantity: {available_quantity}</td>
            <td ><Link to='/' className='btn btn-info text-white'>View Details</Link></td>
        </tr>

    );
};

export default AllToysTable;