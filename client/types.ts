export type User = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string
}

export type Product = {
    _id: string;
    name: string;
    image: string;
    price: number;
}

export type CartProduct = Product & {
    quantity: number;
};

export type Pharmacy = {
    _id: string;
    name: string;
    products: Product[];
}