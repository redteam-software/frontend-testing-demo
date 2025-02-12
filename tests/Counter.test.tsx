import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Counter } from '../src/components/Counter/Counter';
import { userEvent } from '@testing-library/user-event';

describe('Counter', () => {
  it('should render a default value if not provided', () => {
    render(<Counter />);

    expect(screen.getByRole('contentinfo')).toHaveTextContent('0');
  });

  it('should default to provided value', () => {
    render(<Counter initialValue={5} />);

    expect(screen.getByRole('contentinfo')).toHaveTextContent('5');
  });

  it('should increment counter', async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByRole('contentinfo')).toHaveTextContent('1');
  });

  it('should decrement counter', async () => {
    const user = userEvent.setup();

    render(<Counter />);

    await user.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByRole('contentinfo')).toHaveTextContent('-1');
  });
});
