"use client";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import SocialLogin from "../../components/SocialLogin";

export default function LoginFrom() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast('Logging in.....')
    try {
      const response = await signIn("credentials", { email, password, callbackUrl: '/', redirect: false });
      if (response.ok) {
        toast.success("Logged In Succesfully")
        router.push("/");
        form.reset()
      } else {
        toast.error("Failed To LogIn")
      }
      //
      //console.log({email, password});
    } catch (error) {
      toast.error("Failed To LogIn")
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 flex items-center justify-center px-4 sm:px-0"
    >
      <div className="w-full max-w-md bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Sign in to your account to continue your journey.
          </p>
        </div>

        {/* Email Input */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="your@example.com"
              className="w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              name="email"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              name="password"
            />
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#0095FF] hover:bg-[#0086e6] text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-colors duration-200 mb-4 text-sm sm:text-base cursor-pointer">
          Login
        </button>

        {/* Forgot Password */}
        <div className="text-center mb-4 sm:mb-6">
          <Link href="/reset-password" className="text-gray-500 hover:text-gray-700 text-sm">
            Forgot Password?
          </Link>
        </div>

        {/* Divider */}
        <div className="relative mb-4 sm:mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <SocialLogin />

        {/* Footer Links */}
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2 sm:mb-0">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline font-medium">
              Register here
            </Link>
          </p>
          <a
            href="/"
            className="flex items-center justify-center mt-2 sm:mt-3 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <IoArrowForwardCircleOutline className="mr-1 w-4 h-4 sm:w-5 sm:h-5" /> GoBack
          </a>
        </div>
      </div>
    </form>
  );
}
