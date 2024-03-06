// import {useState} from "react";
import useTabStore from "../store/useTabStore.ts";
import pharmacies from "../data/pharmacies.ts";
import DrugItem from "./UI/DrugItem.tsx";

// interface Product {
//     id: number;
//     name: string;
//     price: number;
// }

// interface Pharmacy {
//     id: string;
//     name: string;
//     products: Product[];
//
// }
const DrugList = () => {
    const {activeTab} = useTabStore();
    const selectedPharmacyData = pharmacies.find(
        (pharmacy) => pharmacy.id === activeTab
    );

    return (
        <div className="flex flex-wrap gap-4 p-2 border-4 border-black">
            {selectedPharmacyData &&
                selectedPharmacyData.products.map((product) => (
                    <DrugItem
                        key={product.id}
                        image={"https://cdn-icons-png.flaticon.com/512/2175/2175188.png"}
                        name={product.name}
                        price={product.price}
                        onAdd={() => (console.log(123))}
                    />
                ))}
        </div>
    )
}

export default DrugList;