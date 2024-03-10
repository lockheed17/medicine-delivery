import useTabStore from "../../store/useTabStore.ts";
import Button from "../UI/Button.tsx";
import {Pharmacy} from "../../../types.ts";

type PharmacyTabs = {
    pharmacies: Pharmacy[],
}

const PharmacyTabs = ({pharmacies}: PharmacyTabs) => {
    const {activeTab, setActiveTab} = useTabStore();

    return (
        <div className="flex flex-col justify-start bg-gray-200 p-4 md:h-screen overflow-y-auto">
            <h2 className="text-lg font-semibold mb-2 text-center">Shops:</h2>
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto">
                {pharmacies.map((pharmacy) => (
                    <Button
                        key={pharmacy._id}
                        outline
                        label={pharmacy.name}
                        onClick={() => setActiveTab(pharmacy._id)}
                        active={activeTab == pharmacy._id}
                    />
                ))}
            </div>
        </div>
    );
};

export default PharmacyTabs;
