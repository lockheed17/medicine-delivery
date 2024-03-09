import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

type Props = {
    id: string
    label: string
    type?: string
    disabled?: boolean
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors,
};

const FormInput = ({id, label, type = "text", disabled, required, register, errors}: Props) => {

    return (
        <div className="w-full relative">
            <input
                id={id}
                disabled={disabled}
                {...register(id, {required})}
                placeholder=" "
                type={type}
                className={`
                    peer
                    w-full
                    py-2
                    px-4
                    pt-6
                    font-normal
                    bg-transparent
                    border-2
                    rounded-md
                    outline-none
                    text-gray-800
                    transition
                    duration-300
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    placeholder-neutral-main
                    ${errors[id] ? 'border-rose-500' : "border-gray-300"}
                    ${errors[id] ? 'focus:border-rose-500' : "focus:border-neutral-400"}
                `}
            />
            <label
                className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-4
                    z-10
                    origin-[0]
                    left-4
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-3
                    ${errors[id] ? 'text-rose-500' : 'text-gray-800'}
                `}>
                {label}
            </label>
        </div>
    );
};

export default FormInput;