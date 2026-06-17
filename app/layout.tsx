
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-black text-slate-100 antialiased selection:bg-yellow-400/40 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
