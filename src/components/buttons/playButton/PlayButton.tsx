import { CirclePlayIcon, CircleStopIcon } from 'lucide-react'
import styles from './PlayButton.module.css'
import { useTaskContext } from '../../../contexts/TaskContext/TaskContext'
import type { TaskModel } from '../../../models/TaskModel'

type PlayButtonProps = {
    task: string
}

export default function PlayButton({task}:PlayButtonProps){

    const { state, setState } = useTaskContext()

    const estado = state.currentCycle
    const tipo = estado % 2 === 0

    function playButton() {

        const taskName = task.trim()

        if(taskName === null){

            alert('Digite um nome para a tarefa')
            return

        } 

        if (!taskName){
            alert('Digite um nome para a tarefa')
            return
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            duration: 1,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            type: "workTime"
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {

        return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        secondsRemaining: secondsRemaining, //conferir
        formattedSecondsRemaining: '00:00', //conferir
        activeTask: newTask,
        currentCycle: 1 //conferir
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