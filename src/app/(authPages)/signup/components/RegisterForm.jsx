"use client";

import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function RegisterFrom() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        form.reset();
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
      className="w-1/2 flex items-center justify-center bg-gray-100"
    >
      <div className="w-2/3 max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#cbb58b]">
          book-my-campus
        </h2>
        <p className="text-center mb-6">Create Your Account</p>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-4 border rounded"
          name="name"
        />
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
        <button className="w-full bg-[#665c7c] text-white py-2 rounded">
          Register
        </button>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-[#cbb58b]">
            Login here
          </a>{" "}
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
