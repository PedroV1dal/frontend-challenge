import { formatDate, formatPhoneNumber } from "../utils/formatUtils";
import { Employee } from "../utils/types/Employee";

export async function fetchEmployees() {
  const EmployeesUrl = import.meta.env.VITE_JSON_SERVER_URL;
  if (!EmployeesUrl) {
    throw new Error("VITE_JSON_SERVER_URL is not defined");
  }
  const response = await fetch(EmployeesUrl);
  const data = await response.json();

  return data.map((employee: Employee) => ({
    ...employee,
    phone: formatPhoneNumber(employee.phone),
    admission_date: formatDate(employee.admission_date),
  }));
}
