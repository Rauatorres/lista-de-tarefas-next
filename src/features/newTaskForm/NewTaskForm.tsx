'use client'

import Button from "@/src/components/atoms/Button";
import TextInput from "@/src/components/atoms/TextInput";
import ButtonsContainer from "@/src/components/molecules/ButtonsContainer";
import StartElementContainer from "@/src/components/molecules/StartElementContainer";
import TaskForm from "@/src/components/organisms/TaskForm"
import { TaskListContext } from "@/src/context/tasks/TasksContext";
import { ChangeEvent, FormEventHandler, useContext, useState } from "react";

const NewTaskForm = () => {
    const { add } = useContext(TaskListContext);

    const [name, setName] = useState("");

    function onInputName(e: ChangeEvent<HTMLInputElement>){
        setName(e.currentTarget.value);
    }

    return (
        <TaskForm>
            <StartElementContainer>
                <TextInput type={"text"} size="md" value={name} onInput={(e: ChangeEvent<HTMLInputElement>) => onInputName(e)} />
            </StartElementContainer>
            <ButtonsContainer>
                <Button size={"md"} color={"blue"} text={"adicionar"} onClick={() => {add({ name: name, checked: false })}} />
            </ButtonsContainer>
        </TaskForm>
    );
};

export default NewTaskForm
