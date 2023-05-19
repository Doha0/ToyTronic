import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {

    const singleToy = useLoaderData();

    const {
        picture_url,
        name,
        seller_name,
        seller_email,
        price,
        rating,
        available_quantity,
        description


    } = singleToy;

    return (
        <div className='grid grid-cols-1 justify-items-center'>
            <h2 className='header-title my-10'> {name} </h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/J7Swmhp/Ha746c6461f6f48bdb4b459b54668b34cr-jpg-960x960.webp" alt="Toy" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {name} </h2>
                    <p>Seller: {seller_name} </p>
                    <p>Email: {seller_email} </p>
                    <p>Price: ${price} </p>
                    <p>Rating: {rating} </p>
                    <p>Available: {available_quantity} </p>
                    <p>Details: {description} </p>

                </div>
            </div>
        </div>
    );
};

export default SingleToy;