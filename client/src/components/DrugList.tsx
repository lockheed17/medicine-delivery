import useTabStore from "../store/useTabStore.ts";
import DrugItem from "./DrugItem.tsx";
import {Pharmacy, Product} from "../../types.ts";

type DrugListProps = {
    pharmacies: Pharmacy[],
}

const DrugList = ({ pharmacies }: DrugListProps) => {
    const {activeTab} = useTabStore();

    const selectedPharmacyData = pharmacies.find(
        (pharmacy: Pharmacy) => pharmacy._id === activeTab
    );

    return (
        <div className="flex flex-wrap gap-4 p-2">
            {selectedPharmacyData &&
                selectedPharmacyData.products.map((product: Product) => (
                <DrugItem
                    key={product._id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    product={product}
                />
            ))}

        </div>
    )
}

export default DrugList;