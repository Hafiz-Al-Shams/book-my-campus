"use client";

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const CollegeSearchInput = () => {

    const [search, setSearch] = useState("");


    useEffect(() => {
        if (search) { // Only show toast if search is not empty
            toast.error("Failed To Search");
        }
    }, [search]);

    return (
        <div className='mt-3.5 lg:mt-7 text-right'>
            <h5 className='text-lg text-gray-700'>Search for Colleges</h5>
            {/* search field */}
            <div className="pt-1">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='border-2 border-gray-700' />
            </div>
        </div>
    );

};

export default CollegeSearchInput;


