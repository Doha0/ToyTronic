import React, { useEffect, useState } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://toy-tronic-server.vercel.app/gallery')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <section>
            <h2 className='header-title mt-10 lg:mt-24'>Top Products</h2>
            <p></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
                {
                    data.map(products => <ProductsCard
                        key={products._id}
                        products={products}
                    ></ProductsCard>)
                }
            </div>
        </section>
    );
};

export default Products;