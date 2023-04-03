import { FaGreaterThan, FaLessThan } from "react-icons/fa";

export function FullBanner() {
  return (
    <div className="FullBanner">
      <button
        className="Prev"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <a href="">
          <FaLessThan
            className="iconPrev"
            size={32}
            style={{ strokeWidth: 0.5 }}
          />
        </a>
      </button>
      <button
        className="Next"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <a href="">
          <FaGreaterThan
            className="iconNext"
            size={32}
            style={{ strokeWidth: 1 }}
          />
        </a>
      </button>
      <div className="divOutono">
        <h1 className="headline">Promoções de Outono</h1>
      </div>
      <div className="divSub">
        <h2 className="subhead">
          Confiras os melhores looks para combinar com você nesse Outono
        </h2>
        <button type="submit" className="btnConferir">Conferir</button>
      </div>
    </div>
  );
}
