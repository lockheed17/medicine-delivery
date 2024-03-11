import {User} from "../../types.ts";
import {useImperativeHandle, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import FormInput from "./UI/FormInput.tsx";
import axios from "axios";
import useCartStore from "../store/useCartStore.ts";

type UserFormProps = {
    user?: User;
    reference?: any;
}

const UserForm = ({user, reference}: UserFormProps) => {
    const [isLoading, setIsLoading] = useState(false);


    const { cartItems, getTotal } = useCartStore();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
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
        const userData = data;

        const orderValue = {
            ...userData,
            cartItems,
            totalPrice: cartItems.reduce((sum, cartItem) => sum + cartItem.quantity * cartItem.price, 0),
            totalQuantity: cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0),
        };
        console.log(orderValue)

        axios.post(
            `${import.meta.env.VITE_ENDPOINT}/orders/`, orderValue)
            .then(res => {
                const loggedIn = res.data

                if (loggedIn) {
                    // toast.success("Додано шукача")
                    console.log("+++")
                    reset()
                }
            })
            .catch(error => {
                // toast.error(error.response?.data.message)
                console.error(error.response?.data.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
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