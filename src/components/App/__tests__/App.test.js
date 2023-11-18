import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';


test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText("Hello world!");
  expect(element).toBeInTheDocument();
});
