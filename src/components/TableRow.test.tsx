import ReactDOM from 'react-dom';
import { TableRow } from './TableRow';

it('Row should render with data', () => {
  let row = ['AMM', ['BAL', 'UNI', 'FTM', 'KNC', 'ZRX', 'BNT']];

  const tbody = document.createElement('tbody');
  ReactDOM.render(<TableRow key={1} row={row} />, tbody);
});
