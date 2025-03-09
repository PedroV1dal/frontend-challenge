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
            <img src={ChevronUp} alt="Chevron Up" />
          ) : (
            <img src={ChevronDown} alt="Chevron Down" />
          )}
        </td>
      </tr>
      {isExpanded && (
        <tr className="expanded-row">
          <td colSpan={5}>
            <div className="expanded-content">
              <p>
                <span className="label">Cargo:</span>
                <span className="value">{employee.job}</span>
              </p>
              <p>
                <span className="label">Data de Admissão:</span>
                <span className="value">{employee.admission_date}</span>
              </p>
              <p>
                <span className="label">Telefone:</span>
                <span className="value">{employee.phone}</span>
              </p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
