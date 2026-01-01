type ButtonProps = {
    size: 'sm' | 'md' | 'lg',
    color: 'red' | 'blue' | 'green' | 'yellow' | 'gray' | 'black' | 'disabled',
    text: string,
    type?: "button" | "submit" | "reset",
    additionalStyle?: string,
    onClick?: () => void,
}

const Button = ({ text, type, size, color, onClick, additionalStyle }: ButtonProps) => {
    const base = `
        cursor-pointer
        block
        rounded-sm
    `;

    const sizes = {
        sm: 'px-9 py-1 text-base',
        md: 'px-13 py-2 text-xl',
        lg: 'px-18 py-3 text-2xl',
    };

    const colors = {
        gray: 'bg-neutral-300 text-black',
        black: 'bg-neutral-900 text-white', 
        red: 'bg-red-700 text-white',
        blue: 'bg-blue-700 text-white',
        green: 'bg-green-700 text-white',
        yellow: 'bg-yellow-500 text-black',
        disabled: 'bg-gray-700 text-gray-500',
    };

    return (
        <button
            className={sizes[size] + ' ' + colors[color] + ' ' + base + ' ' + additionalStyle}
            type={type}
            onClick={onClick}
        >{text}</button>
    );
};

export default Button