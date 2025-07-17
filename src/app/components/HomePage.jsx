"use client";
import { useSession, signOut } from "next-auth/react";

const HomePage = () => {

  const handleSignOut = () => {
    signOut();
  }

  return (
    <div className='mb-10'>
      <h1>This is home</h1>

      <button className="border-2 p-2.5" onClick={handleSignOut}>logout</button>


    </div>
  );
};

export default HomePage;