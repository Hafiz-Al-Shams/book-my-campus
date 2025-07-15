import Image from 'next/image';
import Link from 'next/link';



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


    return (
        <div>
            <h2 className='text-5xl font-bold'>Colleges from mongoDB through nodeJS server Here</h2>
            {
                colleges.map((d) => {
                    return (
                        <div className="space-y-10" key={d._id}>
                            <Link href={`/colleges/${d._id}`}>
                                {/* <img src={d.imgSrc} alt="" className="my-10" /> */}
                                <Image src={d.imgSrc} alt="" className="my-10 w-auto h-auto" width={50} height={50} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CollegesPage;