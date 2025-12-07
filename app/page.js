'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900"></div>
          <FloatingElements />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-cyan-400">
            Earn Crypto Like a Pro in 2025
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Master the art of cryptocurrency earning through spot trading, futures, staking, airdrops, yield farming, and mining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#methods" className="w-full sm:w-auto bg-cyan-500 text-white px-8 py-4 rounded-full font-bold hover:bg-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Now
            </a>
            <a href="#blog" className="w-full sm:w-auto bg-purple-500/20 backdrop-blur-sm border-2 border-purple-400 px-8 py-4 rounded-full font-bold hover:bg-purple-500/30 transition-all duration-300">
              Read Guide
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 bg-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">$2T+</div>
              <div className="text-gray-300 text-sm">Total Market Cap</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform">10M+</div>
              <div className="text-gray-300 text-sm">Active Traders</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-300 text-sm">Market Open</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform">100+</div>
              <div className="text-gray-300 text-sm">Earning Methods</div>
            </div>
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-cyan-400">
            6 Proven Ways to Earn Cryptocurrency
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Discover multiple proven strategies to generate income in the crypto space.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cyan-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl border border-cyan-400">
              <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80" alt="Spot trading" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-cyan-300" />
              <h3 className="text-2xl font-bold mb-3 text-cyan-100">Spot Trading</h3>
              <p className="text-gray-200 mb-4">Buy low, sell high. Master the basics of cryptocurrency trading.</p>
              <a href="https://www.binance.com/en/trade" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-all shadow-lg">
                Start Trading →
              </a>
            </div>

            <div className="bg-orange-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl border border-orange-400">
              <img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&q=80" alt="Futures trading" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-orange-300" />
              <h3 className="text-2xl font-bold mb-3 text-orange-100">Futures Trading</h3>
              <p className="text-gray-200 mb-4">Leverage your positions for higher returns.</p>
              <a href="https://www.binance.com/en/futures" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-400 transition-all shadow-lg">
                Trade Futures →
              </a>
            </div>

            <div className="bg-emerald-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl border border-emerald-400">
              <img src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&q=80" alt="Airdrops" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-emerald-300" />
              <h3 className="text-2xl font-bold mb-3 text-emerald-100">Airdrops</h3>
              <p className="text-gray-200 mb-4">Get free tokens by participating in crypto projects.</p>
              <a href="https://coinmarketcap.com/airdrop/" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-400 transition-all shadow-lg">
                Find Airdrops →
              </a>
            </div>

            <div className="bg-purple-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl border border-purple-400">
              <img src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=600&q=80" alt="Staking" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-purple-300" />
              <h3 className="text-2xl font-bold mb-3 text-purple-100">Staking</h3>
              <p className="text-gray-200 mb-4">Earn passive income by staking your crypto assets.</p>
              <a href="https://www.coinbase.com/earn" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-400 transition-all shadow-lg">
                Start Staking →
              </a>
            </div>

            <div className="bg-yellow-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl border border-yellow-400">
              <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&q=80" alt="Yield farming" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-yellow-300" />
              <h3 className="text-2xl font-bold mb-3 text-yellow-100">Yield Farming</h3>
              <p className="text-gray-200 mb-4">Maximize returns by providing liquidity to DeFi protocols.</p>
              <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-all shadow-lg">
                Farm Now →
              </a>
            </div>

            <div className="bg-slate-600 p-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl border border-slate-400">
              <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&q=80" alt="Mining" className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-slate-300" />
              <h3 className="text-2xl font-bold mb-3 text-slate-100">Mining</h3>
              <p className="text-gray-200 mb-4">Earn crypto by validating transactions.</p>
              <a href="https://www.nicehash.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-400 transition-all shadow-lg">
                Start Mining →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-purple-400">Why Learn With Us?</h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to succeed in the crypto earning space
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Comprehensive Guides</h3>
              <p className="text-gray-300 text-sm">Step-by-step tutorials for all experience levels</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-emerald-300">Real-Time Updates</h3>
              <p className="text-gray-300 text-sm">Stay ahead with latest market trends and opportunities</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">Active Community</h3>
              <p className="text-gray-300 text-sm">Join thousands of successful crypto earners</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-300">Proven Strategies</h3>
              <p className="text-gray-300 text-sm">Battle-tested methods that actually work</p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-purple-400">Complete Guide to Earning Cryptocurrency</h2>
          <article className="space-y-12">
            <div className="bg-cyan-600/20 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400 hover:border-cyan-300 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 text-cyan-300">Understanding Crypto Trading Basics</h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Cryptocurrency trading has become one of the most popular ways to earn money in the digital age. The crypto market operates 24/7, offering endless opportunities.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Spot trading involves buying cryptocurrencies at current market prices and selling them when prices increase. Start with major cryptocurrencies like Bitcoin and Ethereum.
              </p>
            </div>

            <div className="bg-emerald-600/20 backdrop-blur-sm p-8 rounded-2xl border border-emerald-400 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 text-emerald-300">Passive Income Through Staking</h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Staking is one of the safest ways to earn passive income in crypto. By locking your tokens, you help validate transactions while earning rewards.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Popular staking coins include Ethereum, Cardano, Polkadot, and Solana. Annual yields typically range from 5% to 15%.
              </p>
            </div>

            <div className="bg-purple-600/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-400 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Airdrop Hunting Strategy</h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Airdrops are free token distributions by crypto projects. Many hunters have earned thousands by participating in testnet activities.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Notable past airdrops include Uniswap, Arbitrum, and Optimism. Stay informed about upcoming projects in DeFi and Layer 2 ecosystems.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 sm:px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-400">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <details className="bg-cyan-600/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-400 hover:border-cyan-300 hover:shadow-xl transition-all group">
              <summary className="text-xl font-bold text-cyan-300 cursor-pointer list-none flex items-center justify-between">
                What is the best way to earn cryptocurrency?
                <span className="text-2xl text-cyan-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                The best way depends on your risk tolerance. For beginners, staking and airdrops offer low-risk passive income.
              </p>
            </details>

            <details className="bg-purple-600/20 backdrop-blur-sm p-6 rounded-xl border border-purple-400 hover:border-purple-300 hover:shadow-xl transition-all group">
              <summary className="text-xl font-bold text-purple-300 cursor-pointer list-none flex items-center justify-between">
                How much money do I need to start?
                <span className="text-2xl text-purple-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                You can start with as little as $0 through airdrops. For staking, most platforms require $100-$500.
              </p>
            </details>

            <details className="bg-emerald-600/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-400 hover:border-emerald-300 hover:shadow-xl transition-all group">
              <summary className="text-xl font-bold text-emerald-300 cursor-pointer list-none flex items-center justify-between">
                Is crypto staking safe?
                <span className="text-2xl text-emerald-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Crypto staking is generally safe when using reputable exchanges. Risks include smart contract vulnerabilities and market volatility.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-cyan-400">Success Stories</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Join thousands of crypto earners who have transformed their financial future
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-600/20 backdrop-blur-sm p-6 rounded-xl border border-yellow-400 hover:border-yellow-300 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                  M
                </div>
                <div className="ml-3">
                  <div className="font-bold text-yellow-300">Michael Chen</div>
                  <div className="text-sm text-gray-300">Staking Enthusiast</div>
                </div>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">
                "Started with just $500 in staking. Now earning $200+ monthly passive income. The guide helped me understand everything!"
              </p>
              <div className="mt-4 text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-emerald-600/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-400 hover:border-emerald-300 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                  S
                </div>
                <div className="ml-3">
                  <div className="font-bold text-emerald-300">Sarah Johnson</div>
                  <div className="text-sm text-gray-300">Airdrop Hunter</div>
                </div>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">
                "Earned over $15K from airdrops in 2024! The strategies here are gold. Best decision I made was learning airdrop hunting."
              </p>
              <div className="mt-4 text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="bg-blue-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                  D
                </div>
                <div className="ml-3">
                  <div className="font-bold text-blue-300">David Martinez</div>
                  <div className="text-sm text-gray-300">DeFi Farmer</div>
                </div>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">
                "Yield farming changed my life. From zero to $50K portfolio in 18 months. This guide made complex DeFi simple to understand."
              </p>
              <div className="mt-4 text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 bg-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Earning Crypto?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our community and get access to exclusive guides, tools, and strategies to maximize your crypto earnings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#methods" className="w-full sm:w-auto bg-cyan-500 text-white px-8 py-4 rounded-full font-bold hover:bg-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg">
              Start Learning Now
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-purple-500/30 backdrop-blur-sm border-2 border-white/50 px-8 py-4 rounded-full font-bold hover:bg-purple-500/40 transition-all duration-300">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="resources" className="py-20 px-4 sm:px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-pink-400">Recommended Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer" className="bg-yellow-600/20 backdrop-blur-sm p-6 rounded-xl border border-yellow-400 hover:border-yellow-300 hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Binance</h3>
              <p className="text-gray-300 text-sm">World's largest crypto exchange</p>
            </a>
            <a href="https://www.coinbase.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400 hover:border-blue-300 hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-blue-300">Coinbase</h3>
              <p className="text-gray-300 text-sm">Beginner-friendly platform</p>
            </a>
            <a href="https://app.uniswap.org" target="_blank" rel="noopener noreferrer" className="bg-pink-600/20 backdrop-blur-sm p-6 rounded-xl border border-pink-400 hover:border-pink-300 hover:shadow-xl transition-all hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-pink-300">Uniswap</h3>
              <p className="text-gray-300 text-sm">Leading DEX for DeFi</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
