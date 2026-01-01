'use client'

import Button from "@/src/components/atoms/Button"
import Checkbox from "@/src/components/atoms/Checkbox"
import TaskName from "@/src/components/atoms/TaskName"
import TextInput from "@/src/components/atoms/TextInput"
import ButtonsContainer from "@/src/components/molecules/ButtonsContainer"
import StartElementContainer from "@/src/components/molecules/StartElementContainer"
import TaskCard from "@/src/components/organisms/TaskForm"
import { TaskListContext } from "@/src/context/tasks/TasksContext"
import { ChangeEvent, useContext, useState } from "react"

type TaskProps = {
    index: number,
}

const Task = ({ index }: TaskProps) => {
    const { list, remove, edit } = useContext(TaskListContext);

    const name = list[index].name;

    const [checked, setChecked] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [nameEdit, setNameEdit] = useState(name);

    function colorCheck(uncheckedColor: 'red' | 'blue' | 'green' | 'yellow' | 'gray' | 'black'){
        if(checked){
            return 'disabled';
        }else{
            return uncheckedColor
        }
    }

    function styleCheck(){
        if(checked){
            return `cursor-default!`;
        }else{
            return ``;
        }
    }   

    function buttonFunctionCheck(callback: () => void){
        if(!checked){
            callback();
        }
    }

    function editButtonAction(){
        if(editMode == true){
            if(nameEdit != ""){
                edit(index, nameEdit);
            }else{
                setNameEdit(name);
            }
        }
        setEditMode(!editMode);
    }

    function secondButtonAction(){
        if(editMode == false){
            remove(index)
        }else{
            setEditMode(false);
            setNameEdit(name);
        }
    }

    function checkOrUncheck(){
        setChecked(!checked); 
        setEditMode(false);
        setNameEdit(name);
    }

    return (
        <div className={`
            ${checked ? 'text-gray-700' : ''}
            h-30
        `}>
            <hr className={`
                relative
                ${checked ? 'w-9/10' : 'w-0'}
                top-14
                
            `} />
            <TaskCard>
                <StartElementContainer>
                    {editMode ? <TextInput type={"text"} size={"sm"} value={nameEdit} onInput={(e: ChangeEvent<HTMLInputElement>) => setNameEdit(e.target.value)} /> : <TaskName name={name} />}
                </StartElementContainer>
                <ButtonsContainer>
                    <Button 
                        size={"sm"} 
                        additionalStyle={styleCheck()} 
                        color={colorCheck("gray")} 
                        text={editMode ? "salvar" : "editar"} 
                        onClick={() => buttonFunctionCheck(() => editButtonAction())}
                    />
                    <Button 
                        size={"sm"} 
                        additionalStyle={styleCheck()} 
                        color={colorCheck("red")} 
                        text={editMode ? "cancelar" : "remover"} 
                        onClick={() => buttonFunctionCheck(() => secondButtonAction())} 
                    />
                    <Checkbox onClick={() => checkOrUncheck()} />
                </ButtonsContainer>
            </TaskCard>
        </div>
    )
}

export default Task
