// libraries
import { FC, useState } from "react";
import Image from "next/image";
// type
import { Product } from "@/src/type/type";
// icons
import DownIcon from "@/src/assets/icons/down.svg";
// hooks
import { useIsMobile } from "@/src/hooks/useMediaQuery";
// components
import { ProductDetails } from "@/src/components/shared/Card/ProductDetails";
import { QuantityControl } from "@/src/components/shared/Card/QuantityControl";
// store
import { useCartStore } from "@/src/store";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);
    const isMobile = useIsMobile();

    const { addToCart, removeFromCart, updateQuantity } = useCartStore();

    const handleAdd = () => {
        addToCart(product, quantity);
        setQuantity(1);
    };

    const handleRemove = () => {
        removeFromCart(product.id);
    };

    const handleQuantityChange = (n: number) => {
        updateQuantity(product.id, n);
        setQuantity(n);
    };

    return (
        <article className="bg-white overflow-hidden mx-auto my-2">
            <div className="flex flex-row p-6 sm:gap-10 gap-4">
                <div className="relative flex-shrink-0 max-w-[144px] sm:max-w-[360px] w-full">
                    {product.isNew && (
                        <span className="absolute top-0 left-0 bg-[#C54536] text-white px-4 py-1 text-[8px] sm:text-sm font-medium uppercase z-10">
                            Новинка
                        </span>
                    )}
                    <div className="bg-[#F5F1EF] flex justify-center items-center h-full">
                        <Image src={product.image} alt={product.name} />
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <p className="text-[10px] text-[#523A29BF]">
                        Артикул: {product.article}
                    </p>
                    <h2 className="text-[#523A29] text-[16px] sm:text-[28px] font-medium my-3 leading-tight">
                        {product.name}
                    </h2>

                    {!isMobile && (
                        <>
                            <p className="text-[#A6A19D] text-sm sm:text-base font-light leading-tight">
                                {product.description}
                            </p>

                            <div className="my-6">
                                <button className="bg-[#523A29] text-white px-2 py-1 rounded text-xs font-medium">
                                    {product.volume} (1)
                                </button>
                            </div>

                            <ProductDetails product={product} />

                            <div className="flex items-center justify-end mt-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-base font-medium">
                                        {product.price.toLocaleString("ru-RU")}₸
                                    </span>
                                    <QuantityControl
                                        quantity={quantity}
                                        setQuantity={handleQuantityChange}
                                        mobile={isMobile}
                                        price={product.price}
                                        onAddToCart={handleAdd}
                                        onRemove={handleRemove}
                                    />
                                </div>
                            </div>
                        </>
                    )}

                    {isMobile && <ProductDetails product={product} />}
                </div>
            </div>

            {isMobile && (
                <div className="px-6 pb-4">
                    <div className="my-6">
                        <button className="bg-[#523A29] text-white px-3 py-2 rounded text-xs font-medium">
                            {product.volume}
                        </button>
                    </div>

                    <p
                        className={`mt-4 mb-2 text-[#A6A19D] text-sm font-light leading-snug transition-all duration-300 ${
                            isExpanded ? "line-clamp-none" : "line-clamp-3"
                        }`}
                    >
                        {product.description}
                    </p>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-xs font-medium text-[#878787]"
                    >
                        {isExpanded ? (
                            <>
                                Скрыть
                                <Image
                                    src={DownIcon}
                                    alt="up"
                                    width={8}
                                    height={5}
                                    className="rotate-180"
                                />
                            </>
                        ) : (
                            <>
                                Подробнее
                                <Image src={DownIcon} alt="down" width={8} height={5} />
                            </>
                        )}
                    </button>

                    <QuantityControl
                        quantity={quantity}
                        setQuantity={handleQuantityChange}
                        mobile={isMobile}
                        price={product.price}
                        onAddToCart={handleAdd}
                        onRemove={handleRemove}
                    />
                </div>
            )}
        </article>
    );
};

export default ProductCard;