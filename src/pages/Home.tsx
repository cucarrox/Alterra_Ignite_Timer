import { Button } from "@/components/Button";
import { PlayCircle } from "@phosphor-icons/react";
import styled from "../components/styles/home.module.css";

export function Home() {
  return (
    <>
      <div
        className={`${styled.homeContainer} h-full flex flex-col justify-center items-center text-primaryText`}
      >
        <form
          action=""
          className="w-full flex flex-col justify-center items-center gap-[3.5rem] flex-wrap font-bold text-[1.125rem]"
        >
          <div className="flex items-center gap-4">
            <label className="text-2xl" htmlFor="task">Vou trabalhar em</label>
            <input className={`${styled['task-input']} bg-transparent flex-1 h-10 border-0 border-b-2 border-b-primaryText font-bold text-[1.125rem] px-0 py-2 text-primaryText outline-none transition placeholder:text-secondary focus:shadow-none focus:border-blueLight`} id="task" placeholder="Digite a sua tarefa" list="task-suggestion" />

            <label className="text-2xl" htmlFor="minutesAmount">Durante</label>
            <input className="bg-transparent w-16 h-10 border-0 border-b-2 border-b-primaryText font-bold text-[1.125rem] px-0 py-2 text-primaryText outline-none transition placeholder:text-secondary focus:shadow-none focus:border-blueLight" type="number" name="" id="minutesAmount" placeholder="00" step={5} min={5} max={60} />

            <datalist id="task-suggestion">
              <option value="Projeto Alterra" />
              <option value="Estudar Programação" />
              <option value="Estudar fisíca quântica" />
              <option value="Não fazer nada" />
            </datalist>

            <span className="text-2xl">minutos</span>
          </div>

          <div className={`${styled.timerContainer} flex gap-4`}>
            <span>0</span>
            <span>0</span>
            <span className="!bg-transparent !px-8 !text-blueLight overflow-hidden">:</span>
            <span>0</span>
            <span>0</span>
          </div>

          <div className="w-full flex justify-center">

            <Button type="submit" className="w-2/5 text-2xl p-4">
              <PlayCircle size={40} />
              <span>Começar</span>
            </Button>
            
          </div>
        </form>
      </div>
    </>
  );
}
