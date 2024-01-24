import { isBefore } from "date-fns";

const PASI_BACK = new Date("2024-02-05");

export default function Home() {
  function isPasiBack(): boolean {
    return isBefore(PASI_BACK, new Date());
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-center">
      <h2 className="text-2xl">Is Pasi Back?</h2>
      <h1 className="text-[10vw]">{isPasiBack() ? "YES" : "NO 😭"}</h1>
    </main>
  );
}
