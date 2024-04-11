import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "Kadaspace",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
