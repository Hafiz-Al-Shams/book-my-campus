import React from 'react';

const AboutSlugPages = async ({ params }) => {

    const p = await params;
    console.log(p);

    return (
        <div>
            <h1>About slug pages</h1>
        </div>
    );
};

export default AboutSlugPages;