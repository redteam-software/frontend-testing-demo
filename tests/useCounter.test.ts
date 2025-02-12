import { describe, expect, it } from 'vitest';
import {act, renderHook} from "@testing-library/react";
import {useCounter} from "../src/components/CounterWithHook/useCounter";

describe('useCounter', () => {
  it('should get count default', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toEqual(0);
  });

  it('should get initial (provided) count', () => {
    const { result } = renderHook(() => useCounter(5));

    expect(result.current.count).toEqual(5);
  });

  it('should increment count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toEqual(1);
  });

  it('should decrement count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toEqual(-1);
  });
});