// File: app/user-dashboard/my-college/page.jsx

// Disable all built‑in caching for this route
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
// import { getServerSession } from "next-auth";
import Link from "next/link";

// Fetch helper that never caches
// async function getSubmissions() {
//     const res = await fetch(
//         "https://book-my-campus-server.onrender.com/submissions",
//         { cache: "no-store", }
//     );
//     if (!res.ok) {
//         throw new Error("Failed to fetch submissions");
//     }
//     return res.json();
// }

const MyCollegePage = async () => {

    // 2) Grab the session on the server
    const session = await getServerSession(authOptions);

    // 3) If no session, either redirect or show a message
    if (!session) {
        // → Redirect user to sign‑in
        // return redirect("/api/auth/signin");

        // → Or render a prompt
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
                            <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Authentication Required
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Please Login to view your college submissions and manage your applications.
                        </p>
                        <Link
                            href="/login"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // 4) Extract email and URL‑encode
    const email = encodeURIComponent(session.user.email);

    // 5) Fetch only that user’s submissions from your Express API
    const res = await fetch(
        `https://book-my-campus-server.onrender.com/submissions/by-email/${email}`,
        { cache: "no-store" }
    );
    if (!res.ok) {
        throw new Error("Failed to load your submissions");
    }
    const submissions = await res.json();

    // const submissions = await getSubmissions();

    if (!submissions || submissions.length === 0) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center">Applications</h1>
                <div className="text-center py-10">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            className="w-12 h-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No Applications Yet
                    </h3>
                    <p className="text-gray-500 mb-4">
                        You haven't submitted any college applications yet.
                    </p>
                    <Link
                        href="/admission"
                        className="inline-flex items-center px-4 py-2 bg-[#0095FF] hover:bg-[#0082DE] text-white rounded-lg transition-colors"
                    >
                        Browse Colleges
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Applications</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {submissions.map((submission) => (
                    <div
                        key={submission._id}
                        className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Submitted badge */}
                        <span className="absolute top-2.5 right-4 px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                            Submitted
                        </span>

                        <div className="h-full flex sm:flex-row flex-col items-center sm:items-start text-center sm:text-left">
                            {/* College Image */}
                            <img
                                alt={submission.collegeName}
                                src={submission.collegeImgSrc}
                                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            />

                            {/* Text Content */}
                            <div className="flex-grow sm:pl-8 pt-2.5 md:pt-5 lg:pt-10">
                                <h2 className="title-font font-medium text-lg text-gray-900">
                                    {submission.collegeName}
                                </h2>
                                <p className="text-gray-500 mb-3">
                                    Applied:{" "}
                                    {new Date(submission.submittedAt).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        }
                                    )}
                                </p>

                                {/* Add Review */}
                                <Link
                                    href={`/add-review/${submission._id}`}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    <span className="text-sm font-medium">Add Review</span>
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default MyCollegePage;