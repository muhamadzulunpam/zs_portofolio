import Link from "next/link";
import Image from "next/image";
import { getJSONData } from "@/lib/serverUtils";
import NavbarLinks from "./NavbarLinks";

export default async function Navbar() {
  const data = await getJSONData();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
      <div className="container mx-auto flex h-[72px] max-w-5xl items-center justify-between px-4 py-2 md:px-6">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image
            src="/assets/logo1.jpeg"
            height={60}
            width={60}
            alt="Devfolio logo"
          />
        </Link>

        <NavbarLinks links={data.visual.navbar.links} />
      </div>
    </header>
  );
}