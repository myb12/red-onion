import React, { useState } from 'react';
import { FaCartArrowDown, FaCheckCircle } from 'react-icons/fa';
import { useParams } from 'react-router';
import useFoods from '../../hooks/useFoods';
import './FoodDetails.css';

const FoodDetails = () => {
    const [foods] = useFoods();
    const [quantity, setQuantity] = useState(1);
    const [success, setSuccess] = useState(false);
    const [bigImageIndex, setBigImageIndex] = useState(0);

    const { foodId } = useParams();
    const specificFood = foods.find(food => food.id === +foodId);
    console.log(specificFood);

    success && setTimeout(() => setSuccess(false), 1500);

    return (
        <div className="food-details my-5 pt-5 container">
            {
                specificFood?.name &&
                <div className="row">
                    <div className="col-md-6 pe-md-4  order-2 order-md-1">
                        <h1>{specificFood.name}</h1>
                        <p className="my-5">{specificFood.fullDescription}</p>
                        <div className="row my-4 align-items-center">
                            <h2 className="price col-4">${specificFood.price.toFixed(2) * quantity}</h2>

                            <div className="cart-controller ms-3 btn col-8">
                                <button className="btn" style={{ color: '#bb2d3b' }} onClick={() => quantity >= 1 && setQuantity(quantity - 1)} >-</button> <span className="mx-2">{quantity}</span> <button className="btn" style={{ color: '#bb2d3b' }} onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                        </div>

                        <div className="action d-flex align-items-center">
                            <button className="btn btn-danger btn-rounded mb-2" onClick={() => setSuccess(true)}><FaCartArrowDown style={{ color: '#fff', fontSize: 20 }} /> Add</button>
                            {success &&
                                <p className="ms-3 success-msg text-success"><FaCheckCircle />  Item added to Cart</p>

                            }
                        </div>


                        <div className="more-images mt-5 ">
                            {
                                specificFood.images.map((image, i) => <img onClick={() => setBigImageIndex(i)} className="small-img mr-4" src={image} alt="" style={{ border: i === bigImageIndex && '1px dashed #bb2d3b' }} />)
                            }
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center order-1 order-md-2">
                        <img className="food-detail-img" src={specificFood.images[bigImageIndex]} alt="" />
                    </div>
                </div>
            }
        </div>
    );
};

export default FoodDetails;