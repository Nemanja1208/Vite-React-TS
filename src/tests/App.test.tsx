import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import App from '../App';

describe('App component', () => {
  test('renders Vite and React logos and updates count on button click', () => {
    render(<App />);

    // Check if Vite and React logos are rendered
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    expect(viteLogo).not.toBeNull();
    expect(reactLogo).not.toBeNull();

    // Check if the count is initially 0
    const countDisplay = screen.getByText(/Count 0/i);
    expect(countDisplay).not.toBeNull();

    // Click the increment button and check if the count updates to 1
    const incrementButton = screen.getByText(/Increment/i);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count 1/i)).not.toBeNull();

    // Click the decrement button and check if the count updates back to 0
    const decrementButton = screen.getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Count 0/i)).not.toBeNull();
  });
});
