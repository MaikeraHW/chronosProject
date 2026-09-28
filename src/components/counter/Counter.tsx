
import { useTaskContext } from '../../contexts/TaskContext/TaskContext'
import styles from './Counter.module.css'


export default function Counter(){

    const { state } = useTaskContext()

    const ciclo = state.currentCycle
    

    return (
        <div className={styles.counterHolder}>
            <p className={styles.counterTitle}>Ciclos:</p>
            <div className={styles.ciclesHolder}>
                <div className={`${styles.cicleY} ${ ciclo  >= 1 ? '' : styles.none}`}></div>
                <div className={`${styles.cicleG} ${ ciclo  >= 2 ? '' : styles.none}`}></div>
                <div className={`${styles.cicleY} ${ ciclo  >= 3 ? '' : styles.none}`}></div>
                <div className={`${styles.cicleG} ${ ciclo  >= 4 ? '' : styles.none}`}></div>
                <div className={`${styles.cicleY} ${ ciclo  >= 5 ? '' : styles.none}`}></div>
                <div className={`${styles.cicleG} ${ ciclo  >= 6 ? '' : styles.none}`}></div>
                <div className={`${styles.cicleY} ${ ciclo  >= 7 ? '' : styles.none}`}></div>
                <div className={`${styles.cicleB} ${ ciclo  >= 8 ? '' : styles.none}`}></div>
            </div>
        </div>
    )
}