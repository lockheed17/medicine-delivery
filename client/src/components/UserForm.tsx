import {User} from "../../types.ts";
import {useImperativeHandle, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import FormInput from "./UI/FormInput.tsx";

type UserFormProps = {
    user?: User;
    reference?: any;
}

const UserForm = ({user, reference}: UserFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    // const {formData, setFormData, isFormSubmitted} = useFormStore();

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

    useImperativeHandle(reference, () => ({
        submitForm() {
            console.log("form.submitform");
            handleSubmit(onSubmit)();
        }
    }));

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }



    return (
        <form onSubmit={handleSubmit(onSubmit, () => console.log(errors))} className="flex flex-col p-4 gap-10 justify-center h-full">
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
          </form>
    );
}

export default UserForm;