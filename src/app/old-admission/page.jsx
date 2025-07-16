"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const OldAdmissionPage = () => {
    const router = useRouter();

    const isLoggedIn = false; // This should be replaced with actual authentication logic

    const handleNavigation = () => {
        if (isLoggedIn) {

            router.push('/colleges');
        }
        else {
            router.push('/');
        }
    }

    return (
        <div>
            <p className="text-right text-3xl">all admissions info here</p>
            <p className='bg-red-300'>
                <Link href="/colleges">
                    COLLEGES Page
                </Link>
            </p>

            <div className="bg-blue-300 mt-2.5">
                <button type='button' onClick={handleNavigation} className=''>COLLEGES Page</button>
            </div>
        </div>
    );
};

export default OldAdmissionPage;