import { useState } from 'react'
import PlayButton from '../../components/buttons/playButton/PlayButton'
import Counter from '../../components/counter/Counter'
import Input from '../../components/input/Input'
import styles from './Home.module.css'
import CountDown from '../../components/countDown/CountDown'

export default function Home(){

    const [ativado, setAtivado] = useState(false)
    const [ciclo, setCiclo] = useState(0)

    function toggleButton(){

        (ativado) ? setAtivado(false) : setAtivado(true)

        ciclo === 8 ? setCiclo(1) : setCiclo(ciclo + 1)

    }

    return (
        <section className={styles.homeSection}>
            
            <CountDown />
            <div className={styles.homeContent}>
                <Input label='Task' placeHolder='Ex: Estudar para o teste de React' type='text' id='TaskInput'/>

                <p className={styles.messenger}> Nesse ciclo foque por 25 min. </p>

                <Counter ciclo={ciclo}/>

                <PlayButton onclick={toggleButton} value={ativado}/>
            </div>

        </section>
    )
}