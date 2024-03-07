

import {Pharmacy} from "../../types.ts";

const pharmacies: Pharmacy[] = [
    {
        _id: "1",
        name: "Drugs 24",
        products: [
            { _id: "101", name: "Paracetamol", image: "https://root.tblcdn.com/img/goods/67b72bf6-c1bd-4325-a639-1c11b4feef49/1/img_0.jpg", price: 100 },
            { _id: "102", name: "Aspirin", image: "https://root.tblcdn.com/img/goods/0f5f3990-9bc6-40fc-bd92-feb83c45300d/1/img_0.jpg", price: 200 },
            // ...
        ],
    },
    {
        _id: "2",
        name: "CVS",
        products: [
            { _id: "201", name: "Ibuprofen", image: "https://m.apteka911.ua/content/shop/products/250474/671565-prod-400x400-11ff.jpg", price: 300 },
            { _id: "202", name: "Losartan", image: "https://root.tblcdn.com/img/goods/ee97c1e5-1e9a-414a-b02c-f47bd29f426a/1/img_0.jpg", price: 400 },
            // ...
        ],
    },
    {
        _id: "3",
        name: "Redcare",
        products: [
            { _id: "301", name: "Loratadine", image: "https://root.tblcdn.com/img/goods/037f5a8c-5b50-4f26-8f27-fb561cc59ff1/1/img_0.jpg", price: 500 },
            { _id: "302", name: "Omeprazole", image: "https://root.tblcdn.com/img/goods/28724415-77e1-47bf-a447-e25d6d329a5a/1/img_0.jpg", price: 600 },
        ],
    },
    {
        _id: "4",
        name: "Organic Pharmacy",
        products: [
            { _id: "401", name: "Vitamin C", image: "https://m.apteka911.ua/content/shop/products/242851/Mask%20group%20(18)-prod-400x400-1e8a.jpg", price: 700 },
            { _id: "402", name: "Fish Oil", image: "https://images.prom.ua/3909513708_w400_h400_sports-research-omega-3.jpg", price: 800 },
        ],
    },
    // ...
];


export default pharmacies;

