// libraries
import { create } from "zustand";
// type
import { CartState } from "@/src/type/type";

export const useCartStore = create<CartState>((set, get) => ({
    items: [],

    addToCart: (product, quantity = 1) =>
        set((state) => {
            const existing = state.items.find((i) => i.id === product.id);

            if (existing) {
                const newQuantity = existing.quantity + quantity;
                const available = product.remaining;

                if (available <= 0) {
                    return state;
                }

                return {
                    items: state.items.map((i) =>
                        i.id === product.id ? { ...i, quantity: newQuantity } : i
                    ),
                };
            }

            return { items: [...state.items, { ...product, quantity }] };
        }),

    updateQuantity: (productId, newQuantity) =>
        set((state) => {
            const item = state.items.find((i) => i.id === productId);
            if (!item) return state;

            const available = item.remaining;
            if (available <= 0) {
                return state;
            }

            return {
                items: state.items.map((i) =>
                    i.id === productId ? { ...i, quantity: newQuantity } : i
                ),
            };
        }),

    removeFromCart: (productId) =>
        set((state) => ({
            items: state.items.filter((i) => i.id !== productId),
        })),

    clearCart: () => set({ items: [] }),
}));
