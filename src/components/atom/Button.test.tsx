import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

test('render content', () => {
  render(<Button><span>box content</span></Button>);
  const linkElement = screen.getByText(/box content/i);
  expect(linkElement).toBeInTheDocument();
});

test('test click callback', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}><span>click me</span></Button>);
  fireEvent.click(getByText(/click me/));
  expect(onClick).toHaveBeenCalled();
});
