// import axios from "axios";
import useTabStore from "../store/useTabStore.ts";
// import pharmacies from "../data/pharmacies.ts";
import DrugItem from "./DrugItem.tsx";
// import {useEffect, useState} from "react";
import {Pharmacy, Product} from "../../types.ts";

type DrugListProps = {
    pharmacies: Pharmacy[],
}

const DrugList = ({pharmacies}: DrugListProps) => {
    const {activeTab} = useTabStore();
    // const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
    // const getPharmacies = async () => {
    //     try {
    //         const response = await axios.get(
    //             `${import.meta.env.VITE_ENDPOINT}/pharmacies/`,
    //             {
    //                 // headers: {
    //                 //     Authorization: `Bearer ${token}`,
    //                 // }
    //             }
    //         )
    //         // console.log(response.data)
    //         setPharmacies(response.data)
    //     } catch (error) {
    //         // toast.error(`${error}`)
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getPharmacies()
    //
    // }, []);

    console.log(pharmacies)

    const selectedPharmacyData = pharmacies.find(
        (pharmacy: Pharmacy) => pharmacy._id === activeTab
    );



    return (
        <div className="flex flex-wrap gap-4 p-2">
            {selectedPharmacyData?.products.map((product: Product) => (
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