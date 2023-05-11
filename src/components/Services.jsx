import React from 'react'
import Section from './common/Section'
import prog from '../assets/prog.png'
import mobilee from '../assets/mobilee.png'
import ecom from '../assets/ecom.png'
import research from '../assets/research.png'

const Services = () => {

    const services = [

        {
            id: 1,
            image: prog,
            title: "programmng"
        },
        {
            id: 2,
            image: mobilee,
            title: "Mobile apps"
        },
        {
            id: 3,
            image: ecom,
            title: "E-Commerce websites"
        },
        {
            id: 4,
            image: research,
            title: "Assignment and projects research"
        }

    ]


    return (<Section title='Services 🛠️' subtitle='Over 100 participants on a virtual Townhall.
  Revisit a meeting anytime with the amazing recording feature.
  Privately Interact with another participant while in a meeting'>

        <div className='grid gap-10 lg:grid-cols-2'>

            {services.map(({ id, image, title }) => {

                return (
                    <div key={id}

                        className='flex flex-col items-center justify-center p-5 shadow-lg
                      dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'
                    >
                        <img src={image} alt={title}
                            className='w-36 h-36 md:w-44 md:h-44 object-contain'
                        />


                        <h3 className='mt-5 text-base'>{title}</h3>
                    </div>
                )
            })}

        </div>

    </Section>
    )

}

export default Services