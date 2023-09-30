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
    categories?: any[]
}

const Menu = ({ showCatMenu, setShowCatMenu, categories }: MenuProps) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                {item.name}
                                <ChevronDown size={14} />

                                {showCatMenu && (
                                    <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                        {subMenuData?.map((c, index) => {
                                            return (
                                                <Link
                                                    key={c.id}
                                                    href={`/category/${'/cat'}`}
                                                    onClick={() => setShowCatMenu(false)} >
                                                    <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
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
                            <li className="cursor-pointer">
                                <Link href={item.url}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default Menu;