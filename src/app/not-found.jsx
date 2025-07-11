import Link from 'next/link';


const NotFoundPage404 = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-md">
                {/* Main heading */}
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-2.5 md:mb-5 lg:mb-8">
                    Page Not Found
                </h1>

                {/* Description text */}
                <p className="text-gray-500 lg:text-lg mb-2.5 md:mb-5 lg:mb-8 leading-relaxed">
                    Oops! We can't find that campus. It seems this path has led to a dead end, but don't worry, we'll help you get back on track.
                </p>

                {/* Back Home button */}
                <Link href="/">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 md:px-8 py-2 md:py-3 rounded-full transition-colors duration-200 cursor-pointer">
                        Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage404;