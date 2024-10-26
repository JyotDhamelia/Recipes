import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen flex flex-col bg-green-50 text-gray-800",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow flex flex-col justify-center px-4 py-6 sm:px-8 md:py-12 lg:px-16 max-w-7xl mx-auto">
              {children}
            </main>
            <footer className="w-full bg-green-700 text-white py-4 mt-auto">
              <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
                <p className="text-sm text-center sm:text-left">
                  &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
                <Link
                  isExternal
                  className="flex items-center gap-2 mt-2 sm:mt-0 text-green-200 hover:text-white transition-colors"
                  href="https://github.com/ninadvyas/All-Recipe"
                  title="GitHub Repository"
                >
                  <span>Made By</span>
                  <p className="font-semibold">Ninad Vyas</p>
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
