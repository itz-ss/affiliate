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
    default: `${COMPANY_DATA.name} | ${COMPANY_DATA.tagline}`,
    template: `%s | ${COMPANY_DATA.name}`,
  },
  description: COMPANY_DATA.description,
  keywords: [
    "Leksuss Network",
    "Affiliate Marketing Network",
    "Performance Marketing Engine",
    "Paid Traffic Strategy",
    "Conversion Optimization",
    "S2S Tracking",
    "Cookieless Attribution",
    "Dating Affiliate Programs",
    "iGaming Affiliate Offers",
    "Financial Lead Gen",
    "Nutra COD Offers",
  ],
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
    title: COMPANY_DATA.name,
    description: COMPANY_DATA.description,
    siteName: COMPANY_DATA.name,
    images: [
      {
        url: `${COMPANY_DATA.url}/services/affiliate.jpg`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_DATA.name} Performance Affiliate Engine`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_DATA.name,
    description: COMPANY_DATA.description,
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
