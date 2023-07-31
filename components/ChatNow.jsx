
import { Fragment } from "react";
import Image from 'next/image'
import {Dialog,Transition} from '@headlessui/react'
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import "firebase/app";

import { UserAuth } from "@/context/authContext";


const ChatNow = ({isopen,closeChat}) => {
    const {googleSignIn, facebookSignIn} = UserAuth();

    const handleGoogle = async () =>{
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleFacebook = async () =>{
        try {
            await facebookSignIn()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Transition appear show={isopen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeChat}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25 ' />
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-out duration-300'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                            >
                            <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                                <button
                                    type='button'
                                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                    onClick={closeChat}
                                    >
                                    <Image
                                        src='/close.svg'
                                        alt='close'
                                        width={20}
                                        height={20}
                                        className='object-contain'
                                    />
                                    
                                </button>

                                <h3 className="head_text text-center">Login With.</h3>
                                    <div className="flex flex-col items-center gap-5">
                                        <div
                                            className='flex items-center gap-5 
                                            text-center font-bold justify-center py-4 text-[18px]
                                            cursor-pointer rounded-full bg-cyan-600 
                                            w-[150px] text-white'

                                            onClick={handleGoogle}
                                        >
                                            <GoogleOutlined /> Google
                                        </div>
                                        <div
                                            className='flex items-center gap-5 
                                            text-center font-bold justify-center py-4 text-[18px] 
                                            cursor-pointer rounded-full bg-cyan-600 w-[150px]
                                            text-white'
                                            
                                            onClick={handleFacebook}
                                        >
                                            <FacebookOutlined /> Facebook
                                        </div>
                                    </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default ChatNow