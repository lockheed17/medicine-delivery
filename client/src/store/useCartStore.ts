import create from "zustand";
import {CartProduct, Product} from "../../types.ts";

export interface CartStore {
    cartItems: CartProduct[];
    totalQuantity: number;
    totalPrice: number,
    addItemToCart: (item: Product) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    removeItemFromCart: (productId: string) => void;
    getTotal: (cartItem: CartProduct[]) => {totalPrice: number, totalQuantity: number};
}

const useCartStore = create<CartStore>((set, get) => ({
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,

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

    getTotal: (cartItems) => {
        // if (cartItems.length === 0) {
        //     return {
        //         totalPrice: 0,
        //         totalQuantity: 0,
        //     };
        // }

        const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity!, 0);
        const totalPrice = cartItems.reduce((acc, item) => acc + item.price! * item.quantity!, 0);

        // // Обновление переменных в сторе
        // set((state) => ({
        //     ...state,
        //     totalPrice: cartItems.reduce((acc, item) => acc + item.quantity!, 0),
        //     totalQuantity: cartItems.reduce((acc, item) => acc + item.price! * item.quantity!, 0),
        // }));


        return {
            totalPrice,
            totalQuantity,
        };
    },
}));


export default useCartStore;