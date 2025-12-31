import { TaskType } from "@/src/types/task";

export default function tasksReducer(tasks: TaskType[], action: { 
    type: 'add' | 'delete' | 'update', 
    newTask?: TaskType, 
    taskId?: number, 
    newTaskData?: TaskType,
}): TaskType[]{
    switch(action.type){
        case 'add':
            return [ ...tasks,  action.newTask!];
        case 'delete':
            return tasks.filter((task) => {
                return tasks[action.taskId!] != task;
            }); 
        case 'update':
            tasks[action.taskId!] = action.newTaskData!;
            return tasks;
        default:
            return tasks;
    }
}