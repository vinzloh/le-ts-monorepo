import { Button, useHook } from '@koei/lib';
import { Button as Button2 } from '@koei/lib/components/button';

import './app.css';

export function App() {
  useHook();
  return (
    <div>
      <h1 className="p-4 bg-red-300">App</h1>
      <input />
      <Button>Click</Button>
      <Button2>Button2</Button2>
    </div>
  );
}
