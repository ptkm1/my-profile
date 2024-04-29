import type { Metadata } from "next";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme.provider";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--opensans" });
const poppins = Poppins({
  weight: "600",
  variable: "--poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrick - Portifólio",
  description: "Portifólio de projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} ${openSans.className} ${poppins.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
