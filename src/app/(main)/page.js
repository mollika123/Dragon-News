import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}
export default async function Home() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto gap-4 my-[60px]">

      <div className=" col-span-3 ">
<LeftSideBar categories={categories} activeId={null} ></LeftSideBar>
      </div>
      
   <div className="text-3xl font-bold col-span-6">All News</div>
   <div className=" font-bold col-span-3"><RightSideBar></RightSideBar></div>
</div> 
  );
}
