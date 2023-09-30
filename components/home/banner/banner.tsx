import ContainerWrapper from '@/components/others/container-wrapper';
import Heading from '@/components/others/heading';
import Image from 'next/image';
import { } from 'react';

type BannerProps = {}

const Banner = ({ }: BannerProps) => {
    return (
        <ContainerWrapper className='my-5'>
            <Heading title='Membership' />

            <div className="w-full bg-slate-100 max-h-[270px] overflow-hidden">
                <Image
                    width={1300}
                    height={270}
                    src={'/membership_banner.png'}
                    alt='Banner 1'
                    className='max-h-[270px] max-w-full object-cover object-center'
                />
            </div>
        </ContainerWrapper>
    );
};

export default Banner;