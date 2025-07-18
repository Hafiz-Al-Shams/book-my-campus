import React from 'react';
import LoginFrom from './components/LoginForm';

const LoginPage = () => {
    return (
        <div className='mt-12 md:mt-16 lg:mt-24 mb-8 md:mb-10 lg:mb-24'>
            <LoginFrom></LoginFrom>
            {/* <hr /> */}
            {/* <SocialLogin></SocialLogin> */}
        </div>
    );
};

export default LoginPage;