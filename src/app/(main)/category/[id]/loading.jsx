
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
     <div className='flex h-[85vh] items-center justify-center'>
      News By Category Loading
      <ClipLoader color="red"  size={150} />
    </div>
  );
};

export default Loading;