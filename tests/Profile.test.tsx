import {beforeEach, describe, expect, it, Mock, vi} from 'vitest';
import {render, screen, waitFor} from "@testing-library/react";
import {Profile} from "../src/components/Profile/Profile";

describe('Profile', () => {
   beforeEach(() => {
     global.fetch = vi.fn();
   });

   afterEach(() => {
     vi.resetAllMocks();
   });

  it('fetches user', async () => {
    (global.fetch as Mock).mockResolvedValueOnce({
      json: () => ({
        name: 'Test Person',
        address: {
          street: '1234 Main St',
          suite: 'Suite 400'
        },
        website: 'https://test.com',
      })
    })

    render(<Profile userId={1} />);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Test Person/)).toBeInTheDocument();
      expect(screen.getByText(/1234 Main St/)).toBeInTheDocument();
      expect(screen.getByText(/Suite 400/)).toBeInTheDocument();
      expect(screen.getByText(/https:\/\/test.com/)).toBeInTheDocument();
    });
  });
});
