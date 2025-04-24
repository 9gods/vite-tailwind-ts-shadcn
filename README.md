# Vite + React + TypeScript + Tailwind v3

## Passos para configurar do zero:

1. Crie o projeto:
   ```
   npm create vite@latest nome-do-projeto -- --template react-ts
   ```

2. Instale o Tailwind v3:
   ```
   npm install -D tailwindcss@3.0.24 postcss autoprefixer
   npx tailwindcss init -p
   ```

3. Configure o `tailwind.config.js`:
   ```js
   module.exports = {
     content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
     theme: { extend: {} },
     plugins: [],
   };
   ```

4. No `src/index.css`, adicione:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. Importe `index.css` no `main.tsx`:
   ```ts
   import './index.css';
   ```

6. Configure o alias no ```tsconfig.json```:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,

    // coloque isso aqui
    "baseUrl": ".",

    // isso tambem
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "include": [
    "src"
  ]
}

```

7. Atualize o `vite.config.ts` com `alias`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
})

```

8. Instale o `tailwindcss-animate`:

```npm i tailwindcss-animate```

9. Vá em `tailwind.config.js` e verifique se possui esta linha: (caso nao tenha, adicione)
```js
plugins: [require("tailwindcss-animate")],
```

10. Inicie a shadcn:

```npx shadcn init```

10. Adicione um componente da shadcn:

```npx shadcn add button```

11. Coloque ele no `App.tsx` para testar:

```tsx
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <h1 className="text-white text-5xl font-extrabold animate-bounce tracking-wide drop-shadow-lg">desing is mai pasion</h1>
      <Button>
        Teste shadcn
      </Button>
    </div>
  );
}
```

6. Execute:
   ```
   npm run dev
   ```

Pronto!
