import { render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';

test('renders ok', () => {
  render(<TodoForm />);
});

test('snapshot is consistent', () => {
  let {asFragment}=render(<TodoForm />);
  expect(asFragment()).toMatchSnapshot()
});