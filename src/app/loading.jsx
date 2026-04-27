import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingPage = () => {
  return (
    <div className='flex h-[85vh] items-center justify-center'>
      Global LoadingPage
      <ClipLoader color={{color:'red'} } size={150} />
    </div>
  );
};

export default LoadingPage;