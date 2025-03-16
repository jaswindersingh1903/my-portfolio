"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
    return (
        <nav className="w-full p-4 shadow-md bg-white dark:bg-gray-900 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                
                {/* Your Name in the Navbar */}
                <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
                    Jaswinder Singh
                </Link>

                {/* Avatar (optional, if you still want it alongside your name) */}
                {/* <Link href="/">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                        <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                </Link> */}

                {/* Navigation Menu */}
                <NavigationMenu>
                    <NavigationMenuList className="hidden md:flex gap-6">
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink>Home</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink>About</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/projects" legacyBehavior passHref>
                                <NavigationMenuLink>Projects</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact" legacyBehavior passHref>
                                <NavigationMenuLink>Contact</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
};

export default Navbar;
