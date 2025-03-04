import { TableHeader } from "../../molecules/TableHeader";
import { TableRow } from "../../molecules/TableRow";
import { useEffect, useState } from "react";
import { Employee } from "../../../utils/types/Employee";

import { fetchEmployees } from "../../../service/fetchEmployee";

import "./index.css";

interface EmployeeTableProps {
  readonly searchTerm: string;
}

export function EmployeeTable({ searchTerm }: EmployeeTableProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees().then(setEmployees);
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    const term = searchTerm.toLowerCase();
    return (
      employee.name.toLowerCase().includes(term) ||
      employee.job.toLowerCase().includes(term) ||
      employee.phone.replace(/\D/g, "").includes(term) // Remove não numéricos para busca
    );
  });

  return (
    <div className="table-container">
      <table className="employee-table">
        <TableHeader />
        <tbody>
          {filteredEmployees.map((employee) => (
            <TableRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
