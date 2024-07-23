import React, { useState } from 'react'
import Modal from '../Modal';

const Resume = () => {

    const [modalOpen, setModalOpen ] = useState<boolean>(false);
  
    return (
        <div className='w-full relative'>
            <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
                <div>
    
                </div>
            </Modal>
            {/* ABOUT ME */}
            <div className='flex flex-col mb-10'>
                <h1 className='text--colors_head font-bold text-[32px]'>Resume</h1>
                <div className='w-10 h-[5px] my-[20px] rounded-full bg-gradient-to-r from-primary to-accent'/>
            </div>
    

    
            
      
      
           
        </div>
      )
}

export default Resume