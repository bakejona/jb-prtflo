import "./globals.css";
import { Poppins, Outfit } from 'next/font/google';

//font styles and imports
const poppins = Poppins({ weight: '700', subsets: ['latin'] });
const outfit = Outfit({ weight: '400', subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${outfit.className}`}>
        {children}
      </body>
    </html>
  );
}