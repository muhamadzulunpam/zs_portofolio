"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { JSX, SVGProps } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ThemeToggler from "./themeToggler";

type NavItem = {
  label: string;
  path: string;
};

type NavbarLinksProps = {
  links: NavItem[];
};

export default function NavbarLinks({ links }: NavbarLinksProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const getSectionId = (path: string) => {
      const hash = path.includes("#") ? path.split("#").pop() : "";
      return hash || "";
    };

    const updateActiveSection = () => {
      const sections = links
        .map((item) => getSectionId(item.path))
        .filter(Boolean);

      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 150) {
          current = id;
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        current = sections[sections.length - 1] || current;
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [links]);

  const getSectionId = (path: string) =>
    path.includes("#") ? path.split("#").pop() || "" : "";

  const linkClass = (path: string) => {
    const sectionId = getSectionId(path);
    const isActive = sectionId
      ? activeSection === sectionId
      : false;

    return `relative text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-primary"
        : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
    }`;
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden items-center space-x-5 lg:flex">
        <ThemeToggler />

        {links.map((item) => {
          const isActive =
            !!getSectionId(item.path) &&
            activeSection === getSectionId(item.path);

          return (
            <Link
              href={item.path}
              key={item.path}
              className={linkClass(item.path)}
            >
              {item.label}

              <span
                className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navbar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <div className="grid gap-6 p-6">
            <ThemeToggler />

            {links.map((item) => {
              const isActive =
                !!getSectionId(item.path) &&
                activeSection === getSectionId(item.path);

              return (
                <Link
                  href={item.path}
                  key={item.path}
                  className={`border-l-2 pl-3 py-1 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

function MenuIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}