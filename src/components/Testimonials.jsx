import React from 'react'
import Section from './common/Section'
import Abdul from '../assets/Abdul.png'





const Testimonials = () => {

    const Testimonial = [
        {
            id: 1,
            image: Abdul,
            names: "zakson",
            comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '

        },
        {
            id: 2,
            image: Abdul,
            names: "zakson",
            comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. '
        },
        {
            id: 3,
            image: Abdul,
            names: "zakson",
            comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'

        },

    ]

    return (
        <Section title='Testimonials 💬'
            subtitle='what all my clients says about me all arround the world'>

            <div className='max-w-xl flex flex-col gap-2'>
                {Testimonial.map(({ id, image, names, comment }) => {

                    return (

                        <div className='flex p-4 justify-center items-center rounded-xl shadow-md space-y-3 dark:shadow-gray-300' >
                            <div className='w-1/3'>
                                <img src={image} alt={names} className='w-20 h-20 object-cover object-top pt-2' />
                            </div>
                            <div className='w-2/3 flex flex-col justify-center items-center gap-8 p-2'>
                                <h3  className='text-xl font-semibold'>{names}</h3>
                                <p className='text-sm font-extralight'>{comment}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </Section>
    )
}

export default Testimonials