import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";




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
    icon: "/images/favicon.png", // This points to the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      {/* <Header /> */}
      <main className="px-4">
        {children}
      </main>
        
      </body>
    </html>
  );
}
