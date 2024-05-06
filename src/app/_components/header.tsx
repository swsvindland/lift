import { type FC } from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { AcmeLogo } from "~/app/_components/acmeLogo";
import { UserButton } from "@clerk/nextjs";

export const Header: FC = () => {
  return (
    <Navbar className="border-b border-zinc-50">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <UserButton />
      </NavbarContent>
    </Navbar>
  );
};
