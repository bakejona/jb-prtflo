import "./globals.css";
import { Poppins, Outfit } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

//font styles and imports
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
      <body className={`${poppins.className} ${outfit.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}