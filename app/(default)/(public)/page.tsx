import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense, lazy } from "react";

// const HomePage = dynamic(() => import("./HomePage"), {
//   ssr: false,
// }); //không tham gia SSR
const HomePage = lazy(() => import("./HomePage"));

export interface Props {}
const page: NextPage<Props> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage></HomePage>
    </Suspense>
  );
};
export default page;
