import "./globals.css";
import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import RootProviders from "./providers/root";
import { organizationSchema } from "@/lib/schema";
const DenimVF = localFont({
  src: "./fonts/DenimVF.woff",
  variable: "--font-denim",
});

export const metadata: Metadata = {
  title: {
    default: "Reviver Studio - Design & Motion Agency | Brand Strategy & Digital Products",
    template: "%s | Reviver Studio"
  },
  description: "Reviver Studio is a premium design and motion agency specializing in brand strategy, identity design, digital products, and motion graphics. We help startups to enterprises launch impactful brands.",
  keywords: [
    "design agency",
    "brand strategy",
    "logo design",
    "motion graphics",
    "digital products",
    "UI/UX design",
    "creative studio",
    "branding agency",
    "Delhi design",
    "India creative",
    "web design",
    "identity design"
  ],
  authors: [{ name: "Reviver Studio Team", url: "https://reviverstudio.com" }],
  creator: "Reviver Studio",
  publisher: "Reviver Studio",
  metadataBase: new URL('https://reviverstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Reviver Studio - Design & Motion Agency | Brand Strategy & Digital Products",
    description: "Premium design and motion agency specializing in brand strategy, identity design, digital products, and motion graphics.",
    url: 'https://reviverstudio.com',
    siteName: 'Reviver Studio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Reviver Studio - Design & Motion Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reviver Studio - Design & Motion Agency",
    description: "Premium design and motion agency specializing in brand strategy, identity design, digital products, and motion graphics.",
    images: ['/og-image.jpg'],
    creator: '@reviverstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-search-console-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <ReactLenis root>
        <RootProviders>
          <body
            className={`${DenimVF.variable} overflow-x-clip antialiased [text-rendering:optimizeLegibility] selection:bg-flare-red selection:text-off-white`}
          >
            <NavBar />
            {children}
          </body>
        </RootProviders>
      </ReactLenis>
    </html>
  );
}
