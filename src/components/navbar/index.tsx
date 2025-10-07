// libraries
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// hooks
import { useIsMobile } from "@/src/hooks/useMediaQuery";
// icons
import CartEmptyIcon from "@/src/assets/icons/cartEmpty.svg";
import MenuOpenIcon from "@/src/assets/icons/mobileMenuOpen.svg";
import MenuCloseIcon from "@/src/assets/icons/mobileMenuClose.svg";
// config
import {LANGUAGES, MENU_LINKS} from "@/src/components/navbar/config";
// type
import {LOGO} from "@/src/type/type";

const NavBar = () => {
    const isMobile = useIsMobile();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {isMobile ? (
                            <>
                                <button
                                    onClick={toggleMenu}
                                    className="flex flex-col py-[16px] px-[13px] justify-center items-center shadow rounded-md"
                                    aria-label="Toggle menu"
                                >
                                    <Image src={MenuOpenIcon} alt="menu-Open" />
                                </button>

                                <div className="flex items-center gap-4">
                                    <select
                                        name="language"
                                        id="language-select"
                                        className="border-0 bg-transparent py-[14px] px-[13px] shadow rounded-md text-sm font-medium text-[#525252] focus:outline-none"
                                    >
                                        {LANGUAGES.map((lang) => (
                                            <option key={lang.value} value={lang.value}>
                                                {lang.label}
                                            </option>
                                        ))}
                                    </select>
                                    <h1 className="text-xl font-semibold text-[#525252]">
                                        {LOGO.NAME}
                                    </h1>
                                    <Link
                                        href="/"
                                        className="text-sm font-medium shadow rounded-md py-[12px] px-[14px] text-[#525252]"
                                    >
                                        Каталог
                                    </Link>
                                </div>

                                <button
                                    className="relative shadow rounded-md p-[14px]"
                                    aria-label="Shopping cart"
                                >
                                    <Image src={CartEmptyIcon} alt="cart" />
                                </button>
                            </>
                        ) : (
                            <>
                                <h1 className="text-xl font-semibold text-[#525252]">{LOGO.NAME}</h1>
                                <ul className="hidden md:flex space-x-8">
                                    {MENU_LINKS.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-sm font-medium text-[#525252]"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <select
                                    name="language"
                                    id="language-select"
                                    className="max-w-[78px] p-[8px] shadow-sm"
                                >
                                    {LANGUAGES.map((lang) => (
                                        <option key={lang.value} value={lang.value}>
                                            {lang.label}
                                        </option>
                                    ))}
                                </select>
                            </>
                        )}
                    </div>
                </nav>
            </header>

            {isMobile && (
                <>
                    {isMenuOpen && (
                        <div
                            className="fixed inset-0 bg-opacity-50 z-40"
                            onClick={toggleMenu}
                        />
                    )}

                    <div
                        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                            isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-semibold text-[#525252]">
                                    {LOGO.NAME}
                                </h2>
                                <button
                                    onClick={toggleMenu}
                                    className="p-2"
                                    aria-label="Close menu"
                                >
                                    <Image src={MenuCloseIcon} alt="menu-Close" />
                                </button>
                            </div>
                            <nav>
                                <ul className="space-y-[26px]">
                                    {MENU_LINKS.map((link) => {
                                        const isActive = pathname === link.href;

                                        return (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className={`flex items-center text-base font-medium py-2 ${
                                                        isActive
                                                            ? "text-[#523A29]"
                                                            : "text-[#523A297A]"
                                                    }`}
                                                    onClick={toggleMenu}
                                                >
                                                    {isActive && (
                                                        <span className="w-3 h-3 bg-[#523A29] rounded-full mr-3"></span>
                                                    )}
                                                    {link.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default NavBar;
