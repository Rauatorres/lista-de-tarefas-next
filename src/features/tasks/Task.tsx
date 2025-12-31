'use client'

import Button from "@/src/components/atoms/Button"
import TaskName from "@/src/components/atoms/TaskName"
import ButtonsContainer from "@/src/components/molecules/ButtonsContainer"
import StartElementContainer from "@/src/components/molecules/StartElementContainer"
import TaskCard from "@/src/components/organisms/TaskCard"
import { TaskListContext } from "@/src/context/tasks/TasksContext"
import { useContext } from "react"

type TaskProps = {
    index: number,
    name: string,
}

const Task = ({ index, name }: TaskProps) => {
    const { remove } = useContext(TaskListContext);

    

    return (
        <TaskCard>
            <StartElementContainer>
                <TaskName name={name} />
            </StartElementContainer>
            <ButtonsContainer>
                <Button size={"sm"} color={"gray"} text={"editar"} />
                <Button size={"sm"} color={"red"} text={"remover"} onClick={() => remove(index)} />
            </ButtonsContainer>
        </TaskCard>
    )
}

export default Task
