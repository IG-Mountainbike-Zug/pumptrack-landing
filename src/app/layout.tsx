import "./globals.css";
import {type ReactNode} from "react";

export const metadata = {
    title: "Pumptrack",
    description: "Pumptrack by IG Mountainbike Zug",
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="de">
        <body>
        <main>{children}</main>
        </body>
        </html>
    );
}
