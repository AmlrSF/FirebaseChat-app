'use client'
import { UserAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation'
import {ChatEngine} from 'react-chat-engine';

const dashboard = () => {
    const {user} = UserAuth();
    const router = useRouter();

    if(user == null) return  router.push('/')
    
    return (
        <ChatEngine 
            height="calc(100vh - 50px)"
            className='w-full'
            projectId='9596ef84-1811-4e57-b649-e81b8921f532'
            userName="."
            userSecret="."
        />
    )
}

export default dashboard;