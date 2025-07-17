"use client";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginFrom() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast('Submitting.....')
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
      className="w-1/2 flex items-center justify-center bg-gray-100"
    >
      <div className="w-2/3 max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#cbb58b]">
          book-my-campus
        </h2>
        <p className="text-center mb-6">Sign Into Your Account</p>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 mb-4 border rounded"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          name="password"
        />
        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="text-[#cbb58b]">
            Forgot Password
          </a>
        </div>
        <button className="w-full bg-[#665c7c] text-white py-2 rounded">
          Login
        </button>
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#cbb58b]">
            Register here
          </a>
          <br />
          <a
            href="/"
            className="text-[#cbb58b] flex items-center justify-center mt-1"
          >
            <IoArrowForwardCircleOutline className="mr-1" /> GoBack
          </a>
        </p>
      </div>
    </form>
  );
}
