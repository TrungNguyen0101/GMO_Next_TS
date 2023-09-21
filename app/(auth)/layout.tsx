import { NextPage } from "next";
import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}
const AuthLayout: NextPage<Props> = ({ children }) => {
  return children;
};
export default AuthLayout;
