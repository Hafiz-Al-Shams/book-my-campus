import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NextAuthProvdider from "@/Providers/NextAuthProvider";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book My Campus",
  description: "Book My Campus is a responsive Next.js web application that lets students search colleges, view detailed profiles, apply for admission, and submit reviews—all through a secure, user-friendly interface.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvdider>
          <NavBar />

          <Toaster />
          <main className="pt-10 md:pt-14 lg:pt-16 min-h-screen max-w-7xl mx-auto px-3.5 md:px-5 lg:px-0">
            {children}
          </main>

          <Footer />
        </NextAuthProvdider>


      </body>




    </html>
  );
}
