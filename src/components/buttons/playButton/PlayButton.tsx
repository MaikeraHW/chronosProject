import { CirclePlayIcon, CircleStopIcon } from 'lucide-react'
import styles from './PlayButton.module.css'
import { useTaskContext } from '../../../contexts/TaskContext/TaskContext'

export default function PlayButton(){

    const { state, setState } = useTaskContext()

    const estado = state.currentCycle
    const tipo = estado % 2 === 0

    function playButton() {

        setState(prevState => {

        return {
        ...prevState,
        currentCycle: prevState.currentCycle === 8 ? 1 : prevState.currentCycle + 1,
        
        }

    })
    }
    

    return (
        <div className={styles.buttonHolder}>
            <button className={ (tipo) ? styles.playButton : styles.stopButton } onClick={playButton}>
                { (tipo) ? <CirclePlayIcon className={styles.playIcon}/> : <CircleStopIcon className={styles.stopIcon}/>}
            </button>
        </div>
    )
}