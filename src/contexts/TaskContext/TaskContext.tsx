import { createContext, useContext, useEffect, useState } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '23:59',
    activeTask: null,
    currentCycle: 0,
    config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    }
}


const initialContexValue = {
    state: initialState,
    setState: () => {}
}



type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export const TaskContext = createContext<TaskContextProps>(initialContexValue)

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider( {children}:TaskContextProviderProps ){

    const [state, setState] = useState(initialState)

    useEffect( () => { console.log(state)}, [state])

    return (
       <TaskContext.Provider value={{state, setState}}>
        {children}
       </TaskContext.Provider>
    )
}

export function useTaskContext() {
    return useContext(TaskContext)
}