
import useTabStore from "../store/useTabStore.ts";
import pharmacies from "../data/pharmacies.ts";
import DrugItem from "./DrugItem.tsx";


const DrugList = () => {
    const {activeTab} = useTabStore();
    const selectedPharmacyData = pharmacies.find(
        (pharmacy) => pharmacy._id === activeTab
    );

    return (
        <div className="flex flex-wrap gap-4 p-2">
            {selectedPharmacyData &&
                selectedPharmacyData.products.map((product) => (
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