import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Noto_Sans_JP } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta'
});
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-jp'
});

export const metadata: Metadata = {
  title: 'イキイキレコード | 学びの天気図',
  description: '先生と生徒で育てる、学びの天気図。1日1分の観測が、教室の空を変える。AIが要約し、君の誇りになる。',
  keywords: '教育, 学習記録, AI分析, 天気図, 学校, デジタル',
  openGraph: {
    title: 'イキイキレコード | 学びの天気図',
    description: '先生と生徒で育てる、学びの天気図',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'イキイキレコード - 学びの天気図'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${plusJakarta.variable} ${notoSansJP.variable}`}>
      <body className={`${inter.className} font-noto-jp`}>{children}</body>
    </html>
  );
}