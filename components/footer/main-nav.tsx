import Link from "next/link";
import React from "react";
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from "lucide-react";
import ContainerWrapper from "@/components/others/container-wrapper";

const MainNav = () => {
    return (
        <ContainerWrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0 py-3">
            {/* Left Start  */}
            <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                {/* Left Nav Start */}
                <ul className="flex flex-col gap-3 shrink-0">
                    <li className="font-oswald font-medium uppercase text-sm cursor-pointer">
                        Find a store
                    </li>
                    <li className="font-oswald font-medium uppercase text-sm cursor-pointer">
                        become a partner
                    </li>
                    <li className="font-oswald font-medium uppercase text-sm cursor-pointer">
                        sign up for email
                    </li>
                    <li className="font-oswald font-medium uppercase text-sm cursor-pointer">
                        send us feedback
                    </li>
                    <li className="font-oswald font-medium uppercase text-sm cursor-pointer">
                        student discount
                    </li>
                </ul>

                {/* Center Menu */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                    {/* Center Nav Start */}
                    <ul className="flex flex-col gap-3">
                        <li className="font-oswald font-medium uppercase text-sm">
                            get help
                        </li>
                        <li className="text-sm text-slate-900 hover:text-slate-600 cursor-pointer">
                            Order Status
                        </li>
                        <li className="text-sm text-slate-900 hover:text-slate-600 cursor-pointer">
                            Delivery
                        </li>
                        <li className="text-sm text-slate-900 hover:text-slate-600 cursor-pointer">
                            Returns
                        </li>
                        <li className="text-sm text-slate-900 hover:text-slate-600 cursor-pointer">
                            Payment Options
                        </li>
                        <li className="text-sm text-slate-900 hover:text-slate-600 cursor-pointer">
                            Contact Us
                        </li>
                    </ul>

                    {/* Nav Start */}
                    <ul className="flex flex-col gap-3">
                        <li className="font-oswald font-medium uppercase text-sm">
                            About nike
                        </li>
                        <li className="text-sm text-slate-900 hover:text-slate-600 cursor-pointer">
                            News
                        </li>
                        <li className="text-sm text-slate-900 hover:text-slate-600 cursor-pointer">
                            Careers
                        </li>
                        <li className="text-sm text-slate-900 hover:text-slate-600 cursor-pointer">
                            Investors
                        </li>
                        <li className="text-sm text-slate-900 hover:text-slate-600 cursor-pointer">
                            Sustainability
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right Start */}
            <div className="flex gap-4 justify-center md:justify-start">
                <Link
                    href={"https://facebook.com/facebook"}
                    className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                >
                    <FacebookIcon size={20} />
                </Link>
                <Link
                    href="https://twitter.com"
                    className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                >
                    <TwitterIcon size={20} />
                </Link>
                <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                    <YoutubeIcon size={25} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                    <InstagramIcon size={20} />
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default MainNav;