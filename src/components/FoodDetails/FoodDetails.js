import React, { useState } from 'react';
import { useParams } from 'react-router';
import useFoods from '../../hooks/useFoods';
import './FoodDetails.css';

const FoodDetails = () => {
    const [foods] = useFoods();
    const { foodId } = useParams();
    const specificFood = foods.find(food => food.id === +foodId);
    console.log(specificFood);

    return (
        <div className="food-details my-5 pt-5 container">
            {
                specificFood?.name &&
                <div className="row">
                    <div className="col-md-6 pr-md-4">
                        <h1>{specificFood.name}</h1>
                        <p className="my-5">{specificFood.fullDescription}</p>
                        <div className="d-flex  my-4">
                            <h2 className="price">${specificFood.price.toFixed(2)}</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={specificFood.images[0]} alt="" />
                    </div>
                </div>
            }
        </div>
    );
};

export default FoodDetails;