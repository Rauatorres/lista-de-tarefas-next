'use client'

import { useReducer } from "react";
import { TaskListContext } from "./TasksContext";
import { TaskType } from "@/src/types/task";
import tasksReducer from "./tasksReducer";


const TasksWrapper = ({ children }: { children: React.ReactNode }) => {
    const defaultTaskListValue: TaskType[] = [];
    const [taskList, dispatch] = useReducer(tasksReducer, defaultTaskListValue)

    function add(newTask: TaskType){
        console.log('teste');
        dispatch({ type: 'add', newTask: newTask });
    }

    function remove(taskIndex: number){
        dispatch({ type: 'delete', taskId: taskIndex });
    }

    function update(taskIndex: number, newName: string){
        dispatch({ type: 'update', taskId: taskIndex, newTaskData:  { name: newName, checked: taskList[taskIndex].checked }});
    }

    return (
        <TaskListContext value={{ 
            list: taskList, 
            add: add, 
            remove: remove, 
            edit: update, 
            markChecked: () => {}, 
        }}>
            {children}
        </TaskListContext>
    );
};

export default TasksWrapper