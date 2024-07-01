import { HistoryTable } from "@/components/HistoryTable";

export function History() {
   return (
      <>
         <section className="flex-1 p-14 flex flex-col justify-center items-center">
            <div className="w-3/5">
               <div>
                  <h1 className="text-primaryText text-3xl font-bold text-left">Meu histórico</h1>
               </div>
               <div className="flex-1 overflow-auto mt-8">
                  <HistoryTable />
               </div>
            </div>
         </section>
      </>
   )
}