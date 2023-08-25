export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>this is home page</h1>
      <p> {process.env.API_KEY}</p>
      <p> {process.env.API_SECRET}</p>
    </main>
  );
}
