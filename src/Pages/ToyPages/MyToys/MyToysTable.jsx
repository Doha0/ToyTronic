import React from 'react';
import { Link } from 'react-router-dom';

const MyToysTable = ({ toy, idx }) => {
    const {
        _id,
        seller_name,
        name,
        sub_category,
        price,
        available_quantity } = toy;
    return (
        <tr>
            <td>{idx + 1}</td>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>Quantity: {available_quantity}</td>
            <td ><Link to={`/update/${_id}`} className='btn btn-info text-white'>Update</Link></td>
            <td>Delete</td>
        </tr>
    );
};

export default MyToysTable;