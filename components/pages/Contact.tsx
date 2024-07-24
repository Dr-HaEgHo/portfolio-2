import { Send } from 'iconsax-react';
import React from 'react'

const Contact = () => {
    return (
        <div className="w-full relative">
          {/* ABOUT ME */}
          <div className="flex flex-col mb-10">
            <h1 className="text--colors_default font-bold text-[32px]">
              Contact
            </h1>
            <div className="w-10 h-[5px] my-[20px] rounded-full bg-gradient-to-r from-primary to-accent" />
            {/* <p className='text-[15px] font-[300]' dangerouslySetInnerHTML={{ __html: profileSummary }}></p> */}
          </div>

        {/* THIS IS WHERE THE MAPS SHALL GO OR AN AD BANNER OR SOMETHING */}
          <div className='w-full rounded-2xl overflow-hidden min-h-[380px] max-h-[380px] link--panel'></div>
          
          {/* the form for getting messges to the user */}
          <div className='w-full'>
            <h1 className='text--colors_default font-semibold text-[24px] my-[30px]'>Contact Form</h1>
            <form onSubmit={() => {}} className='w-full flex flex-col items-end gap-[30px]'>
                <div className='w-full grid grid-cols-2 gap-[30px]'>
                    <input type="text" className='border border--default rounded-[14px] py-[15px] px-5 text-[15px] text--colors_default w-full' placeholder='Full name'/>
                    <input type="text" className='border border--default rounded-[14px] py-[15px] px-5 text-[15px] text--colors_default w-full' placeholder='Full name'/>
                </div>
                <div className='w-full'>
                    <textarea name="" id="" className='border border--default min-h-[300px] rounded-[14px] py-[15px] px-5 text-[15px] text--colors_default w-full' placeholder='Your Message'>
                        Here Kitty
                    </textarea>
                </div>
                <button className='hoverActive w-fit py-4 px-5 gap-[18px] gradient--default rounded-xl relative flex items-center before:[] before:absolute before:h-full before:w-full before:inset-[1px] before:rounded-xl before:-z-0 before:bg-eerieLight before:dark:bg-eerieDark before:transition before: '>
                    <Send className='z-[999] text-primary' variant="Bold"/>
                    <p className='text-primary text-[15px] z-[999]'>Send message</p>
                </button>
            </form>
          </div>
    


        </div>
      );
}

export default Contact