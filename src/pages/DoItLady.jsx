// src/pages/DoItLady.jsx
import { useEffect, useState } from "react";
import { play, preload } from "../sfx";
import chitImg from "../assets/chit.png"; // <-- Save your image as src/assets/chit.png

export default function DoItLady() {
  const [stickers, setStickers] = useState([]);

  // Preload audio so first tap is instant
  useEffect(() => {
    preload("doit");
  }, []);

  function spawnSticker() {
    const id = Math.random().toString(36).slice(2);
    // Randomize position (percentages within the stage bounds) and a slight rotation
    const x = Math.floor(Math.random() * 60) + 20; // 20%..80%
    const y = Math.floor(Math.random() * 35) + 35; // 35%..70%
    const r = (Math.random() * 16 - 8).toFixed(1); // -8deg..8deg
    setStickers((prev) => [...prev, { id, x, y, r }]);
    // Remove after animation completes
    setTimeout(() => {
      setStickers((prev) => prev.filter((s) => s.id !== id));
    }, 2200);
  }

  function handleClick() {
    play("doit");
    spawnSticker();
  }

  return (
    <section className="section">
      <div className="sfx-panel">
        {/* Pop-in sticker stage */}
        <div className="sticker-stage" aria-hidden="true">
          {stickers.map((s) => (
            <img
              key={s.id}
              src={chitImg}
              alt=""
              className="sticker"
              style={{ "--x": s.x + "%", "--y": s.y + "%", "--r": s.r + "deg" }}
            />
          ))}
        </div>

        <button
          type="button"
          className="btn btn--primary sfx-button sfx-button--glow"
          onClick={handleClick}
          aria-label="Play 'Do it, lady'"
        >
          DO IT, LADY
        </button>

        <small className="muted">Tap repeatedly. The hype is real.</small>
      </div>
    </section>
  );
}
