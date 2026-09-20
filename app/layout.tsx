import type { Metadata } from "next";
// 1. تصحيح اسم الخط المستورد (S كبيرة)
import { Rethink_Sans } from "next/font/google"; 
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";


const font = Rethink_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Landing page",
  description: "landing page with next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}