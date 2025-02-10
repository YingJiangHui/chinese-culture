import type {Metadata} from "next";
import {Geist} from "next/font/google";
import "./globals.css";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Chinese Culture",
    description: "Chinese Culture",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} antialiased min-h-screen flex flex-col `}
        >
        <main className={`flex-1 flex flex-col`}>
            {children}
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center min-h-36">
            反对封建迷信
        </footer>
        </body>
        </html>
    );
}
