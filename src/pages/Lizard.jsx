// src/pages/Lizard.jsx
import { useEffect, useState } from "react";
import { play, preload } from "../sfx";

export default function Lizard() {
  const [emotes, setEmotes] = useState([]);

  // Preload audio so first tap is instant
  useEffect(() => {
    preload("lizard");
  }, []);

  function spawnEmote() {
    const id = Math.random().toString(36).slice(2);
    const left = Math.floor(Math.random() * 80) + 10; // 10%..90%
    setEmotes((prev) => [...prev, { id, left }]);
    // Remove after animation finishes
    setTimeout(() => {
      setEmotes((prev) => prev.filter((e) => e.id !== id));
    }, 1200);
  }

  function handleClick() {
    play("lizard");
    spawnEmote();
  }

  return (
    <section className="section">
      <div className="sfx-panel">
        {/* Floating emoji layer */}
        <div className="emote-layer" aria-hidden="true">
          {emotes.map((e) => (
            <span key={e.id} className="emote" style={{ left: e.left + "%" }}>
              {"\uD83E\uDD8E" /* lizard */}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="btn btn--primary sfx-button sfx-button--glow"
          onClick={handleClick}
          aria-label="Play lizard sound"
        >
          LIZARD
        </button>

        <small className="muted">
          Tap repeatedly. Volume up for maximum chaos.
        </small>
      </div>
    </section>
  );
}
