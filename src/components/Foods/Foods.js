import React, { useState } from 'react';
import useFoods from '../../hooks/useFoods';
import FoodItem from '../FoodItem/FoodItem';
import './Foods.css'

const Foods = () => {
    const [foods] = useFoods();
    const [foodType, setFoodType] = useState("Breakfast");



    // console.log(foods);
    // console.log(foodType);

    const filteredFoods = foods.filter(food => food.type === foodType);
    // console.log(filteredFoods);


    return (
        <section className="food-area my-5">
            <div className="container">
                <nav>
                    <ul className="nav justify-content-center">
                        <li onClick={() => setFoodType("Breakfast")} className="nav-item">
                            <span to="breakfast" className={foodType === "Breakfast" ? 'active nav-link' : 'nav-link'}>Breakfast</span>
                        </li>
                        <li onClick={() => setFoodType("Lunch")} className="nav-item">
                            <span to="breakfast" className={foodType === "Lunch" ? 'active nav-link' : 'nav-link'}>Lunch</span>
                        </li>
                        <li onClick={() => setFoodType("Dinner")} className="nav-item">
                            <span to="breakfast" className={foodType === "Dinner" ? 'active nav-link' : 'nav-link'}>Dinner</span>
                        </li>
                    </ul>
                </nav>

                <div className="row my-5">
                    {/* <Preloader visibility={preloaderVisibility} /> */}
                    {
                        filteredFoods.map(food => <FoodItem key={food.id} food={food} />)
                    }
                </div>
                {/* <div className="text-center">
                    {
                        props.cart.length ?
                            <Link to="/checkout">
                                <button className="btn btn-danger btn-secondary">Check Out Your Food</button>
                            </Link>
                            :
                            <button disabled className="btn btn-secondary">Check Out Your Food</button>

                    }

                </div> */}
            </div>
        </section>
    );
};

export default Foods;