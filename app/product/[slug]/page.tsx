import ContainerWrapper from "@/components/others/container-wrapper";
import RelatedProducts from "@/components/product/product-related";
import { getDiscountedPricePercentage } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import ProductDetailsCarousel from "@/components/product/product-details-carousel";
import ProductSizing from "@/components/product/product-sizing";
import ProductAction from "@/components/product/product-action";

const page = () => {

    return (
        <main className="w-full max-w-[1360px] mx-auto min-h-screen mt-[115px]">
            <ContainerWrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel />
                    </div>

                    {/* Right column start */}
                    <div className="flex-[1] py-3">
                        <div className="text-[34px] font-semibold mb-2 leading-tight"> Air Jordan XXXVII Low PF  </div>

                        {/* Product subtitle */}
                        <div className="text-lg font-semibold mb-5">  Men&apos;s Basketball Shoes  </div>

                        {/* Product Price */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">  MRP : &#8377;1400 </p>

                            <>
                                <p className="text-base  font-medium line-through">  &#8377;{1400}  </p>
                                <p className="ml-auto text-base font-medium text-green-500"> {getDiscountedPricePercentage(1400, 1300)}  % off  </p>
                            </>

                        </div>

                        <div className="text-md font-medium text-black/[0.5]">Incl. of taxes </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">  {`(Also includes all applicable duties)`}  </div>

                        {/* Product Size Range */}
                        <ProductSizing />

                        {/* Product Action  */}
                        <ProductAction />


                        {/* Product Details */}
                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown>{"You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that will keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts."}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedProducts />
            </ContainerWrapper>
        </main>
    );
};

export default page; 