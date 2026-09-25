import { TimerIcon } from 'lucide-react'
import styles from './Header.module.css'
import HeaderNav from '../headerNav/HeaderNav'

export default function Header(){

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.icon}> <TimerIcon className={styles.timerIcon}/> </div>
                <h1 className={styles.title}> Chronos </h1>
            </div>
            
            <HeaderNav />
        </header>
    )
}