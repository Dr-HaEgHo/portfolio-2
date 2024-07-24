import { projectsProps } from '@/types'
import { Eye } from 'iconsax-react'
import Image from 'next/image'
import React, { FC } from 'react'

const PortfolioCard:FC<projectsProps> = ({data}) => {
  return (
    <li className='w-full scale-in fade-in'>
        <a href={data?.link} className='parent w-full'>

            {/* Picture and all that entails */}
            <div className='w-full max-h-[194px] min-h-[130px] rounded-2xl overflow-hidden relative mb-[30px]'>
                <div className='child'>
                    <div className='child-icon h-12 w-12 rounded-lg bg--card flex items-center justify-center shadow-lg'>
                        <Eye color='#9f1fef' />
                    </div>
                </div>
                <Image
                    src={data?.image as string}
                    alt={data?.name}
                    className='child-image transition duration-200'
                    width={1024}
                    height={1024}
                />
            </div>

            {/* Text */}
            <div className='w-full'>
                <h2 className='text--colors_subhead text-[15px] font-normal'>{data?.name}</h2>
                <p className='text-colors_default text-[15px] font-normal'>{data?.category}</p>
            </div>
        </a>
    </li>
  )
}

export default PortfolioCard