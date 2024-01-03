"use client";
import { List } from "@/components/usersComponents/List";

import Image from "next/image";

import logo from "@/assets/logo.jpeg";
import search from "@/assets/search.png";
import { useState } from "react";

export default function Books(){
    const [searchInput, setSearchInput] = useState("");

    //console.log(seach, "teste");
  
    function handleInputChange(event: any) {
      setSearchInput(event.target.value);
  
      console.log("value: ", searchInput);
      //console.log("event: ",event);
      //console.log("event.target: ",event.target);
    }
  
    return (
      <main className="bg-zinc-300 p-8">
        <header className="flex gap-20 w-full items-center justify-between">
          <form className="w-full  relative  justify-between  items-center md:gap-[90px] flex">
            <input
              value={searchInput}
              onChange={handleInputChange}
              placeholder="Procure por nome, email ou telefone"
              className="w-full pl-4 pr-12 py-[9px] bg-gray-100 rounded-lg text-zinc-700 text-sm font-normal font-sans leading-snug"
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
          <button className="md:flex hidden items-center justify-center py-2 px-4 w-40 border  border-orange-950 rounded-lg text-orange-950 text-center hover:opacity-70">
            criar +
          </button>
        </header>
        <section>
          <List />
        </section>
      </main>
    )
}