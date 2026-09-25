import { useEffect, useState } from "react";
import { HomeIcon, MoonIcon, RotateCcwClockIcon, Settings, SunIcon } from "lucide-react";
import NavButton from "../buttons/navButtons/NavButton";

import styles from './HeaderNav.module.css'

type AvailableThemes = 'dark' | 'light'


export default function HeaderNav(){

    
    const [theme, setTheme] = useState<AvailableThemes>( () => {

        const temaSalvo = localStorage.getItem('theme') as AvailableThemes

        return temaSalvo === 'light' ? 'light' : 'dark'
    })

    function handleSetTheme(){

        setTheme(
            theme === 'dark' ? 'light' : 'dark'
        )
        
    }

    useEffect( () => {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (

    <nav className={styles.headerNav}>
        <NavButton iconName={<HomeIcon />}/>
        <NavButton iconName={<RotateCcwClockIcon />}/>
        <NavButton iconName={<Settings />}/>
        <NavButton iconName={ theme === 'dark' ? <SunIcon /> : <MoonIcon />} onClick={handleSetTheme}/>
    </nav>
    )
}