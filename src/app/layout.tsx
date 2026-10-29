import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://feetzo.com"),
  title: "Feetzo — Men's Fashion & Sneakers in Lagankhel, Lalitpur",
  description:
    "Feetzo in Lagankhel, Lalitpur is a complete men's store — sneakers (Jordan, Travis Scott, Puma, New Balance), leather & down jackets, pants, hoodies and more. Delivery across Nepal, COD, eSewa and Khalti.",
  keywords: [
    "men's fashion Nepal",
    "sneakers Nepal",
    "Jordan 4 Nepal",
    "Travis Scott shoes",
    "Puma Nepal",
    "New Balance Nepal",
    "leather jacket Nepal",
    "down jacket",
    "Lagankhel clothing store",
    "men's pants Lalitpur",
    "Feetzo",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Feetzo — Men's Fashion & Sneakers in Lagankhel",
    description:
      "Sneakers, jackets, pants and more for men. Jordan, Travis Scott, Puma, New Balance and trusted brands in Lagankhel, Lalitpur.",
    type: "website",
    locale: "en_NP",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
