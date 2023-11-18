import "../styles/global.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moskot",
  description: "Team Managment Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
