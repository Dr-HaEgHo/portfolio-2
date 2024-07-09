"use client"

import { courseData } from "@/types";
import React, { createContext, SetStateAction, Dispatch, useState } from "react";

enum themes {
    DARK = 'dark',
    LIGHT = 'light',
    GRADIENT = 'gradient'
}

interface ContextProps{
    isActive: number,
    setIsActive: Dispatch<SetStateAction<number>>
    theme: themes
    setTheme: Dispatch<SetStateAction<themes>>
}

const GlobalContext = createContext<ContextProps>({
    isActive: 0,
    setIsActive: (): number => 0,
    theme: themes.DARK,
    setTheme: (): themes => themes.DARK
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isActive, setIsActive] = useState<number>(0)
    const [ theme, setTheme] = useState<themes>(themes.DARK)
    
    
    return (
        <GlobalContext.Provider value={{ 
            isActive, setIsActive, theme, setTheme
        }}>
            {children}
        </GlobalContext.Provider>
    )};

// export const useGlobalContext = useContext(GlobalContext);