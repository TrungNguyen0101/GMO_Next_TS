import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { NextPage } from "next";
import React, { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}
const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
};
export default RootLayout;
