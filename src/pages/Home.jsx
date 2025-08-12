// src/pages/Home.jsx
// Uses FeedCard (image imported inside the component), no public/ path needed.

import { Link } from "react-router-dom";
import FeedCard from "../components/FeedCard";

export default function Home() {
  return (
    <div className="section hero">
      {/* Hero */}
      <h1 className="mt-0">“I'm tired of being broke, so I built an app.”</h1>
      <p className="muted">
        Try a tiny app below. If it gave you a smile or helped a bit, consider a
        small tip.
      </p>

      {/* Tiny apps grid */}
      <div className="grid mt-4">
        <Link className="card app-card" to="/lizard">
          <div className="app-card__icon" aria-hidden="true">
            🦎
          </div>
          <div>
            <h3>Lizard SFX</h3>
            <p className="muted">
              One tap. One word. Overlap-friendly sound spam included.
            </p>
          </div>
          <div>
            <span className="btn btn--ghost btn--sm">Open</span>
          </div>
        </Link>

        <Link className="card app-card" to="/doitlady">
          <div className="app-card__icon" aria-hidden="true">
            🎉
          </div>
          <div>
            <h3>Do It, Lady</h3>
            <p className="muted">A celebratory button for quick wins.</p>
          </div>
          <div>
            <span className="btn btn--ghost btn--sm">Open</span>
          </div>
        </Link>

        <Link className="card app-card" to="/affirmations">
          <div className="app-card__icon" aria-hidden="true">
            🐾
          </div>
          <div>
            <h3>Animal Affirmations</h3>
            <p className="muted">
              Axolotl wisdom. Duck pep talks. Dragon resolve.
            </p>
          </div>
          <div>
            <span className="btn btn--ghost btn--sm">Open</span>
          </div>
        </Link>

        <Link className="card app-card" to="/gear">
          <div className="app-card__icon" aria-hidden="true">
            🦆
          </div>
          <div>
            <h3>Duckling Gear</h3>
            <p className="muted">The exact items we actually use.</p>
          </div>
          <div>
            <span className="btn btn--ghost btn--sm">Open</span>
          </div>
        </Link>
      </div>

      {/* Feed CTA – baby Pekin duck */}
      <FeedCard handle="TwitchDad" />
    </div>
  );
}
