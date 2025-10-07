// libraries
import {FC} from "react";
import Image from "next/image";
// type
import {Product} from "@/src/type/type";
// icons
import CoffeeIcon from "@/src/assets/icons/coffee.svg";
// components
import {Detail} from "@/src/components/shared/Card/ProductDetails/Detail";

export const ProductDetails: FC<{ product: Product; compact?: boolean }> = ({product, compact = false}) => (
    <div
        className={`space-y-1 ${compact ? "text-sm" : "text-xs sm:text-[10px]"} font-normal`}
    >
        <Detail label="Тип" value={product.type} />
        <div className="flex">
            <span className="flex-1 text-black">Обжарка:</span>
            <div className="flex flex-1">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                        key={i}
                        src={CoffeeIcon}
                        alt="coffee"
                        width={8}
                        height={8}
                        className={i <= product.roast ? "" : "opacity-30"}
                    />
                ))}
            </div>
        </div>
        <Detail label="Форма" value={product.form} />
        <Detail label="Состав" value={product.composition} />
        <Detail label="Объём" value={product.volume} />
        <Detail label="Страна происхождения" value={product.origin} />
        {product.manufacturer && (
            <Detail label="Страна производитель" value={product.manufacturer} />
        )}
    </div>
);
