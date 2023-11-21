import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const ProductsCard = ({ products }) => {
    const { _id, picture_url, name, description, rating, price } = products;

    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'You have to log in first to view details',
            })
        }
    }

    return (
        <>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">

                <figure>
                    <img
                        src={picture_url}
                        alt="toy image"
                        className="w-fit object-cover"
                    />
                </figure>

                <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                            {name}
                        </h3>
                        <div className='flex justify-between items-center'>
                            <p className="badge badge-secondary"> ${price}</p>
                            <StarRatings
                                rating={parseFloat(rating)}
                                starRatedColor="rgb(18, 213, 234)"
                                numberOfStars={5}
                                starDimension="22px"
                                starSpacing="2px"
                                name='rating'
                            />
                        </div>
                    </header>
                    <p className='text-slate-800'>
                        {description.substring(0, 100)}...
                    </p>
                </div>
                {/*  <!-- Action base sized basic button --> */}
                <div className="flex justify-end p-6 pt-0">
                    <Link onClick={handleViewDetails} to={`/singleToy/${_id}`} className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-sky-500 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <button>View Details</button>
                    </Link>
                </div>
            </div>
            {/*<!-- End E-commerce card --> */}
        </>
    )
};

export default ProductsCard;