// libraries
import { FC } from "react";
import Image from "next/image";
// hooks
import { useIsMobile } from "@/src/hooks/useMediaQuery";
// type
import {LOGO} from "@/src/type/type";
// config
import {NAV_ITEMS} from "@/src/components/footer/config";
// icons
import DeliveryIcon from "@/src/assets/icons/delivery.svg";
import CoffeeWhiteIcon from "@/src/assets/icons/coffeeWhite.svg";
import PhoneIcon from "@/src/assets/icons/phone.svg";
import EmilIcon from "@/src/assets/icons/email.svg";
import WhatsAppIcon from "@/src/assets/icons/whatsApp.svg";
import InstagramIcon from "@/src/assets/icons/instagram.svg";
import TimeIcon from "@/src/assets/icons/time.svg";
import MapIcon from "@/src/assets/icons/map.svg";
import TwoGisIcon from "@/src/assets/icons/2gis.svg";
import GoogleMapsIcon from "@/src/assets/icons/googleMaps.svg";
import YandexMapsIcon from "@/src/assets/icons/yandexMaps.svg";


const Footer: FC = () => {
    const isMobile = useIsMobile();

    return (
        <footer className="bg-[#4a3933] text-white">
            <div className="container mx-auto px-6 py-10">
                {isMobile ? (
                    <>
                        <div className="space-y-6 grid grid-cols-2 text-sm">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">{LOGO.NAME}</h2>
                                <div className="space-y-4">
                                    { NAV_ITEMS.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition"
                                        >
                                            {index === 0 && (
                                                <span className="inline-block w-[12px] h-[12px] bg-white rounded-full"/>
                                            )}
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-normal text-[12px]">График работы</h3>
                                    <div className="flex items-start gap-2 mt-1">
                                        <Image src={TimeIcon} alt="time" />
                                        <p className="font-medium text-sm">Пн–Вс <br/>
                                            9:00 – 20:00</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-normal text-[12px]">Номер телефона</h3>
                                    <div className="flex items-center gap-2 my-1">
                                        <Image src={PhoneIcon} alt="phone" />
                                        <p className="font-medium text-sm">+7 (747) 643 23 56</p>
                                    </div>
                                    <a
                                        href="https://wa.me/77476432356"
                                        className="mt-2 inline-flex items-center gap-2 border-t-2 border-b-2 px-4 py-2  rounded-lg"
                                    >
                                        <Image src={WhatsAppIcon} alt="WhatsApp"/>
                                        WhatsApp
                                    </a>
                                </div>

                                <div>
                                    <h3 className="font-normal text-[12px]">Почта</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Image src={EmilIcon} alt="email" />
                                        <a href="mailto:cvhwdbhjq@mail.ru" className="font-medium text-sm">cvhwdbhjq@mail.ru</a>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-normal text-[12px]">Наши соцсети</h3>
                                    <a
                                        href="https://instagram.com"
                                        className="mt-2 inline-flex items-center gap-2 border-t-2 border-b-2  px-4 py-2 rounded-lg"
                                    >
                                        <Image src={InstagramIcon} alt="Instagram" />
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-normal text-[12px]">Доставка:</h3>
                                <div className="flex items-center gap-2">
                                    <Image src={DeliveryIcon} alt="delivery" />
                                    <p>Осуществляем отправку заказов по Казахстану и в страны СНГ</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-normal text-[12px]">Адрес:</h3>
                                <div className="flex items-start gap-2 mt-1">
                                    <Image src={MapIcon} alt="map" />
                                    <p>Панфилова 237</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-light">Построение маршрута:</h3>
                                <div className="flex gap-4 mt-2">
                                    <a href="#" className="flex flex-col items-center gap-1">
                                        <Image src={TwoGisIcon} alt="2gis" />
                                        <span>2GIS</span>
                                    </a>
                                    <a href="#" className="flex flex-col items-center gap-1">
                                        <Image src={GoogleMapsIcon} alt="google" />
                                        <span>Google</span>
                                    </a>
                                    <a href="#" className="flex flex-col items-center gap-1">
                                        <Image src={YandexMapsIcon} alt="yandex" />
                                        <span>Yandex</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>

                ) : (
                    <div className="grid grid-cols-3 gap-12">
                        <div className="max-w-[290px]">
                            <h2 className="text-2xl font-bold mb-6">{LOGO.NAME}</h2>
                            <div className="mb-6">
                                <h3 className="text-sm font-light mb-3">Доставка:</h3>
                                <div className="flex items-start text-sm gap-[6px]">
                                    <Image src={DeliveryIcon} alt="deliveryIcon" />
                                    <span>Осуществляем отправку заказов по Казахстану и в страны СНГ</span>
                                </div>
                            </div>
                            <nav className="space-y-3 font-medium text-sm">
                                { NAV_ITEMS.map((item, index) => {
                                    return index === 0 ? (
                                        <a key={index} href={item.href} className=" hover:text-gray-300 transition pl flex items-center gap-2">
                                            <Image src={CoffeeWhiteIcon} alt="coffeeIcon" width={16} height={16} />
                                            {item.label}
                                        </a>
                                    ) : (
                                        <a key={index} href={item.href} className="block hover:text-gray-300 transition">
                                            {item.label}
                                        </a>
                                    );
                                })}
                            </nav>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-light">Номер телефона</h3>
                                <div className="flex items-center gap-2">
                                    <Image src={PhoneIcon} alt="phoneIcon" />
                                    <span>+7 (747) 643 23 56</span>
                                </div>
                                <a
                                    href="https://wa.me/77476432356"
                                    className="inline-flex mt-2 font-medium text-sm items-center gap-2 bg-gradient-to-r border-t-2 border-b-2 px-6 py-2 rounded-2xl transition"
                                >
                                    <Image src={WhatsAppIcon} alt="WhatsAppIcon" />
                                    WhatsApp
                                </a>
                            </div>

                            <div>
                                <h3 className="text-sm font-light mt-3">Почта</h3>
                                <div className="flex items-center gap-2">
                                    <Image src={EmilIcon} alt="email" />
                                    <a href="mailto:cvhwdbhjq@mail.ru">cvhwdbhjq@mail.ru</a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-light mb-3">Наши соцсети</h3>
                                <a
                                    href="https://instagram.com"
                                    className="inline-flex mt-2 font-medium text-sm items-center gap-2 bg-gradient-to-r border-t-2 border-b-2 px-6 py-2 rounded-2xl transition"
                                >
                                    <Image src={InstagramIcon} alt="InstagramIcon" />
                                    Instagram
                                </a>
                            </div>
                        </div>

                        <div className="max-w-[327px] space-y-4">
                            <div>
                                <h3 className="text-sm font-light">График работы</h3>
                                <div className="flex items-center gap-2">
                                    <Image src={TimeIcon} alt="TimeIcon" />
                                    <span>Пн–Вс 9:00 – 20:00</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-light">Адрес:</h3>
                                <div className="flex items-center gap-2 mb-6">
                                    <Image src={MapIcon} alt="MapIcon" />
                                    <span>Панфилова 237</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-light">Построение маршрута:</h3>
                                <div className="flex gap-4 mt-2 text-sm font-light">
                                    <a href="#" className="flex flex-col items-center gap-1">
                                        <Image src={TwoGisIcon} alt="2gis" />
                                        <span>2GIS</span>
                                    </a>
                                    <a href="#" className="flex flex-col items-center gap-1">
                                        <Image src={GoogleMapsIcon} alt="google" />
                                        <span>Google</span>
                                    </a>
                                    <a href="#" className="flex flex-col items-center gap-1">
                                        <Image src={YandexMapsIcon} alt="yandex" />
                                        <span>Yandex</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="border-t border-[#5a4943]">
                <div className="container mx-auto px-6 py-4 flex flex-row justify-between items-center gap-4 text-sm font-medium">
                    <a href="#" className="hover:text-gray-300 underline">Публичная оферта</a>
                    <a href="#" className="hover:text-gray-300 underline">Политика конфиденциальности</a>
                </div>
            </div>

            <div className="bg-white text-black py-6">
                <div className="mx-auto text-center max-w-[110px] text-[12px] font-medium">
                    <p className="sm:text-xs mb-1">2025. © Все права защищены</p>
                    <p className="sm:text-xs flex items-center justify-center gap-1">
                        Разработано с <span className="text-red-500">❤️</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
