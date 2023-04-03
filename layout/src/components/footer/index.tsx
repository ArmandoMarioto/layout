import Link from "next/link";
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { SiVtex } from "react-icons/si";

export function Footer() {
  return (
    <footer className="footerInfos">
      <div className="organizarColumn">
        <div className="footer-column">
          <h3>Informações</h3>
          <ul>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a href="#">Prazo de Envio</a>
            </li>
            <li>
              <a href="#">Trocas e Devoluções</a>
            </li>
            <li>
              <a href="#">Promoções e Cupons</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Minha conta</h3>
          <ul>
            <li>
              <a href="#">Minha conta</a>
            </li>
            <li>
              <a href="#">Meus Pedidos</a>
            </li>
            <li>
              <a href="#">Cadastre-se</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Onde nos Encontrar</h3>
          <ul>
            <li>
              <a href="#">Lojas</a>
            </li>
            <li>
              <a href="#">Endereço</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="socialMedias">
        <div className="medias">
          <ul>
            <li>
              <Link href="https://www.facebook.com/ArmandoMarioto" className="">
                <AiFillFacebook />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/armandomarioto/"
                className=""
              >
                <AiFillLinkedin />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/armandomarioto/"
                className=""
              >
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ArmandoMarioto" className="">
                <AiFillYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div className="cartoes">
          <ul>
            <li>
              <Link href="/visa" className="">
                <FaCcVisa />
              </Link>
            </li>
            <li>
              <Link href="/mastercard" className="">
                <FaCcMastercard />
              </Link>
            </li>
            <li>
              <Link href="/visa" className="">
                <FaCcVisa />
              </Link>
            </li>
            <li>
              <Link href="/mastercard" className="">
                <FaCcMastercard />
              </Link>
            </li>
          </ul>
        </div>
        <div className="feitopor">
          <ul>
            <li>
              <span>Powered by </span>
              <Link
                href="https://www.linkedin.com/in/armandomarioto/"
                className=""
              >
                <SiVtex />
              </Link>
            </li>

            <li>
              <span>Developed by</span>
              <Link href="https://www.linkedin.com/in/armandomarioto/">
                <span>Armando Marioto</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
