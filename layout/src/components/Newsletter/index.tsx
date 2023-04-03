export function Newsletter() {
  return (
    <div className="newsletter">
      <h2>Receba nossa newsletter</h2>
      <form>
        <input type="email" id="email" placeholder="Digite seu e-mail " />
        <button className="btnsubmit" type="submit">Enviar</button>
      </form>
    </div>
  );
}
