import {create} from "zustand"
import { axiosInstance } from "@/lib/axios";

interface AuthStore {
    isAdmin: boolean;
    error: string | null;
    isLoading: boolean;

    checkAdminStatus: () => Promise<void>;
    reset: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    isAdmin: false,
    error: null,
    isLoading: false,
    checkAdminStatus: async () => {
        try {
            const response = await axiosInstance.get("/admin/check");
            set({isAdmin: response.data, error: null, isLoading: false});
        } catch (error: any) {
            set({error: error.response.data, isLoading: false, isAdmin: false});    
        }finally{
            set({isLoading: false});
        }
    },

    reset: () => set({isAdmin: false, error: null, isLoading: false}),
}))  
