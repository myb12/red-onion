import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const [query, setQuery] = useState('');
    const searchedQuery = (e) => setQuery(e.target.value.toLowerCase());
    const handleClick = () => {
        window.scrollBy(0, 500);
    }
    return (
        <section className="banner d-flex align-items-center text-center">
            <div className="container">
                <h1>Best Food Waiting  for your Belly</h1>

                <div className="search-box col-md-6 my-5 mx-auto">
                    <input id="query" type="text" className="form-control" placeholder="Search Food Item" onChange={searchedQuery} />
                    <Link to={`/search=${query}`}>
                        <button onClick={handleClick} className="btn btn-danger search-btn btn-rounded">Search</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;