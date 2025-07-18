"use client";

import Link from "next/link";

const Banner = () => {


    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen">

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>

                {/* Geometric Shapes */}
                <div className="absolute top-10 right-10 w-20 h-20 border-2 border-gray-300/40 rotate-45 animate-spin animation-duration-[20s]"></div>
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-200 to-indigo-200 rotate-12 animate-bounce animation-delay-1000"></div>
                <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full animate-ping animation-delay-3000"></div>

                {/* Floating Particles */}
                <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-500 animation-duration-[3s]"></div>
                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse animation-delay-1500"></div>
                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-bounce animation-delay-2500 animation-duration-[4s]"></div>

                {/* Gradient Waves */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-full animate-pulse animation-duration-[8s]"></div>
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-indigo-100/50 to-blue-100/50 rounded-full animate-pulse animation-duration-[10s] animation-delay-2000"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 px-4 text-center flex flex-col items-center justify-center min-h-screen">

                {/* Animated Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-800 transform animate-fade-in-up animation-delay-500">
                    <span className="inline-block animate-bounce animation-delay-1000">Find</span>
                    <span className="inline-block animate-bounce animation-delay-1200 ml-2">Your</span>
                    <span className="inline-block animate-bounce animation-delay-1400 ml-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dream</span>
                    <span className="inline-block animate-bounce animation-delay-1600 ml-2 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Campus,</span>
                    <br className="md:hidden" />
                    <span className="inline-block animate-bounce animation-delay-1800 ml-2">Shape</span>
                    <span className="inline-block animate-bounce animation-delay-2000 ml-2">Your</span>
                    <span className="inline-block animate-bounce animation-delay-2200 ml-2 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Future!</span>
                </h1>

                {/* Animated Subtitle */}
                <p className="md:text-lg max-w-5xl mx-auto leading-relaxed text-gray-600 transform animate-fade-in-up animation-delay-3000 hover:text-gray-800 transition-colors duration-300">
                    <span className="inline-block animate-pulse animation-delay-3500">Discover</span>
                    <span className="ml-1">your dream college with ease, connecting you to top institutions tailored to your academic and personal goals.</span>
                    <span className="inline-block animate-pulse animation-delay-4000 ml-1">Explore</span>
                    <span className="ml-1">cutting-edge research opportunities, vibrant campus life, and key programs that inspire success.</span>
                    <span className="inline-block animate-pulse animation-delay-4500 ml-1 font-semibold text-blue-600">Start your journey today with confidence and clarity.</span>
                </p>

                {/* Animated CTA Button */}
                <div className="mt-8 transform animate-fade-in-up animation-delay-5000">
                    <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse">

                        <Link href={`/colleges`}>
                            <span className="relative z-10">Explore Colleges</span>
                        </Link>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </button>
                </div>

                {/* Animated Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce animation-delay-6000">
                    <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-500/70 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animation delays and durations */}
            <style jsx>{`
                .animation-delay-500 { animation-delay: 0.5s; }
                .animation-delay-1000 { animation-delay: 1s; }
                .animation-delay-1200 { animation-delay: 1.2s; }
                .animation-delay-1400 { animation-delay: 1.4s; }
                .animation-delay-1500 { animation-delay: 1.5s; }
                .animation-delay-1600 { animation-delay: 1.6s; }
                .animation-delay-1800 { animation-delay: 1.8s; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-2200 { animation-delay: 2.2s; }
                .animation-delay-2500 { animation-delay: 2.5s; }
                .animation-delay-3000 { animation-delay: 3s; }
                .animation-delay-3500 { animation-delay: 3.5s; }
                .animation-delay-4000 { animation-delay: 4s; }
                .animation-delay-4500 { animation-delay: 4.5s; }
                .animation-delay-5000 { animation-delay: 5s; }
                .animation-delay-6000 { animation-delay: 6s; }
                .animation-duration-[3s] { animation-duration: 3s; }
                .animation-duration-[4s] { animation-duration: 4s; }
                .animation-duration-[8s] { animation-duration: 8s; }
                .animation-duration-[10s] { animation-duration: 10s; }
                .animation-duration-[20s] { animation-duration: 20s; }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default Banner;