import { useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export function TipbarMarca() {
  const isDesktop = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    { ssr: true }
  );
  return (
    <div className="TipbarMarca">
      {isDesktop ? (
        <>
          <Link href="/comma" className="tipbarDivMarca">
            <Image
              src="https://i.imgur.com/Qoc0YF7.png"
              alt="Comma"
              width={310}
              height={64}
            />
          </Link>
        </>
      ) : (
        <>
          <Link href="/forever" className="tipbarDivMarca">
            <Image
              src="https://i.imgur.com/JOTNQgl.png"
              alt="Forever 21"
              width={310}
              height={64}
            />
          </Link>
        </>
      )}

      {isDesktop && (
        <>
          <Link href="/melissa" className="tipbarDivMarca">
            <Image
              src="https://i.imgur.com/cHLLxR4.png"
              alt="melissa"
              width={310}
              height={64}
            />
          </Link>

          <Link href="/forever" className="tipbarDivMarca">
            <Image
              src="https://i.imgur.com/JOTNQgl.png"
              alt="Forever 21"
              width={310}
              height={64}
            />
          </Link>

          <Link href="/zara" className="tipbarDivMarca">
            <Image
              src="https://i.imgur.com/PN0nOAY.png"
              alt="Zara"
              width={310}
              height={64}
            />
          </Link>

          <Link href="/anntaylor" className="tipbarDivMarca">
            <Image
              src="https://i.imgur.com/qZ1WvYA.png"
              alt="Ann Taylor"
              width={310}
              height={64}
            />
          </Link>
        </>
      )}
    </div>
  );
}
