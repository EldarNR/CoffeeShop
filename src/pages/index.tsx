// components
import NavBar from "@/src/components/navbar";
import ProductCard from "@/src/components/shared/Card";
import { Cart } from "@/src/components/cart";
import Footer from "@/src/components/footer";
// server
import { products } from "@/src/server/items";
// hooks
import {useIsMobile} from "@/src/hooks/useMediaQuery";

const Home = () => {
    const isMobile = useIsMobile();

    return (
        <>
            <NavBar />
            <div className="max-w-[1280px] min-w-[430px] mx-auto py-[60px]">
                <span className="text-[#525252] sm:text-xl text-base font-medium sm:ml-0 ml-[24px] ">Каталог товаров</span>
                <div className="flex flex-col lg:flex-row gap-8 mt-[10px] sm:ml-[10px] ml-[12px] ">
                    <div className="flex-1">
                        {products.map((item) => (
                            <ProductCard key={item.id} product={item}/>
                        ))}
                    </div>

                    {
                        !isMobile && (
                            <div className="w-full lg:w-[360px] lg:sticky lg:top-6 self-start">
                                <Cart />
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
