import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hariharasudhan M | Full Stack Developer & Serverless Engineer",
  description: "Official portfolio of Hariharasudhan M - Full Stack Developer with 1+ year of experience building scalable web and mobile applications using the MERN stack and AWS Serverless architecture.",
  keywords: ["Hariharasudhan M", "Hariharasudhan Portfolio", "Full Stack Developer", "MERN Stack Developer", "AWS Serverless Engineer", "React Native Developer", "Node.js", "Madurai"],
  authors: [{ name: "Hariharasudhan M" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
