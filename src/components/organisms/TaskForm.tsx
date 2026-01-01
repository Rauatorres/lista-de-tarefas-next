const TaskForm = ({ children }: { children: React.ReactNode }) => {
    return (
        <form action="" className="
            flex items-center justify-between
            my-10
            w-[50vw]
        " onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
            {children}
        </form>
    );
};

export default TaskForm
