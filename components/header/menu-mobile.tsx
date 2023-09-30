"use client"

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", url: "", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Kids", doc_count: 16 },
    { id: 2, name: "Mens Shoes", doc_count: 11 },
    { id: 3, name: "Women Snickers", doc_count: 25 },
    { id: 4, name: "Formal shoes", doc_count: 55 },
];

type MenuProps = {
    showCatMenu: boolean,
    setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>,
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>,
    categories?: any[]
}

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu, categories }: MenuProps) => {
    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className="flex justify-between items-center">
                                    {item.name}
                                    <ChevronDown size={14} />
                                </div>

                                {showCatMenu && (
                                    <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                        {subMenuData?.map((c) => {
                                            return (
                                                <Link
                                                    key={c.id}
                                                    href={`/category/${'cat'}`}
                                                    onClick={() => {
                                                        setShowCatMenu(false);
                                                        setMobileMenu(false);
                                                    }}  >
                                                    <li className="py-4 px-8 border-t flex justify-between">
                                                        {c.name}
                                                        <span className="opacity-50 text-sm">
                                                            {`(${c.doc_count})`}
                                                        </span>
                                                    </li>
                                                </Link>
                                            );
                                        }
                                        )}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="py-4 px-5 border-b">
                                <Link
                                    href={item?.url}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default MenuMobile;