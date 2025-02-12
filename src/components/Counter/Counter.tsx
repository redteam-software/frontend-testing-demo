import { FC, useState } from "react";

interface CounterProps {
  initialValue?: number;
}

export const Counter: FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="flex gap-4 items-center justify-center">
      <button className="w-16 text-xl" onClick={() => setCount(count - 1)}>
        -
      </button>
      <div className="text-xl w-16" role="contentinfo">{count}</div>
      <button className="w-16 text-xl" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};
