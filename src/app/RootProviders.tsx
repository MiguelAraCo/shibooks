"use client";

import type { PropsWithChildren } from "react";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export type ProvidersProps = PropsWithChildren<{
  themeProps?: ThemeProviderProps;
}>;

export const RootProviders: React.FC<ProvidersProps> = ({
  children,
  themeProps,
}) => {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
};
