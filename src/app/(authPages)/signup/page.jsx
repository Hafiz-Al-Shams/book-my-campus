import RegisterFrom from "./components/RegisterForm";



const SignUpPage = () => {
    return (
        <div className="mt-12 md:mt-16 lg:mt-24 mb-8 md:mb-10 lg:mb-24">
            <div className="flex justify-center mt-8">
                <RegisterFrom></RegisterFrom>
                {/* <hr /> */}
                {/* <SocialLogin></SocialLogin> */}
            </div>
        </div>
    );
};

export default SignUpPage;