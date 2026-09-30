import { CirclePlayIcon, CircleStopIcon } from 'lucide-react'
import styles from './PlayButton.module.css'
import { useTaskContext } from '../../../contexts/TaskContext/TaskContext'
import type { TaskModel } from '../../../models/TaskModel'
import { getNextTypeCycle } from '../../../utils/getNextTypeCycle'
import { getNextCycle } from '../../../utils/getNextCycle'
import { formattedTime } from '../../../utils/formattedTime'

type PlayButtonProps = {
    task: string
    setInputStatus: (value: boolean) => void,
}

export default function PlayButton({task, setInputStatus }:PlayButtonProps){

    const { state, setState } = useTaskContext()


    const nextCycle = getNextCycle(state.currentCycle)
    const cycleType = getNextTypeCycle(nextCycle)

    function playButton() {


        if (nextCycle > 0 && nextCycle < 8){

            setInputStatus(true)
        } else {

            setInputStatus(false)

        }

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
            duration: state.config[cycleType],
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            type: cycleType
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {

        return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        secondsRemaining: secondsRemaining, //conferir
        formattedSecondsRemaining: formattedTime(secondsRemaining), //conferir
        activeTask: newTask,
        currentCycle: prevState.currentCycle === 8 ? 1 : prevState.currentCycle + 1
        }

    })
    }
    

    return (
        <div className={styles.buttonHolder}>
            <button className={ (state.activeTask?.type === 'workTime') ? styles.stopButton : styles.playButton } onClick={playButton}>
                { (state.activeTask?.type === 'workTime') ? <CircleStopIcon className={styles.stopIcon}/> : <CirclePlayIcon className={styles.playIcon}/>}
            </button>
        </div>
    )
}