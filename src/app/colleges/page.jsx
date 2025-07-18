import Link from 'next/link';
import { Star, Users, FileText, Calendar, TrendingUp } from 'lucide-react';



export const getColleges = async () => {
    const res = await fetch('https://book-my-campus-server.onrender.com/colleges')
    const data = await res.json();
    return data;
}



const CollegesPage = async () => {

    const colleges = await getColleges();

    // const data = [
    //     {
    //         _id: 1,
    //         name: "University of Oxford",
    //         imgSrc: "/img_1.png",  // replace with actual image path
    //         detailsLink: "/colleges/oxford",

    //         // shared fields
    //         applicationPeriod: "Oct 1 – Jan 15",
    //         events: ["Teddy Hall Ball", "Oxford Union Debates", "May Morning"],
    //         researchPapers: 2000,            // just a number
    //         sports: ["Rowing", "Rugby", "Cricket"],

    //         // second‑style fields
    //         rating: 4.7,
    //         stars: 5,
    //         researchCount: 2000,             // just a number
    //         acceptanceRate: "17%",
    //         enrollment: 24000,               // just a number
    //         keyPrograms: ["Humanities", "Law", "Medicine"],
    //     },
    //     {
    //         _id: 2,
    //         name: "University of Cambridge",
    //         imgSrc: "/img_1.png",  // replace with actual image path
    //         detailsLink: "/colleges/cambridge",

    //         applicationPeriod: "Oct 1 – Jan 25",
    //         events: ["May Bumps", "Cambridge Science Festival"],
    //         researchPapers: 1800,
    //         sports: ["Rowing", "Rugby", "Athletics"],

    //         rating: 4.6,
    //         stars: 5,
    //         researchCount: 1800,
    //         acceptanceRate: "19%",
    //         enrollment: 20000,
    //         keyPrograms: ["STEM", "Economics", "Architecture"],
    //     },
    //     {
    //         _id: 3,
    //         name: "Harvard University",
    //         imgSrc: "/img_1.png",  // replace with actual image path
    //         detailsLink: "/colleges/harvard",

    //         applicationPeriod: "Sep 1 – Nov 1",
    //         events: ["Harvard Arts First", "Primal Scream"],
    //         researchPapers: 2500,
    //         sports: ["Basketball", "Crew", "Ice Hockey"],

    //         rating: 4.9,
    //         stars: 5,
    //         researchCount: 2500,
    //         acceptanceRate: "5%",
    //         enrollment: 23000,
    //         keyPrograms: ["Business", "Law", "Engineering"],
    //     },
    //     {
    //         _id: 4,
    //         name: "Massachusetts Institute of Technology (MIT)",
    //         imgSrc: "/img_1.png",  // replace with actual image path
    //         detailsLink: "/colleges/mit",

    //         applicationPeriod: "Sep 15 – Jan 5",
    //         events: ["HackMIT", "Tech Fair"],
    //         researchPapers: 2700,
    //         sports: ["Soccer", "Volleyball", "Sailing"],

    //         rating: 4.8,
    //         stars: 5,
    //         researchCount: 2700,
    //         acceptanceRate: "7%",
    //         enrollment: 11500,
    //         keyPrograms: ["Computer Science", "Aerospace", "Physics"],
    //     },
    //     {
    //         _id: 5,
    //         name: "Stanford University",
    //         imgSrc: "/img_1.png",  // replace with actual image path
    //         detailsLink: "/colleges/stanford",

    //         applicationPeriod: "Oct 1 – Jan 3",
    //         events: ["Big Game", "Stanford Film Festival"],
    //         researchPapers: 2200,
    //         sports: ["Football", "Swimming", "Tennis"],

    //         rating: 4.8,
    //         stars: 5,
    //         researchCount: 2200,
    //         acceptanceRate: "4%",
    //         enrollment: 17000,
    //         keyPrograms: ["Entrepreneurship", "Design", "Medicine"],
    //     },
    //     {
    //         _id: 6,
    //         name: "Yale University",
    //         imgSrc: "/img_1.png",  // replace with actual image path
    //         detailsLink: "/colleges/yale",

    //         applicationPeriod: "Sep 15 – Jan 2",
    //         events: ["Spring Fling", "Yale Black Arts Festival"],
    //         researchPapers: 1600,
    //         sports: ["Crew", "Soccer", "Golf"],

    //         rating: 4.5,
    //         stars: 4,
    //         researchCount: 1600,
    //         acceptanceRate: "6%",
    //         enrollment: 13500,
    //         keyPrograms: ["Arts", "History", "Environmental Science"],
    //     },
    // ];

    // Helper function to render stars
    const renderStars = (rating, totalStars) => {
        const stars = [];
        const fullStars = Math.floor(rating);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
        }

        const remainingStars = totalStars - fullStars;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Star key={fullStars + i} className="w-4 h-4 text-gray-300" />);
        }

        return stars;
    };


    return (
        <div className='pt-6 md:pt-3 lg:pt-6 pb-8 md:pb-10 lg:pb-16'>
            <div className="p-3 sm:p-4 md:p-6 min-h-screen">
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-800 text-center sm:text-left'>
                    Discover your future Campus
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                    {
                        colleges.map((d) => {
                            return (
                                <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm" key={d._id}>
                                    {/* College Image Placeholder */}
                                    <div className="h-28 sm:h-32 bg-gray-200 flex items-center justify-center">
                                        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-300 rounded-full flex items-center justify-center">
                                            {/* <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full"></div> */}
                                            <img src={d.imgSrc} alt="" className='w-24 h-24 sm:w-28 sm:h-28 rounded-full' />
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-3 sm:p-4">
                                        {/* College Name */}
                                        <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base leading-tight">
                                            {d.name}
                                        </h3>

                                        {/* Rating */}
                                        <div className="flex items-center mb-3">
                                            <div className="flex mr-2">
                                                {renderStars(d.rating, d.stars)}
                                            </div>
                                            <span className="text-xs sm:text-sm text-gray-600">
                                                {d.rating} of {d.stars} Stars
                                            </span>
                                        </div>

                                        {/* Statistics Row 1 */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-3">
                                            <div className="flex items-center">
                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1" />
                                                <div>
                                                    <div className="text-xs text-gray-500">Admission:</div>
                                                    <div className="text-xs font-medium text-gray-700">
                                                        {d.applicationPeriod}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1" />
                                                <div>
                                                    <div className="text-xs text-gray-500">Research:</div>
                                                    <div className="text-xs font-medium text-gray-700">
                                                        {d.researchCount}+
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Statistics Row 2 */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-3">
                                            <div className="flex items-center">
                                                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1" />
                                                <div>
                                                    <div className="text-xs text-gray-500">Acceptance:</div>
                                                    <div className="text-xs font-medium text-gray-700">
                                                        {d.acceptanceRate}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1" />
                                                <div>
                                                    <div className="text-xs text-gray-500">Enrollment:</div>
                                                    <div className="text-xs font-medium text-gray-700">
                                                        {d.enrollment.toLocaleString()} Students
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Key Programs */}
                                        <div className="mb-4">
                                            <div className="text-xs text-gray-500 mb-2">Key Programs:</div>
                                            <div className="flex flex-wrap gap-1">
                                                {d.keyPrograms.map((program, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                                    >
                                                        {program}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Details Button */}
                                        <Link href={`/colleges/${d._id}`}>
                                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium transition-colors touch-manipulation cursor-pointer">
                                                Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CollegesPage;