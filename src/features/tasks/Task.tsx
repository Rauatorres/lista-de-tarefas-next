import Button from "@/src/shared/ui/atoms/Button"
import TaskName from "@/src/shared/ui/atoms/TaskName"
import ButtonsContainer from "@/src/shared/ui/molecules/ButtonsContainer"
import StartElementContainer from "@/src/shared/ui/molecules/StartElementContainer"
import TaskCard from "@/src/shared/ui/organisms/TaskCard"

const Task = () => {
    return (
        <TaskCard>
            <StartElementContainer>
                <TaskName name={"task 1 mfkldasdlkamsdklasmdklasmdlskadmldkmdaslkdsamlk"} />
            </StartElementContainer>
            <ButtonsContainer>
                <Button size={"sm"} color={"gray"} text={"editar"} />
                <Button size={"sm"} color={"red"} text={"remover"} />
            </ButtonsContainer>
        </TaskCard>
    )
}

export default Task
