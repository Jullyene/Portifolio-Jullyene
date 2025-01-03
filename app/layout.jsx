
import "./globals.css";
import Header from "@/public/components/Mobile/header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
          <Header/>
        {children}
      </body>
    </html>
  );
}
