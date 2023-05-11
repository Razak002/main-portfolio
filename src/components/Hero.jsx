import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import artt from '../assets/artt.png'

const Hero = () => {

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

    window.addEventListener("scroll", function () {
        const downArrow = document.querySelector(".down-arrow");
        if (this.scrollY >=2) downArrow.classList.add("hide-down-arrow");
     else downArrow.classList.remove("hide-down-arrow");
    });

    return (
        <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
            <h2 className='text-5xl text-sky-500 font-bold md:uppercase'>Aliyu Abdulrazak</h2>
            <h3 className='py-3 text-2xl'>web developer</h3>

            <p className='max-w-xl font-light text-gray-500'>
                Hello <span className='animate-pulse text-4xl'>👋</span> welcome to my Crib I am enthusiastic, self-motivated and passionate 
I'm a web developer with in-depth experience in programming. In a nutshell, I create websites that help organizations address business challenges and meet their needs, also with great users experience.
           
            </p>
            <div className='flex justify-evenly text-3xl  w-full md:w-1/3 py-8 lg:py-16'>
                {/*socials*/}
                {SOCIAL.map(({ id, link, icon }) => (
                    <a
                        href={link}
                        key={id}
                        target='_blank'
                        rel='noopener noreferrer'
                        className="cursor-pointer duration-300 hover:text-sky-500 "
                    >
                        {icon}
                    </a>
                ))}
            </div>
            {/* avatar and resume*/}
            <div>
                <img src={artt} alt='abdul' className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-sky-500 rounded-xl pt-5' />
                <a href='#'
                    download={true}
                    className='flex items-center justify-center mt-10 bg-gradient-to-r from-sky-500  to-yellow-500 text-white py-2 rounded-lg'>
                    Resume
                </a>

            </div>

            {/*arrow down*/}
            <div className='mt-10 down-arrow'>
                <FaArrowDown className='text-gray-400 text-2xl animate-bounce' />
            </div>


        </section>
    )
}



export default Hero