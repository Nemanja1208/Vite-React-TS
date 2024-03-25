import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import App from './App';

describe('App component', () => {
  test('renders Vite and React logos and updates count on button click', () => {
    render(<App />);

    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    expect(viteLogo).not.toBeNull();
    expect(reactLogo).not.toBeNull();

    const countButton = screen.getByText(/count is 0/i);
    expect(countButton).not.toBeNull();

    fireEvent.click(countButton);
    expect(screen.getByText(/count is 1/i)).not.toBeNull();
  });
});
