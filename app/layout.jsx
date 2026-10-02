import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getOrganizationSchema, getWebsiteSchema } from "../lib/schema";
import { COMPANY_DATA } from "../data/companyData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(COMPANY_DATA.url),
  title: {
    default: "Affiliate Marketing & Performance Growth | Leksuss Network",
    template: "%s | Leksuss Network",
  },
  description:
    "Grow with affiliate program management, paid traffic strategy, conversion optimization, cookieless tracking, and ad creative production from Leksuss Network.",
  applicationName: "Leksuss Network",
  authors: [{ name: COMPANY_DATA.name, url: COMPANY_DATA.url }],
  creator: COMPANY_DATA.name,
  publisher: COMPANY_DATA.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY_DATA.url,
    title: "Affiliate Marketing & Performance Growth | Leksuss Network",
    description:
      "Affiliate program management, paid media, conversion optimization, S2S tracking, and creative services for brands and publishers.",
    siteName: "Leksuss Network",
    images: [
      {
        url: `${COMPANY_DATA.url}/services/affiliate.jpg`,
        width: 1200,
        height: 630,
        alt: "Leksuss Network affiliate marketing and performance growth services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Marketing & Performance Growth | Leksuss Network",
    description:
      "Affiliate program management, paid media, conversion optimization, S2S tracking, and creative services for brands and publishers.",
    images: [`${COMPANY_DATA.url}/services/affiliate.jpg`],
  },
  alternates: {
    canonical: COMPANY_DATA.url,
  },
};

export default function RootLayout({ children }) {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-[#05070c] text-slate-200 antialiased font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
