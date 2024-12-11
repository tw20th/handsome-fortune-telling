import "./globals.css";

export const metadata = {
  title: "イケメン占いサイト",
  description: "女性向けの優雅な占い体験をお届けします。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header style={{ padding: "20px", background: "#ffe4e1", textAlign: "center" }}>
          <h1 style={{ margin: 0, fontFamily: "'Georgia', serif", color: "#d63384" }}>
            イケメン占いサイト
          </h1>
        </header>
        <main style={{ padding: "20px" }}>{children}</main>
        <footer style={{ padding: "20px", background: "#ffe4e1", textAlign: "center" }}>
          <p>© 2024 イケメン占いサイト. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
