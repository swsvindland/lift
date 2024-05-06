import { type FC } from "react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import { AcmeLogo } from "~/app/_components/acmeLogo";

export const Header: FC = () => {
  return (
    <Navbar className="border-b border-zinc-50">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
    </Navbar>
  );
};
