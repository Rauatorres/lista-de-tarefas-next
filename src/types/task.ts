interface TaskList{
    list: TaskType[];
    add: (newTask: TaskType) => void;
    remove: (index: number) => void;
    edit: (index: number, newName: string) => void;
    markChecked: (index: number) => void;
}

type TaskType = {
    name: string,
};

export type { TaskType, TaskList } 