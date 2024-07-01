import styled from "../components/styles/historyTable.module.css"

export function HistoryTable() {
  return (
    <>
      <table className={`${styled.mainTable} w-full border-collapse min-w-[600px]`}>
        <thead className="text-primaryText text-2xl bg-secondary">
          <tr>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fazer uma API</td>
            <td>25 minutos</td>
            <td>Hoje</td>
            <td><span></span>Em andamento</td>
          </tr>
          <tr>
            <td>Fazer uma API</td>
            <td>25 minutos</td>
            <td>Hoje</td>
            <td><span></span>Em andamento</td>
          </tr>
          <tr>
            <td>Fazer uma API</td>
            <td>25 minutos</td>
            <td>Hoje</td>
            <td><span></span>Em andamento</td>
          </tr>
          <tr>
            <td>Fazer uma API</td>
            <td>25 minutos</td>
            <td>Hoje</td>
            <td><span></span>Em andamento</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
