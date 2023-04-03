import { useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

export function Tipbar() {
  const isDesktop = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    { ssr: true }
  );
  return (
    <div className="Tipbar">
      <div className="tipbarDiv">
        <Image
          src="https://i.imgur.com/o6jS7Gc.png"
          alt="My image"
          width={32}
          height={32}
        />
        <div>
          <h2>Produtos importados</h2>
          <span>Produto de Alta Qualidade</span>
        </div>
      </div>
      {isDesktop && (
        <>
          <div className="tipbarDiv">
            <Image
              src="https://i.imgur.com/QTFwPmU.png"
              alt="My image"
              width={32}
              height={32}
            />
            <div>
              <h2>Estoque no Brazil</h2>
              <span>Produtos mais perto de você!</span>
            </div>
          </div>

          <div className="tipbarDiv">
            <Image
              src="https://i.imgur.com/5GTW9ii.png"
              alt="My image"
              width={32}
              height={32}
            />
            <div>
              <h2>Trocas Garantidas</h2>
              <span>Trocas em até 48 horas, vejas as regras </span>
            </div>
          </div>

          <div className="tipbarDiv">
            <Image
              src="https://i.imgur.com/sxrqa57.png"
              alt="My image"
              width={32}
              height={32}
            />
            <div>
              <h2>Ganhe 5% off</h2>
              <span>Pagando à vista no Cartão</span>
            </div>
          </div>

          <div className="tipbarDiv">
            <Image
              src="https://i.imgur.com/pyNUUin.png"
              alt="My image"
              width={32}
              height={32}
            />
            <div>
              <h2>Frete Grátis</h2>
              <span>Em compras acima de R$ 499,00</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
