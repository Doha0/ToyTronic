import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../../Hook/useTitle';


const AddToy = () => {

    useTitle('AddAToy');
    const { user } = useContext(AuthContext);

    const handelAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const picture_url = form.photo.value;
        const name = form.toyName.value;
        const seller_name = form.sellerName.value;
        const seller_email = form.sellerEmail.value;
        const sub_category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.quantity.value;
        const description = form.description.value;
        const formData = { picture_url, name, seller_name, seller_email, sub_category, price, rating, available_quantity, description };


        fetch('https://toy-tronic-server.vercel.app/toys', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                form.reset();
            })


    }


    return (
        <div className='grid grid-cols-1 justify-items-center mb-16'>
            <h2 className='header-title my-14 '>Add A Toy</h2>

            <div className='card w-full lg:w-7/12  bg-sky-200'>
                <form onSubmit={handelAddToy} className='card-body'  >

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" name="photo" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="sellerEmail" defaultValue={user?.email} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <input type="text" name="category" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-info text-white" type="submit" value="Add A Toy" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddToy;