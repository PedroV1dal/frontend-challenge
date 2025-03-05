import { TableHeader } from "../../molecules/TableHeader";
import { TableRow } from "../../molecules/TableRow";
import { useEffect, useState } from "react";
import { Employee } from "../../../utils/types/Employee";

import { EmployeeRepository } from "../../../repository/employeeRepository";

import "./index.css";
import { formatDate, formatPhoneNumber } from "../../../utils/formatUtils";

interface EmployeeTableProps {
  readonly searchTerm: string;
}

export function EmployeeTable({ searchTerm }: EmployeeTableProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    EmployeeRepository.fetchAll({})
      .then((response) => {
        if (Array.isArray(response.data)) {
          setEmployees(response.data);
        } else {
          console.error("Unexpected response data:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    const term = searchTerm.toLowerCase();
    return (
      employee.name.toLowerCase().includes(term) ||
      employee.job.toLowerCase().includes(term) ||
      employee.phone.replace(/\D/g, "").includes(term)
    );
  });

  return (
    <div className="table-container">
      <table className="employee-table">
        <TableHeader />
        <tbody>
          {filteredEmployees.map((employee) => (
            <TableRow
              key={employee.id}
              employee={{
                ...employee,
                admission_date: formatDate(employee.admission_date),
                phone: formatPhoneNumber(employee.phone),
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
