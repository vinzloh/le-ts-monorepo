import { Button, useHook } from '@koei/lib';
import { Button as Button2 } from '@koei/lib/components/button';

export function App() {
  useHook();
  return (
    <div>
      <h1>App</h1>
      <Button>Click</Button>
      <Button2>Button2</Button2>
    </div>
  );
}
