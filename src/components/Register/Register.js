import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="createAccount">
            <form className="loginCreateForm detailFormArea" action="">
                <h2 className="text-dark">Create an account</h2>
                <input className="loginCreateFormInput" type="text" name="firstName" placeholder="First Name" required/>
                <input className="loginCreateFormInput" type="text" name="lastName" placeholder="Last Name" required/>
                <input className="loginCreateFormInput" type="text" name="email" placeholder="Username or Email" required/>
                <input className="loginCreateFormInput" type="password" name="password" placeholder="Password" required/>
                <input className="loginCreateFormInput" type="password" name="confirmPassword" placeholder="Confirm Password" required/>
                {/* {
                    userData.success ? <p className="text-success text-center m-0">Account created successfully. Please login</p> : <p className="text-danger text-center m-0">{userData.error}</p>
                } */}
                <button type="submit" className="btn loginCreateBtn">Create an account</button>
                <p className="text-dark dontHaveAccount text-center">Already have an account?<Link to="/login" className="loginTxt ml-1">Login</Link></p>
                </form>

                <div className="orSection">
                    <hr style={{width: '45%', float: 'left'}}/><span>Or</span><hr style={{width: '45%', float: 'right'}}/>
                </div>
                <div className="googleFbSignIn">
                    <img className="googleFbImage" src="https://i.ibb.co/ZhnqwJs/fb.png" alt=""/>
                    <p className="m-0 text-center">Continue with Facebook</p>
                </div>
                <div className="googleFbSignIn">
                    <img className="googleFbImage" src="https://i.ibb.co/68y93F9/google.png" alt=""/>
                    <p className="m-0 text-center">Continue with Google</p>
                </div>
                
                
        </div>
    );
};

export default Register;