import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "N2D Blog",
    description: "Blog cá nhân của Sadboi Ngọc Đức",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const footer = (
        <footer>
            <div className="border-t border-slate-400 mt-12 pt-6 text-center text-slate-400">
                <h3 className="tracking-wide font-semibold text-slate-700 dark:text-slate-300">Designed by N2D</h3>
            </div>
        </footer>
    );
    return (
        <html lang="en">
            <body
                className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="max-w-3xl mx-auto py-10 px-4">
                        <header className="mb-10">
                            <div className="flex items-center justify-between">
                                <Link href="/">
                                    <Image src='/images/LogoD.png' width={40} height={40} alt="logo"/>
                                </Link>
                                <nav className=" text-base font-medium space-x-6">
                                    <Link className="hover:underline" href="/">Home</Link>
                                    <Link className="hover:underline" href="/about">About</Link>
                                </nav>
                                <ModeToggle />
                            </div>
                        </header>
                        <main>{children}</main>
                        {footer}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
