
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body className="min-h-screen bg-[#d6d6d8] text-[#1b1b1b] antialiased selection:bg-[#f2cf1d]/50 selection:text-black">
        {children}
      </body>
    </html>
  );
}
