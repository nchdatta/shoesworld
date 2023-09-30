import { getDiscountedPricePercentage } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { } from "react";

type ProductCardProps = {}

const ProductCard = ({ }: ProductCardProps) => {
    return (
        <Link
            href={`/product/${'/'}`}
            className="transform overflow-hidden bg-white duration-200 cursor-pointer" >
            <Image
                width={387}
                height={387}
                src={'/p1.png'}
                alt={"P 1"}
                className="max-h-[387px] max-w-full object-cover object-center hover:scale-105 transition-transform ease-in-out delay-300" />

            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{'Air Jordan 13 Retro'}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold"> &#8377;{13995} </p>


                    <p className="text-base  font-medium line-through">  &#8377;{16995}   </p>
                    <p className="ml-auto text-base font-medium text-green-500">  {getDiscountedPricePercentage(16995, 13995)}  % off  </p>

                </div>
            </div>
        </Link>
    );
};

export default ProductCard;