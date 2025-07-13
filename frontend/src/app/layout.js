import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TrialBridge - Clinical Trials Delivered to Your Door",
  description:
    "Earn. Contribute. Advance Science. Join clinical trials from home with fair compensation, HIPAA compliance, and licensed healthcare professionals.",
  keywords: [
    "clinical trials",
    "medical research",
    "healthcare",
    "compensation",
    "HIPAA compliant",
    "medical trials",
  ],
  authors: [{ name: "TrialBridge" }],
  creator: "TrialBridge",
  publisher: "TrialBridge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trialbridge.com",
    siteName: "TrialBridge",
    title: "TrialBridge - Clinical Trials Delivered to Your Door",
    description:
      "Earn. Contribute. Advance Science. Join clinical trials from home with fair compensation, HIPAA compliance, and licensed healthcare professionals.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TrialBridge - Clinical trials delivered to your door",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrialBridge - Clinical Trials Delivered to Your Door",
    description:
      "Earn. Contribute. Advance Science. Join clinical trials from home with fair compensation, HIPAA compliance, and licensed healthcare professionals.",
    images: ["/opengraph-image"],
    creator: "@trialbridge",
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
