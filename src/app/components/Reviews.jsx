// File: app/user-dashboard/my-college/page.jsx

// Disable all built‑in caching for this route
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";



const Reviews = async () => {



    const res = await fetch(
        `https://book-my-campus-server.onrender.com/reviews`,
        { cache: "no-store" }
    );
    if (!res.ok) {
        throw new Error("Failed to load reviews");
    }
    const reviews = await res.json();



    return (
        <div className="max-w-6xl mx-auto px-4 pb-3.5 md:pb-8 lg:pb-16 mt-3.5 md:mt-8 lg:mt-10">
            <h1 className="text-3xl font-bold text-center mb-5">Reviews</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -mx-4 -my-8">
                        {reviews.map((singleReview) => (
                            <div key={singleReview._id} className="py-8 px-4 lg:w-1/3">
                                <div className="h-full flex items-start">

                                    {/* Date Section */}
                                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                        <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                                            {new Date(singleReview.reviewedAt).toLocaleDateString(
                                                "en-US",
                                                { month: "short" }
                                            )}
                                        </span>
                                        <span className="font-medium text-lg text-gray-800 title-font leading-none">
                                            {new Date(singleReview.reviewedAt).toLocaleDateString(
                                                "en-US",
                                                { day: "numeric" }
                                            )}
                                        </span>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-grow pl-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span key={i} className={`${i < singleReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                                    ★
                                                </span>
                                            ))}
                                            <span className="ml-1 text-gray-500">
                                                ({singleReview.rating}/5)
                                            </span>
                                        </h2>
                                        <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                                            {singleReview.collegeName}
                                        </h1>
                                        <p className="leading-relaxed mb-5">
                                            {singleReview.feedback}
                                        </p>
                                        <a className="inline-flex items-center">
                                            <img
                                                alt="student"
                                                src={singleReview.photoUrl}
                                                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                            />
                                            <span className="flex-grow flex flex-col pl-3">
                                                <span className="title-font font-medium text-gray-900">
                                                    {singleReview.name}
                                                </span>
                                            </span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;