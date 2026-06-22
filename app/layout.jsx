import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Script from "next/script";

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
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '876441661625346');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>



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
