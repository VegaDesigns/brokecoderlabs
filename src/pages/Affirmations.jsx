// src/pages/Affirmations.jsx
import { useEffect, useState } from "react";

const animals = [
  {
    key: "bearded dragon",
    emoji: "🦎",
    traits: ["patient", "steadfast", "unbothered"],
    verbs: ["bask in wins", "soak up calm", "stand your ground"],
  },
  {
    key: "axolotl",
    emoji: "🦎",
    traits: ["resilient", "hopeful", "regenerating"],
    verbs: ["grow back stronger", "float past drama", "heal in your time"],
  },
  {
    key: "duck",
    emoji: "🦆",
    traits: ["buoyant", "playful", "resourceful"],
    verbs: ["make waves", "shake off the splash", "glide forward"],
  },
  {
    key: "chicken",
    emoji: "🐔",
    traits: ["persistent", "curious", "determined"],
    verbs: ["peck at problems", "scratch up solutions", "strut with pride"],
  },
  {
    key: "horse",
    emoji: "🐎",
    traits: ["powerful", "focused", "free"],
    verbs: ["gallop toward goals", "breathe steady", "finish strong"],
  },
  {
    key: "dog",
    emoji: "🐶",
    traits: ["loyal", "brave", "energetic"],
    verbs: ["chase it down", "guard your peace", "wag through setbacks"],
  },
  {
    key: "cat",
    emoji: "🐱",
    traits: ["calm", "clever", "unshakable"],
    verbs: ["land on your feet", "stretch your limits", "purr through chaos"],
  },
  {
    key: "cow",
    emoji: "🐮",
    traits: ["grounded", "steady", "abundant"],
    verbs: ["chew on ideas", "move at your pace", "grow quietly daily"],
  },
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const makeLine = () => {
  const a = pick(animals),
    t = pick(a.traits),
    v = pick(a.verbs);
  return `${a.emoji} Channel your ${t} ${a.key} energy — ${v}.`;
};

export default function Affirmations() {
  const [line, setLine] = useState("");
  const [last, setLast] = useState("");

  const nextLine = () => {
    let text = makeLine();
    if (text === last) text = makeLine();
    setLast(text);
    setLine(text);
  };

  useEffect(() => {
    nextLine(); /* eslint-disable-next-line */
  }, []);

  return (
    <section className="section">
      <div className="quote-wrap">
        <div className="quote indexcard">
          <div className="quote__text">{line}</div>
        </div>
      </div>

      <div className="center mt-4">
        <button type="button" className="btn btn--primary" onClick={nextLine}>
          Give me wisdom
        </button>
      </div>

      <div className="center mt-4">
        <small className="muted">Tap again for a new one.</small>
      </div>
    </section>
  );
}
