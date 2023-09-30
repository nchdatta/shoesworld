"use client"
import { useState } from 'react';
import { Button } from '../ui/button';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { HeartIcon } from 'lucide-react';

const ProductAction = () => {
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = () => {
        if (!selectedSize) {
            setShowError(true);
        } else {
            notify();
        }
    }


    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <>
            {/* ADD TO CART BUTTON START */}
            <Button
                className="w-full py-7 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={handleAddToCart}  >
                Add to Cart
            </Button>

            {/* WHISHLIST BUTTON START */}
            <Button className="w-full py-7 rounded-full bg-transparent hover:bg-slate-900 text-slate-900 hover:text-slate-50 border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist <HeartIcon size={20} />
            </Button>
        </>
    );
};

export default ProductAction;