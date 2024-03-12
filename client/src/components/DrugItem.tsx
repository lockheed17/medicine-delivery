import Button from "./UI/Button.tsx";
import {Product} from "../../types.ts";
import useCartStore from "../store/useCartStore.ts";
import toast from "react-hot-toast";

interface DrugItemProps {
    image: string;
    name: string;
    price: number;
    product: Product;
}

const DrugItem = ({ image, name, price, product }: DrugItemProps) => {
    const { addItemToCart } = useCartStore();

    const handleAddItemToCart = () => {
        addItemToCart(product);
        toast.success("Product has been added to your cart")
    }

    return (
        <div className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow gap-3 p-4">
            <div>
                <img className="p-8 rounded-t-lg" src={image} alt={name}/>
            </div>
            <div className="flex justify-between">
                <div className="text-xl font-semibold tracking-tight text-gray-900">{name}</div>
                <div className="text-2xl items-center font-bold text-gray-900">
                    {" "}
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(price)}
                </div>
            </div>
            <div className="">
                <Button
                    outline
                    small
                    label="Add to cart"
                    onClick={handleAddItemToCart}
                />
            </div>
        </div>
    );
}

export default DrugItem;