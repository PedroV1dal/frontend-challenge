import { Avatar } from "../../atoms/Avatar";
import { Text } from "../../atoms/Text";
import { Employee } from "../../../utils/types/Employee";

import "./index.css";

interface TableRowProps {
  readonly employee: Employee;
}

export function TableRow({ employee }: TableRowProps) {
  return (
    <tr className="table-row">
      <td>
        <Avatar src={employee.image} alt={employee.name} />
      </td>
      <td>
        <Text>{employee.name}</Text>
      </td>
      <td>
        <Text>{employee.job}</Text>
      </td>
      <td>
        <Text>{employee.admission_date}</Text>
      </td>
      <td>
        <Text>{employee.phone}</Text>
      </td>
    </tr>
  );
}
