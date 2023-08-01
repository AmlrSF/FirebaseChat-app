'use client'
import { UserAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation'
import {ChatEngine} from 'react-chat-engine';
import {useRef, useEffect,useState} from 'react';
import * as axios from 'axios';
const dashboard = () => {
    const {user} = UserAuth();
    const router = useRouter();
    let [loading, setLoading] = useState(true);

    const getImage = async(url)=>{
        try {
            const repsonse = await fetch(url);
            const data = await repsonse.blob();

            return new File([data],'userPhoto.jpg',{type:"image/jpg"});

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(async ()=>{
        console.log(user);
        if(!user) return  router.push('/');

        axios.get('https://api.chatengine/users/me',{
            Headers : {
                "project-id" : "2b833ba6-6c62-4178-a742-c7e0f9d80ef4",
                "user-name":user.email,
                "user-secret":user.uid
            }
        }).then(()=>setLoading(false))
        .catch(()=>{
            let formData = new FormData();
            formData.append('email',user.email);
            formData.append('username',user.displayName);
            formData.append('secret',user.uid);
            getImage(user.photoURL).then((avatar)=>'avatar',avatar, avtar.name)
            .catch(()=>{
                axios.post('https://api.chatengine/users/me',{
                    Headers : {
                        "private-key":"892b598f-25d8-46ee-b928-10375af455e6"
                    }
                    ,formData
                }).then(()=>setLoading(false))
                .catch((err)=>console.log(err))
            })
        })
    

    },[user])

    if(!user || loading) return 'loading....'
    
    return (
        <ChatEngine 
            height="calc(100vh - 50px)"
            className='w-full'
            projectId='2b833ba6-6c62-4178-a742-c7e0f9d80ef4'
            userName={user.email}
            userSecret={user.uid}
        />
    )
}

export default dashboard;