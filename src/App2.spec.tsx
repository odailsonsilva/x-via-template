import { render } from '@testing-library/react';
import App from './App2';

describe('App', () => {
  test('renders "teste" text - App.tsx', () => {
    const { getByText } = render(<App />);

    const testText = getByText('teste');
    expect(testText).toBeInTheDocument();
  });
});
