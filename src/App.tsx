import "./App.css";
import { Greeting } from "./components/Greeting/Greeting.tsx";
import { Counter } from "./components/Counter/Counter.tsx";
import { Profile } from "./components/Profile/Profile.tsx";
import { CounterWithHook } from "./components/CounterWithHook/CounterWithHook.tsx";

function App() {
  return (
    <div className="flex flex-col gap-16">
      <h1>UI Testing</h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-16 items-center">
        <div className="text-xl">Simple UI</div>
        <Greeting name="Sean" />
        <div className="text-xl">User interaction</div>
        <Counter />
        <div className="text-xl">Hook</div>
        <CounterWithHook />
        <div className="text-xl">API call</div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
