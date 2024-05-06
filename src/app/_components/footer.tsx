"use client";
import { type FC } from "react";
import { Navbar } from "@nextui-org/navbar";
import { Tabs, Tab } from "@nextui-org/tabs";
import { usePathname } from "next/navigation";

export const Footer: FC = () => {
  const pathname = usePathname();

  return (
    <Navbar className="sticky bottom-0 z-50 border-t border-zinc-50">
      <Tabs fullWidth aria-label="Bottom Navigation" selectedKey={pathname}>
        <Tab key="/" title="Home" href="/" />
        <Tab key="/insights" title="Insights" href="/insights" />
        <Tab key="/settings" title="Settings" href="/settings" />
      </Tabs>
    </Navbar>
  );
};
