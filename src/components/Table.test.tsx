import Table from './Table';
import { act, render } from '@testing-library/react';
import { mount, ReactWrapper } from 'enzyme';
import { isGetAccessorDeclaration } from 'typescript';

describe('Table', () => {
  let wrapper: ReactWrapper<any, any, any>;

  beforeEach(() => {
    wrapper = mount(<Table />);
  });

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

  it('should load data from api', (done: () => void) => {
    console.log(wrapper.debug());

    expect(wrapper).not.toBeNull();

    setImmediate(() => {
      wrapper.update();
      console.log(wrapper.debug());
      done();
    });

    // wrapper.invoke('useEffect')();
    // act(() => wrapper.prop('row')());
    // wrapper.update();
    // console.log(wrapper.debug());
  });

  it('try again', async () => {
    await waitForComponentToPaint(wrapper);
    console.log(wrapper.debug());
  });

  const waitForComponentToPaint = async (wrapper: { update: () => void }) => {
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      wrapper.update();
    });
  };
});
