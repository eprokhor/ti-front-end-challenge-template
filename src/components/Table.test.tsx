import Table from './Table';
import { render, screen } from '@testing-library/react';

describe('Table', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Table />);
  });

  // it('stock row exists', () => {
  //   const { getByText, container } = render(<Table />);

  //   const column1NameElement = getByText('Vertical');
  //   const column2NameElement = getByText('Projects');

  //   expect(column1NameElement).toBeInTheDocument();
  //   expect(column2NameElement).toBeInTheDocument();
  // });

  it('should load data from api', () => {
    const rows = container.getElementsByTagName('tr)');
    expect(rows).toHaveLength(11);
  });
});
