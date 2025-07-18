"use client";

import { IoArrowForwardCircleOutline, IoLockClosedOutline, IoMailOutline, IoPersonOutline } from "react-icons/io5";
import SocialLogin from "../../components/SocialLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterFrom() {

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await fetch("https://book-my-campus-server.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful!")
        form.reset();
        router.push("/login");
        toast('Now Please Login')

      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-2">Join Us Today!</h2>
        <p className="text-center text-gray-600 mb-6">
          Create your account to unlock full features.
        </p>

        {/* Full Name */}
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <div className="relative mb-4">
          <IoPersonOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Full Name"
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <div className="relative mb-4">
          <IoMailOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@example.com"
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <div className="relative mb-6">
          <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 mb-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition cursor-pointer"
        >
          Sign Up
        </button>

        <SocialLogin></SocialLogin>

        {/* Already have account */}
        <div className="text-center text-sm mb-2">
          Already have an account?{' '}
          <Link href="/login">
            <p className="text-blue-500 hover:underline">Login here</p>
          </Link>
        </div>

        {/* Go Back */}
        <div className="text-center">
          <Link href="/">
            <p className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
              <IoArrowForwardCircleOutline className="mr-1" /> Go Back
            </p>
          </Link>
        </div>
      </div>
    </form>
  );
}
