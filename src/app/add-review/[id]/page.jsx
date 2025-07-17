import AddReviewForm from "../components/AddReviewForm";


// single submission data will be loaded via _id
export const getSingleSubmission = async (submission_id) => {
    // const res = await fetch(`http://localhost:5000/submissions/${submission_id}`)
    const res = await fetch(`https://book-my-campus-server.onrender.com/submissions/${submission_id}`)
    const data = await res.json();
    return data;
}



// "collegeId": "68716db1625845b9b47dd625",
//     "collegeName": "Harvard University",
//     "collegeImgSrc": "/img_1.png",
//     "name": "sdfds",
//     "email": "fire@base100.com",
//     "program": "Business",
//     "phone": "546456",
//     "address": "54654",
//     "dob": "2025-07-04",
//     "photoUrl": "https://i.ibb.co/dZ0X5gK/Screenshot-687.png",
//     "submittedAt": "2025-07-16T17:51:26.975Z"




const AddSpecificCollegeReview = async ({ params }) => {
    const { id } = await params;

    const singleSubmission = await getSingleSubmission(id)

    if (singleSubmission) {
        return (
            <>
                <div>
                    <h1 className="text-center bg-amber-200 text-3xl">submission from MongoDB -- Detail Page</h1>
                    <p className="text-xl">Submission-ID: {id}</p>
                    <p className="text-xl">Candidate Name: {singleSubmission.name}</p>
                    <p className="text-xl">collegeName: {singleSubmission.collegeName}</p>
                    <p className="text-xl">Candidate email: {singleSubmission.email}</p>
                    <p className="text-xl">Program: {singleSubmission.program}</p>
                    <p className="text-xl">Phone: {singleSubmission.phone}</p>
                    <p className="text-xl">address: {singleSubmission.address}</p>
                    <p className="text-xl">DOB: {singleSubmission.dob}</p>
                    <img src={singleSubmission.photoUrl} alt="" />
                    <img src={singleSubmission.collegeImgSrc} alt="" />
                </div>
                <div className="">
                    <AddReviewForm submission={singleSubmission} submissionId={id} />
                </div>
            </>
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

export default AddSpecificCollegeReview;