import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <main className="w-full max-w-[1360px] mx-auto min-h-screen mt-[115px]">
            {/* This is empty screen */}
            <div className="flex flex-col items-center justify-center gap-3">
                <Image
                    src="/empty_cart.svg"
                    alt='Empty Cart'
                    width={230}
                    height={230}
                    className="max-w-[230px] object-cover object-center mt-10"
                />
                <span className="text-xl font-bold mt-6">Your cart is empty</span>
                <span className="text-center">
                    Looks like you have not added anything in your cart.
                    <br />
                    Go ahead and explore top categories.
                </span>
                <Link
                    href="/"
                    className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 hover:opacity-75 mt-8"
                >
                    Continue Shopping
                </Link>
            </div>
        </main>
    );
};

export default page;