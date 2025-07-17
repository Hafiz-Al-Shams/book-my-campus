"use client";

import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


const SingleCollegeAdmissionPage = () => {

    const { id } = useParams();
    const router = useRouter();
    const { data: session, status } = useSession();

    const [college, setCollege] = useState(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        program: "",
        phone: "",
        address: "",
        dob: "",
        image: null,
    });

    // Load college data with no cache
    useEffect(() => {
        if (!id) return;
        fetch(`https://book-my-campus-server.onrender.com/colleges/${id}`, {
            cache: "no-store",
        })
            .then((res) => res.json())
            .then(setCollege)
            .catch(console.error);
    }, [id]);

    // Reset form back to initial state
    const resetForm = () => {
        setForm({
            name: "",
            email: "",
            program: "",
            phone: "",
            address: "",
            dob: "",
            image: null,
        });
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setForm((f) => ({ ...f, image: files[0] }));
        } else {
            setForm((f) => ({ ...f, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.image) {
            toast.error("Please select a photo to upload.");
            return;
        }

        try {
            // 1️⃣ Upload to ImgBB
            const imageHostingKey = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
            const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
            const imgData = new FormData();
            imgData.append("image", form.image);

            const imgbbRes = await fetch(imgbbUrl, {
                method: "POST",
                body: imgData,
            });
            const imgbbJson = await imgbbRes.json();

            if (!imgbbJson.success) {
                console.error("ImgBB upload failed:", imgbbJson);
                toast.error("Image upload failed. Please try again.");
                return;
            }

            const photoUrl = imgbbJson.data.display_url;

            // 2️⃣ Build payload
            const payload = {
                collegeId: id,
                collegeName: college.name,
                collegeImgSrc: college.imgSrc,
                // name: form.name,
                name: session?.user?.name,
                // email: form.email,
                email: session?.user?.email,
                program: form.program,
                phone: form.phone,
                address: form.address,
                dob: form.dob,
                photoUrl,
            };

            // 3️⃣ Send all data to your backend
            const res = await fetch(
                "https://book-my-campus-server.onrender.com/submissions",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );
            const result = await res.json();

            if (result.success) {
                toast.success("Application submitted successfully!");
                resetForm();
                setTimeout(() => {
                    router.push("/user-dashboard/my-college");
                }, 1600);
            } else {
                throw new Error(result.error || "Submission failed");
            }
        } catch (err) {
            console.error("Submission error:", err);
            toast.error("There was an error submitting your application.");
        }
    };

    if (!college) {
        return <p className="text-center py-10">loading…</p>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold">
                    Admission Application for {college.name}
                </h1>
                <p className="text-gray-600">
                    Please fill out the form carefully and completely.
                </p>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 border p-6 rounded-lg shadow"
            >
                {/* Candidate Name */}
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium">
                        Candidate Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        defaultValue={session?.user?.name || ""}
                        // placeholder="John Wick"
                        // value={form.name}
                        // value={session?.user?.name || ""}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        defaultValue={session?.user?.email || ""}
                        // placeholder="john.wick@example.com"
                        // value={form.email}
                        // value={session?.user?.email}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg"
                        required
                    />
                </div>

                {/* Desired Subject/Program */}
                <div>
                    <label htmlFor="program" className="block mb-1 font-medium">
                        Desired Subject/Program
                    </label>
                    <select
                        id="program"
                        name="program"
                        value={form.program}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg"
                        required
                    >
                        <option value="">Select a subject</option>
                        {college.keyPrograms.map((prog) => (
                            <option key={prog} value={prog}>
                                {prog}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Phone Number */}
                <div>
                    <label htmlFor="phone" className="block mb-1 font-medium">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg"
                        required
                    />
                </div>

                {/* Address (full width) */}
                <div className="md:col-span-2">
                    <label htmlFor="address" className="block mb-1 font-medium">
                        Address
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        placeholder="123 University Ave, City, State, ZIP"
                        value={form.address}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg h-24 resize-none"
                        required
                    />
                </div>

                {/* Date of Birth */}
                <div>
                    <label htmlFor="dob" className="block mb-1 font-medium">
                        Date of Birth
                    </label>
                    <input
                        id="dob"
                        name="dob"
                        type="date"
                        value={form.dob}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg"
                        required
                    />
                </div>

                {/* Photo Upload */}
                <div>
                    <label htmlFor="image" className="block mb-1 font-medium">
                        Photo Upload
                    </label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full"
                        required
                    />
                </div>

                {/* Submit Button (full width) */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-[#0095FF] hover:bg-[#0082DE] text-white py-3 rounded-lg transition cursor-pointer"
                    >
                        Submit Application
                    </button>
                </div>
            </form>

            {/* Toast Container */}
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default SingleCollegeAdmissionPage;