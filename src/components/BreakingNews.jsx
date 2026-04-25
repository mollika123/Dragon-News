import React from 'react';
import Marquee from 'react-fast-marquee';
const newsData = [
  {
    id: 1,
    title: "Global Markets Rally on Tech Surge",
    description: "Stock markets worldwide saw gains led by major tech companies.",
    date: "2026-04-24",
    source: "Reuters"
  },
  {
    id: 2,
    title: "New Renewable Energy Project Announced",
    description: "A large-scale solar initiative aims to power over 1 million homes.",
    date: "2026-04-23",
    source: "BBC News"
  },
  {
    id: 3,
    title: "AI Breakthrough in Medical Research",
    description: "Scientists develop AI capable of early disease detection with high accuracy.",
    date: "2026-04-22",
    source: "TechCrunch"
  },
  {
    id: 4,
    title: "Major Sports Event Draws Global Audience",
    description: "Millions tuned in to watch the championship finals this weekend.",
    date: "2026-04-21",
    source: "ESPN"
  },
  {
    id: 5,
    title: "New Space Mission Set for Launch",
    description: "International space agencies prepare for a joint lunar exploration mission.",
    date: "2026-04-20",
    source: "NASA"
  }
];
const BreakingNews = () => {
  return (
    <div className='flex justify-between gap-4 items-center mt-8 bg-gray-200 py-4 px-2 w-11/12 mx-auto '>
      <button className='btn btn-error text-white'>Latest News</button>
      <Marquee pauseOnHover={true} speed={100}>
        {newsData.map(data => {
         return <span key={data.id}>
            {data.description}
           
         </span>
       })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;