import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { PropsWithChildren } from "react";
import React from "react";
import { RootProviders } from "@/app/RootProviders";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import Logo from "@/../public/icon.svg";
import Link from "next/link";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shibooks",
  description: "Your private ebook collection",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="h-full">
      <body className={classNames(inter.className, "h-full")}>
        <RootProviders>
          <Navbar>
            <NavbarBrand>
              <Link
                href={"/"}
                className="h-[var(--navbar-height)] p-2 flex flex-column items-center gap-2 text-xl"
              >
                <div className="h-full [&>*]:h-full">
                  <Logo />
                </div>
                <span className="text-xl font-bold">ShiBooks</span>
              </Link>
            </NavbarBrand>
          </Navbar>
          {/* FIXME: Use a variable instead of pb-16*/}
          <div className="h-full pb-16">{children}</div>
        </RootProviders>
      </body>
    </html>
  );
};

export default RootLayout;
