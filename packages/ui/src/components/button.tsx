import * as React from 'react';

import '../tailwind.css';

export function Button(props: React.ComponentProps<'button'>) {
  return <button className="bg-amber-400 p-2 rounded-md" {...props} />;
}
