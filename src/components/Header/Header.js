import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Header.css';
import { FaCartArrowDown } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const [cart] = useCart();
    const { user, logOut } = useAuth();
    // console.log(user);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="Hot Onion Logo" />
                    </Link>

                    <ul className="navbar-nav align-items-center ms-auto">
                        <li className="nav-item active">
                            <Link to="/checkout" className="nav-link">
                                <FaCartArrowDown style={{ color: '#000', fontSize: 20 }} />
                                <span className="ms-1">{cart.length}</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            {
                                user.email ?

                                    (<Link to="/" className="nav-link"><img style={{ borderRadius: '50%', width: 30 }} src={user.photoURL} alt="" /> {user.displayName}</Link>)
                                    :
                                    <Link to="/login" className="nav-link">Login</Link>
                            }
                        </li>

                        <li className="nav-item">
                            {
                                user.email ?
                                    <Link to="/" className="nav-link">
                                        <button onClick={() => { logOut() }} className="btn btn-danger btn-rounded">Sign Out</button>
                                    </Link>
                                    :
                                    <Link to="/login" className="nav-link">
                                        <button className="btn btn-danger btn-rounded">Sign Up</button>
                                    </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;