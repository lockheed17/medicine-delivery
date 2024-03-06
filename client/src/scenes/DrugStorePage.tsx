import PharmacyTabs from "../components/tabs/PharmacyTabs.tsx"
import DrugList from "../components/DrugList.tsx";


const DrugStorePage = () => {
    return (
        <div className="flex flex-col md:flex-row overflow-y-auto">
            <div className="w-full md:w-1/4">
                <PharmacyTabs  />
            </div>
            <div className="w-full flex-grow md:w-3/4 h-screen overflow-y-auto">
                <DrugList />
            </div>
        </div>
    )
}

export default DrugStorePage;