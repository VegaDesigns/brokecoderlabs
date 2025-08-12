// src/sfx.js
// Simple, consistent-tone playback (no pitch or timing variation).
// Creates a fresh Audio instance per tap so overlapping clicks still work.
// Paths use BASE_URL so dev and GitHub Pages both work.

const MAP = {
  lizard: ["sounds/lizard.mp3"],
  doit: ["sounds/doit.mp3"],
};

const SOURCES = {};
for (const [key, arr] of Object.entries(MAP)) {
  SOURCES[key] = arr.map((p) => `${import.meta.env.BASE_URL}${p}`);
}

export function preload(name) {
  const list = SOURCES[name];
  if (!list) return;
  list.forEach((src) => {
    const a = new Audio();
    a.src = src;
    a.preload = "auto";
    a.setAttribute("playsinline", "");
    try {
      a.load();
    } catch {}
  });
}

export function play(name) {
  const list = SOURCES[name];
  if (!list || !list.length) return;

  // Fixed take, fixed tone
  const src = list[0];
  const a = new Audio(src);
  a.playbackRate = 1;
  a.volume = 1;
  a.currentTime = 0;
  a.setAttribute("playsinline", "");
  a.play().catch(() => {});
}
