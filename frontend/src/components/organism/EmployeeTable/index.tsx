import { TableHeader } from "../../molecules/TableHeader";
import { TableRow } from "../../molecules/TableRow";
import { useEffect, useState } from "react";
import { Employee } from "../../../utils/types/Employee";

import { fetchEmployees } from "../../../service/fetchEmployee";

import "./index.css";

export function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees().then(setEmployees);
  }, []);

  return (
    <div className="table-container">
      <table className="employee-table">
        <TableHeader />
        <tbody>
          {employees.map((employee) => (
            <TableRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
