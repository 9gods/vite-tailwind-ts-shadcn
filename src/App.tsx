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