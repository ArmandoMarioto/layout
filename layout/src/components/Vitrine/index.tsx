import { useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { TitleVitrine } from "./title";

export function Vitrine() {
  const isDesktop = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    { ssr: true }
  );
  return (
    <div>
      <TitleVitrine></TitleVitrine>
      <div className="Vitrine">
        <Link href="/comma" className="VitrineLink">
          <Image
            src="https://via.placeholder.com/308x381"
            alt="Comma"
            width={308}
            height={381}
          />
          <div className="variacao">
            <div className="variacaoAzul"></div>
            <div className="variacaoRoxo"></div>
            <div className="variacaoVermelho"></div>
            <div className="variacaoAmarelo"></div>
          </div>
          <div className="preco">
            <span>R$ 500,00</span>
          </div>
          <div className="titleProduto">
            <span>Faux Suede Mini Skirt</span>
          </div>
          <div className="subtitleProduto">
            <span>
              A faux suede mini skirt featuring exposed button-front closures
              and panel seam construction.
            </span>
          </div>
          <button className="btnProduto">Adicionar</button>
        </Link>
        {isDesktop && (
          <>
            <Link href="/comma" className="VitrineLink">
              <Image
                src="https://via.placeholder.com/308x381"
                alt="Comma"
                width={308}
                height={381}
              />
              <div className="variacao">
                <div className="variacaoPreto"></div>
                <div className="variacaoVermelho"></div>
                <div className="variacaoCinza"></div>
                <div className="variacaoBranco"></div>
              </div>
              <div className="preco">
                <span>R$ 320,00</span>
              </div>
              <div className="titleProduto">
                <span>Faux Suede Mini Skirt</span>
              </div>
              <div className="subtitleProduto">
                <span>
                  A satin mini skirt featuring an allover floral print, ruched
                  side with self-tie closure, concealed back zipper, and a
                  flounce hem.
                </span>
              </div>
              <button className="btnProduto">Adicionar</button>
            </Link>

            <Link href="/comma" className="VitrineLink">
              <Image
                src="https://via.placeholder.com/308x381"
                alt="Comma"
                width={308}
                height={381}
              />
              <div className="variacao">
                <div className="variacaoAzul"></div>
                <div className="variacaoRoxo"></div>
                <div className="variacaoVermelho"></div>
                <div className="variacaoAmarelo"></div>
              </div>
              <div className="preco">
                <span>R$ 500,00</span>
              </div>
              <div className="titleProduto">
                <span>Faux Suede Mini Skirt</span>
              </div>
              <div className="subtitleProduto">
                <span>
                  A faux suede mini skirt featuring exposed button-front
                  closures and panel seam construction.
                </span>
              </div>
              <button className="btnProduto">Adicionar</button>
            </Link>

            <Link href="/comma" className="VitrineLink">
              <Image
                src="https://via.placeholder.com/308x381"
                alt="Comma"
                width={308}
                height={381}
              />
              <div className="variacao">
                <div className="variacaoPreto"></div>
                <div className="variacaoVermelho"></div>
                <div className="variacaoCinza"></div>
                <div className="variacaoBranco"></div>
              </div>
              <div className="preco">
                <span>R$ 320,00</span>
              </div>
              <div className="titleProduto">
                <span>Faux Suede Mini Skirt</span>
              </div>
              <div className="subtitleProduto">
                <span>
                  A satin mini skirt featuring an allover floral print, ruched
                  side with self-tie closure, concealed back zipper, and a
                  flounce hem.
                </span>
              </div>
              <button className="btnProduto">Adicionar</button>
            </Link>

            <Link href="/comma" className="VitrineLink">
              <Image
                src="https://via.placeholder.com/308x381"
                alt="Comma"
                width={308}
                height={381}
              />
              <div className="variacao">
                <div className="variacaoAzul"></div>
                <div className="variacaoRoxo"></div>
                <div className="variacaoVermelho"></div>
                <div className="variacaoAmarelo"></div>
              </div>
              <div className="preco">
                <span>R$ 500,00</span>
              </div>
              <div className="titleProduto">
                <span>Faux Suede Mini Skirt</span>
              </div>
              <div className="subtitleProduto">
                <span>
                  A faux suede mini skirt featuring exposed button-front
                  closures and panel seam construction.
                </span>
              </div>
              <button className="btnProduto">Adicionar</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
