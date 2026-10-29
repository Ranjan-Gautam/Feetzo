const items = [
  "Jordan",
  "Travis Scott",
  "Puma",
  "New Balance",
  "Leather Jackets",
  "Down Jackets",
  "Pants",
  "Hoodies",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-background-2 py-5">
      <div className="marquee">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-7 inline-flex items-center gap-7 font-display text-2xl font-medium text-muted sm:text-3xl"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
