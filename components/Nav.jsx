"use client"
import Image from 'next/image'
import Link from "next/link";
import { UserAuth } from "@/context/authContext";

const Nav = () => {
  const {user, logout} = UserAuth();
  const handleLogout = async() =>{
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className="flex gap-2 flex-center">
        <p className="text-[18px]">Chat Me</p>
      </Link>
      {user && (
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2">
            <p className='text-[18px]'>{user?.displayName}</p>
            <Image 
              src={user?.photoURL}
              width={35}
              height={35}
              alt='user-logo'
              className='object-contain rounded-full'
            />
          </div>
          <button className='black_btn' onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  )
}

export default Nav