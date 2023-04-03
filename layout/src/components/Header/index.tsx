import { useBreakpointValue } from "@chakra-ui/react";
import { HeaderPrincipal } from "./HeaderPrincipal";
import HeaderSecundario from "./HeaderSecundario";
import { Notification } from "./Notification";
export function Header() {
  const isWideVersion = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    { ssr: true }
  );
  return (
    <>
      <Notification />
      <div className="header menu">
        <HeaderPrincipal />
        {isWideVersion && <HeaderSecundario />}
      </div>
    </>
  );
}
