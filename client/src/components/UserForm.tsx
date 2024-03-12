import {User} from "../../types.ts";
import {useEffect, useImperativeHandle, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import FormInput from "./UI/FormInput.tsx";
import axios from "axios";
import useCartStore from "../store/useCartStore.ts";
import toast from "react-hot-toast";
import {CustomFormRef} from "../scenes/ShoppingCartPage.tsx";

type UserFormProps = {
    user?: User;
    reference?: React.RefObject<CustomFormRef>;
}

const UserForm = ({user, reference}: UserFormProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const { cartItems, clearCart } = useCartStore();

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

    const watchedValues = watch();

    useEffect(() => {
        const saveFormDataToLocalStorage = () => {
            const hasActiveFields = Object.values(watchedValues).some(value => value !== '');

            if (hasActiveFields) {
                const formData = {
                    name: watchedValues.name,
                    email: watchedValues.email,
                    phone: watchedValues.phone,
                    address: watchedValues.address,
                };
                localStorage.setItem("formData", JSON.stringify(formData));
            }
        };

        saveFormDataToLocalStorage();
    }, [watchedValues]);

    useEffect(() => {
        const restoreFormDataFromLocalStorage = () => {
            const savedFormData = localStorage.getItem("formData");
            if (savedFormData) {
                const parsedFormData = JSON.parse(savedFormData);
                Object.keys(parsedFormData).forEach(key => {
                    setValue(key, parsedFormData[key]);
                });
            }
        };

        restoreFormDataFromLocalStorage();
    }, [setValue]);


    useImperativeHandle(reference, () => ({
        submitForm() {
            handleSubmit(onSubmit)();
        }
    }));

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const userData = data;

        if (cartItems.length === 0) {
            toast.error("Your shopping cart is empty. Please add at least one product.")
            return;
        }

        const orderValue = {
            ...userData,
            cartItems,
            totalPrice: cartItems.reduce((sum, cartItem) => sum + cartItem.quantity * cartItem.price, 0),
            totalQuantity: cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0),
        };

        axios.post(
            `${import.meta.env.VITE_ENDPOINT}/orders/`, orderValue)
            .then(res => {
                const loggedIn = res.data

                if (loggedIn) {
                    toast.success("Your order has been successfully received")
                    reset()
                    localStorage.removeItem("formData");
                    clearCart()
                }
            })
            .catch(error => {
                toast.error(error.response?.data.message)
                console.error(error.response?.data.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4 gap-10 justify-center h-full">
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