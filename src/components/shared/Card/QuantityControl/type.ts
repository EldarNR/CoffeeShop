export interface QuantityControlProps {
    quantity: number;
    setQuantity: (n: number) => void;
    mobile: boolean;
    price: number;
    onAddToCart: () => void;
    onRemove: () => void;
}