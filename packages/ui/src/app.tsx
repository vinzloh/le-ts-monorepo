import { Button } from './components/button';
import { Textfield } from './components/textfield';

import './tailwind.css';

export function App() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl">Storybook</h1>
      <Button>Button</Button>
      <div className="mt-4" />
      <Textfield defaultValue={'Text input'} />
    </div>
  );
}
