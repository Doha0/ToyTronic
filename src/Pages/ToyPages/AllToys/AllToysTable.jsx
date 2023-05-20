import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AllToysTable = ({ allToy, idx }) => {

    const { user } = useContext(AuthContext);

    const {
        _id,
        seller_name,
        name,
        sub_category,
        price,
        available_quantity } = allToy;

    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'You have to log in first to view details',
            })
        }
    }


    return (


        <tr>
            <td>{idx + 1}</td>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>Quantity: {available_quantity}</td>
            <td ><Link onClick={handleViewDetails} to={`/singleToy/${_id}`} className='btn btn-info text-white'>View Details</Link></td>
        </tr>

    );
};

export default AllToysTable;