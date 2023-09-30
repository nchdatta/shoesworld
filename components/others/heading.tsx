import { cn } from '@/lib/utils';
import React from 'react';

type HeadingProps = {
    title: string,
    subTitle?: string
    className?: string
}

const Heading = ({ title, subTitle, className }: HeadingProps) => {
    return (
        <div className={cn('mb-2 mt-2 md:mb-3 md:mt-3', className)}>
            <h1 className={cn("text-[28px] md:text-[34px] mb-2 font-semibold leading-tight")}>{title}</h1>
            {/* Sub Heading Goes here  */}
            {subTitle ?
                <p className="text-md md:text-xl">
                    {subTitle}
                </p> : ""}
        </div>
    );
};

export default Heading;