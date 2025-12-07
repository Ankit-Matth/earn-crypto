import './globals.css'

export const metadata = {
  metadataBase: new URL('https://earncrypto.com'),
  title: {
    default: 'Earn Crypto Like a Pro - Complete Cryptocurrency Earning Guide 2025',
    template: '%s | Earn Crypto Like a Pro'
  },
  description: 'Master cryptocurrency earning through spot trading, futures, staking, airdrops, yield farming, and mining. Learn proven strategies to generate passive income in crypto with our comprehensive guide.',
  keywords: [
    // Core Earning Keywords
    'earn crypto', 'earn cryptocurrency', 'earn bitcoin', 'earn ethereum', 'make money crypto',
    'cryptocurrency income', 'crypto profit', 'crypto earnings', 'blockchain income',
    
    // Trading Keywords
    'cryptocurrency trading', 'crypto trading', 'bitcoin trading', 'ethereum trading',
    'spot trading', 'futures trading', 'margin trading', 'leverage trading',
    'day trading crypto', 'swing trading', 'scalping crypto', 'crypto trading strategies',
    'technical analysis', 'fundamental analysis', 'trading indicators', 'crypto charts',
    
    // Staking & Passive Income
    'crypto staking', 'staking rewards', 'passive income crypto', 'ethereum staking',
    'proof of stake', 'staking pools', 'validator nodes', 'staking APY',
    'cardano staking', 'polkadot staking', 'solana staking', 'cosmos staking',
    
    // DeFi Keywords
    'DeFi', 'decentralized finance', 'yield farming', 'liquidity mining',
    'liquidity pools', 'DeFi protocols', 'smart contracts', 'DeFi staking',
    'uniswap', 'pancakeswap', 'curve finance', 'aave', 'compound',
    'impermanent loss', 'LP tokens', 'DeFi yield', 'DeFi farming',
    
    // Airdrops & Free Crypto
    'crypto airdrops', 'free crypto', 'airdrop hunting', 'token airdrops',
    'retroactive airdrops', 'testnet airdrops', 'airdrop farming', 'free tokens',
    'crypto giveaways', 'bounty programs', 'crypto rewards',
    
    // Mining Keywords
    'crypto mining', 'bitcoin mining', 'ethereum mining', 'mining profitability',
    'GPU mining', 'ASIC mining', 'mining pools', 'cloud mining',
    'mining hardware', 'mining software', 'proof of work',
    
    // Investment & Strategy
    'crypto investment', 'cryptocurrency portfolio', 'crypto strategy',
    'long term investment', 'short term trading', 'HODL', 'dollar cost averaging',
    'DCA strategy', 'crypto diversification', 'risk management',
    
    // NFT & Gaming
    'NFT trading', 'NFT flipping', 'play to earn', 'P2E games',
    'blockchain games', 'crypto gaming', 'metaverse', 'GameFi',
    'NFT marketplace', 'opensea', 'digital collectibles',
    
    // Lending & Borrowing
    'crypto lending', 'crypto borrowing', 'interest earning', 'lending platforms',
    'collateral loans', 'flash loans', 'crypto interest rates',
    
    // Additional Methods
    'copy trading', 'social trading', 'trading bots', 'automated trading',
    'crypto faucets', 'micro earnings', 'referral programs', 'affiliate marketing',
    
    // Educational Keywords
    'crypto tutorial', 'cryptocurrency guide', 'crypto for beginners',
    'how to earn crypto', 'crypto education', 'blockchain tutorial',
    'crypto course', 'learn crypto', 'crypto tips', 'crypto advice',
    
    // Platform Keywords
    'binance', 'coinbase', 'kraken', 'crypto.com', 'bybit',
    'metamask', 'trust wallet', 'ledger', 'hardware wallet',
    
    // Trending Keywords 2025
    'crypto 2025', 'best crypto 2025', 'crypto trends', 'altcoins',
    'meme coins', 'layer 2', 'ethereum layer 2', 'arbitrum', 'optimism',
    'polygon', 'avalanche', 'BNB chain', 'web3', 'blockchain technology'
  ],
  authors: [{ name: 'Crypto Earning Hub' }],
  creator: 'Crypto Earning Hub',
  publisher: 'Crypto Earning Hub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://earncrypto.com',
    siteName: 'Earn Crypto Like a Pro',
    title: 'Earn Crypto Like a Pro - Complete Cryptocurrency Earning Guide',
    description: 'Discover multiple proven strategies to generate income in crypto. From beginner-friendly staking to advanced trading techniques.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Earn Cryptocurrency Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earn Crypto Like a Pro - Complete Guide 2025',
    description: 'Master cryptocurrency earning through trading, staking, airdrops, and more. Start earning today!',
    creator: '@earncrypto',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://earncrypto.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'finance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect & DNS Prefetch */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Theme & Mobile App */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Earn Crypto" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        
        {/* Content Type & Charset */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Referrer Policy */}
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Disable Auto-Detection */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
