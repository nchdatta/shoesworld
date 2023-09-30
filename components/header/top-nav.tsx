import ContainerWrapper from "@/components/others/container-wrapper";
import { Tally1 } from "lucide-react";
import Link from "next/link";

type TopNavProps = {

}

const menus = [{ id: 1, name: "Help", href: "/help" }, { id: 2, name: "Contact us", href: "/contact-us" }, { id: 3, name: "Sign in", href: "/login" }];
// Sign in and sign out buttons 
const TopNav = ({ }: TopNavProps) => {

    return (
        <nav className={`w-full h-[35px] bg-slate-100 flex items-center justify-between fixed top-0 z-20 transition-transform duration-300`}>

            <ContainerWrapper className="h-[30px] flex justify-end items-center">
                <ul className=" text-slate-900 font-semibold text-[14px] flex items-center">

                    {menus?.map((menu, index) => (
                        <div key={menu.id} className="flex items-center gap-2">
                            <li key={menu.id} className="hover:text-slate-700">
                                <Link href={menu.href}>{menu.name}</Link>
                            </li>
                            <Tally1 className={`text-slate-600 h-3 ${menus?.length === index + 1 ? "hidden" : "block"}`} />
                        </div>
                    ))}


                </ul>
            </ContainerWrapper>

        </nav>
    );
};

export default TopNav;