import "./Table.css";
import { TABLE_COLUMNS } from "../../../constants";
import { Status, Test } from "../../../types";
import { FC } from "react";
import classNames from "classnames";
import { getColorByStatus } from "../../../utils";

type TTableProps = {
  columns: typeof TABLE_COLUMNS;
  dataSource: Test[];
  onColumnClick: (column: string) => void;
};

const Table: FC<TTableProps> = ({ columns, dataSource, onColumnClick }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns?.map((column, index) => (
            <th key={index} onClick={() => onColumnClick(column.toLowerCase())}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource?.map((test) => (
          <tr key={test?.id}>
            <td>
              <div className="flex">
                <span className="status-indicator red"></span>
                <span>{test?.name}</span>
              </div>
            </td>
            <td>{test?.type}</td>
            <td
              className={classNames("status", getColorByStatus(test?.status))}
            >
              {test?.status}
            </td>
            <td>{test?.siteId}</td>
            <td>
              <button
                className={classNames(
                  "btn",
                  test?.status === Status.DRAFT ? "finalize" : "results"
                )}
              >
                {test?.status === Status.DRAFT ? "Finalize" : "Results"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
