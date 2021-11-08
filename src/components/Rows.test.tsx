import ReactDOM from 'react-dom';
import { Rows } from './Rows';

let rows = new Map<string, string[]>();

beforeAll(() => {
  rows.set('AMM', ['BAL', 'UNI', 'FTM', 'KNC', 'ZRX', 'BNT']);
  rows.set('Oracle', ['BAL', 'UNI', 'LINK']);
});

it('rows appeare', () => {
  const tbody = document.createElement('tbody');
  ReactDOM.render(<Rows rows={rows} />, tbody);
});
