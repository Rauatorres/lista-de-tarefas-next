import Button from "@/src/shared/ui/atoms/Button";
import TextInput from "@/src/shared/ui/atoms/TextInput";
import ButtonsContainer from "@/src/shared/ui/molecules/ButtonsContainer";
import StartElementContainer from "@/src/shared/ui/molecules/StartElementContainer";
import TaskCard from "@/src/shared/ui/organisms/TaskCard"

const NewTaskForm = () => {
    return (
        <form action="">
            <TaskCard>
                <StartElementContainer>
                    <TextInput type={"text"} />
                </StartElementContainer>
                <ButtonsContainer>
                    <Button size={"sm"} color={"blue"} text={"adicionar"} />
                    <Button size={"sm"} color={"red"} text={"cancelar"} />
                </ButtonsContainer>
            </TaskCard>
        </form>
    );
};

export default NewTaskForm
