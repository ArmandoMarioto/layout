import Link from "next/link";
import { GiLargeDress } from "react-icons/gi";

const HeaderSecundario: React.FC = () => {
  return (
    <nav className="HeaderSecundario">
      <ul>
        <li>
          <div className="vestido">
            <GiLargeDress className="IconNovidades" />
            <Link className="active" href="/novidades">
              Novidades
            </Link>
          </div>
        </li>
        <li>
          <Link href="/vestidos">Vestidos</Link>
        </li>
        <li>
          <Link href="/roupas">Roupas</Link>
        </li>
        <li>
          <Link href="/sapatos">Sapatos</Link>
        </li>
        <li>
          <Link href="/lingerie">Lingerie</Link>
        </li>
        <li>
          <Link href="/acessorios">Acessórios</Link>
        </li>
        <li>
          <Link href="/outlet">OUTLET</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderSecundario;
