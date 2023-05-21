import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://toy-tronic-server.vercel.app/gallery')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 300,
            easing: 'ease-in-out',
        });
    }, []);


    return (
        <div className='section-margin'>
            <h2 className='header-title'>Camera Drones</h2>
            <p className='paragraph-title'>Capture your moments from above</p>

            <div className='overflow-x-hidden'>
                {data &&
                    data.map(db => <div
                        key={db._id}
                        className={`flex justify-evenly ${db.way === 'flex-row' ? 'flex-row' : 'flex-row-reverse'}`}
                        data-aos={`${db.animate}`}
                    >

                        <div className='w-1/2'>
                            <img src={db.image} alt="drone" />
                        </div>

                        <div className='w-1/2 grid items-center justify-center'>
                            <h2 className='font-semibold text-lg lg:text-5xl'>{db.toyName} </h2>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Gallery;