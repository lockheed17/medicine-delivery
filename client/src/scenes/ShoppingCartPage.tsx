import UserForm from "../components/UserForm.tsx";
import ShoppingCartList from "../components/ShoppingCartList.tsx";
import ShoppingCartFooter from "../components/ShoppingCartFooter.tsx";

const ShoppingCartPage = () => {

    return (
        <div className="grid grid-cols-2 h-screen p-4 gap-4">
            <div className="border-slate-500 border-2 rounded col-span-full md:col-span-1">
                <UserForm/>
            </div>
            <div className="border-slate-500 border-2 rounded col-span-full md:col-span-1 overflow-y-auto">
                <ShoppingCartList/>
            </div>
            <div className="col-span-2 border-black border-2">
                <ShoppingCartFooter/>
            </div>
        </div>
    )
}

export default ShoppingCartPage;