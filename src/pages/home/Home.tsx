import { useState } from 'react'
import { useTaskContext } from '../../contexts/TaskContext/TaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextTypeCycle } from '../../utils/getNextTypeCycle'
import type { TaskModel } from '../../models/TaskModel'
import { formattedTime } from '../../utils/formattedTime'
import { CirclePlayIcon, CircleStopIcon } from 'lucide-react'

import PlayButton from '../../components/buttons/playButton/PlayButton'
import Counter from '../../components/counter/Counter'
import Input from '../../components/input/Input'
import styles from './Home.module.css'
import CountDown from '../../components/countDown/CountDown'


export default function Home(){

    const [task, setTask] = useState('')
    const [inputStatus, setInputStatus] = useState(false)

    const { state, setState } = useTaskContext()


    const nextCycle = getNextCycle(state.currentCycle)
    const cycleType = getNextTypeCycle(nextCycle)

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

        if (nextCycle > 0 && nextCycle < 8){

            setInputStatus(true)
        } else {

            setInputStatus(false)

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

    function stopButton(){

        console.log('teeeeeeeeste de botão que pausa')
        setInputStatus(false)

    }

    
    return (
        <section className={styles.homeSection}>
            
            <CountDown />

            <div className={styles.homeContent}>

                <Input label='Task' placeHolder='Ex: Estudar para o teste de React' type='text' id='TaskInput' task={task} setTask={setTask} disabled={inputStatus}/>

                <p className={styles.messenger}> Nesse ciclo foque por 25 min.</p>

                <Counter />

                {!state.activeTask && <PlayButton nomeClasse='playButton' playButton={playButton} icon={<CirclePlayIcon className={styles.playIcon}/>}/>} 

                {state.activeTask && <PlayButton nomeClasse='stopButton' playButton={stopButton} icon={<CircleStopIcon className={styles.stopIcon}/>}/>}

                 
            </div>

        </section>
    )
}