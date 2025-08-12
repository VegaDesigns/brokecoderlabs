// src/components/FeedCard.jsx
// Mobile-first CTA card that scales to desktop.
// Uses .card + .feedcard styles (added to styles.css earlier).
// Image is imported from src/assets for reliable bundling on dev + GitHub Pages.

import duckImg from "../assets/duckling.jpg";

export default function FeedCard({
  handle = "TwitchDad",
  amountMain = 3,
  amountAlt = 5,
  imgSrc = duckImg, // default to bundled asset, but still override-able via props
  headline = "Help me feed this duck.",
  subline = "One tap = $3 feed.",
}) {
  const url = (amt) =>
    handle && handle !== "YourHandle"
      ? `https://www.paypal.me/${handle}/${amt}`
      : "#";

  const guardIfMissing = (e) => {
    if (url(amountMain) === "#") {
      e.preventDefault();
      alert("TODO: Add your PayPal.me handle to enable this button.");
    }
  };

  return (
    <section className="section" aria-label="Feed a duck call to action">
      <div className="card feedcard">
        <img
          className="feedcard__media"
          src={imgSrc}
          alt="A cute duckling looking at the camera"
          loading="eager"
          decoding="async"
        />

        <div className="feedcard__overlay">
          <h3 className="mb-0">{headline}</h3>
          <p className="muted mb-0">{subline}</p>

          <div className="inline-fields feedcard__actions">
            <a
              href={url(amountMain)}
              onClick={guardIfMissing}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Feed for $${amountMain} (opens in a new tab)`}
            >
              Feed for ${amountMain}
            </a>
            <a
              href={url(amountAlt)}
              onClick={guardIfMissing}
              className="btn btn--sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Add $${amountAlt} (opens in a new tab)`}
            >
              +{amountAlt}
            </a>
          </div>

          <small className="muted">This is humor. No animals are harmed.</small>
        </div>
      </div>
    </section>
  );
}
