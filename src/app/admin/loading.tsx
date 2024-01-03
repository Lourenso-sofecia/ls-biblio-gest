import { Skeleton } from "@/components/skeleton";
import { SkeletonTable } from "@/components/skeleton/skeletonTable";

export default function AdminLoading(){
    return(
        <main className="bg-zinc-300 p-8">
        <header className="flex gap-20 w-full items-center justify-between">
          <form className="w-full    justify-between  items-center md:gap-[90px] flex">
            <Skeleton
              className="w-full h-10  rounded-lg text-zinc-700 text-sm font-normal font-sans leading-snug"
            />
           <Skeleton className="" /> 
          </form>
          <Skeleton className="md:flex hidden items-center justify-center h-10 w-40 border  border-orange-950 rounded-lg text-orange-950 text-center hover:opacity-70" />
            
        </header>
        <section>
        <SkeletonTable  /> 
        </section>
      </main>
    )
}