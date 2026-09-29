import styles from './input.module.css'

type InputProps = {
    label: string,
    type: string,
    placeHolder: string,
    id: string,
    task: string,
    setTask: (value: string) => void
}


export default function Input({label, type, placeHolder, id, task, setTask}:InputProps){

    

    

    return (
        <div className={styles.inputHolder}>
            <label htmlFor={id} className={styles.inputLabel}> {label} </label>
            <input id={id} type={type} placeholder={placeHolder} className={styles.inputField} value={task} onChange={ (e) => setTask(e.target.value) } />
        </div>
    )
}