"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();
  // const handleSocialLogin= async (providerName) =>{
  //     console.log("Social Login", providerName);
  //     const result = await signIn(providerName, {rediect: false});
  //     console.log(result)
  // }
  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");

    }
  }, [session?.status]);
  return (
    <>
      <div className="">
        {/* Social Login Buttons */}
        {/* Social Login Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button
            onClick={() => handleSocialLogin("google")}
            type="button"
            className="flex items-center justify-center py-2.5 sm:py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            <FaGoogle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-500" />
            <span className="text-gray-700 font-medium text-sm sm:text-base">Google</span>
          </button>

          <button
            onClick={() => handleSocialLogin("github")}
            type="button"
            className="flex items-center justify-center py-2.5 sm:py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-800" />
            <span className="text-gray-700 font-medium text-sm sm:text-base">GitHub</span>
          </button>
        </div>
      </div>
    </>
  );
}
