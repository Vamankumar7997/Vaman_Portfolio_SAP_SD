import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(screen.getByText(/Vaman Kumar Tamarana/i)).toBeInTheDocument();
});
