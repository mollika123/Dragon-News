import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '../../../../lib/data';

import { GiH2O } from 'react-icons/gi';



const NewsCategoryPage = async ({ params }) => {
  const {id} = await params;
 
    const categories = await getCategories();
  const news = await getNewsByCategoryId(id);
  return (
   <div className="grid grid-cols-12 w-11/12 mx-auto gap-4 my-[60px]">

      <div className=" col-span-3 ">
<LeftSideBar categories={categories} activeId={id} ></LeftSideBar>
      </div>
      
      <div className="text-lg pt-4 font-bold col-span-6 ">
        <h2 className='text-xl font-bold'>News By category</h2>
        
        <div className="space-y-4">
          {news.length>0?news.map(n => {
            return<NewsCard news={n} key={n._id} >{n.title}</NewsCard>
          }):<h2 className='text-xl text-purple-500 text-center font-bold'>No news found</h2>


        }</div>

   </div>
   <div className=" font-bold col-span-3"><RightSideBar></RightSideBar></div>
</div>
  );
};

export default NewsCategoryPage;