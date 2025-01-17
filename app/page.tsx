'use client'
import About from "@/components/pages/About";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Resume from "@/components/pages/Resume";
import Portfolio from "@/components/pages/Portfolio";
import Contact from "@/components/pages/Contact";

const links = [
  {id: 1, name: "About", route: 'about' },
  {id: 2, name: "Resume", route: 'resume' },
  {id: 3, name: "Portfolio", route: 'portfolio' },
  {id: 4, name: "Contact", route: 'contact' },
]

export default function Home() {

  const router = useRouter()
  const search = useSearchParams()

  const [ active, setActive] = useState<string>('about');
  const route = new URLSearchParams(search).get('route');
  const localRoute = localStorage.getItem('portfolio-route')

  const handleRouting = (route:string) => {
    setActive(route);
    localStorage.setItem('portfolio-route', route)
    router.push(`/?route=${route}`)
  }

  useEffect(() => {
    if(localRoute === null || localRoute === 'about'){
      handleRouting('about')
    }
    else {
      handleRouting(localRoute)
    }
  })

  return (
      <main className="min-h-screen  text--colors_default bg--default pb-[6rem]">
      <Navbar/>
      <div className="container">
        <div className="w-full flex items-start gap-[25px] relative">

          {/* SIDEBAR */}
          <div className="flex-[1] h-full sticky top-0 min-h-[780px] max-h-[820px]">
            <Sidebar/>
          </div>

          {/* READER CONTAINER */}
          <div className="flex-[3.2] max-w-full h-full border  border--default bg--card rounded-[20px] relative">
            {/* NAV MENU */}
            <div className="absolute top-0 right-0 flex justify-end">
              <ul className="flex items-center gap link--panel  px-10 gap-[30px] border-b border-l rounded-bl-[20px] rounded-tr-[21px] border--default z-[999]">
                {
                  links?.map((link) => (
                    <li key={link.id} onClick={() => handleRouting(link.route)} className="py-5 px-[7px] hoverActive cursor-pointer"><a className={`text--colors_default  font-medium text-[15px] ${link.route === route && 'text--colors_primary'}`}>{link.name}</a></li>
                  ))
                }
              </ul>
            </div>

            <div className="w-full p-[30px]" >
              { route === 'about' && <About/>}
              { route === 'resume' && <Resume/>}
              { route === 'portfolio' && <Portfolio/>}
              { route === 'contact' && <Contact/>}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}