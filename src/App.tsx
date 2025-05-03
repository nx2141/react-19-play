// App.tsx
import { Suspense, use } from "react";
import { fetchDadJoke } from "./components/getJoke";

function FetchComponent() {
  const data = use(fetchDadJoke());
  return <p>{data.joke}</p>;
}

export default function App() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <FetchComponent />
    </Suspense>
  );
}
