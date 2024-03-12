import {CartProduct} from "../../types.ts";
import Button from "./UI/Button.tsx";
import useCartStore from "../store/useCartStore.ts";

type ShoppingCartItemProps = {
    item: CartProduct;
}

const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {
    const { increaseQuantity, decreaseQuantity, removeItemFromCart } = useCartStore();

    const onIncreaseQuantity = (productId: string) => {
        increaseQuantity(productId);
    };

    const onDecreaseQuantity = (productId: string) => {
        decreaseQuantity(productId);
    };

    const onRemoveItem = (productId: string) => {
        removeItemFromCart(productId);
    };


    return (
        <div className="flex p-2 justify-around gap-4 items-center border-slate border-2 rounded flex-col md:flex-row">
            <div className="w-1/2 md:w-1/3 ">
                <img className="" src={item.image} alt={item.name}/>
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900">{item.name}</h3>
                <p className="text-2xl font-bold text-gray-900">
                    {" "}
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(item.price)}
                </p>
                <div className="flex justify-center items-center gap-5 mb-2">
                    <button
                        onClick={() => onIncreaseQuantity(item._id)}
                        title="Increase quantity"
                        className="bg-gray-300 px-2 py-2 text-neutral-800 rounded-full hover:bg-neutral-200 transition"
                    >
                        +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                        onClick={() => onDecreaseQuantity(item._id)}
                        title="Decrease Quantity"
                        className="bg-gray-300 px-2 py-2 text-neutral-800 rounded-full hover:bg-neutral-200 transition"
                    >
                        -
                    </button>
                </div>
                <Button
                    small
                    label="Remove"
                    onClick={() => onRemoveItem(item._id)}
                />
            </div>
        </div>
    );
};

export default ShoppingCartItem;