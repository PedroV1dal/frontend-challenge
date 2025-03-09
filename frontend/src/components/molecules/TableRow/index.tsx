import { useState } from "react";
import { Avatar } from "../../atoms/Avatar";
import { ChevronUp, ChevronDown } from "../../../assets";
import { Text } from "../../atoms/Text";
import { Employee } from "../../../utils/types/Employee";

import "./index.css";

interface TableRowProps {
  readonly employee: Employee;
}

export function TableRow({ employee }: TableRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <tr className="table-row" onClick={() => setIsExpanded(!isExpanded)}>
        <td>
          <Avatar src={employee.image} alt={employee.name} />
        </td>
        <td>
          <Text>{employee.name}</Text>
        </td>
        <td className="hide-on-mobile">
          <Text>{employee.job}</Text>
        </td>
        <td className="hide-on-mobile">
          <Text>{employee.admission_date}</Text>
        </td>
        <td className="hide-on-mobile">
          <Text>{employee.phone}</Text>
        </td>
        <td className="mobile-toggle" colSpan={1}>
          {isExpanded ? (
            <img src={ChevronDown} alt="Chevron Down" />
          ) : (
            <img src={ChevronUp} alt="Chevron Up" />
          )}
        </td>
      </tr>
      {isExpanded && (
        <tr className="expanded-row">
          <td colSpan={5}>
            <div className="expanded-content">
              <p>
                <strong>Cargo:</strong> {employee.job}
              </p>
              <p>
                <strong>Data de Admissão:</strong> {employee.admission_date}
              </p>
              <p>
                <strong>Telefone:</strong> {employee.phone}
              </p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
