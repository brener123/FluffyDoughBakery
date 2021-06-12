import { render, screen } from '@testing-library/react';
import DessertItemForm from './DessertItemForm';

test('renders DessertItemForm with "Amount" text', () => {
  render(<DessertItemForm />);
  const linkElement = screen.getByText('Amount', { exact: false });
  expect(linkElement).toBeInTheDocument();
});
