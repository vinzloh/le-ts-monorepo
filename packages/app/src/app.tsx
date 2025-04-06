import { Button, Textfield, useHook } from '@koei/ui';
import { Button as Button2 } from '@koei/ui/components/button';

import './app.css';

export function App() {
  useHook();
  return (
    <div>
      <h1 className="p-4 mb-4 bg-red-300">App</h1>

      <div className="flex flex-col w-min gap-4">
        <div className="flex gap-2">
          <Button>Click</Button>
          <Button2>Button2</Button2>
        </div>
        <Textfield defaultValue={'test'} />
      </div>
    </div>
  );
}
