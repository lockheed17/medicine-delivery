import pharmacies from "../../data/pharmacies.ts";
import useTabStore from "../../store/useTabStore.ts";
import Button from "../UI/Button.tsx";

const PharmacyTabs = () => {
    const {activeTab, setActiveTab} = useTabStore();

    return (
        <div className="flex flex-col justify-start bg-gray-200 p-4 md:h-screen overflow-y-auto">
            <h2 className="text-lg font-semibold mb-2 text-center">Shops:</h2>
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto">
                {pharmacies.map((pharmacy) => (
                    <Button
                        key={pharmacy.id}
                        outline
                        label={pharmacy.name}
                        onClick={() => setActiveTab(pharmacy.id)}
                        active={activeTab == pharmacy.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default PharmacyTabs;
