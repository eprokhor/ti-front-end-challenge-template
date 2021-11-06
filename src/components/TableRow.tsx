import { RowProps } from '../interfaces';

export const TableRow: React.FC<RowProps> = ({ row }) => {
  return (
    <>
      <tr>
        <td>{row[0]}</td>
        <td>
          <ul className='no-bullets'>
            {row[1].map((value: string) => (
              <li className='nowrap' key={value}>
                {value},{' '}
              </li>
            ))}
          </ul>
        </td>
      </tr>
    </>
  );
};
