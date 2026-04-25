import { montserrat } from '@/app/layout';
import Link from 'next/link';
import React from 'react';
import avatar from '../assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';
const Navbar = () => {
  return (
    <div className='flex justify-between w-11/12 mx-auto py-9'>
      <div></div>
      <ul className='flex justify-between items-center text-gray-700 gap-3'>
       <li>
        <NavLink href={"/"} className={`text-purple-700 font-bold`}>Home</NavLink>
       </li>
       <li>
        <NavLink href={"/about-us"}>About</NavLink>
       </li>
       <li>
        <NavLink href={"/career"}>Career</NavLink>
       </li>
      
      </ul>

      <div className='flex justify-between items-center gap-2'>
        <Image src={avatar} width={60} height={60} alt="user"></Image>
        <button className='btn btn-active'><Link href={'/login'}>Login</Link></button>
      </div>
    </div>
  );
};

export default Navbar;