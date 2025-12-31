'use client'

import Button from "@/src/components/atoms/Button";
import TextInput from "@/src/components/atoms/TextInput";
import ButtonsContainer from "@/src/components/molecules/ButtonsContainer";
import StartElementContainer from "@/src/components/molecules/StartElementContainer";
import TaskCard from "@/src/components/organisms/TaskCard"
import { TaskListContext } from "@/src/context/tasks/TasksContext";
import { ChangeEvent, FormEventHandler, useContext, useState } from "react";

const NewTaskForm = () => {
    const { add } = useContext(TaskListContext);

    const [name, setName] = useState("");

    function onInputName(e: ChangeEvent<HTMLInputElement>){
        setName(e.currentTarget.value);
    }

    return (
        <form action="" onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
            <TaskCard>
                <StartElementContainer>
                    <TextInput type={"text"} value={name} onInput={(e: ChangeEvent<HTMLInputElement>) => onInputName(e)} />
                </StartElementContainer>
                <ButtonsContainer>
                    <Button size={"sm"} color={"blue"} text={"adicionar"} onClick={() => {add({ name: name })}} />
                    <Button size={"sm"} color={"red"} text={"cancelar"} />
                </ButtonsContainer>
            </TaskCard>
        </form>
    );
};

export default NewTaskForm
