"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });


  useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/login");
      }
    }, [status, router]);

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`http://localhost:5000/user-by-email?email=${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setFormData({ name: data.name, email: data.email });
        })
        .catch((err) => console.error("Fetch user error:", err));
    }
  }, [session, status]);
  
  if (status === "loading") {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (status === "unauthenticated") {
    return null; // Prevent UI flicker while redirecting
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    fetch(`http://localhost:5000/users/update`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: session.user.email,
        updatedData: formData,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData((prev) => ({ ...prev, ...formData }));
        setEditMode(false);
        toast.success("Profile updated!");
      })
      .catch((err) => {
        console.error("Update failed:", err);
        toast.error("Update failed");
      });
  };

  if (!userData) return <div className="text-center mt-10">Loading profile...</div>;

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#665c7c]">My Profile</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          {editMode ? (
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full border px-3 py-2 rounded-lg"
            />
          ) : (
            <p className="mt-1 text-gray-900">{userData.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <p className="mt-1 text-gray-900">{userData.email}</p>
        </div>

        {userData.provider && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Provider:</label>
            <p className="mt-1 text-gray-500 capitalize">{userData.provider}</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        {editMode ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#665c7c] text-white rounded-lg hover:bg-[#574a66]"
            >
              Save
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="px-4 py-2 bg-[#cbb58b] text-white rounded-lg hover:bg-[#b39c6a]"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
