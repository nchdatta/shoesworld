"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

type ProductDetailsCarouselProps = {
    images?: any[]
}

const ProductDetailsCarousel = ({ images }: ProductDetailsCarouselProps) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={true}
                thumbWidth={60}
                className="product__details__carousel"  >

                <img
                    src="/p1.png"
                    alt="Product Thumb"
                    className="max-h-[600px] max-w-full object-cover object-center"
                />
                <img
                    src="/p2.png"
                    alt="Product Thumb"
                    className="max-h-[600px] max-w-full object-cover object-center"
                />

                <img
                    src="/p2.png"
                    alt="Product Thumb"
                    className="max-h-[600px] max-w-full object-cover object-center"
                />
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;