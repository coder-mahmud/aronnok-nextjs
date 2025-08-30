import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

import { Cinzel } from 'next/font/google';
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'], // Add weights you need
  display: 'swap',
  variable: '--font-cinzel', // Optional: Use with CSS variable
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "Aronnok BD",
  description: "Making significant change in the industry",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cinzel.variable}>
      <body
        className={`antialiased`}
      > 
      <Header />
      <main className="mt-[85px]">
        {children}
      </main>

      <Footer/>
        
      </body>
    </html>
  );
}
