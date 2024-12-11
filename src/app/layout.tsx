import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'イケメン占いサイト',
  description: '運命を導くイケメン占い',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header>
          <nav>
            <Link href="/">ホーム</Link> | <Link href="/fortune">占い</Link> | <Link href="/contact">お問い合わせ</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 イケメン占いサイト. All rights reserved.</footer>
      </body>
    </html>
  );
}
