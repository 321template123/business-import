import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import Head from "next/head";
// import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Бизнес Import",
  description: "Бизнес Import",
	icons: "/assets/logo/LogoMini.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
			<Head>
				<title>Бизнес Import</title>
				<meta name="description" content="Надёжные услуги импорта для вашего бизнеса" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
				{/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
