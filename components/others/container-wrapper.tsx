import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerWrapper = {
    children: ReactNode,
    className?: string
}

const ContainerWrapper = ({ children, className }: ContainerWrapper) => {
    return (
        <div className={cn("w-full max-w-[1300px] px-3 md:px-10 mx-auto", className)}  >
            {children}
        </div>
    );
};

export default ContainerWrapper;