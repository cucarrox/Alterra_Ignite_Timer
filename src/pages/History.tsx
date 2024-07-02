import { HistoryTable } from "@/components/HistoryTable";

export function History() {
   return (
      <>
         <section className="flex-1 p-14 flex flex-col justify-center items-center">
            <div className="w-[70%]">
               <div>
                  <h1 className="text-primaryText text-2xl font-bold text-left">Meu histórico</h1>
               </div>
               <HistoryTable />
            </div>
         </section>
      </>
   )
}