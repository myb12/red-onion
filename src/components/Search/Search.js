import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFoods from '../../hooks/useFoods';
import FoodItem from '../FoodItem/FoodItem';

const Search = () => {
    const { query } = useParams();
    const [foods] = useFoods();
    const searchResult = foods.filter(food => food.name.toLowerCase().includes(query));
    return (
        <section className="food-area my-5">
            <div className="container">
                <h4 className="text-center search-res-title">Search Result</h4>
                <div className="row my-5">
                    {
                        searchResult.length === 0 && <h1 className="col-12 display-5 text-center">No food found!</h1>
                    }

                    {
                        searchResult.map(food => <FoodItem key={food.id} food={food}></FoodItem>)
                    }
                </div>
                <div className="text-center">
                    <Link to="/">
                        <button className="btn btn-danger btn-secondary">See Our all Foods</button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default Search;