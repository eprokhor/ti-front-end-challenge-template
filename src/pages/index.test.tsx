import { render, screen } from '@testing-library/react';
import Index from './index';

it('renders table component', () => {
  render(<Index />);
  expect(screen.getByText('Projects by Vertical')).toBeInTheDocument();
});
