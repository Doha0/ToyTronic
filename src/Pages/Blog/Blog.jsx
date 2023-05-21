import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blog = () => {
    useTitle('Blog');

    return (
        <section className="my-16 lg:my-32">
            <h1 className=" text-center font-semibold text-4xl my-10">Blog</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-8 items-center justify-center mx-4 lg:mx-40 px-2 lg:px-24">

                <div className="card w-full bg-sky-200 text-info-content">
                    <div className="card-body">
                        <h2 className="card-title mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>An access token is a credential that is issued to a user after they successfully authenticate themselves. It is a short-lived token that typically has an expiration time.
                            A refresh token is a long-lived token that is also issued to a user during the authentication process. Unlike the access token, the refresh token is typically valid for a longer period, such as days or weeks.
                            An access token and a refresh token are commonly used in authentication systems to grant and manage user access to protected resources.
                        </p>
                    </div>
                </div>

                <div className="card w-full bg-sky-200 text-info-content">
                    <div className="card-body">
                        <h2 className="card-title mb-4">SQL and NoSQL databases?</h2>
                        <p>SQL and NoSQL databases are two distinct types of database management systems used for storing and retrieving data. SQL databases, based on the relational model, store data in structured tables with predefined schemas.On the other hand, NoSQL databases are designed to handle large-scale, unstructured, and semi-structured data. They offer flexible schemas and prioritize scalability, high availability, and performance over strict data consistency. The choice between SQL and NoSQL depends on the specific requirements of the application.</p>
                    </div>
                </div>

                <div className="card w-full bg-sky-200 text-info-content">
                    <div className="card-body">
                        <h2 className="card-title mb-4">What is express js and What is Nest JS?</h2>
                        <p>Express.js is a minimalist and flexible web application framework for Node.js. It provides a simple and straightforward approach to building web servers and APIs. It offers a wide range of middleware and plugins that simplify tasks such as routing, request handling, and response generation. NestJS is a progressive, TypeScript-based web framework built on top of Node.js. It draws inspiration from Angular, sharing similarities in terms of structure and concepts.NestJS offers powerful features such as routing, middleware support, dependency injection, and extensive integration with various libraries and technologies.</p>
                    </div>
                </div>

                <div className="card w-full bg-sky-200 text-info-content">
                    <div className="card-body">
                        <h2 className="card-title mb-4">What is MongoDB aggregate and how does it work?</h2>
                        <p>The MongoDB aggregate function is a powerful feature that enables advanced data aggregation operations on collections. It works by utilizing a pipeline consisting of multiple stages, where each stage performs a specific operation on the data. Aggregation operators such as $sum, $avg, $max, $min, $concat, and more are used to perform computations on fields. Expressions and functions can also be employed to perform complex data transformations.</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Blog;