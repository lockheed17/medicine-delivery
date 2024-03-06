interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
}

interface Pharmacy {
    id: string;
    name: string;
    products: Product[];
}

const pharmacies: Pharmacy[] = [
    {
        id: "1",
        name: "Drugs 24",
        products: [
            { id: "101", name: "Paracetamol", image: "", price: 100 },
            { id: "102", name: "Aspirin", image: "", price: 200 },
            // ...
        ],
    },
    {
        id: "2",
        name: "CVS",
        products: [
            { id: "201", name: "Ibuprofen", image: "", price: 300 },
            { id: "202", name: "Benadryl", image: "", price: 400 },
            // ...
        ],
    },
    {
        id: "3",
        name: "Redcare",
        products: [
            { id: "301", name: "Loratadine", image: "", price: 500 },
            { id: "302", name: "Omeprazole", image: "", price: 600 },
            { id: "303", name: "Omeprazole", image: "", price: 600 },
            { id: "304", name: "Omeprazole", image: "", price: 600 },
            { id: "305", name: "Omeprazole", image: "", price: 600 },
            { id: "306", name: "Omeprazole", image: "", price: 600 },
            { id: "307", name: "Omeprazole", image: "", price: 600 },
            { id: "308", name: "Omeprazole", image: "", price: 600 },
        ],
    },
    {
        id: "4",
        name: "Organic Pharmacy",
        products: [
            { id: "401", name: "Vitamin C", image: "", price: 700 },
            { id: "402", name: "Fish Oil", image: "", price: 800 },
        ],
    },
    // ...
];


export default pharmacies;

