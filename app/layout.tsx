import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Nav from "./ui/nav";
import Footer from "./ui/footer";
import "./globals.css";

const montserratSans = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dinh Dung",
  description: "Portfolio Dinh Dung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratSans.className} antialiased min-h-screen bg-no-repeat bg-cover`}>
        <Nav />
        <div className="m-auto w-[1440px] pb-[120px]">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
