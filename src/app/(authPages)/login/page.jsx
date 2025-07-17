import React from 'react';
import LoginFrom from './components/LoginForm';
import SocialLogin from './components/SocialLogin';

const LoginPage = () => {
    return (
        <div>
            <h1>Login page here</h1>
            <LoginFrom></LoginFrom>
            <hr />
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default LoginPage;