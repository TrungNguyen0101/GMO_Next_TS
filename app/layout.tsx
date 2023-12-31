import "./globals.css";
import type { Metadata } from "next";
import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(inter.variable, "flex flex-col min-h-screen")}
      >
        {children}
      </body>
    </html>
  );
}
