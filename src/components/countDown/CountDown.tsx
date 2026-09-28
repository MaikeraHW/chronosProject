import { useTaskContext } from '../../contexts/TaskContext/TaskContext'
import styles from './CountDown.module.css'

export default function CountDown(){

    const { state } = useTaskContext()

 
    return (
        <>
        <p className={styles.clock}>{state.formattedSecondsRemaining}</p>
        </>
    )
}