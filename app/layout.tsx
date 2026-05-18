import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { person } from "@/lib/data";

export const metadata: Metadata = {
  title: `${person.shortName} — Senior Manager, Digital Banking`,
  description: `${person.summary}`,
  keywords: [
    "Product Manager",
    "Senior Manager",
    "Digital Banking",
    "Digital Transformation",
    "Saudi Arabia",
    "Retail Banking",
    "SAIB",
    "Alinma Bank",
  ],
  authors: [{ name: person.shortName }],
  openGraph: {
    type: "website",
    title: `${person.shortName} — Senior Manager, Digital Banking`,
    description: person.summary,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.shortName} — Senior Manager, Digital Banking`,
    description: person.summary,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
