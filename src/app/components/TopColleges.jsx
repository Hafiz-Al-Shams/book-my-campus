import Link from "next/link";


export const getColleges = async () => {
    const res = await fetch('https://book-my-campus-server.onrender.com/colleges')
    const data = await res.json();
    return data;
}


const TopColleges = async () => {
    const colleges = await getColleges();

    return (
        <div className="py-8">

            <h3 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-3 lg:mb-5">Top Colleges here:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colleges.map((d) => (
                    <Link
                        href={`/colleges/${d._id}`}
                        key={d._id}
                        className="block rounded-lg p-4 shadow-xs shadow-indigo-100 hover:shadow-lg transition"
                    >
                        <img
                            src={d.imgSrc}
                            alt={d.name}
                            className="h-56 w-full rounded-md object-cover"
                        />

                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">{d.name}</h3>
                            <p className="text-sm text-gray-500">
                                Application: {d.applicationPeriod}
                            </p>

                            {/* FIXED: Responsive flex container */}
                            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs">
                                {/* Rating */}
                                <div className="inline-flex shrink-0 items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-indigo-700"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                                    </svg>
                                    <div>
                                        <p className="text-gray-500">Rating</p>
                                        <p className="font-medium">{d.rating} / 5</p>
                                    </div>
                                </div>

                                {/* Acceptance Rate */}
                                <div className="inline-flex shrink-0 items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-indigo-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 3v18h18M18 18V8M12 18V12M6 18v-4"
                                        />
                                    </svg>
                                    <div>
                                        <p className="text-gray-500">Acceptance</p>
                                        <p className="font-medium">{d.acceptanceRate}</p>
                                    </div>
                                </div>

                                {/* Enrollment */}
                                <div className="inline-flex shrink-0 items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-indigo-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="text-gray-500">Enrollment</p>
                                        <p className="font-medium">{d.enrollment.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>


        </div>
    );
};

export default TopColleges;