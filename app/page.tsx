'use client'
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    console.log("the local route: ",localRoute)
  },[])

  return (
    <main className="min-h-screen transition-700 text--colors_default bg--default">
      <Navbar/>
      <div className="container">
        <div className="w-full h-[80vh] min-h-[780px] flex items-start gap-[25px] relative">

          {/* SIDEBAR */}
          <div className="flex-[1] h-full sticky top-0 min-h-[780px] max-h-[820px]">
            <Sidebar/>
          </div>

          {/* READER CONTAINER */}
          <div className="flex-[3.2] h-full border transition-700 border--default bg--card rounded-[20px] relative">
            {/* NAV MENU */}
            <div className="absolute top-0 right-0 flex justify-end">
              <ul className="flex items-center gap link--panel transition-700 px-10 gap-[30px] border-b border-l rounded-bl-[20px] rounded-tr-[21px] border--default">
                {
                  links?.map((link) => (
                    <li onClick={() => handleRouting(link.route)} className="py-5 px-[7px] cursor-pointer"><p className={`text--colors_default transition-700 font-medium text-[15px] ${link.route === route && 'text--colors_primary'}`}>{link.name}</p></li>
                  ))
                }
              </ul>
            </div>

            <div className="w-full p-[30px]" >
                <About/>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}