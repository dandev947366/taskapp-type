import {Status} from "../../createTaskForm/enums/Status"

export type TaskCounterStatusType = 
    | Status.todo 
    | Status.inProgress
    | Status.completed
export interface ITaskCounter {
    counter?: number;
    status?: TaskCounterStatusType
}