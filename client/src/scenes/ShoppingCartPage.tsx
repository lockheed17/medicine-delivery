import UserForm from "../components/UserForm.tsx";
import ShoppingCartList from "../components/ShoppingCartList.tsx";
import ShoppingCartFooter from "../components/ShoppingCartFooter.tsx";
import {useRef} from "react";


interface CustomFormRef {
    submitForm(): () => void; // Define the onSubmit prop type
}

const ShoppingCartPage = () => {

    const formRef = useRef<CustomFormRef>();
    // console.log(formRef)

    const submitUserForm = () => {
        if (formRef.current) {
            formRef.current.submitForm();
        }
    };

    return (
        <div className="grid grid-cols-2 h-full p-4 gap-4">
            <div className="border-slate-500 border-2 rounded col-span-full md:col-span-1 min-h-3/4">
                <UserForm reference={formRef}/>
            </div>
            <div className="border-slate-500 border-2 rounded col-span-full md:col-span-1 min-h-3/4 overflow-y-auto">
                <ShoppingCartList/>
            </div>
            <div className="col-span-2 border-black border-2 min-h-1/4">
                <ShoppingCartFooter submitUserForm={submitUserForm}/>
            </div>

        </div>
    )
}

export default ShoppingCartPage;