// src/app/layout.js
import "./globals.css";
import { Poppins, Outfit } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

// Font styles and imports
const poppins = Poppins({ 
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'] 
});

const outfit = Outfit({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Correct path to favicon in the public folder */}
        <link rel="icon" href="/logos/favicon.png" />
      </Head>
      <body className={`${poppins.className} ${outfit.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}


