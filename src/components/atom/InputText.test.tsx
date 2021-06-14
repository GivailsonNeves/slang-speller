import { fireEvent, render } from '@testing-library/react';
import InputText from './InputText';

test('render content', () => {
  const { container } = render(<InputText onChange={() => {}} value="test value" />);
  expect(container.querySelector('input')?.value).toBe('test value');
});

test('test inte', async () => {
  const onInput = jest.fn();
  const { container } = render(<InputText onInput={onInput} />);
  const inputText = container.querySelector('input');
  fireEvent.input(inputText!);
  expect(onInput).toBeCalled();
});
