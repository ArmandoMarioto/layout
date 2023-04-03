import { useBreakpointValue } from "@chakra-ui/react";
import { BsBag, BsSearch } from "react-icons/bs";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function HeaderPrincipal() {
  const isDesktop = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    { ssr: true }
  );

  return (
    <div className="HeaderPrincipal">
      {!isDesktop ? (
        <>
          <button className="menu-icon">
            <span className="menu-icon__line"></span>
            <span className="menu-icon__line"></span>
            <span className="menu-icon__line"></span>
          </button>
          <Logo />
          <BsSearch className="IconBusca" />
          <BsBag className="IconBusca" />
        </>
      ) : (
        <>
          <Logo />
          <SearchBox />
          <Profile />
        </>
      )}
    </div>
  );
}
