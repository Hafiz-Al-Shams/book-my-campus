// src/app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          const res = await fetch(`https://book-my-campus-server.onrender.com/user-by-email?email=${email}`);
          const user = await res.json();

          if (!user || !user.password) {
            return null; // User not found
          }

          const isMatch = await bcrypt.compare(password, user.password);

          if (!isMatch) {
            return null; // Invalid password
          }

          // Return user info (excluding password) to be stored in JWT/session
          return {
            id: user._id,
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  // === Add these lines for JWT signing/encryption ===
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    // encryption: true, // you can enable this if you want encrypted JWTs
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" || account?.provider === "github") {
        try {
          const checkRes = await fetch(`https://book-my-campus-server.onrender.com/user-by-email?email=${user.email}`);

          if (checkRes.status === 404) {
            // User not found, insert new social user
            await fetch("https://book-my-campus-server.onrender.com/users/social", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: user.name,
                email: user.email,
              }),
            });
          }
        } catch (error) {
          console.error("Social login error:", error);
        }
      }

      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
