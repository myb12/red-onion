import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <section className="banner d-flex align-items-center text-center">
            <div className="container">
                <h1>Best Food Waiting  for your Belly</h1>

                <div className="search-box col-md-6 my-5 mx-auto">
                    <input id="query" type="text" className="form-control" placeholder="Search Food Item" />
                    <Link to="/#">
                        <button onClick={() => window.scrollBy(0, 500)} className="btn btn-danger search-btn btn-rounded">Search</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;