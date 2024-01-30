import type { Metadata } from "next";
import { getServerSession } from "next-auth";

import SessionProvider from "./components/SessionProvider/SessionProvider";
import NavMenu from "./components/NavMenu/NavMenu";

import { Poppins as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <SessionProvider session={session}>
          <main className={cn("flex items-start justify-start bg-slate-800")}>
            <NavMenu />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
