import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({ allToy }) => {

    const {
        _id,
        seller_name,
        name,
        sub_category,
        price,
        available_quantity } = allToy;


    return (


        <tr>
            <td></td>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>Quantity: {available_quantity}</td>
            <td ><Link to={`/singleToy/${_id}`} className='btn btn-info text-white'>View Details</Link></td>
        </tr>

    );
};

export default AllToysTable;