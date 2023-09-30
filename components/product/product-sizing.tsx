"use client"
import React, { useState } from 'react';

const ProductSizing = () => {
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);

    return (
        <div className="mb-10">
            {/* HEADING START */}
            <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">
                    Select Size
                </div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                    Select Guide
                </div>
            </div>

            {/* SIZE START */}
            <div
                id="sizesGrid"
                className="grid grid-cols-3 gap-2"  >

                <div
                    className={`border rounded-md text-center py-3 font-medium `}
                    onClick={() => {
                        // setSelectedSize();
                        setShowError(false);
                    }}
                >
                    {'UK 6'}
                </div>

            </div>

            {/* SHOW ERROR START */}
            {showError && (
                <div className="text-red-600 mt-1">
                    Size selection is required
                </div>
            )}
        </div>
    );
};

export default ProductSizing;