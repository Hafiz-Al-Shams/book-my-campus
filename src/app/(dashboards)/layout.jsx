import React from 'react';

const DashBoardLayout = ({ children }) => {
    return (
        <div>

            <div className="grid grid-cols-12">
                {/* side navbar */}
                <div className="col-span-3 border-2 border-gray-300">
                    <ul>
                        <li>profile</li>
                        <li>settings</li>
                        <li>menu</li>
                    </ul>
                </div>

                {/* dashboard content */}
                <div className="col-span-9 border-2 border-gray-300">
                    {children}

                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;