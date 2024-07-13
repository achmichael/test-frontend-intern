export function RunningText() {
  return (
    <div className="running-text">
      <marquee behavior="scroll" direction="left">
        <Text />
      </marquee>
    </div>
  );
}

function Text() {
  return (
    <span>
      Konversi uang dengan mudah di Currency XChange! Temukan nilai tukar
      terbaru dan hitung dengan akurat.
    </span>
  );
}
