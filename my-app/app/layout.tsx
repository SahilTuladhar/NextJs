import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default : 'Next.Js',
    template : ' %s | Next.Js'
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
       
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header
       style={{
        backgroundColor: 'lightblue',
        padding: '1rem',
       }}
       >
        <p>This is Root Navbar</p>
       </header>
      
        {children}

        <footer
      style={{
        backgroundColor:'ghostwhite',
        padding:'1rem',
      }}
      >
       <p>This is the Root footer </p>
      </footer>

      </body>

      
    </html>
  );
}
