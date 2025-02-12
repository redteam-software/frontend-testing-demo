import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Greeting } from '../src/components/Greeting/Greeting';

describe('Greeting', () => {
  it('should greet a known person', () => {
    render(<Greeting name="Sean" />);

    expect(screen.getByText('Welcome, Sean')).toBeInTheDocument();
  });

  it('should greet an unknown person', () => {
    render(<Greeting />);

    expect(screen.getByText('Welcome, User')).toBeInTheDocument();
  });
});
