import NewTaskForm from "../features/newTaskForm/NewTaskForm";
import TaskList from "../features/tasks/TaskList";
import TasksWrapper from "../context/tasks/TasksWrapper";

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
          <TasksWrapper>
            <NewTaskForm />
            <TaskList />
          </TasksWrapper>
        </div>
      </section>
    </>
  );
}
