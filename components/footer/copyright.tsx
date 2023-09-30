import Link from 'next/link';
import ContainerWrapper from "@/components/others/container-wrapper";

const Copyright = () => {
    return (
        <ContainerWrapper className="flex justify-between mt-6 mb-2 flex-col md:flex-row gap-[10px] md:gap-0">
            {/* Lleft start*/}
            <p className="text-[14px] text-slate-800 hover:text-slate-500 cursor-pointer text-center md:text-left">
                © 2023 Nike, Inc. All Rights Reserved
            </p>

            {/* Right Start */}
            <ul className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                <li className="text-[14px] text-slate-800 hover:text-slate-500 cursor-pointer">
                    <Link href={'/guides'}>Guides</Link>
                </li>
                <li className="text-[14px] text-slate-800 hover:text-slate-500 cursor-pointer">
                    <Link href={'/'}> Terms and Conditions</Link>
                </li>
                <li className="text-[14px] text-slate-800 hover:text-slate-500 cursor-pointer">
                    <Link href={'/'}>Cookie Policy</Link>
                </li>
                <li className="text-[14px] text-slate-800 hover:text-slate-500 cursor-pointer">
                    <Link href={'/'}>Privacy Policy</Link>
                </li>
            </ul>
        </ContainerWrapper>
    );
};

export default Copyright;