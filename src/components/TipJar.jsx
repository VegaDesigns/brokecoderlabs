// src/components/TipJar.jsx
export default function TipJar({ defaultAmount = 3, handle = "YourHandle" }) {
  const goto = () => {
    const input = document.getElementById("tipAmt");
    let val = parseInt(
      input && input.value ? input.value : String(defaultAmount),
      10
    );
    if (!val || val < 1) val = defaultAmount;
    window.location.href = "https://www.paypal.me/" + handle + "/" + val;
  };

  return (
    <div className="tip">
      <span>Tip jar</span>
      <input
        id="tipAmt"
        type="number"
        min="1"
        step="1"
        defaultValue={defaultAmount}
      />
      <button onClick={goto}>Send</button>
      <a className="quick" href={`https://www.paypal.me/${handle}/3`}>
        +3
      </a>
      <a className="quick" href={`https://www.paypal.me/${handle}/5`}>
        +5
      </a>
    </div>
  );
}
