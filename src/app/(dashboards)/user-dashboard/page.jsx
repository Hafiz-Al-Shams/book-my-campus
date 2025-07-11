import Link from 'next/link';
import React from 'react';

const UserDashBoard = () => {
    return (
        <div>
            <h1>user dashboard here</h1>
            <p>Welcome to your dashboard!</p>
            <p>Here you can manage your profile, view your college details, and more.</p>
            <div className="my-10 text-center bg-emerald-200">
                <Link href="/user-dashboard/my-college">
                    <li className="text-zinc-600 font-medium hover:text-yellow-500 cursor-pointer py-2">My Colleges List here</li>
                </Link>
            </div>
        </div>
    );
};

export default UserDashBoard;