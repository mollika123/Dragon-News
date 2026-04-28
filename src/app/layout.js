import dns from "node:dns"
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { poppins } from "./fonts";






export const metadata = {
  title: "Dragon News",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.className}min-h-full flex flex-col`}>
       
        {children}</body>
    </html>
  );
}
