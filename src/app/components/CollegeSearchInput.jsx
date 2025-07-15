"use client";

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const CollegeSearchInput = () => {
    // const [colleges, setColleges] = useState([]);
    const [search, setSearch] = useState("");

    const router = useRouter();
    const pathName = usePathname();


    useEffect(() => {

        const searchQuery = { search };
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathName}?${urlQueryParam}`;
        router.push(url);
        // fetchColleges();
    }, [search]);

    return (
        <div>
            {/* search field */}
            <div className="bg-blue-50 flex justify-center items-center p-5">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='border-2' />
            </div>
        </div>
    );
};

export default CollegeSearchInput;