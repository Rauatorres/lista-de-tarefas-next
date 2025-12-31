'use client'

import { createContext } from "react";
import { TaskList } from "../../types/task";

const TaskListContext = createContext<TaskList>({
    list: [],
    add: () => {},
    remove: () => {},
    edit: () => {},
    markChecked: () => {},
});

export { TaskListContext }