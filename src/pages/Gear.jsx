// src/pages/Gear.jsx
// Gear page with bold orange links (styled via .gear-list in styles.css).
// No affiliate links yet—this supports clean Amazon search links now, and
// will automatically add your tag once you set AFF_TAG below.

const AFF_TAG = ""; // TODO: set your Amazon Associates tag later, e.g., "vegadesigns-20"

const amzSearch = (q) => {
  const base = "https://www.amazon.com/s?k=" + encodeURIComponent(q);
  return AFF_TAG ? `${base}&tag=${AFF_TAG}` : base;
};

const items = [
  {
    label: "Starter crumble feed",
    href: amzSearch("duck starter crumble feed"),
  },
  {
    label: "Niacin supplement",
    href: amzSearch("niacin supplement for ducklings"),
  },
  {
    label: "Brooder heat plate",
    href: amzSearch("brooder heat plate for ducklings"),
  },
  {
    label: "Waterer + no-mess feeder",
    href: amzSearch("duckling waterer no mess feeder"),
  },
];

export default function Gear() {
  return (
    <section className="section">
      <h1 className="mt-0">Duckling Gear We Actually Use</h1>
      <ul className="gear-list mt-4">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <small className="muted">
          Heads up: links may become affiliate in the future. It costs you
          nothing and helps feed the flock.
        </small>
      </div>
    </section>
  );
}
