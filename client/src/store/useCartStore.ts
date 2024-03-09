import create from "zustand";
import {CartProduct, Product} from "../../types.ts";

interface CartState {
    cartItems: CartProduct[];
    addItemToCart: (item: Product) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    removeItemFromCart: (productId: string) => void;
}

const useCartStore = create<CartState>((set, get) => ({
    cartItems: [],
    total: 0,

    addItemToCart: (item) => {
        const itemExists = get().cartItems.find(
            (cartItem) => cartItem._id === item._id
        );
        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                itemExists.quantity++;
            }

            set({ cartItems: [...get().cartItems] });
        } else {
            set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
        }
    },

    increaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
            (cartItem) => cartItem._id === productId
        );

        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                itemExists.quantity++;
            }

            set({ cartItems: [...get().cartItems] });
        }
    },

    decreaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
            (cartItem) => cartItem._id === productId
        );

        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                if (itemExists.quantity === 1) {
                    const updatedCartItems = get().cartItems.filter(
                        (item) => item._id !== productId
                    );
                    set({ cartItems: updatedCartItems });
                } else {
                    itemExists.quantity--;
                    set({ cartItems: [...get().cartItems] });
                }
            }
        }
    },

    removeItemFromCart: (productId) => {
        const itemExists = get().cartItems.find(
            (cartItem) => cartItem._id === productId
        );

        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                const updatedCartItems = get().cartItems.filter(
                    (item) => item._id !== productId
                );
                set({ cartItems: updatedCartItems });
            }
        }
    },


}));

export default useCartStore;