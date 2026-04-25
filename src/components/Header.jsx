
import Image from 'next/image';
import logo from '../assets/logo.png'
import {  format } from "date-fns";
const Header = () => {
  return (
    <div className='container mx-auto text-center space-y-2 pt-8'>
      <Image src={logo} width={300} height={200} alt='logo'className='mx-auto'></Image>
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE,MMM dd,yyyy")};</p>
      
    </div>
  );
};

export default Header;