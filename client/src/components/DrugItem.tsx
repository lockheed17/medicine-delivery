import Button from "./UI/Button.tsx";
import {Product} from "../../types.ts";
import useCartStore from "../store/useCartStore.ts";

interface DrugItemProps {
    image: string;
    name: string;
    price: number;
    product: Product;
}

const DrugItem: React.FC<DrugItemProps> = ({
                                               image,
                                               name,
                                               price,
                                               product,
                                           }) => {
    const { addToCart } = useCartStore();
    const handleAddToCart = () => {
        console.log(product)
        addToCart(product);
    }

    return (
        <div className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow gap-3 p-4">
            <div>
                <img className="p-8 rounded-t-lg" src={image} alt={name}/>
            </div>
            <div className="flex justify-between">
                <div className="text-xl font-semibold tracking-tight text-gray-900">{name}</div>
                <div className="text-3xl font-bold text-gray-900">{price}</div>
            </div>
            <div className="">
                <Button
                    outline
                    small
                    label="Add to cart"
                    onClick={handleAddToCart}
                />
            </div>
        </div>
    );
}

export default DrugItem;