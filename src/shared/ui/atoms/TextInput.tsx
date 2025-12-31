type TextInputProps = {
    type: "text" | "email" | "password",
    id?: string,
    name?: string,
    placeholder?: string,
    defaultValue?: string,
    onChange?: () => void,
}

const TextInput = ({ type, id, name, placeholder, defaultValue, onChange }: TextInputProps) => {
    return (
        <input
            className="
                bg-neutral-700
                focus:outline-0 focus:bg-neutral-800
                text-lg
                w-[20vw]
                py-3 px-5
                rounded-sm
                block
            " 
            type={type}
            name={name} 
            id={id} 
            placeholder={placeholder}
            value={defaultValue}
            onChange={onChange}
        />
    );
};

export default TextInput