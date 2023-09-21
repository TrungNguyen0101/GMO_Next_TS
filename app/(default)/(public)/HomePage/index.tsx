import { NextPage } from "next";

export interface Props {}
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dữ liệu đã tải xong");
    }, 2000);
  });
}
const HomePage: NextPage<Props> = () => {
  const data = fetchData(); // Giả lập việc tải dữ liệu
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <main className="flex  flex-col items-center justify-between p-[20px]">
        <span>{data}</span>
      </main>
    </>
  );
};
export default HomePage;
