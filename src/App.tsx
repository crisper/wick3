import React, { useEffect } from 'react';
import { Copy } from 'lucide-react';

// ============= CONFIGURATION =============
// Update these values to customize the website
const CONFIG = {
  // The contract address for your token
  CONTRACT_ADDRESS: "test",
  
  // The URL where the "Buy $WICK" button should link to
  BUY_BUTTON_URL: "https://x.com/KeanuReevesCF",
  
  // The URL for the DexScreener link
  DEXSCREENER_URL: "https://dexscreener.com",

  // The URL for the X (Twitter) profile
  X_PROFILE_URL: "https://x.com/KeanuReevesCF"
};
// ========= END CONFIGURATION ============

function App() {
  const copyAddress = () => {
    navigator.clipboard.writeText(CONFIG.CONTRACT_ADDRESS);
  };

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animate-on-scroll')) {
          entry.target.classList.add('animate-on-scroll');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-zinc-900 text-white overflow-x-hidden relative">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-zinc-900 to-zinc-900"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_60%_-20%,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_-20%_80%,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      
      <div className="relative">
        <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-6">
          <nav className="max-w-xl mx-auto backdrop-blur-md bg-black/30 border border-zinc-700/50 rounded-full">
            <div className="flex items-center justify-between h-12 px-5">
              <span className="text-lg font-[Impact] italic text-amber-200 tracking-wide">JOHN WICK</span>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-zinc-300 hover:text-amber-200 transition-colors text-sm">Home</a>
                <a href="#about" onClick={scrollToAbout} className="text-zinc-300 hover:text-amber-200 transition-colors text-sm">About</a>
              </div>

              <div className="flex items-center text-sm">
                <span className="text-zinc-400 mr-2">CA:</span>
                <button 
                  onClick={copyAddress}
                  className="group flex items-center hover:bg-zinc-800/50 rounded-lg px-2 py-1.5 transition-colors"
                >
                  <span className="font-mono text-amber-200">{`${CONFIG.CONTRACT_ADDRESS.slice(0, 4)}...${CONFIG.CONTRACT_ADDRESS.slice(-4)}`}</span>
                  <Copy className="w-3.5 h-3.5 ml-2 text-zinc-400 group-hover:text-amber-200 transition-colors" />
                </button>
              </div>
            </div>
          </nav>
        </div>

        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
          
          <div className="w-full flex flex-col items-center">
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative">
              <div className="relative w-full lg:w-1/2 flex justify-center items-center reveal">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent blur-3xl transform -rotate-12"></div>
                <img 
                  src="https://i.imgur.com/r7by3pR.png"
                  alt="John Wick"
                  className="relative h-[500px] object-contain transform hover:scale-105 transition-transform duration-700 ease-out [animation:float_6s_ease-in-out_infinite] [filter:drop-shadow(0_0_20px_rgba(251,191,36,0.2))]"
                />
              </div>

              <div className="lg:w-1/2 text-center lg:text-left space-y-8 relative reveal delay-200">
                <div className="space-y-2">
                  <h1 className="font-black tracking-tighter">
                    <span className="block text-4xl md:text-6xl text-zinc-400 transform hover:translate-x-2 transition-transform">THE ONLY</span>
                    <span className="block text-4xl md:text-6xl text-zinc-400 transform hover:translate-x-2 transition-transform">OFFICIAL</span>
                    <span className="block text-6xl md:text-8xl bg-gradient-to-r from-amber-200 to-amber-400 text-transparent bg-clip-text transform hover:translate-x-2 transition-transform font-[Impact] italic">JOHN WICK</span>
                    <span className="block text-4xl md:text-6xl text-zinc-400 transform hover:translate-x-2 transition-transform">MEME</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-zinc-400 font-medium mt-6">
                    The most dangerous memecoin in crypto history
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6 mt-16 reveal delay-400">
              <a 
                href={CONFIG.BUY_BUTTON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-amber-200 to-amber-400 text-black font-black text-xl md:text-2xl py-4 px-12 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
              >
                <span className="relative z-10">Buy $WICK</span>
                <div className="absolute inset-0 bg-white/20 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>

              <div className="w-full max-w-xl bg-black/40 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4 transform hover:scale-[1.02] transition-transform">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-zinc-400 font-medium">Solana Contract Address</span>
                  <div className="flex items-center justify-between w-full bg-zinc-800/50 rounded-lg px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <span className="bg-zinc-800/80 text-zinc-400 px-2 py-1 rounded-lg text-sm">CA:</span>
                      <code className="font-mono text-amber-200 text-sm md:text-base">{CONFIG.CONTRACT_ADDRESS}</code>
                    </div>
                    <button 
                      onClick={copyAddress}
                      className="ml-4 p-2 hover:bg-zinc-700/50 rounded-md transition-colors group"
                      title="Copy address"
                    >
                      <Copy className="w-4 h-4 text-amber-200 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="about" className="relative mt-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/5 via-zinc-900/95 to-zinc-900/95"></div>
          
          <div className="max-w-6xl mx-auto px-4 py-24 relative">
            <h2 className="reveal text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 text-transparent bg-clip-text">
                $WICK - The Official John Wick
              </span>
            </h2>
            
            <div className="reveal delay-200 bg-black/40 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <div className="sticky top-24">
                    <h3 className="text-8xl font-[Impact] italic leading-none">
                      <span className="block bg-gradient-to-br from-amber-200 to-amber-400 text-transparent bg-clip-text">$WICK:</span>
                    </h3>
                    <p className="text-2xl text-zinc-400 mt-2">The Official John Wick</p>
                  </div>
                </div>

                <div className="lg:w-2/3 space-y-8">
                  <p className="text-2xl text-zinc-300">
                    $WICK, the ultimate embodiment of unstoppable force and sheer determination. Inspired by the legendary John Wick, this token represents vengeance, precision, and the relentless pursuit of excellence in the crypto space.
                  </p>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-amber-200">Why $WICK?</h4>
                      <p className="text-xl text-zinc-300">
                        Just like the legendary assassin himself, $WICK is about precision, commitment, and absolute focus. Whether it's in the Continental or on the blockchain, this token symbolizes unwavering determination and legendary status.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-2xl font-bold text-amber-200">Unmatched Resolve</h4>
                      <p className="text-xl text-zinc-300">
                        With $WICK, we're taking John's unstoppable mentality to the crypto space. No compromises, no surrender—just pure, focused determination. In a market full of pretenders, $WICK stands alone, backed by a community as dedicated as the man himself.
                      </p>
                    </div>

                    <p className="text-2xl font-semibold text-amber-200 italic">
                      Be Breathtaking. Be Unstoppable. Join $WICK today. 🔫
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal mt-8 bg-black/40 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
                Solana Contract Address
              </h2>
              
              <div className="flex flex-col items-center">
                <div className="w-full max-w-3xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-800/50 rounded-lg px-6 py-4">
                    <div className="flex items-center space-x-3 w-full sm:w-auto">
                      <span className="bg-zinc-800/80 text-zinc-400 px-3 py-2 rounded-lg text-sm font-bold">CA:</span>
                      <code className="font-mono text-amber-200 text-lg md:text-xl break-all sm:break-normal">{CONFIG.CONTRACT_ADDRESS}</code>
                    </div>
                    <button 
                      onClick={copyAddress}
                      className="p-2 hover:bg-zinc-700/50 rounded-md transition-colors group"
                      title="Copy address"
                    >
                      <Copy className="w-5 h-5 text-amber-200 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/80 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: 'url(https://i.imgur.com/KqG0Knc.png)' }}
          ></div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-20">
            <div className="reveal text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join the John Wick Meme Community!
              </h2>
            </div>
            
            <div className="reveal delay-200 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2 bg-black/40 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8 md:p-12">
                <h3 className="text-3xl font-bold text-amber-200 mb-6">Mission</h3>
                <p className="text-xl md:text-2xl text-zinc-100 leading-relaxed">
                  This is YOUR chance to join a community that's all about unwavering determination and relentless pursuit of excellence. The John Wick Meme fosters a culture of precision, commitment, and absolute focus to make the crypto space a more formidable place. Remember: It's not just about revenge—it's about sending a message. Go $WICK! 🔫
                </p>
              </div>
              
              <div className="lg:w-1/2 reveal delay-400">
                <img 
                  src="https://i.imgur.com/kAbggpp.jpeg"
                  alt="John Wick Community"
                  className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 [filter:drop-shadow(0_0_20px_rgba(251,191,36,0.3))]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-zinc-900/95 to-zinc-900/95"></div>
          
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="reveal w-full max-w-md mb-12">
                <img 
                  src="https://i.imgur.com/EOR6Mzw.jpeg"
                  alt="Special Community Card"
                  className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 [filter:drop-shadow(0_0_20px_rgba(251,191,36,0.3))]"
                />
              </div>
              
              <div className="reveal delay-200 text-center space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white">
                  JOIN WICK'S SPECIAL COMMUNITY
                </h2>
                <div className="text-3xl md:text-5xl font-[Impact] italic text-amber-200">
                  $WICK
                </div>
                <div className="text-2xl md:text-3xl text-zinc-400 font-medium">
                  OWN A PIECE OF HISTORY
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/5 via-zinc-900/95 to-zinc-900/95"></div>
          
          <div className="max-w-6xl mx-auto px-4">
            <div className="reveal opacity-0 flex flex-col items-center space-y-8">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Connect with $WICK</h3>
                <p className="text-zinc-400">Join our community and stay updated</p>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href={CONFIG.X_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-zinc-700/50 hover:border-amber-200/50 transition-colors">
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-amber-200 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href={CONFIG.DEXSCREENER_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-zinc-700/50 hover:border-amber-200/50 transition-colors">
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-amber-200 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </a>
              </div>
              
              <div className="text-center text-zinc-500 text-sm">
                © 2024 $WICK. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
