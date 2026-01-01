const Checkbox = ({ onClick }: { onClick: () => void }) => {
    return (
        <input className="
            w-5
        " type="checkbox" onClick={onClick}/>
    );
};

export default Checkbox