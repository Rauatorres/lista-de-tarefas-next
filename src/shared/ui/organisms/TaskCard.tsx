const TaskCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="
            flex items-center justify-between
            my-10
            w-[50vw]
        ">
            {children}
        </div>
    );
};

export default TaskCard
