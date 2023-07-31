'use client'
import { UserAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation'
import {useEffect} from 'react'
const dashboard = () => {
    const {user} = UserAuth();
    const router = useRouter();

    if(user == null) return  router.push('/')
    
    return (
        <div>Welcome {user?.displayName}</div>
    )
}

export default dashboard;