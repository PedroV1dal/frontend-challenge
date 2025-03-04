import { TableHeader } from "../../molecules/TableHeader";
import { TableRow } from "../../molecules/TableRow";

import "./index.css";

const employees = [
  {
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Giovana L. Arruda",
    role: "Front-end",
    admissionDate: "00/00/0000",
    phone: "+55 (55) 55555-555",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Vanessa Machado",
    role: "Front-end",
    admissionDate: "00/00/0000",
    phone: "+55 (55) 55555-555",
  },
  // ... outros funcionários
];

export function EmployeeTable() {
  return (
    <div className="table-container">
      <table className="employee-table">
        <TableHeader />
        <tbody>
          {employees.map((employee) => (
            <TableRow key={employee.name} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
