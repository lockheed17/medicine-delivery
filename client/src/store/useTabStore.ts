import create from 'zustand';

interface TabStore {
    activeTab: string | null;
    setActiveTab: (id: string) => void;
}

const useTabStore = create<TabStore>((set) => ({
    activeTab: null,
    setActiveTab: (id) => set({activeTab: id})
}));

export default useTabStore;