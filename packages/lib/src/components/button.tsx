import * as React from 'react';

export function Button(props: React.ComponentProps<'button'>) {
  return (
    <button
      style={{
        background: '#efefef',
        padding: '8px',
        borderRadius: '8px',
      }}
      {...props}
    />
  );
}
