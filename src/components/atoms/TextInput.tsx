import { ChangeEvent } from "react";

type TextInputProps = {
    type: "text" | "email" | "password",
    size: "sm" | "md",
    id?: string,
    name?: string,
    placeholder?: string,
    value?: string,
    onInput?: (e: ChangeEvent<HTMLInputElement>) => void,
}

const TextInput = ({ type, size, id, name, placeholder, value, onInput }: TextInputProps) => {
    const sizes = {
        sm: 'w-15vw text-base py-2',
        md: 'w-20vw text-lg py-3',
    }

    return (
        <input
            className={`
                bg-neutral-700
                focus:outline-0 focus:bg-neutral-800
                ${sizes[size]}
                 px-5
                rounded-sm
                block
            `}
            type={type}
            name={name} 
            id={id} 
            placeholder={placeholder}
            value={value}
            onInput={onInput}
        />
    );
};

export default TextInput