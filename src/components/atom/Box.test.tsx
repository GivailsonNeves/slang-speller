import { render, screen } from '@testing-library/react';
import Box from './Box';

test('render content', () => {
  render(<Box><p>box content</p></Box>);
  const linkElement = screen.getByText(/box content/i);
  expect(linkElement).toBeInTheDocument();
});
