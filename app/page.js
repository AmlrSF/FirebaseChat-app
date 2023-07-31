'use client'

import ChatNow from '@/components/ChatNow';
import {useState} from 'react';
import { UserAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation'

const Home = () => {
  const [isopen, setIsopen] = useState(false);
  const {user, logout} = UserAuth();
  const router = useRouter();

  return (
    <section className="w-full flex-center h-full justify-between flex-col ">
        <h1 className="head_text text-center">
            Chat & Have
            <br className="max-md:hidden"/>
            <span className="blue_gradient text-center">With your Friends</span>
        </h1>
        <p className="desc text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing 
            elit. Iure laborum, voluptas dolore ullam illo doloribus
            eaque voluptatum error quod beatae,
        </p>
        <button className="black_btn mt-5"
          onClick={()=>user ? router.push('/dashboard') :  setIsopen(true)}
        > Chat Now</button>

        <div className={`relative ${isopen ? 'block' : 'hidden'}`}>
            <div className='fixed inset-0 bg-black bg-opacity-25 ' />
          
            <ChatNow isopen={isopen} closeChat={()=>setIsopen(false)} />
        </div>
    </section>
  )
}

export default Home