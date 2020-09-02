import React from 'react';
import './LoginForm.css';

function LoginFrom(){
    
    return (
        <div className="container">
            <div className="loginForm">
                <div className="header">
                    <h2>Create account</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Accel" id="username" />
                        <i className="fas fa-check-circle" />
                        <i className="fas fa-exclamation-circle" />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Email</label>
                        <input type="email" placeholder="user@gmail.com" id="email" />
                        <i className="fas fa-check-circle" />
                        <i className="fas fa-exclamation-circle" />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Password</label>
                        <input type="password" placeholder="Password" id="password" />
                        <i className="fas fa-check-circle" />
                        <i className="fas fa-exclamation-circle" />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Confirm Password</label>
                        <input type="password" placeholder="Password check" id="passwordCheck" />
                        <i className="fas fa-check-circle" />
                        <i className="fas fa-exclamation-circle" />
                        <small>Error message</small>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginFrom