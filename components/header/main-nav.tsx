"use client"

import React, { useState, useEffect, useCallback } from "react";
import ContainerWrapper from "@/components/others/container-wrapper";

import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import MenuMobile from "./menu-mobile";

import { HeartIcon } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";
import { UserCircle2 } from "lucide-react";
import { useSelector } from "react-redux";
import { AppState } from "@/store/store";
import SearchField from "./search-field";

type MainNavProps = {

}

const MainNav = ({ }: MainNavProps) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const { cartItems } = useSelector((state: AppState) => state.cart);

    const controlNavbar = useCallback(() => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[35px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    }, [lastScrollY, mobileMenu]);

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY, controlNavbar]);

    return (
        <nav
            className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 fixed top-[35px] transition-transform duration-300 ${show}`}>

            <ContainerWrapper className="h-[60px] flex justify-between items-center">
                <Link href="/">
                    <Image
                        width={80}
                        height={60}
                        src="/logo.png"
                        className="w-[80px] md:w-[60px]"
                        alt="Shoes World Logo"
                        quality={100} />
                </Link>

                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu} />

                {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu} />
                )}

                <div className="flex items-center gap-2 text-black">
                    {/* Search Bar  */}
                    <SearchField />

                    {/* Icon start */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                        <HeartIcon className="text-[19px] md:text-[20px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            51
                        </div>
                    </div>

                    {/* Icon start */}
                    <Link href="/cart">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <ShoppingCartIcon className="text-[15px] md:text-[20px]" />
                            {cartItems.length > 0 && (
                                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                    {cartItems.length}
                                </div>
                            )}
                        </div>
                    </Link>

                    {/* If authenticated then will visible, otherwise not */}
                    <Link href="/dashboard" className="hidden">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <UserCircle2 className="text-[15px] md:text-[20px]" />
                        </div>
                    </Link>

                    {/* Mobile icon start */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <X
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <MenuIcon
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                </div>
            </ContainerWrapper>

        </nav>
    );
};

export default MainNav;