import React from 'react'
import Section from './common/Section'
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from 'react-icons/fa';

import phone1 from '../assets/phone1.png'



const Contact = () => {



    const SOCIAL = [
        {
            id: 1,
            link: "https://twitter.com/home",
            icon: <FaTwitter />

        },
        {
            id: 2,
            link: "https://web.facebook.com/?_rdc=1&_rdr",
            icon: <FaFacebook />

        },
        {
            id: 3,
            link: "https://www.linkedin.com/feed/",
            icon: <FaLinkedin />

        },
    ];

    return (
        <Section title='Contact ☏' subtitle='if you ever need to contact me am readily available'>


            <div className='flex flex-col items-center justify-center gap-8 text-center '>
                <div><img src={phone1} alt='contact info' className='w-40 h-40' /></div>
                <div>
                    <p className=' max-w-xs md:max-w-lg font-extralight'> i am open to talk regarding web development tutorship and web designs for all kind of websites</p>
                </div>
                <div className='flex w-full items-center justify-evenly text-3xl'>
                    {SOCIAL.map(({ id, link, icon }) => {
                        return (
                            <a href={link} target='_blank'
                                rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-sky-500' >{icon}</a>
                        )
                    })}
                </div>
                <div className='p-8 text-left w-full flex items-center justify-center'>
                    <form action='https://getform.io/f/6e9c8981-42c6-4d26-b394-68473cf4a4ed' method='POST'>
                        <div className='gap-4 w-full'>
                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2'>
                                    name
                                </label>
                                <input type='text' name='name' className='border-2 rounded-lg  p-3 flex 
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2'>
                                    phone
                                </label>
                                <input type='text' name='phone' className='border-2 rounded-lg  p-3 flex 
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                                />
                            </div>

                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2'>
                                    Email
                                </label>
                                <input type='text' name='email' className='border-2 rounded-lg  p-3 flex 
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2'>
                                    message
                                </label>
                                <textarea name='message' rows='10' className='border-2 rounded-lg  p-3 flex 
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'>
                                </textarea>
                            </div>
                        </div>

                        <div className='flex items-center justify-center'>
                            <button className='my-8 bg-gradient-to-r from-sky-500  to-yellow-500 text-white px-6 py-3  uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'>
                                SEND MESSAGE
                            </button>
                        </div>


                    </form>






                </div>


            </div>







        </Section>



    )
}

export default Contact