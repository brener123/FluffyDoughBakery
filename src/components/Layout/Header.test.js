import { render, screen } from '@testing-library/react';
import Header from './Header';

  test('renders Header with "Fluffy Dough Bakery" as a text', () => {
    render(<Header/>);

    const helloWorldElement = screen.getByText('Fluffy Dough Bakery');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders Header with "Your cart" as a text', () => {
    render(<Header/>);

    const helloWorldElement = screen.getByText('Your Cart');
    expect(helloWorldElement).toBeInTheDocument();
  });

