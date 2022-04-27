import { Navigtaion } from "@src/components/common";
import Posts from "@src/components/home/Posts";
import Stories from "@src/components/home/Stories";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div className="py-2">
        <Stories />
      </div>
      <Posts />
    </div>
  );
};

export default Home;
