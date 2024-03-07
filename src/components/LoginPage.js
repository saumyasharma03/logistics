import React from 'react';
import LogoutButton from "./logout";
import { useAuth0 } from '@auth0/auth0-react';
export const LoginPage = () => {
    // const redirectToLoginPage = () => {
    //     window.location.href = '/';
    // };

    const { user, loginWithRedirect } = useAuth0();
    console.log('User', user);
    return (
        <div className="banner">

            <h1>Welcome to Our Marketplace</h1>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '10vh' }}>
                <div className="text-center"></div>
                <div className="buttons">

                    <button className='vvd' onClick={(e) => user ? LogoutButton : loginWithRedirect()}>
                        {user ? <p>Logout as Seller</p> : <p>Login as Seller</p>}
                    </button>
                    <button className="vvd">Login as Buyer</button>
                </div>
            </div>
        </div>
    );
}

// const handleLogin = (role) => {
//     // Here you can implement your logic for handling login based on the role (seller/buyer)
//     console.log(`Logging in as ${role}`);
// }


