"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';



const AdmissionPage = () => {

    const router = useRouter();
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const { data: session, status } = useSession();




    // Fetch colleges data
    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const res = await fetch('https://book-my-campus-server.onrender.com/colleges');
                const data = await res.json();
                setColleges(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchColleges();
    }, []);

    const handleNavigation = (collegeId) => {
        if (status === 'authenticated') {
            router.push(`/admission/${collegeId}`);
        } else {
            router.push('/login');
            toast.error("Login first");
        }
    };

    if (loading) return <div className="text-center px-8 py-16">loading colleges...</div>;
    if (error) return <div className="text-center p-8 text-red-500">Error loading colleges: {error}</div>;

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {colleges.map((college) => (
                            <div key={college._id} className="xl:w-1/4 lg:w-1/2 md:w-full p-4">
                                <div className="h-full border-l-2 border-gray-200 border-opacity-60 flex flex-col justify-between px-8 py-6">
                                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                                        {college.name}
                                    </h2>

                                    <div>
                                        <p className="leading-relaxed text-base mb-2">
                                            <span className="font-medium">Deadline:</span> {college.applicationPeriod}
                                        </p>
                                        <p className="leading-relaxed text-base mb-4">
                                            <span className="font-medium">Acceptance Rate:</span> {college.acceptanceRate}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => handleNavigation(college._id)}
                                        className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer"
                                    >
                                        Apply
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdmissionPage;