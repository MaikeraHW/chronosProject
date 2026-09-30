import styles from './PlayButton.module.css'


type PlayButtonProps = {
    playButton: () => void,
    icon: React.ReactNode
    nomeClasse: string
}

export default function PlayButton({playButton, icon, nomeClasse }:PlayButtonProps){

    
    

    return (
        <div className={styles.buttonHolder}>
            <button className={nomeClasse === 'playButton' ? styles.playButton : styles.stopButton} onClick={playButton}>
                { icon }
            </button>
        </div>
    )
}