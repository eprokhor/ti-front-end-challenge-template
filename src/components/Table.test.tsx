import Table from './Table';
import { render } from '@testing-library/react';

describe('Table', () => {
  it('stock rows exists', async () => {
    const { getByText, container } = render(<Table />);

    const column1NameElement = getByText('Vertical');
    const column2NameElement = getByText('Projects');
    const rows = container.getElementsByTagName('tr');
    const cells = container.getElementsByTagName('td');

    expect(column1NameElement).toBeInTheDocument();
    expect(column2NameElement).toBeInTheDocument();
    expect(rows).toHaveLength(2);
    expect(cells).toHaveLength(4);
  });

  it('should load data from api', () => {
    // const component = mount(<Table />);
    // would use :
    //https://stackoverflow.com/questions/55388587/how-should-i-test-react-hook-useeffect-making-an-api-call-with-typescript
    //but had dependancy
  });
});
