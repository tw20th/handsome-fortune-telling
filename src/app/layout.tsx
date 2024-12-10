import './globals.css';
import Link from 'next/link'; // Link を正しくインポート

export const metadata = {
    title: 'イケメン占いサイト',
    description: '運命を導くイケメン占い',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body>
                <header style={{ padding: '10px', background: '#eee' }}>
                    <nav
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                            fontSize: '1.2rem',
                        }}
                    >
                        <Link href="/" legacyBehavior>
                            <a style={{ textDecoration: 'none', color: '#333' }}>ホーム</a>
                        </Link>
                        <Link href="/fortune" legacyBehavior>
                            <a style={{ textDecoration: 'none', color: '#333' }}>占い</a>
                        </Link>
                        <Link href="/about" legacyBehavior>
                            <a style={{ textDecoration: 'none', color: '#333' }}>このサイトについて</a>
                        </Link>
                        <Link href="/contact" legacyBehavior>
                            <a style={{ textDecoration: 'none', color: '#333' }}>お問い合わせ</a>
                        </Link>
                    </nav>
                </header>
                <main style={{ padding: '20px' }}>{children}</main>
            </body>
        </html>
    );
}
