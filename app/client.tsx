// app/client.tsx
/// <reference types="vinxi/types/client" />
import { StartClient } from '@tanstack/react-start';
import { hydrateRoot } from 'react-dom/client';

import { createRouter } from './router';

const router = createRouter();
console.log(`client: B4 hydrateRoot`);
hydrateRoot(document, <StartClient router={router} />);
console.log(`client: AFTER hydrateRoot`);
