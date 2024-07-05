// Componentes
import { Button } from "@/components/ui/Button";
import { PlayCircle } from "@phosphor-icons/react";
// Estilo
import styled from "../components/styles/home.module.css";
// Libs
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { differenceInSeconds } from "date-fns";

interface newCycleForm {
  task: string;
  minutesAmount: number;
}

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
}

export function Home() {

  // useState
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>((null))
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  // react-hook-form, registrar, adicionar, ler, resetar
  const { register, handleSubmit, watch, reset } = useForm<newCycleForm>({
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const activeCycle = cycles.find(cycles => cycles.id == activeCycleId)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    
    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }
    
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  // Criar um novo ciclo
  function handleCreateNewCycle(data: newCycleForm) {
    const id = String(new Date().getTime)

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  //Lógica dos minutos e segundos
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  //Permitir com que os segundos sejam inteiros sempre para baixo
  const minutesAmount = Math.floor( currentSeconds / 60 )
  const secondsAmount = currentSeconds % 60

  //Converter os números para string 
  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")

  //Função de visualizar e resetar os campos dos inputs
  const task = watch("task")
  const time = watch("minutesAmount")
  const isSubmitFormButtonDisable = !task || !time

  return (
    <>
      <div
        className={`${styled.homeContainer} h-full flex flex-col justify-center items-center text-primaryText`}
      >
        <form
          onSubmit={handleSubmit(handleCreateNewCycle)}
          action=""
          className="w-full flex flex-col justify-center items-center gap-[3.5rem] flex-wrap font-bold text-[1.125rem]"
        >
          <div className="flex items-center gap-4">
            <label className="text-xl" htmlFor="task">
              Vou trabalhar em
            </label>
            <input
              className={`${styled["task-input"]} bg-transparent flex-1 h-10 border-0 border-b-2 border-b-primaryText font-bold text-[1.125rem] px-0 py-2 text-primaryText outline-none transition placeholder:text-secondary focus:shadow-none focus:border-blueLight`}
              id="task"
              placeholder="Digite a sua tarefa"
              list="task-suggestion"
              {...register("task")}
            />

            <label className="text-xl" htmlFor="minutesAmount">
              Durante
            </label>
            <input
              className="bg-transparent w-16 h-10 border-0 border-b-2 border-b-primaryText font-bold text-[1.125rem] px-0 py-2 text-primaryText outline-none transition placeholder:text-secondary focus:shadow-none focus:border-blueLight"
              type="number"
              id="minutesAmount"
              placeholder="00"
              step={5}
              min={5}
              max={60}
              {...register("minutesAmount", { valueAsNumber: true })}
            />

            <datalist id="task-suggestion">
              <option value="Projeto Alterra" />
              <option value="Estudar Programação" />
              <option value="Estudar fisíca quântica" />
              <option value="Não fazer nada" />
            </datalist>

            <span className="text-xl">minutos</span>
          </div>

          <div className={`${styled.timerContainer} flex gap-4`}>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <div className="bg-transparent py-8 px-0 w-16 flex justify-center text-blueLight overflow-hidden">
              :
            </div>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
          </div>

          <div className="w-full flex justify-center">
            <Button disabled={isSubmitFormButtonDisable} type="submit" className="w-2/5 text-xl p-2">
              <PlayCircle size={40} />
              <span>Começar</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
