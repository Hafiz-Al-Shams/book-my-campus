"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";


const AddReviewForm = ({ submission, submissionId }) => {
    const router = useRouter();
    const [rating, setRating] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!rating || !feedback.trim()) {
            toast.error("Please select a rating and write your feedback.");
            return;
        }

        setIsSubmitting(true);

        // build the review payload
        const reviewPayload = {
            submissionId,           // links back to the application
            // include original submission info:
            collegeId: submission.collegeId,
            collegeName: submission.collegeName,
            collegeImgSrc: submission.collegeImgSrc,
            name: submission.name,
            email: submission.email,
            program: submission.program,
            phone: submission.phone,
            address: submission.address,
            dob: submission.dob,
            photoUrl: submission.photoUrl,
            submittedAt: submission.submittedAt,
            // new review fields:
            rating,
            feedback: feedback.trim(),
            reviewedAt: new Date().toISOString(),
        };

        try {
            // const res = await fetch("https://book-my-campus-server.onrender.com/reviews", {
            const res = await fetch("https://book-my-campus-server.onrender.com/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reviewPayload),
            });
            const data = await res.json();

            if (res.ok && data.success) {
                toast.success("Review submitted! Thank you.");
                setRating("");
                setFeedback("");
                // wait 2s (or whatever your autoClose is) before navigating
                setTimeout(() => {
                    router.push("/");
                }, 1600);
            } else {
                throw new Error(data.error || "Failed to submit review");
            }
        } catch (err) {
            console.error("Review error:", err);
            toast.error("Error submitting review. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="border p-6 rounded-lg shadow space-y-4"
        >
            <h2 className="text-xl font-semibold">Add Review</h2>

            {/* Rating dropdown */}
            <div>
                <label htmlFor="rating" className="block mb-1 font-medium">
                    Rating
                </label>
                <select
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full border px-3 py-2 rounded"
                    required
                >
                    <option value="">Select rating</option>
                    {[5, 4, 3, 2, 1].map((n) => (
                        <option key={n} value={n}>
                            {n}
                        </option>
                    ))}
                </select>
            </div>

            {/* Feedback textarea */}
            <div>
                <label htmlFor="feedback" className="block mb-1 font-medium">
                    Feedback
                </label>
                <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="Your valuable feedbacks…"
                    className="w-full border px-3 py-2 rounded h-24 resize-none"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0095FF] hover:bg-[#0082DE] text-white py-2 rounded transition cursor-pointer"
            >
                {isSubmitting ? "Submitting…" : "Submit Review"}
            </button>

            <ToastContainer position="top-center" autoClose={2000} />
        </form>
    );
};

export default AddReviewForm;