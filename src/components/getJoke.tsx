// getJoke.ts
type DadJoke = { id: string; joke: string; status: number };

const dadJokePromise: Promise<DadJoke> = fetch("https://icanhazdadjoke.com/", {
  headers: { Accept: "application/json" },
}).then(r => {
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
});

export function fetchDadJoke() {
  return dadJokePromise;          // 常に同じ Promise を返す
}
