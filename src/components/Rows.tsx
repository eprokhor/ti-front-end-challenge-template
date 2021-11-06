import { RowsProps } from '../interfaces';
import { TableRow } from './TableRow';

export const Rows: React.FC<RowsProps> = ({ rows }) => {
  return (
    <>
      {[...rows].map((row) => (
        <TableRow key={row[0]} row={row} />
      ))}
    </>
  );
};
