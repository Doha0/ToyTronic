import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import useTitle from '../../../Hook/useTitle';


const SingleToy = () => {

    useTitle('SingleToy');

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
        <div className='grid grid-cols-1 justify-items-center mb-16'>
            <h2 className='header-title my-4'> </h2>
            <div className="card w-96 xl:w-4/12 bg-base-100 shadow-xl rounded-sm">
                <figure className='px-10 pt-10 '><img className='rounded-sm' src={picture_url} alt="Toy" /></figure>
                <div className="card-body">
                    <h2 className='header-title my-4'> {name} </h2>
                    <div className="card-actions justify-between justify-items-center card-title">
                        <div className="">
                            <StarRatings
                                rating={parseFloat(rating)}
                                starRatedColor="rgb(18, 213, 234)"
                                numberOfStars={5}
                                starDimension="22px"
                                starSpacing="2px"
                                name='rating'
                            />
                        </div>

                        <div className="badge badge-secondary">${price}</div>
                    </div>
                    <h2> {seller_name}</h2>
                    <h2>{seller_email}</h2>
                    <p>Available Items: {available_quantity} pieces</p>
                    <p>{description.substring(0, 300)}...</p>

                </div>
            </div>

        </div>
    );
};

export default SingleToy;