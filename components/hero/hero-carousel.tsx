"use client"
import { } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const HeroCarousel = () => {
    return (
        <div className="relative text-white text-[20px] mb-2 bg-slate-50 md:h-[530px]">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(prevHandler: () => void) => (
                    <div
                        onClick={prevHandler}
                        className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <ChevronLeft className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(nextHandler: () => void) => (
                    <div
                        onClick={nextHandler}
                        className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <ChevronRight className="text-sm md:text-lg" />
                    </div>
                )} >
                <div>
                    <Image
                        width={1300}
                        height={530}
                        alt="Slide 1"
                        src="/slide-1.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[35px] py-[10px] md:py-[20px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>

                <div>
                    <Image
                        width={1300}
                        height={530}
                        alt="Slide 2"
                        src="/slide-2.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[35px] py-[10px] md:py-[20px] bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default HeroCarousel;