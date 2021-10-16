import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from '../../images/logo.png';
import './SignUp.css'

export default function SignUp() {
    const [returnUser, setReturnUser] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();

    console.log(user);

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        signInUsingGoogle()
            .then(({ user }) => {
                history.push(location.state?.from || '/')
            })
    }

    return (
        <div className="sign-up" >
            <div className="container">
                <div className="logo text-center">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>

                {
                    returnUser ?
                        <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                            {/* {
                                auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                            } */}
                            <div className="form-group">
                                <input name="email" className="form-control" {...register('email', { required: true })} placeholder="Email" />
                                {errors.email && <span className="error">Email is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" {...register('password', { required: true })} placeholder="Password" />
                                {errors.password && <span className="error">Password is required</span>}
                            </div>

                            <div className="form-group">
                                <button className="btn btn-danger w-100" type="submit">Sign In</button>
                                <button className="btn w-100 mt-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#34a853', color: '#fff' }} onClick={handleGoogleSignIn}> <FaGoogle className="me-2" /> Sign In With Google</button>
                            </div>
                            <div className="option text-center">
                                <label onClick={() => setReturnUser(false)}>Create a new Account</label>
                            </div>
                        </form>
                        :
                        <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                            {/* {
                                auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                            } */}
                            <div className="form-group">
                                <input name="name" className="form-control" {...register('name', { required: true })} placeholder="Name" />
                                {errors.name && <span className="error">Name is required</span>}
                            </div>
                            <div className="form-group">
                                <input name="email" className="form-control" {...register('email', { required: true })} placeholder="Email" />
                                {errors.email && <span className="error">Email is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" {...register('password', { required: true })} placeholder="Password" />
                                {errors.password && <span className="error">Password is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" name="confirm_password" className="form-control" {...register('confirm_password', {
                                    validate: (value) => value === watch('password')
                                })} placeholder="Confirm Password" />
                                {errors.confirm_password && <span className="error">Passwords don't match.</span>}
                            </div>
                            <div className="form-group">
                                <button className="btn btn-danger w-100" type="submit">Sign Up</button>
                                <button className="btn w-100 mt-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#34a853', color: '#fff' }} onClick={handleGoogleSignIn}> <FaGoogle className="me-2" /> Sign In With Google</button>
                            </div>
                            <div className="option text-center">
                                <label onClick={() => setReturnUser(true)}>Already Have an Account</label>
                            </div>
                        </form>
                }

            </div>

        </div>
    );
}