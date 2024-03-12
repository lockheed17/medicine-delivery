interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    outline?: boolean;
    small?: boolean;
    active?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           onClick,
                                           outline,
                                           small,
                                           active
                                       }) => {
    return (
        <button
            onClick={onClick}
            className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition
                w-full
                ${outline ? 'bg-white' : 'bg-rose-500'}
                ${outline ? 'border-black' : 'border-rose-500'}
                ${outline ? 'text-black' : 'text-white'}
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'text-sm' : 'text-md'} 
                ${small ? 'font-medium' : 'font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
                ${active ? 'bg-emerald-500 text-white' : ''}
            `}
        >
            {label}
        </button>
    );
}

export default Button;