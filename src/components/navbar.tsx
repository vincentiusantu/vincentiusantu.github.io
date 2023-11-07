import React from "react";
import { arimo } from '@/app/ui/fonts'
import { Reveal } from '@/components/reveal';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", text: "HELLO" },
    { href: "/about", text: "ABOUT" },
    { href: "/coverage", text: "SKILL" },
    { href: "/projects", text: "PROJECTS" },
    { href: "/contacts", text: "CONTACTS" },
]


export default function Navbar() {
    const path = usePathname();
    return (
        <nav className={`${arimo.className} sticky top-0 z-50 tb-5`}>
            
                <div className="flex justify-center sm:justify-between items-center py-5 px-8 bg-white bg-opacity-95">
                    <div className="hover:text-rose-400 duration-500 sm:block hidden">
                        <strong>
                            CEN
                        </strong>
                    </div>
                    <div className="flex justify-evenly">
                        <Link href={links[0].href} className="relative group px-2 font-medium">
                            <span className={`${links[0].href === path ? "text-gray-950" : "text-gray-400"}  hover:text-teal-400 active:text-teal-400 duration-500`}>
                                {links[0].text}
                            </span>
                            <span className="absolute border-b-[2px] left-0 bottom-0 border-teal-400 w-0 transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                        <Link href={links[1].href} className="relative group px-2 font-medium">
                            <span className={`${links[1].href === path ? "text-gray-950" : "text-gray-400"}  hover:text-cyan-400 active:text-cyan-400 duration-500`}>
                                {links[1].text}
                            </span>
                            <span className="absolute border-b-[2px] left-0 bottom-0 border-cyan-400 w-0 transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                        <Link href={links[2].href} className="relative group px-2 font-medium">
                            <span className={`${links[2].href === path ? "text-gray-950" : "text-gray-400"}  hover:text-violet-400 active:text-violet-400 duration-500`}>
                                {links[2].text}
                            </span>
                            <span className="absolute border-b-[2px] left-0 bottom-0 border-violet-400 w-0 transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                        <Link href={links[3].href} className="relative group px-2 font-medium">
                            <span className={`${links[3].href === path ? "text-gray-950" : "text-gray-400"}  hover:text-pink-400 active:text-pink-400 duration-500`}>
                                {links[3].text}
                            </span>
                            <span className="absolute border-b-[2px] left-0 bottom-0 border-pink-400 w-0 transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                        <Link href={links[4].href} className="relative group px-2 font-medium">
                            <span className={`${links[4].href === path ? "text-gray-950" : "text-gray-400"}  hover:text-amber-400 active:text-amber-400 duration-500`}>
                                {links[4].text}
                            </span>
                            <span className="absolute border-b-[2px] left-0 bottom-0 border-amber-400 w-0 transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
        </nav>
    );
};
