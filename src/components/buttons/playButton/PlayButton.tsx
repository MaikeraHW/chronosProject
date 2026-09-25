import { CirclePlayIcon, CircleStopIcon } from 'lucide-react'
import styles from './PlayButton.module.css'

type PlayButtonProps = {
    onclick: () => void
    value: boolean
}

export default function PlayButton({onclick, value}:PlayButtonProps){

    return (
        <div className={styles.buttonHolder}>
            <button className={ (value) ? styles.stopButton : styles.playButton} onClick={() => onclick()}>
                { (value) ? <CircleStopIcon className={styles.stopIcon}/>  : <CirclePlayIcon className={styles.playIcon}/>}
            </button>
        </div>
    )
}