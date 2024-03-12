import PharmacyTabs from "../components/tabs/PharmacyTabs.tsx"
import DrugList from "../components/DrugList.tsx";
import axios from "axios";
import {useEffect, useRef, useState} from "react";
import {Pharmacy} from "../../types.ts";
import toast from "react-hot-toast";


const DrugStorePage = () => {
    const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);

    const isDataLoaded = useRef(false);
    const getPharmacies = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_ENDPOINT}/pharmacies/`)
            setPharmacies(response.data)
        } catch (error) {
            toast.error(`Something went wrong.`);
        }
    }

    useEffect(() => {
        if (!isDataLoaded.current) {
            getPharmacies()
            isDataLoaded.current = true;
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row overflow-y-auto">
            <div className="w-full md:w-1/4">
                <PharmacyTabs pharmacies={pharmacies} />
            </div>
            <div className="w-full flex-grow md:w-3/4 h-screen overflow-y-auto">
                <DrugList pharmacies={pharmacies} />
            </div>
        </div>
    )
}

export default DrugStorePage;