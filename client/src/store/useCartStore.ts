import create from "zustand";
import {CartProduct, Product} from "../../types.ts";

interface CartState {
    cartItems: CartProduct[];
    addToCart: (item: Product) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
}

const useCartStore = create<CartState>((set, get) => ({
    cartItems: [],

    addToCart: (item) => {
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

    // increaseQuantity: (productId) => {
    //     const itemExists = get().cartItems.find(
    //         (cartItem) => cartItem.id === productId
    //     );
    //
    //     if (itemExists) {
    //         if (typeof itemExists.quantity === "number") {
    //             itemExists.quantity++;
    //         }
    //
    //         set({ cartItems: [...get().cartItems] });
    //     }
    // },
    //
    // decreaseQuantity: (productId) => {
    //     const itemExists = get().cartItems.find(
    //         (cartItem) => cartItem.id === productId
    //     );
    //
    //     if (itemExists) {
    //         if (typeof itemExists.quantity === "number") {
    //             if (itemExists.quantity === 1) {
    //                 const updatedCartItems = get().cartItems.filter(
    //                     (item) => item.id !== productId
    //                 );
    //                 set({ cartItems: updatedCartItems });
    //             } else {
    //                 itemExists.quantity--;
    //                 set({ cartItems: [...get().cartItems] });
    //             }
    //         }
    //     }
    // },

    // removeFromCart: (item) => {
    //     set((state) => ({
    //         cartItems: state.cartItems.filter((i) => i.id !== item.id),
    //         total: state.total - item.price,
    //     }));
    // },
    //
    changeQuantity: (item, quantity) => {
        set((state) => ({
            cartItems: state.cartItems.map((i) =>
                i.id === item.id ? { ...i, quantity } : i
            ),
            total:
                state.total + (quantity - item.quantity) * item.price,
        }));
    },
}));

export default useCartStore;