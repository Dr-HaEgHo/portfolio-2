import { expertiseProps, skillsProps } from "@/types";
import { FC } from "react";

const SkillsCard:FC<skillsProps> = ({data}) => {
    return(
        <div className='w-full p-[30px] gap-[18px] gradient--default rounded-xl relative flex flex-col items-center before:[] before:absolute before:h-full before:w-full before:inset-[1px] before:rounded-xl before:-z-0 before:bg-eerieLight before:dark:bg-eerieDark before:transition before: '>
            {
                data?.map((item) => (
                    <div key={item.id} className='w-full flex flex-col items-start gap-2'> 
                        <div className="z-[999] flex items-center gap-1">
                            <h4 className='text--colors_default text-[15px] font-[500] z-[999]'>{item.name}</h4>
                            <p className="text--colors_default font-normal">{item.percentage}%</p>
                        </div>
                        <div className="w-full z-[999] h-2 bg-linkPanel">
                            <div style={{width: `${item.percentage}%`}} className="h-full rounded-full bg-gradient-to-r from-primary to-accent"/>
                        </div>
                    </div> 
                ))
            }
            
        </div> 
    )
}

export default SkillsCard;