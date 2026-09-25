import styles from './input.module.css'

type InputProps = {
    label: string,
    type: string,
    placeHolder: string,
    id: string
}


export default function Input({label, type, placeHolder, id}:InputProps){

    return (
        <div className={styles.inputHolder}>
            <label htmlFor={id} className={styles.inputLabel}> {label} </label>
            <input id={id} type={type} placeholder={placeHolder} className={styles.inputField}/>
        </div>
    )
}