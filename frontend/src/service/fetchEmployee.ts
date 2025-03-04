import { formatDate, formatPhoneNumber } from "../utils/formatUtils";
import { Employee } from "../utils/types/Employee";

export async function fetchEmployees() {
  const response = await fetch("http://localhost:3000/employees");
  const data = await response.json();

  return data.map((employee: Employee) => ({
    ...employee,
    phone: formatPhoneNumber(employee.phone),
    admission_date: formatDate(employee.admission_date),
  }));
}
