import styles from './NavButton.module.css'


   type NavButtonProps = {
    iconName: React.ReactNode
    onClick?: () => void
   }

export default function NavButton({iconName, onClick}: NavButtonProps){

    return (
        <button className={styles.button} onClick={onClick}>
            {iconName}
        </button>
    )
}