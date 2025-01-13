"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About me", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Publications", path: "/public" },
  { name: "Personal project", path: "/project" },
];

export default function Nav() {
  const pathname = usePathname();
  if (!pathname) return null;
  return (
    <div className=" fixed left-0 top-0 z-20 w-[640px] h-[72px] bg-amber-50 font-medium text-lg text-gray-500 rounded-br-[20px]">
      <div className="flex justify-around text-base leading-9 pt-1">
        {navItems.map((item) => {
          return (
            <div key={item.path} className="py-2 px-4 group">
              <Link
                href={item.path}
                className={`py-4 text-center transition-all ${
                  pathname === item.path
                    ? "text-amber-800 font-semibold"
                    : "hover:text-amber-600"
                }`}>
                {item.name}
              </Link>
              <div
                className={`${
                  pathname === item.path ? "block" : "hidden"
                } w-full h-0.5 rounded-t-sm bg-amber-800 transition-all
                  group-hover:block group-hover:bg-amber-600
                `}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
