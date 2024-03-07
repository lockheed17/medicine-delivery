import {User} from "../../types.ts";
import {useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import FormInput from "./UI/FormInput.tsx";

type UserFormProps = {
    user?: User;
}

const UserForm = ({user}: UserFormProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        watch,
        setValue
    } = useForm<FieldValues>({
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            phone: user?.phone || '',
            address:  user?.address || '',
        }
    })

    return (
        <div className="flex flex-col p-4 justify-around h-full">
            <FormInput
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <FormInput
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <FormInput
                id="phone"
                label="Phone"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <FormInput
                id="address"
                label="Address"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );
}

export default UserForm;