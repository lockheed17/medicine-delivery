import {CartProduct, Product} from "../../types.ts";
import { GiMedicinePills } from "react-icons/gi";
import Button from "./UI/Button.tsx";
import useCartStore from "../store/useCartStore.ts";

type ShoppingCartItemProps = {
    item: CartProduct;
    onRemove: () => void;
    onQuantityChange: (quantity: number) => void;
}

const ShoppingCartItem = ({ item, onRemove, onQuantityChange }: ShoppingCartItemProps) => {
    const {changeQuantity} = useCartStore();
    const handleQuantityChange = (count) => {
        console.log(count)
        changeQuantity(count)
    }

    return (
        <div className="flex p-2 justify-around gap-4 items-center border-slate border-2 rounded">
            <div className="w-1/2 md:w-1/3 ">
                <img className="" src={item.image} alt={item.name}/>
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900">{item.name}</h3>
                <p className="text-2xl font-semibold text-gray-900">{item.price}</p>
                <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                />
                <Button
                    small
                    label="Remove"
                    onClick={onRemove}
                />
            </div>

        </div>
    );
};

export default ShoppingCartItem;