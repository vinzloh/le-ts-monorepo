import * as React from 'react';

export function Textfield(props: React.ComponentProps<'input'>) {
  return <input className="border-1  p-2 rounded-sm" {...props} />;
}
