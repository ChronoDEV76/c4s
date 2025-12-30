// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chrono4Solutions",
  description: "Eén aanspreekpunt voor fysieke én digitale veiligheid.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="flex min-h-screen flex-col bg-black text-white antialiased">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
