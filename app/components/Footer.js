'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-900 border-t border-indigo-700 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">₿</span>
              </div>
              <span className="text-xl font-bold text-cyan-400">
                EarnCrypto
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your complete guide to earning cryptocurrency through trading, staking, airdrops, and more. Start your crypto journey today.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 hover:scale-110" aria-label="Discord">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 hover:scale-110" aria-label="Telegram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#methods" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Earning Methods</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Complete Guide</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">FAQ</a></li>
              <li><a href="#resources" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Resources</a></li>
            </ul>
          </div>

          {/* Earning Methods */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-400">Earning Methods</h3>
            <ul className="space-y-2">
              <li><a href="#spot-trading" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Spot Trading</a></li>
              <li><a href="#futures" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Futures Trading</a></li>
              <li><a href="#staking" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Staking</a></li>
              <li><a href="#airdrops" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Airdrops</a></li>
              <li><a href="#yield-farming" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Yield Farming</a></li>
              <li><a href="#mining" className="text-gray-300 hover:text-slate-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block">Mining</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-pink-400">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">Get the latest crypto earning tips and strategies.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-500/30">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              © {currentYear} EarnCrypto. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="/privacy" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="text-gray-300 hover:text-purple-400 text-sm transition-colors duration-300">Terms of Service</a>
              <a href="/disclaimer" className="text-gray-300 hover:text-pink-400 text-sm transition-colors duration-300">Disclaimer</a>
              <a href="/contact" className="text-gray-300 hover:text-cyan-400 text-sm transition-colors duration-300">Contact</a>
            </div>
          </div>
          <p className="text-gray-400 text-xs text-center mt-4">
            Disclaimer: Cryptocurrency trading involves substantial risk. Never invest more than you can afford to lose. This content is for educational purposes only and should not be considered financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
