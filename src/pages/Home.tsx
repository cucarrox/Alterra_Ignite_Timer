import { Button } from "@/components/ui/Button";
import { PlayCircle } from "@phosphor-icons/react";
import styled from "../components/styles/home.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface newCycleForm {
  task: string;
  minutesAmount: number;
}

interface Cycle {
  id: string,
  task: string,
  minutesAmount: number
}

export function Home() {

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>((null))
  const [amountSecondPassed, setAmountSecondPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<newCycleForm>({
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  function handleCreateNewCycle(data: newCycleForm) {
    const id = String(new Date().getTime)

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }

  const activeCycle = cycles.find(cycles => cycles.id == activeCycleId)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0

  const minutesAmount = Math.floor( currentSeconds / 60 )
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")

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
            <span className="!bg-transparent !px-8 !text-blueLight overflow-hidden">
              :
            </span>
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
