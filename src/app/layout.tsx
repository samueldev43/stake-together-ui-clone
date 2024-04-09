import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import './styles/globals.scss'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Montserrat', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Stake Together - Investimentos em Staking",
  description: "Invista em Produtos de como Ethereum, Eigen Layer, Solana, Celestia, Polkadot e outros..",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    
    <html lang="pt">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}