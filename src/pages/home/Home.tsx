import PlayButton from '../../components/buttons/playButton/PlayButton'
import Counter from '../../components/counter/Counter'
import Input from '../../components/input/Input'
import styles from './Home.module.css'
import CountDown from '../../components/countDown/CountDown'
import { useState } from 'react'

export default function Home(){

    const [task, setTask] = useState('')
    const [inputStatus, setInputStatus] = useState(false)

    return (
        <section className={styles.homeSection}>
            
            <CountDown />

            <div className={styles.homeContent}>

                <Input label='Task' placeHolder='Ex: Estudar para o teste de React' type='text' id='TaskInput' task={task} setTask={setTask} disabled={inputStatus}/>

                <p className={styles.messenger}> Nesse ciclo foque por 25 min.</p>

                <Counter />

                <PlayButton task={task} setInputStatus={setInputStatus} />
            </div>

        </section>
    )
}