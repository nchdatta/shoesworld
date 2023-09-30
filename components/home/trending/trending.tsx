import ContainerWrapper from '@/components/others/container-wrapper';
import Heading from '@/components/others/heading';
import ProductCard from '@/components/product/product-card';
import { } from 'react';

const Trending = () => {
    return (
        <ContainerWrapper className='my-5' >
            {/* heading start */}
            <Heading title='Trending' />

            {/* products grid start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4 px-5 md:px-0">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </ContainerWrapper>
    );
};

export default Trending;