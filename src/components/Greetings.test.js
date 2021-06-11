import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';

test('renders hello world link', () => {
  render(<Greetings />);
  const linkElement = screen.getByText('Hello world', { exact: false });
  expect(linkElement).toBeInTheDocument();
});
