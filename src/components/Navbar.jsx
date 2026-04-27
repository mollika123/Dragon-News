"use client"
import { montserrat } from "../app/fonts";
import Link from 'next/link';

import avatar from '../assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { userAc } from "better-auth/plugins/admin/access";
const Navbar = () => {
  
  const { data: session,isPending} = authClient.useSession();

  const user = session?.user;
  console.log("session",session);
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

    {isPending?(<span className="loading loading-bars loading-xl"></span>) :user?  <div className='flex justify-between items-center gap-2'>
        <h2>Hello,{user.name }</h2>
        <Image src={user?.image||avatar} width={60} height={60} alt="user"></Image><button className='btn btn-active' onClick={async()=>await authClient.signOut()}>Logout</button>
        
      </div>:<button className='btn btn-active'><Link href={'/login'}>Login</Link></button>}
      
    </div>
  );
};

export default Navbar;