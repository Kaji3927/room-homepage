import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "../styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Room Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
