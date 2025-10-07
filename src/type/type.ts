// libraries
import {StaticImageData} from "next/image";

export interface Product {
    id: number;
    article: string;
    name: string;
    description: string;
    remaining:number;
    type: string;
    roast: number;
    form: string;
    composition: string;
    volume: string;
    origin: string;
    manufacturer: string;
    price: number;
    image: StaticImageData;
    isNew: boolean;
}

export enum LOGO {
    NAME = "COFFEINO"
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    updateQuantity: (productId: number, newQuantity: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}