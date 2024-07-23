import { expertiseProps } from "@/types";
import { FC } from "react";

const ExpertiseCard:FC<expertiseProps> = ({data}) => {
    return(
        <div className='w-full p-[30px] gap-[18px] gradient--default rounded-xl relative flex items-center before:[] before:absolute before:h-full before:w-full before:inset-[1px] before:rounded-xl before:-z-0 before:bg-eerieLight before:dark:bg-eerieDark before:transition before: '>
            <div className='z-[999]'> 
                {data.icon}
            </div> 
            <div className='w-full flex flex-col items-start gap-2'> 
                <h4 className='text--colors_default text-lg font-bold z-[999]'>{data.name}</h4>
                <h4 className='text--para_default text-[15px] z-[999]'>{data.description}</h4>
            </div> 
        </div> 
    )
}

export default ExpertiseCard;