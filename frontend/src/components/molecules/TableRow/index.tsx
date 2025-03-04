import { Avatar } from "../../atoms/Avatar";
import { Text } from "../../atoms/Text";

interface Employee {
  photo: string;
  name: string;
  role: string;
  admissionDate: string;
  phone: string;
}

interface TableRowProps {
  readonly employee: Employee;
}

export function TableRow({ employee }: TableRowProps) {
  return (
    <tr>
      <td>
        <Avatar src={employee.photo} alt={employee.name} />
      </td>
      <td>
        <Text>{employee.name}</Text>
      </td>
      <td>
        <Text>{employee.role}</Text>
      </td>
      <td>
        <Text>{employee.admissionDate}</Text>
      </td>
      <td>
        <Text>{employee.phone}</Text>
      </td>
    </tr>
  );
}
