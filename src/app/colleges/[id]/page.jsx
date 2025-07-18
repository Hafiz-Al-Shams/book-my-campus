import { Star, Users, FileText, Calendar, TrendingUp, MapPin, Trophy, BookOpen, GraduationCap, CalendarDays } from 'lucide-react';


export const getSingleCollege = async (college_id) => {
    const res = await fetch(`https://book-my-campus-server.onrender.com/colleges/${college_id}`)
    const data = await res.json();
    return data;
}



const CollegeDetailPage = async ({ params }) => {

    // Helper function to render stars
    const renderStars = (rating, totalStars) => {
        const stars = [];
        const fullStars = Math.floor(rating);

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
        }

        const remainingStars = totalStars - fullStars;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Star key={fullStars + i} className="w-5 h-5 text-gray-300" />);
        }

        return stars;
    };

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

    const { id } = await params;

    const singleCollege = await getSingleCollege(id)

    if (singleCollege) {
        return (
            <div className="min-h-screen pt-6 md:pt-3 lg:pt-6 pb-5 md:pb-7 lg:pb-16">
                {/* Header */}
                <div className="bg-white shadow-2xs border-b border-gray-50/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                College Details
                            </h1>
                            <p className="text-gray-600">Complete information about your selected college</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Side - College Information */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* College Name and Rating */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-0">
                                        {singleCollege.name}
                                    </h2>
                                    <div className="flex items-center">
                                        <div className="flex mr-2">
                                            {renderStars(singleCollege.rating, singleCollege.stars)}
                                        </div>
                                        <span className="text-lg font-semibold text-gray-700">
                                            {singleCollege.rating}/5.0
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">College ID: {id}</p>
                            </div>

                            {/* Quick Stats */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Statistics</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <TrendingUp className="w-8 h-8 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Acceptance Rate</p>
                                            <p className="text-lg font-semibold text-gray-900">{singleCollege.acceptanceRate}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <Users className="w-8 h-8 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Total Enrollment</p>
                                            <p className="text-lg font-semibold text-gray-900">{singleCollege.enrollment.toLocaleString()} Students</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <FileText className="w-8 h-8 text-purple-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Research Papers</p>
                                            <p className="text-lg font-semibold text-gray-900">{singleCollege.researchCount}+</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <Calendar className="w-8 h-8 text-orange-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Application Period</p>
                                            <p className="text-lg font-semibold text-gray-900">{singleCollege.applicationPeriod}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Key Programs */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <GraduationCap className="w-6 h-6 mr-2 text-blue-500" />
                                    Key Programs
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {singleCollege.keyPrograms.map((program, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                                        >
                                            {program}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Sports */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                                    Sports & Athletics
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {singleCollege.sports.map((sport, index) => (
                                        <span
                                            key={index}
                                            className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium"
                                        >
                                            {sport}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Events */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <CalendarDays className="w-6 h-6 mr-2 text-green-500" />
                                    Campus Events
                                </h3>
                                <div className="space-y-3">
                                    {singleCollege.events.map((event, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                            <span className="text-gray-700 font-medium">{event}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Side - College Image */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-8">
                                <div className="aspect-w-16 aspect-h-12">
                                    <img
                                        src={singleCollege.imgSrc}
                                        alt={singleCollege.name}
                                        className="w-full h-80 object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Campus View</h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Experience the beautiful campus of {singleCollege.name}
                                    </p>

                                    {/* Additional Info Card */}
                                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">Overall Rating</span>
                                            <span className="text-sm font-semibold text-gray-900">{singleCollege.rating}/5.0</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">Research Output</span>
                                            <span className="text-sm font-semibold text-gray-900">{singleCollege.researchPapers} Papers</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">Students</span>
                                            <span className="text-sm font-semibold text-gray-900">{singleCollege.enrollment.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <>
                <h2 className="text-2xl text-center font-semibold">College Not Found</h2>
            </>
        );
    }


};

export default CollegeDetailPage;