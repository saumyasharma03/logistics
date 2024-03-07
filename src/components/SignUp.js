import React from 'react';

export const SignUp = () => {
    return (
        <section className="sign" >
            <h1>Login as Seller</h1>
        <div className="container mx-auto" style={{ padding: '5px', margin: 'auto', textAlign: 'center', color: '#1565C0' }}>
            <div style={{ border: '2px solid #FFFFFF', borderRadius: '10px', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#login-tab">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#signup-tab">Sign Up</a>
                    </li>    
                </ul>

                {/* <a className="adminLink" href="/loginad" style={{ color: '#b92b27', margin: '10px 0', display: 'block' }}>Admin Login</a> */}

                <div className="tab-content">
                    {/* Login Tab */}
                    <div className="tab-pane fade show active" id="login-tab">
                        <div className="card-body">
                            <h2>Login</h2>
                            <form name="loginForm" method="POST" action="/login">
                                <div className="form-group">
                                    <label htmlFor="login-username-email">Username/Email</label>
                                    <input type="text" className="form-control" id="login-username-email" name="login-username-email" placeholder="Enter username/email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="login-password">Password</label>
                                    <input type="password" className="form-control" id="login-password" name="login-password" placeholder="Enter password" required />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#b92b27', border: 'none' }}>Login</button>
                            </form>
                        </div>
                    </div>

                    {/* Signup Tab */}
                    <div className="tab-pane fade" id="signup-tab">
                        <div className="card-body compact-form">
                            <h2>Sign Up</h2>
                            <form name="signUpForm" method="POST" action="/submit">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="signup-name">Name</label>
                                        <input type="text" className="form-control" id="signup-name" name="signup-name" placeholder="Enter your name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="signup-phone">Phone Number</label>
                                        <input type="tel" className="form-control" id="signup-phone" name="signup-phone" placeholder="Enter phone number" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signup-address">Address</label>
                                    <input type="text" className="form-control" id="signup-address" name="signup-address" placeholder="Enter address" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signup-email">Email</label>
                                    <input type="email" className="form-control" id="signup-email" name="signup-email" placeholder="Enter email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signup-username">Username</label>
                                    <input type="text" className="form-control" id="signup-username" name="signup-username" placeholder="Enter username" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signup-password">Password</label>
                                    <input type="password" className="form-control" id="signup-password" name="signup-password" placeholder="Enter password" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signup-confirm-password">Confirm Password</label>
                                    <input type="password" className="form-control" id="signup-confirm-password" name="signup-confirm-password" placeholder="Confirm password" required />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1565C0', border: 'none' }}>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

// export default SignUp;
