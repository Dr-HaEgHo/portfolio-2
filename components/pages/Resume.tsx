import React, { useState } from "react";
import Modal from "../Modal";
import ExperienceCard from "../ExperienceCard";
import { Book1 } from "iconsax-react";
import { education, experience, skills } from "@/assets/data";
import EducationCard from "../EducationCard";
import SkillsCard from "../SkillsCard";

const Resume = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="w-full relative">
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <div></div>
      </Modal>
      {/* ABOUT ME */}
      <div className="flex flex-col mb-10">
        <h1 className="text--colors_head font-bold text-[32px]">Resume</h1>
        <div className="w-10 h-[5px] my-[20px] rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>

      <div className="flex flex-col mb-10">
        <div className="w-full flex items-center gap-4">
          <div className="min-w-[46px] min-h-[46px] gradient--default duration-700 rounded-xl relative flex items-center justify-center before:[] before:absolute before:h-[45px] before:w-[45px] before:inset-[1px] before:rounded-xl before:-z-0 before:bg-eerieLight before:dark:bg-greyBg before:transition before:duration-700">
            <div className="z-[999]">
              <Book1 size="32" color="#9f1fef" />
            </div>
          </div>
          <h1 className="text--colors_head font-semibold text-[24px] mb-[10px]">Education</h1>
        </div>
        <EducationCard data={education}/>
      </div>
    
      <div className="flex flex-col mb-10">
        <div className="w-full flex items-center gap-4">
          <div className="min-w-[46px] min-h-[46px] gradient--default duration-700 rounded-xl relative flex items-center justify-center before:[] before:absolute before:h-[45px] before:w-[45px] before:inset-[1px] before:rounded-xl before:-z-0 before:bg-eerieLight before:dark:bg-greyBg before:transition before:duration-700">
            <div className="z-[999]">
              <Book1 size="32" color="#9f1fef" />
            </div>
          </div>
          <h1 className="text--colors_head font-semibold text-[24px] mb-[10px]">Experience</h1>
        </div>
        <ExperienceCard data={experience}/>
      </div>
      
      
      <div className="flex flex-col mb-10">
        <div className="w-full flex items-center gap-4">
          <h1 className="text--colors_head font-semibold text-[24px] mb-[10px]">My Skills</h1>
        </div>
        <SkillsCard data={skills} />
      </div>


      




    </div>
  );
};

export default Resume;
