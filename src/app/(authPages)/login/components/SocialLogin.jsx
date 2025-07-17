"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

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
    <div className="flex space-x-4">
      {/* <button className="bg-white text-[#665c7c] p-2 rounded">
        <FaFacebookF />
      </button>
      <button className="bg-white text-[#665c7c] p-2 rounded">
        <FaTwitter />
      </button> */}
      <button
        onClick={() => handleSocialLogin("google")}
        className="bg-white text-[#665c7c] p-2 rounded"
      >
        <FaGoogle />
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="bg-white text-[#665c7c] p-2 rounded"
      >
        <FaGithub />
      </button>
    </div>
  );
}
