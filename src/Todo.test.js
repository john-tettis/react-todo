import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders ok', () => {
  render(<Todo/>);
});
test('snapshot is consistent', () => {
    let {asFragment}=render(<Todo />);
    expect(asFragment()).toMatchSnapshot()
  });
