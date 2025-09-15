import { render, screen } from '@testing-library/react';
import Button from '../Button.jsx';

describe('Button component', () => {
  it('renders as a native button when as="button"', () => {
    render(<Button as="button">Click me</Button>);
    const el = screen.getByRole('button', { name: /click me/i });
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('btn');
  });
});

