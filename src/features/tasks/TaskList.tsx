'use client'

import TasksWrapper from "@/src/context/tasks/TasksWrapper";
import Task from "./Task";
import { useContext } from "react";
import { TaskListContext } from "@/src/context/tasks/TasksContext";

const TaskList = () => {
    const { list } = useContext(TaskListContext);

    return (
        <ul>
            {
                list.map((task, index) => {
                    return (
                        <li key={index}><Task index={index} name={task.name} /></li>
                    );
                } )
            }
        </ul>
    );
};

export default TaskList