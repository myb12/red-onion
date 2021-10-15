import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css'

const FoodItem = ({ food }) => {
    const { name, shortDescription, price, images } = food;
    return (
        <div className="col-md-4 mb-4">
            <Link to="/#">
                <div className="card text-center">
                    <img src={images[0]} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5>{name}</h5>
                        <p>{shortDescription}</p>
                        <h4>{price}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FoodItem;