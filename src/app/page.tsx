import NewTaskForm from "../features/newTaskForm/NewTaskForm";
import Task from "../features/tasks/Task";
import TaskList from "../features/tasks/TaskList";
import Button from "../shared/ui/atoms/Button";
import TaskName from "../shared/ui/atoms/TaskName";
import TextInput from "../shared/ui/atoms/TextInput";
import NewTaskCard from "../shared/ui/organisms/TaskCard";

export default function Home() {
  return (
    <>
      <h1 className="
        text-4xl
        block
        w-fit
        mt-20 mb-40 mx-auto
      ">Lista de Tarefas</h1>
      <section>
        <div className="w-fit my-20 mx-auto">
          <NewTaskForm />
          <TaskList />
          <Button size={"md"} color={"gray"} text={"adicionar tarefa"} />
        </div>
      </section>
    </>
  );
}
