import "./index.css";

export function TableHeader() {
  return (
    <thead className="table-header">
      <tr>
        <th>FOTO</th>
        <th>NOME</th>
        <th>
          <span className="hide-on-mobile">CARGO</span>
        </th>
        <th>
          <span className="hide-on-mobile">DATA DE ADMISSÃO</span>
        </th>
        <th>
          <span className="hide-on-mobile">TELEFONE</span>
        </th>
      </tr>
    </thead>
  );
}
