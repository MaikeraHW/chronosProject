import { createContext, useContext } from "react";


type TimerProviderProps = {
    children: React.ReactNode
}

type TimerContextProps = {
    teste: () => void
}


const TimerContext = createContext<TimerContextProps | undefined>(undefined)

export default function TimerProvider( {children}:TimerProviderProps ) {

    function teste(){

        alert('teste')
    }

    return (
        <TimerContext.Provider value={{teste}}>
            {children}
        </TimerContext.Provider>
    )

}

export function useTimer() {

     const context = useContext(TimerContext)

    if (context === undefined) {
        throw new Error('useTimer deve ser usado dentro de TimerProvider')
    }

    return context

}