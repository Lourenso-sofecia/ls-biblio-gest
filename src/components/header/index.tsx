"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.jpeg";
import search from "@/assets/search.png";

export function Header() {
  const [searchInput, setSearchInput] = useState("");

  //console.log(seach, "teste");

  function handleInputChange(event: any) {
    setSearchInput(event.target.value);

    console.log("value: ", searchInput);
    //console.log("event: ",event);
    //console.log("event.target: ",event.target);
  }

  return (
    <header className="flex items-center justify-between  bg-yellow-900 py-4  px-4 lg:px-10 xl:px-20 2xl:px-40">
      <div className="flex md:gap-12 gap-4 justify-between">
        <Image src={logo} alt="Logo" width={95} height={95} />
        <form className="w-[352px]  relative  justify-between  items-center md:gap-[90px] flex">
          <input
            value={searchInput}
            onChange={handleInputChange}
            placeholder="Procure aqui"
            className="w-full pl-4 pr-12 py-[9px] bg-gray-100 rounded-lg text-zinc-500 text-sm font-normal font-sans leading-snug"
          />
          <div className="absolute right-4">
            <Image
              className=" "
              src={search}
              alt={"search img"}
              width={24}
              height={24}
            />
          </div>
        </form>
      </div>
      <button className="md:flex hidden items-center justify-center py-2.5  bg-orange-950 rounded-2xl text-white text-center w-44 hover:opacity-70">
        Cadastrar/Entrar
      </button>
    </header>
  );
}
