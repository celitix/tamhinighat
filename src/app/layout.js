import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tamhini Ghat | Khandala Ghat | Ghats Near Pune | Tamhini",
  description: "Tamhini Ghat is one of the most beautiful ghats near Pune. Well-known Khandala ghat the Tamhini is attractive. Know about natural scenery .....",
   icons: {
    icon: [
      { url: '/Tamhini-150x150.png', sizes: '32x32', type: 'image/png' },
      { url: '/Tamhini-300x300.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/Tamhini-300x300.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
