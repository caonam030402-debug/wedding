import type { Metadata, Viewport } from "next";
import {
  Cormorant_Unicase,
  Pinyon_Script,
  Philosopher as PhilosopherSans,
} from "next/font/google";
import { LINK_BACKGROUND, WEDDING_INFO } from "@/constants";
import "react-image-gallery/styles/css/image-gallery.css";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const cormorantUnicase = Cormorant_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-unicase",
});

export const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon-script",
});

export const Philosopher = PhilosopherSans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher-sans",
});

export const viewport: Viewport = {
  themeColor: "#1a4d2e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${WEDDING_INFO.groom.shortName} & ${WEDDING_INFO.bride.shortName} Wedding`,
  description: `Lời mời trân trọng từ ${WEDDING_INFO.groom.shortName} & ${WEDDING_INFO.bride.shortName}`,
  openGraph: {
    title: `${WEDDING_INFO.groom.shortName} & ${WEDDING_INFO.bride.shortName} Wedding`,
    description:
      "Trân trọng kính mời bạn đến dự buổi tiệc chung vui cùng gia đình chúng tôi!",
    images: [
      {
        url: "https://wedding-qhkh.vercel.app/images/hero_banner.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
      },
    ],
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💍</text></svg>",
      },
    ],
    apple: {
      url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💍</text></svg>",
      sizes: "180x180",
      type: "image/svg+xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantUnicase.variable} ${pinyonScript.variable} ${Philosopher.variable}`}
    >
      <head>
        <link
          rel="preload"
          href="/images/hero_banner.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className="antialiased font-philosopher max-w-[430px] mx-auto shadow-xl text-primary">
        <div
          style={{
            backgroundImage: `url(${LINK_BACKGROUND})`,
            backgroundSize: "auto",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            minHeight: "100vh",
          }}
        >
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
