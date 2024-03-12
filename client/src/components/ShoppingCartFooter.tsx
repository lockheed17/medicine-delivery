
import useCartStore from "../store/useCartStore.ts";
import Button from "./UI/Button.tsx";

interface ShoppingCartFooterProps {
    submitUserForm: () => void;
}

const ShoppingCartFooter = ({ submitUserForm }: ShoppingCartFooterProps) => {

    const { cartItems, getTotal } = useCartStore();

    const quantity = getTotal(cartItems).totalQuantity;
    const price = getTotal(cartItems).totalPrice;

    const getAllData = () => {
        submitUserForm();
    }

    const handleButtonClick = () => {
        getAllData()
    }

    return (
        <div className="p-2 flex justify-end gap-4 items-center h-full">
            <div className="flex flex-col items-baseline">
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