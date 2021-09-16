import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders ok', () => {
  render(<TodoList />);
});
test('snapshot is consistent', () => {
  let {asFragment}=render(<TodoList/>);
  expect(asFragment()).toMatchSnapshot()
});


test('create Todo', ()=>{
  let {getByText,getByLabelText, queryByDisplayValue, getByDisplayValue} = render(<TodoList/>);
  let button = getByText('Create')
  let input = getByLabelText('Create Todo')
  expect(queryByDisplayValue('Test Todo1')).not.toBeInTheDocument();
  fireEvent.change(input, {target:{value: 'Test Todo'}});
  fireEvent.click(button);
  
  expect(getByDisplayValue('Test Todo')).toBeInTheDocument();

})

test('edit Todo', ()=>{
  let {queryByDisplayValue, getByDisplayValue, getByTestId} = render(<TodoList/>);
  
  let updateInput = getByDisplayValue('Test Todo');
  let form = getByTestId('form')
  expect(updateInput).toBeInTheDocument();
  fireEvent.change(updateInput, {target:{value: 'Changed Todo'}});
  fireEvent.submit(form)
  expect(getByDisplayValue('Changed Todo')).toBeInTheDocument()
  expect(queryByDisplayValue('Test Todo')).not.toBeInTheDocument()
})

test('delete Todo', ()=>{
  let {queryByDisplayValue, getByDisplayValue, getByTestId} = render(<TodoList/>);
  
  expect(getByDisplayValue('Changed Todo')).toBeInTheDocument()
  fireEvent.click(getByTestId('delete'));
  expect(queryByDisplayValue('Changed Todo')).not.toBeInTheDocument()
})