import useCartStore from "../store/useCartStore.ts";
import ShoppingCartItem from "./ShoppingCartItem.tsx";

const ShoppingCartList = () => {
    const {cartItems} = useCartStore();

    return (
        <div className="flex flex-col p-2 gap-4 h-full">
            {cartItems?.map((item) => (
                <ShoppingCartItem
                    key={item._id}
                    item={item}
                />
            ))}
        </div>
    )
}

export default ShoppingCartList;