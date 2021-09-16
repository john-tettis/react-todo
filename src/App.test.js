import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ok', () => {
  render(<App />);
});

test('snapshot is consistent', () => {
  let {asFragment}=render(<App />);
  expect(asFragment()).toMatchSnapshot()
});

