export function SearchBox() {
  return (
    <div className="SearchBox">
      <div className="boxSearch">
        <input
          className="boxSearch"
          type="text"
          placeholder="O Que Você Busca?"
        />
        <button className="btnSearch">Buscar</button>
      </div>
    </div>
  );
}
