import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AvailableDesserts from './AvailableDesserts';

test('renders Available Desserts and get the Banana pancake element', () => {
  render(<AvailableDesserts />);
  const dessertElement = screen.getByText('Banana pancake', { exact: false });
  expect(dessertElement).toBeInTheDocument();
});

test('renders correctly by snapshot', () => {
  const tree = renderer
    .create(<AvailableDesserts/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
