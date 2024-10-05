import "./globals.css";
import NavBar from "./component/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-black via-blue-500 to-black">
         <NavBar/>
        {children}
      </body>
    </html>
  );
}
