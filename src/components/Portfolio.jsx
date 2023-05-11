import React from 'react'
import Section from './common/Section'
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'
import comerce from '../assets/comerce.png'
import serv1 from '../assets/serv1.png'
import gym from '../assets/gym.png'
import portfolio from '../assets/portfolio.png'

const Portfolio = () => {

    const projects = [

        {
            id: 1,
            image: serv1,
            title: "Food recipe",
            github: "https://github.com/Razak002/Recipe",
            demo: "https://recipe-gldpaf1wo-razak002.vercel.app/ "
        },
        {
            id: 2,
            image: comerce,
            title: "E commerce",
            github: "https://github.com/Razak002/commerce",
            demo: "https://commerce-mb85978gj-razak002.vercel.app/ "
        },
        {
            id: 3,
            image: gym,
            title: "Gymnastics website",
            github: "https://github.com/Razak002/gymst539",
            demo: "https://gymst539.vercel.app/"
        },
        {
            id: 4,
            image: portfolio,
            title: "Portfolio wesite",
            github: "https://github.com/Razak002/Belema-portfolio",
            demo: "https://belema-portfolio.vercel.app/"
        }

    ]

    return <Section title='portfolio 💼'
        subtitle='Over 100 participants on a virtual Townhall.
   Revisit a meeting anytime with the amazing recording feature.
   Privately Interact with another participant while in a meetin'
    >
        <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
            {projects.map(({ id, image, title, github, demo }) => {

                return (
                    <div key={id} className='max-w-lg flex shadow-lg shadow-gray-100 rounded-2xl overflow-hidden'>
                        <img src={image} alt={title} className='w-2/3 ' />
                        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                            <h2>{title}</h2>
                            <a className='text-lg md:text-2xl cursor-pointer duration-150 hover:scale-110' href={github} target='_blank'
                                rel='noopener noreferrer'>
                                <FaGithub />
                            </a>
                            <a className='text-lg md:text-2xl cursor-pointer duration-150 hover:scale-110' href={demo} target='_blank'
                                rel='noopener noreferrer'>
                                <FaExternalLinkSquareAlt />
                            </a>
                        </div>
                    </div>
                )

            })}

        </div>

    </Section>
}

export default Portfolio;