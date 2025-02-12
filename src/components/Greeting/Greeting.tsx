import { FC } from "react";

interface GreetingProps {
  name?: string;
}

export const Greeting: FC<GreetingProps> = ({ name }) => (
  <h2 className="text-2xl">Welcome, {name ?? "User"}</h2>
);
