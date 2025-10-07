// libraries
import { FC } from "react";
import Image from "next/image";
// icons
import TrashIcon from "@/src/assets/icons/trash.svg";
import PlusIcon from "@/src/assets/icons/plus.svg";
import CartIcon from "@/src/assets/icons/cart.svg";
// type
import {QuantityControlProps} from "@/src/components/shared/Card/QuantityControl/type";

export const QuantityControl: FC<QuantityControlProps> = ({quantity,setQuantity,mobile,price,onAddToCart,onRemove}) => {
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            onRemove();
        }
    };

    const handleIncrease = () => {
        onAddToCart();
    };

    return (
        <div className="flex justify-between items-center sm:bg-[#F7F7F7] sm:px-[58px] px-2  bg-white rounded-xl max-w-full w-full">
            {!mobile ? (
                <>
                    <button
                        onClick={handleDecrease}
                        aria-label="Уменьшить количество"
                    >
                        <div className="p-2 rounded-md shadow bg-white">
                            <Image src={TrashIcon} alt="minus" />
                        </div>
                    </button>
                    <span className="max-w-8 text-end text-base font-normal border-none py-[6px] px-[9px] focus:outline-none">1</span>
                    <button
                        onClick={handleIncrease}
                        aria-label="Увеличить количество"
                    >
                        <div className="p-2 rounded-md shadow bg-white">
                            <Image src={PlusIcon} alt="plus" />
                        </div>
                    </button>
                </>
            ) : (
                <>
                    <div className="p-2 font-medium text-base rounded-md bg-white">
                        {price.toLocaleString("ru-RU")}₸
                    </div>

                    <button
                        onClick={onAddToCart}
                        aria-label="Добавить в корзину"
                        className="bg-[#523A29] flex rounded-2xl text-white py-[8px] gap-[4px] px-[24px]"
                    >
                        <Image src={CartIcon} alt="cart" />
                        Добавить в корзину
                    </button>
                </>
            )}
        </div>
    );
};
