import * as React from 'react';

export function Button(props: React.ComponentProps<'button'>) {
  return (
    <button
      className="bg-amber-400 rounded-md p-2 hover:bg-amber-200 hover:cursor-pointer"
      {...props}
    />
  );
}
