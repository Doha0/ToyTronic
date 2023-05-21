import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const SubCategory = () => {

    const { user } = useContext(AuthContext);

    const [category, setCategory] = useState([]);
    const [selectedTab, setSelectedTab] = useState('Camera_Drones');

    useEffect(() => {
        fetch(`https://toy-tronic-server.vercel.app/sub/${selectedTab}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setCategory(data)
            )
    }, [selectedTab]);

    const handleTabSelect = (id) => {
        setSelectedTab(id);
    };

    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'You have to log in first to view details',
            })
        }
    }


    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleTabSelect('Camera_Drones')}>Camera Drones</Tab>
                    <Tab onClick={() => handleTabSelect('RC_Robots')}>RC Robots</Tab>
                    <Tab onClick={() => handleTabSelect('RC_Cars')}>RC Cars</Tab>
                </TabList>

                <TabPanel>
                    {/* <h2>Camera Drones</h2> */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 mt-10'>
                        {
                            category.map(drones => (
                                <div key={drones._id} className="card w-8/12 lg:w-7/12 bg-base-100 shadow-xl rounded-sm">
                                    <figure><img className='rounded-sm' src={drones.picture_url} alt="Toy" /></figure>
                                    <div className="card-body">
                                        <h2 className='font-semibold text-center text-2xl my-4'> {drones.name} </h2>
                                        <div className="card-actions justify-between justify-items-center card-title">
                                            <div className="mb-4">
                                                <StarRatings
                                                    rating={parseFloat(drones.rating)}
                                                    starRatedColor="rgb(18, 213, 234)"
                                                    numberOfStars={5}
                                                    starDimension="22px"
                                                    starSpacing="2px"
                                                    name='rating'
                                                />
                                            </div>
                                            <div className="badge badge-secondary">${drones.price}</div>
                                        </div>

                                        <Link onClick={handleViewDetails} to={`/singleToy/${drones._id}`} className='btn btn-info text-white mt-2'>View Details</Link>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    {/* <h2>RC Robots</h2> */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 mt-10'>
                        {
                            category.map(drones => (
                                <div key={drones._id} className="card w-8/12 lg:w-7/12 bg-base-100 shadow-xl rounded-sm">
                                    <figure><img className='rounded-sm' src={drones.picture_url} alt="Toy" /></figure>
                                    <div className="card-body">
                                        <h2 className='font-semibold text-center text-2xl my-4'> {drones.name} </h2>
                                        <div className="card-actions justify-between justify-items-center card-title">
                                            <div className="mb-4">
                                                <StarRatings
                                                    rating={parseFloat(drones.rating)}
                                                    starRatedColor="rgb(18, 213, 234)"
                                                    numberOfStars={5}
                                                    starDimension="22px"
                                                    starSpacing="2px"
                                                    name='rating'
                                                />
                                            </div>
                                            <div className="badge badge-secondary">${drones.price}</div>
                                        </div>

                                        <Link onClick={handleViewDetails} to={`/singleToy/${drones._id}`} className='btn btn-info text-white mt-2'>View Details</Link>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    {/* <h2>RC Cars</h2> */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 mt-10'>
                        {
                            category.map(drones => (
                                <div key={drones._id} className="card w-8/12 lg:w-7/12 bg-base-100 shadow-xl rounded-sm">
                                    <figure><img className='rounded-sm' src={drones.picture_url} alt="Toy" /></figure>
                                    <div className="card-body">
                                        <h2 className='font-semibold text-center text-2xl my-4'> {drones.name} </h2>
                                        <div className="card-actions justify-between justify-items-center card-title">
                                            <div className="mb-4">
                                                <StarRatings
                                                    rating={parseFloat(drones.rating)}
                                                    starRatedColor="rgb(18, 213, 234)"
                                                    numberOfStars={5}
                                                    starDimension="22px"
                                                    starSpacing="2px"
                                                    name='rating'
                                                />
                                            </div>
                                            <div className="badge badge-secondary">${drones.price}</div>
                                        </div>
                                        <Link onClick={handleViewDetails} to={`/singleToy/${drones._id}`} className='btn btn-info text-white mt-2'>View Details</Link>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;