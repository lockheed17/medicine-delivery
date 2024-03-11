import create from "zustand";

export interface FormStore {
    formData: {
        name: string;
        email: string;
        phone: string;
        address: string;
    };
    setFormData: (data: Partial<FormStore["formData"]>) => void;
}

export const useFormStore = create<FormStore>()((set) => ({
    formData: {
        name: "",
        email: "",
        phone: "",
        address: "",
    },
    setFormData(data) {
        set((state) => ({formData: {...state.formData, ...data}}));
    },
}));