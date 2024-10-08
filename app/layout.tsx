import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import TopNav from "./components/TopNav";
import Profile from "./components/Profile";
import SinglePost from "./components/SinglePost";
import MainNav from "./components/MainNav";
import Banner from "./components/Banner"
import Feed from "./components/Feed";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <main className="flex-col justify-center">
          <TopNav />
          <Banner />
        <div className="flex justify-center">
          <div className="container">
            <Profile />
            <MainNav />
            {children}
          </div>
          </div>
      </main>
    </body>
    </html>
  );
}
