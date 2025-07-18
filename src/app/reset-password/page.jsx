import React from 'react';
import { IoMailOutline } from 'react-icons/io5';

const ResetPasswordPage = () => {
    return (
        <div>
            <form className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center mb-2">Reset Password</h2>
                    <p className="text-center text-gray-600 mb-6">
                        Enter your email to receive a password reset link.
                    </p>

                    {/* Email Input */}
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                    </label>
                    <div className="relative mb-6">
                        <IoMailOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@example.com"
                            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition cursor-pointer"
                    >
                        Send Reset Link
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ResetPasswordPage;