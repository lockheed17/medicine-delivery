import {CartProduct} from "../../types.ts";
import useCartStore from "../store/useCartStore.ts";
import Button from "./UI/Button.tsx";

interface ShoppingCartFooterProps {
    submitUserForm: () => void;
}

const ShoppingCartFooter: React.FC<ShoppingCartFooterProps> = ({ submitUserForm }) => {

    const { cartItems } = useCartStore();
    const getTotal = (cartItem: CartProduct[]) => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cartItem.forEach((item) => {
            totalQuantity += item.quantity!;
            totalPrice += item.price! * item.quantity!;
        });
        return { totalPrice, totalQuantity };
    };
    const quantity = getTotal(cartItems).totalQuantity;
    const price = getTotal(cartItems).totalPrice;

    const handleButtonClick = () => {
        // console.log(submitUserForm)
        // reference.current.submitForm()
        // const result = submitUserForm();
        // console.log(result)
        console.log(cartItems)
    }

    return (
        <div className="p-2 flex justify-end gap-4 items-center h-full">
            <div className="">
                <h3 className="text-xl text-center  ">
                    Total Quantity: <span className="font-bold"> {quantity}</span>
                </h3>
                <h3 className="text-xl text-center">
                    Total Price:{" "}
                    <span className="font-bold">
                    {" "}
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(price)}
                </span>
                </h3>
            </div>

            <div className="w-2/12">
                <Button
                    label="Submit"
                    outline
                    onClick={handleButtonClick}
                />
            </div>
        </div>
    )
}

export default ShoppingCartFooter;