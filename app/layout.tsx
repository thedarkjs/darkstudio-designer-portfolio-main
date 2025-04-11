import { aboreto } from '@/app/fonts';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'My First App',
    description: 'Created by DarkKS',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${aboreto.variable}`} data-oid="-rd2-41">
            <body className="" data-oid="rjppni2">
                {children}
            </body>
        </html>
    );
}
