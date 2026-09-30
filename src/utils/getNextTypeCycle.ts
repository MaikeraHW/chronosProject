import type { TaskModel } from "../models/TaskModel"

export function getNextTypeCycle(cycle:number): TaskModel['type'] {

    if (cycle === 8){

       return 'longBreakTime'

    } else if (cycle % 2 === 0) {

        return 'shortBreakTime'

    } else {

       return 'workTime'

    }

    
}