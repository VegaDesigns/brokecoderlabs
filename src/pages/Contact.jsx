// src/pages/Contact.jsx
// Purpose: contact hub for ideas, business inquiries, and affiliate requests.
// Uses mailto: links with prefilled subject/body (no backend needed).

const EMAIL = "iVegaDesigns@outlook.com";

const makeMailto = (subject, body) => {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${EMAIL}?subject=${s}&body=${b}`;
};

export default function Contact() {
  return (
    <section className="section">
      <h1 className="mt-0">Get in touch</h1>
      <p className="muted">
        Have an idea for a tiny app? Want to collaborate? Looking to send gear
        for review or set up an affiliate partnership?
      </p>

      <div className="grid mt-4">
        {/* Ideas */}
        <div className="card">
          <h3>Have ideas?</h3>
          <p className="muted">
            Pitch a tiny app or a feature you’d love to see. If it fits the vibe
            and helps people, I’ll build it.
          </p>
          <a
            className="btn btn--primary"
            href={makeMailto(
              "Idea Pitch — Broke Coder Labs",
              `Hi Cristian,\n\nI have an idea for a tiny app:\n\nName/one-liner:\nProblem it solves:\nWho it helps:\nAny references/links:\n\nThanks!`
            )}
          >
            Pitch it
          </a>
        </div>

        {/* Business */}
        <div className="card">
          <h3>Want to do business?</h3>
          <p className="muted">
            Sponsorships, collabs, or cross-promo. Tell me what you’re trying to
            accomplish and I’ll reply with options.
          </p>
          <a
            className="btn"
            href={makeMailto(
              "Business Inquiry — Broke Coder Labs",
              `Hi Cristian,\n\nBrand/company:\nGoal (awareness, traffic, conversions):\nBudget/timeline:\nLinks:\nOther details:\n\nThanks!`
            )}
          >
            Let’s talk
          </a>
        </div>

        {/* Affiliate */}
        <div className="card">
          <h3>Affiliate request</h3>
          <p className="muted">
            Send items for honest review, or share your affiliate program. I
            disclose sponsorships and only recommend gear I’d actually use.
          </p>
          <ul className="muted" style={{ marginTop: "8px" }}>
            <li>Product name & link (Amazon ok)</li>
            <li>MSRP and any discount codes</li>
            <li>Shipping details (return label if needed)</li>
            <li>Affiliate program link / terms</li>
          </ul>
          <a
            className="btn"
            href={makeMailto(
              "Affiliate Request — Broke Coder Labs",
              `Hi Cristian,\n\nProduct:\nLink:\nMSRP:\nAffiliate details:\nShipping info:\nNotes:\n\nI understand reviews are honest and not guaranteed.`
            )}
          >
            Request affiliation
          </a>
        </div>
      </div>

      <div className="card mt-4">
        <h3>Contact email</h3>
        <p className="muted">
          If the button doesn’t work on your device, email me directly:
        </p>
        <p>
          <code>{EMAIL}</code>
        </p>
        <small className="muted">
          Response time: usually within 1–2 business days.
        </small>
      </div>
    </section>
  );
}
