import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PortfolioCard from "../PortfolioCard";
import { projects } from "@/assets/data";
import { projectsData } from "@/types";
import Image from "next/image";

const links = [
  { id: 1, name: "All", route: "all" },
  { id: 2, name: "Web design", route: "web-design" },
  { id: 3, name: "Web development", route: "web-development" },
  { id: 4, name: "Mobile Applications", route: "application" },
  { id: 5, name: "Case Studies", route: "case-studies" },
];
const Portfolio = () => {
  const router = useRouter();
  const search = useSearchParams();

  const [active, setActive] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<
    projectsData[] | null
  >(null);

  const route = new URLSearchParams(search).get("route");
  const localRoute = localStorage.getItem("portfolio-route");

  const filterCategories = (array: any[], param: string) => {
    let newArray: projectsData[];
    newArray = array.filter((arr) => arr.categories?.includes(param));
    return newArray;
  };

  const handleRouting = (route: string) => {
    setActive(route);
  };

  useEffect(() => {
    setFilteredProjects(filterCategories(projects, active || "all"));
    console.log("these are the filtered projects: ", filteredProjects);
  }, [active]);

  return (
    <div className="w-full relative">
      {/* ABOUT ME */}
      <div className="flex flex-col mb-10">
        <h1 className="text--colors_default font-bold text-[32px]">
          My Portfolio
        </h1>
        <div className="w-10 h-[5px] my-[20px] rounded-full bg-gradient-to-r from-primary to-accent" />
        {/* <p className='text-[15px] font-[300]' dangerouslySetInnerHTML={{ __html: profileSummary }}></p> */}
      </div>

      <ul className="flex items-center gap-[25px] mb-[30px]">
        {links?.map((link) => (
          <li
            key={link.id}
            onClick={() => handleRouting(link.route)}
            className="cursor-pointer hoverActive"
          >
            <a
              className={`text--colors_default font-normal text-[15px] ${
                link.route === active && "text--colors_primary"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* expertise */}
      {filteredProjects !== null && filteredProjects.length ? (
        <ul className="w-full grid grid-cols-3 gap-[30px] justify-between mb-10">
          {filteredProjects?.map((item, idx) => (
            <PortfolioCard key={idx} data={item} />
          ))}
        </ul>
      ) : (
        <div className="w-full flex flex-col items-center justify-center min-h-[400px]">
          <div className="flex w-40 h-40 flex-col gap-[30px] items-center ">
            <Image
                src={require('../../assets/icons/empty.svg')}
                alt="empty icon"
                className="w-full"
            />
          </div>
          <h3 className="text--colors_default">Oops! Nothing Yet, Your project could be the first to be here</h3>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
