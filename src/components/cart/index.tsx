import Image from "next/image";
import { useCartStore } from "@/src/store";

export const Cart = () => {
    const { items, clearCart, updateQuantity, removeFromCart } = useCartStore();
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className="w-full mx-auto bg-white rounded-2xl py-0">
            <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-base text-gray-800 font-medium">Корзина</h2>
                {items.length > 0 && (
                    <button
                        onClick={clearCart}
                        className="text-sm text-red-400 bg-[#FFF4F4] font-normal py-[4px] px-[12px] rounded-xl hover:text-red-600"
                    >
                        Очистить
                    </button>
                )}
            </div>

            {items.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-6">Корзина пуста</p>
            ) : (
                <div className="space-y-4">
                    {items.map((item) => {
                        const outOfStock = item.remaining <= 0;
                        const left = item.remaining - item.quantity;

                        return (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 border-b border-gray-200 pb-4 w-full"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={64}
                                    height={60}
                                    className="rounded-md"
                                />
                                <div className=" flex flex-col w-full">
                                    <p className="font-medium text-[18px] text-gray-800">{item.name}</p>
                                    <p className="text-[18px] font-medium ">{item.volume}</p>
                                    <p className="text-base font-normal mt-1">
                                        {item.price.toLocaleString("ru-RU")}<span className="text-[#909090]">₸/шт</span>
                                    </p>

                                    {outOfStock ? (
                                        <div className="mt-2">
                                            <span className="text-white px-[16px] py-[6px] rounded-md text-sm font-normal bg-[#909090]">
                                                Нет в наличии
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="flex justify-evenly items-center mt-2">
                                            <div className="flex items-center">
                                                <button
                                                    onClick={() =>
                                                        item.quantity > 1
                                                            ? updateQuantity(item.id, item.quantity - 1)
                                                            : removeFromCart(item.id)
                                                    }
                                                    className="w-7 h-7 rounded-md border border-gray-300 flex items-center justify-center text-lg text-gray-600 disabled:opacity-40"
                                                >
                                                    -
                                                </button>

                                                <span className="w-10 text-center text-sm mx-2 text-white rounded-md py-1 bg-[#979797]">{item.quantity}</span>

                                                <button
                                                    onClick={() =>
                                                        updateQuantity(item.id, item.quantity + 1)
                                                    }
                                                    className="w-7 h-7 rounded-md border border-gray-300 flex items-center justify-center text-lg text-gray-600 disabled:opacity-40"
                                                    disabled={left <= 0}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            {!outOfStock && (
                                                <p className={`text-xs mt-1 text-[#C54949]`}>
                                                    {left > 0
                                                        ? `Осталось ${left} шт.`
                                                        : "Нет в наличии"}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {items.length > 0 && (
                <div className="mt-6 border-t border-gray-100">
                    <div className="flex justify-between text-[#525252] font-medium  mb-3">
                        <span className="text-sm ">Итого к оплате</span>
                        <span className="text-base">
                            {total.toLocaleString("ru-RU")}₸
                        </span>
                    </div>

                    <button className="block text-sm mx-auto font-medium bg-[#523A29] text-white rounded-lg py-2 px-[24px] cursor-pointer hover:bg-[#3d2a1d] transition">
                        Оформить заказ
                    </button>
                </div>
            )}
        </div>
    );
};
