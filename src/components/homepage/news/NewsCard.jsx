import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegEye, FaStar } from "react-icons/fa";
import { FcRating } from "react-icons/fc";


const NewsCard = ({ news }) => {
  console.log("news",news);
  return (
   <div className="card bg-base-100  shadow-sm">
      <div className="card-body">
        
{/* author info */}
        <div className="flex items-center justify-between bg-slate-200 p-4">
          <div className="flex gap-1 items-center">
            <Image src={news.author.img} alt="img" width={50} height={50} className="rounded-full"></Image></div>
          <div>
            <h2 className="font-semibold">{news.author?.name}</h2>
            <h2 className="text-xs">{news.author?.published_date }</h2>
          </div>
          <div className="flex items-center justify-between text-xl">
            <CiShare2 />
            <CiBookmark />
          </div>
        </div>
<h2 className="card-title">{news.title}</h2>
   
         <figure>
    <Image className="w-full"
      src={news.image_url} width={300}height={300}
      alt={news.title} />
      </figure>
        <p className="line-clamp-3">{news.details}</p>
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
         <h2 className="flex items-center"><FaStar className="text-xl text-yellow-500" /> {news.rating.number}</h2>  
          <h2 className="flex items-center"><FaRegEye /> {news.total_view}</h2> 
          </div>

          <Link href={`/news/${news._id}`}>   <button className="btn">See details</button></Link>
       
        </div>
    
  </div>
 
</div>
  );
};

export default NewsCard;