'use client'

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


const DynamicThemeSwitcher = dynamic(() => import('./ThemeSwitcher'), {
    ssr: false,
  });
const Navbar = () => {


    return (
        <nav className="navbar w-full px-20 py-3">
            <div className="flex items-center justify-end">
                {/* <SomeTheme/> */}
                <DynamicThemeSwitcher/>
            </div>
        </nav>
    )
}

export default Navbar;