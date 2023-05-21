import React, { useEffect, useState } from 'react';


const Shop = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/shop')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='section-margin'>
            {
                data.map(shop => <div
                    key={shop._id}
                >
                    <h2 className='header-title'>{shop.shopTitle}</h2>
                    <p className='paragraph-title'>{shop.shopParagraph}</p>
                    <div className='space-y-2 lg:space-y-4 py-6 px-4 lg:py-24 lg:px-20 bg-cover bg-center object object-cover' style={{ backgroundImage: `url(${shop.bannerImage})` }}>
                        <p className='font-medium uppercase text-xs lg:text-xl'>Official Refurbished</p>
                        <div className='font-semibold text-base lg:text-4xl space-y-1 lg:space-y-2'>
                            <h2 >Save 20%</h2>
                            <h2 >Certified Quality, Full Warranty</h2>
                        </div>
                        <button className="btn bg-slate-950 text-white ">Shop Now</button>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Shop;