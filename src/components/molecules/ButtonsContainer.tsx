import style from '../../css/buttonsContainer.module.css';

const ButtonsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`flex ${style.container}`}>{children}</div>
    );
};

export default ButtonsContainer