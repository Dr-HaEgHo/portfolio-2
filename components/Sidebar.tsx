import { infoProps } from '@/types'
import { Calendar, Call, Facebook, Instagram, Location, Sms, Whatsapp } from 'iconsax-react'
import Image from 'next/image'
import React, { FC } from 'react'

const skills = ['Website Design', 'Website Development']

const info = [
    {id: 1, label: 'email', detail:"awogbuyijames@gmail.com", icon: <Sms size="20" color="#9f1fef"/>, hyperlink:'mailto:awogbuyijames@gmail.com'},
    {id: 2, label: 'phone', detail:"+2348139347195", icon: <Call size="20" color="#9f1fef"/>, hyperlink:'#'},
    {id: 3, label: 'birth day', detail:"August 20th", icon: <Calendar size="20" color="#9f1fef"/>,},
    {id: 4, label: 'location', detail:"Ile-Ife, Nigeria", icon: <Location size="20" color="#9f1fef"/>,},

]

const InfoComponent:FC<infoProps> = ({data}) => {
    return (
        <div className='w-full flex items-center gap-4'>
            <div className='min-w-[46px] min-h-[46px] gradient--default duration-700 rounded-xl relative flex items-center justify-center before:[] before:absolute before:h-[45px] before:w-[45px] before:inset-[1px] before:rounded-xl before:-z-0 before:bg-eerieLight before:dark:bg-greyBg before:transition before:duration-700'>
                <div className='z-[999]'>
                    {data.icon}
                </div>
            </div>
            <div className='w-full flex flex-col items-start'>
                <h4 className='text--header  text-xs caps'>{data.label}</h4>
                { data.hyperlink && (<a href={data.hyperlink} className='text-ellipsis text-sm overflow-hidden max-w-[15ch]'>{data.detail}</a>)}
                {!data.hyperlink && (<p className='text--colors_default text-sm text-ellipsis transition-[1400ms] overflow-hidden max-w-[15ch]'>{data.detail}</p>)}
            </div>
        </div>
    )
}

const Sidebar = () => {
  return (
    <div className='bg--card  w-full h-full border--default border pt-[60px] p-[30px] rounded-[20px]'>
       <div className='w-full flex flex-col items-center'>
         
         {/* PHOTO */}
         <div className='w-[160px] h-[160px] rounded-full overflow-hidden bg-primary'>
            <Image
                src={require('../assets/image/avatar2.png')}
                alt='avater or profile picture of site owner'
            />
        </div>

        {/* NAME AND STACK */}
        <div className='w-full flex flex-col items-center'>
            <h1 className='text--color_default font-semibold text-[22px] py-[24px] text-center'>James Awogbuyi</h1>
            
            {/* Pills */}
            <div className='w-full flex flex-col items-center gap-1'>
                {
                    skills?.map((skill) => (
                        <div className='link--panel rounded-lg'>
                            <p className='text--color_default text-xs py-[5px] px-[18px] '>{skill}</p>
                        </div>
                    ))
                }
            </div>
        </div>

        {/* DIVIDER */}
        <div className=' border-b w-full my-8 border--default'/>


        {/* CONTACT INFORMATION */}
        <div className='w-full flex flex-col items-center gap-[30px] '>
            {
                info?.map((data) => (
                    <InfoComponent data={data}/>
                ))
            }
        </div>

        {/* SOCIALS */}
        <div className='my-[30px] flex gap-4 items-enter'>
            <a href="#">
                <Facebook size="26" variant='Bold' className='text-primary'/>
            </a>
            <a href="#">
                <Instagram size="26" variant='Bold' className='text-primary'/>
            </a>
            <a href="#">
                <Whatsapp size="26" variant='Bold' className='text-primary'/>
            </a>
        </div>

       </div>
    </div>
  )
}

export default Sidebar;