import useCartStore from "../store/useCartStore.ts";
import ShoppingCartItem from "./ShoppingCartItem.tsx";

const ShoppingCartList = () => {
    const {cartItems, total, removeFromCart, changeQuantity} = useCartStore();
    console.log(cartItems);

    return (
        <div className="flex flex-col p-2 gap-4 ">
            {cartItems?.map((item) => (
                <ShoppingCartItem
                    key={item._id}
                    item={item}
                    onRemove={() => removeFromCart(item)}
                    // onQuantityChange={(quantity) => changeQuantity(item, quantity)}
                />
            ))}
            {/*<ShoppingCartTotal total={total}/>*/}
            {/*<CheckoutForm/>*/}
        </div>
    )
}

export default ShoppingCartList;