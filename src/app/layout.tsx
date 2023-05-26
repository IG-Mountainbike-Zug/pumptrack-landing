import "./globals.css";
import {type ReactNode} from "react";
import {Analytics} from "@vercel/analytics/react";
import {env} from "~/env.mjs";

export const metadata = {
    title: `Pumptrack ${env.SITE_CITY}`,
    description: `Pumptrack ${env.SITE_CITY} by IG Mountainbike Zug`,
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="de">
        <body>
        <main>{children}</main>
        <Analytics/>
        </body>
        </html>
    );
}
