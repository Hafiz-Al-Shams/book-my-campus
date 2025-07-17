import SocialLogin from "../login/components/SocialLogin";
import RegisterFrom from "./components/RegisterForm";



const SignUpPage = () => {
    return (
        <div>
            <h1>SignUp page here</h1>
            <div className="flex justify-center mt-8">
                <RegisterFrom></RegisterFrom>
                <hr />
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUpPage;