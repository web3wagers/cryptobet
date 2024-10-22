import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import SideBar from "@/src/components/SideBar";
import TopBar from "@/src/components/TopBar";

const roboto = Roboto({weight: ["400", "500", "700"], subsets: ["latin"]});

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
      <body className={`${roboto.className} flex bg-background`}>
        <SideBar />
        <div className={'flex flex-col w-full'}>
          <TopBar />
          <div className='content  bg-background w-full h-[100%]  pl-[25rem] pt-[12.5rem]'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
