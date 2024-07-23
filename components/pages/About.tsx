import { expertiseProps } from '@/types'
import { CodeCircle, Designtools, MessageProgramming, Mobile } from 'iconsax-react'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import Modal from '../Modal'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { clients, profileSummary, testimonials } from '@/assets/data'
import ExpertiseCard from '../ExpertiseCard'
import TestimonialCard from '../TestimonialCard'

const expertise = [
    {id:1, name: 'Web Design', description: 'The most modern and high-quality design made at a professional level.', icon: <Designtools size="40" color="#9f1fef"/>},
    {id:2, name: 'Web Development', description: 'High-quality development of sites at the professional level', icon: <CodeCircle size="40" color="#9f1fef"/>},
    {id:3, name: 'Mobile Apps', description: 'designed specifically for use on mobile devices such as smartphones and tablets', icon: <Mobile size="40" color="#9f1fef"/>},
    {id:4, name: 'AI Chatboot Service', description: 'to simulate human-like conversations, often used for customer support or information retrieval.', icon: <MessageProgramming size="40" color="#9f1fef"/>}
]


const About = () => {

    const [modalOpen, setModalOpen ] = useState<boolean>(false);
    const [ item, setItem ] = useState<expertiseProps | null>(null)

  return (
    <div className='w-full relative'>
        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
            <div>

            </div>
        </Modal>
        {/* ABOUT ME */}
        <div className='flex flex-col mb-10'>
            <h1 className='text--colors_default font-bold text-[32px]'>About Me</h1>
            <div className='w-10 h-[5px] my-[20px] rounded-full bg-gradient-to-r from-primary to-accent'/>
            <p className='text-[15px] font-[300]' dangerouslySetInnerHTML={{ __html: profileSummary }}></p>
        </div>

        {/* expertise */}
        <div className='flex flex-col mb-10'>
            <h1 className='text--colors_default font-semibold text-[24px] mb-[10px]'>Expertise</h1>
            <div className='grid grid-cols-2 grid-rows-2 gap-5'>
                {
                    expertise?.map((item) => (<ExpertiseCard data={item}/>))
                }
            </div>
        </div>
        
        {/* TESTIMONIALS */}
        <div className='w-full flex flex-col mb-10'>
            <h1 className='text--colors_default font-semibold text-[24px] mb-[20px]'>What poeple think</h1>
            <div className='w-full flex gap-5 '>
            <Swiper
                spaceBetween={0}
                slidesPerView={2}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}
                scrollbar={{
                    hide: false,
                  }}
                modules={[Scrollbar]}
                pagination={true}
                className='w-full p-0 m-0 flex items-end'
            >
                {
                    testimonials?.map((item, idx) => (
                    <SwiperSlide className='py-10 flex items-end'>
                        <TestimonialCard data={item} setModalOpen={setModalOpen}/>
                    </SwiperSlide>
                    ))
                }
                
            </Swiper> 
                {/* {
                    testimonials?.map((item) => (<TestimonialCard data={item} setModalOpen={setModalOpen}/>) )
                } */}
            </div>
        </div>
  
  
        {/* CLIENTS */}
        <div className='w-full flex flex-col'>
            <h1 className='text--colors_default font-semibold text-[24px] mb-[20px]'>My Clients</h1>
            <div className='w-full flex gap-5 '>
            <Swiper
                spaceBetween={0}
                slidesPerView={4}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}
                scrollbar={{
                    hide: false,
                  }}
                modules={[Scrollbar]}
                pagination={true}
                className='w-[90%] p-0 m-0 flex items-end'
            >
                {
                    clients?.map((item, idx) => (
                    <SwiperSlide className='py-10 flex items-end'>
                        <div className='w-full aspect-square rounded-lg overflow-hidden bg-linkPanel flex items-center'>
                            <Image 
                                src={item.image}
                                alt="client company image"
                                className='w-full'
                                width={1024}
                                height={1024}
                            />
                        </div>
                    </SwiperSlide>
                    ))
                }
                
            </Swiper> 
                {/* {
                    testimonials?.map((item) => (<TestimonialCard data={item} setModalOpen={setModalOpen}/>) )
                } */}
            </div>
        </div>
    </div>
  )
}

export default About;