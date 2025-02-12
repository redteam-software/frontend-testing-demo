import { FC } from "react";
import { useCounter } from "./useCounter.ts";

interface CounterProps {
  initialValue?: number;
}

export const CounterWithHook: FC<CounterProps> = ({ initialValue = 0 }) => {
  const { count, increment, decrement } = useCounter(initialValue);

  return (
    <div className="flex gap-4 items-center justify-center">
      <button className="w-16 text-xl" onClick={() => decrement()}>
        -
      </button>
      <div className="text-xl w-16">{count}</div>
      <button className="w-16 text-xl" onClick={() => increment()}>
        +
      </button>
    </div>
  );
};
