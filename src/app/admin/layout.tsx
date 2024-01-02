"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    
  const pathname = usePathname();

  return (
    <main className="flex px-4 lg:px-10 xl:px-20 2xl:px-40">
      <ul className="flex flex-col gap-4 p-5 h-[500px] w-52 border-r border-black border-opacity-20 bg-white">
        <Link
          href={"/admin/users"}
          className={`flex w-full rounded-xl px-4 py-1 uppercase ${pathname?.includes("/admin/users") && "bg-yellow-900  text-white opacity-60"} `}
        >
          Users
        </Link>
        <Link
          href={"/admin/employee"}
          className={`flex w-full rounded-xl px-4 py-1 uppercase ${pathname?.includes("/admin/employee") && "bg-yellow-900  text-white opacity-60"} `}
        >
          Funcionarios
        </Link>
        <Link
          href={"/admin/books"}
          className={`flex w-full rounded-xl px-4 py-1 uppercase ${pathname?.includes("/admin/books") && "bg-yellow-900  text-white opacity-60"} `}
        >
          Livros
        </Link>
      </ul>
      <div className="px-4 pt-5">{children}</div>
    </main>
  );
}
