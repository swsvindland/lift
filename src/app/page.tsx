import { Button } from "@nextui-org/button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Hello World</h1>
      <Button color="primary">Click Me</Button>
    </main>
  );
}
