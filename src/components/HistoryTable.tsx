import styled from "../components/styles/historyTable.module.css"
import { Status } from "./ui/Status";

export function HistoryTable() {
  return (
    <>
      <div className="flex-1 overflow-auto mt-8 max-h-[450px]">
        <table className={`${styled.mainTable} w-full border-collapse min-w-[600px]`}>
          <thead className="text-primaryText bg-secondary">
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className={`${styled.tableBodyMain}`}>
            <tr>
              <td>Fazer uma API</td>
              <td>25 minutos</td>
              <td>Hoje</td>
              <td><Status statusColor="red" />Em andamento</td>
            </tr>
            <tr>
              <td>Fazer uma API</td>
              <td>25 minutos</td>
              <td>Hoje</td>
              <td><Status statusColor="green" />Em andamento</td>
            </tr>
            <tr>
              <td>Fazer uma API</td>
              <td>25 minutos</td>
              <td>Hoje</td>
              <td><Status statusColor="yellow" />Em andamento</td>
            </tr>
            <tr>
              <td>Fazer uma API</td>
              <td>25 minutos</td>
              <td>Hoje</td>
              <td><Status statusColor="green" />Em andamento</td>
            </tr>
            <tr>
              <td>Fazer uma API</td>
              <td>25 minutos</td>
              <td>Hoje</td>
              <td><Status statusColor="green" />Em andamento</td>
            </tr>
            <tr>
              <td>Fazer uma API</td>
              <td>25 minutos</td>
              <td>Hoje</td>
              <td><Status statusColor="green" />Em andamento</td>
            </tr>
            <tr>
              <td>Fazer uma API</td>
              <td>25 minutos</td>
              <td>Hoje</td>
              <td><Status statusColor="green" />Em andamento</td>
            </tr>

            <tr>
              <td>Fazer uma API</td>
              <td>25 minutos</td>
              <td>Hoje</td>
              <td><Status statusColor="green" />Em andamento</td>
            </tr>
            <tr>
              <td>Fazer uma API</td>
              <td>25 minutos</td>
              <td>Hoje</td>
              <td><Status statusColor="green" />Em andamento</td>
            </tr>
            <tr>
              <td>Fazer uma API</td>
              <td>25 minutos</td>
              <td>Hoje</td>
              <td><Status statusColor="green" />Em andamento</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  );
}
