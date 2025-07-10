import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    // Simple animation trigger on load
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-element');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
        }, index * 200);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleTwitterClick = () => {
    window.open('https://twitter.com/MetaMuseArt', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white overflow-hidden">
      {/* Main Container - All content in viewport */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Header with FEEL AGAIN and $FEEL token */}
        <header className="text-center mb-8 fade-element opacity-0">
          <div className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-2">
              FEEL AGAIN
            </h1>
          </div>
          <div className="inline-flex items-center bg-purple-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-600/30">
            <span className="text-2xl md:text-3xl font-bold text-purple-300 mr-2">$FEEL</span>
            <span className="text-lg text-gray-300">Token</span>
          </div>
        </header>

        {/* Story Content - Compact Single Page */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Our Story */}
          <div className="fade-element opacity-0 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white">💔</span>
              </div>
              <h2 className="text-xl font-bold text-purple-300">My Father's Legacy</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The inheritance my father left me wasn't filled with hope or dreams—it was heavy with debt. I see the helplessness in his eyes every day. Years have passed, but the debts remain. Now this burden sits on my shoulders, and the precious time I should be spending with my daughter and wife is lost in this maze of financial obligations.
            </p>
          </div>

          {/* The Challenge */}
          <div className="fade-element opacity-0 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white">😰</span>
              </div>
              <h2 className="text-xl font-bold text-blue-300">Working Hard, Losing Hope</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              I work from dawn to dusk every single day. Each day, I'm running around trying to pay off these debts. But no matter how hard I try, it feels like walking in a bottomless pit. My daughter's question "Daddy, when will we play together?" keeps me awake at night. My wife's tired eyes, her silent screams... Everything feels heavier.
            </p>
          </div>

          {/* Finding Hope */}
          <div className="fade-element opacity-0 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white">😔</span>
              </div>
              <h2 className="text-xl font-bold text-green-300">My Mental Breakdown</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              I can't sleep at night anymore. I'm constantly doing calculations in my head, but the numbers never add up. Sometimes I don't even hear my daughter's voice because I'm so absorbed in debt calculations. My wife looks at me with worry, "You've changed," she says. She's right... I don't recognize myself anymore. This burden has changed me, left deep wounds in my soul.
            </p>
          </div>

          {/* Our Promise */}
          <div className="fade-element opacity-0 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white">🙏</span>
              </div>
              <h2 className="text-xl font-bold text-orange-300">Last Hope: $FEEL</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              $FEEL isn't just a token for us—it's our hope to reclaim our lives. To escape this maze of debt, to play games with my daughter, to spend peaceful evenings with my wife... Maybe this is the only way I can build a normal life for my family. My request from you: Help us feel that we're not alone.
            </p>
          </div>
        </div>

        {/* Token Info and CTA */}
        <div className="text-center fade-element opacity-0">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">💫</span>
            </div>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">$FEEL Token</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              This token is my family's survival struggle. Every $FEEL represents an evening I couldn't spend with my daughter, a moment I couldn't share with my wife, the helplessness I see in my father's eyes. Your support is the only light that can get us out of this dark tunnel.
            </p>
            


            {/* Twitter Button */}
            <Button 
              onClick={handleTwitterClick}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-0"
            >
              <span className="mr-3">🐦</span>
              Follow @MetaMuseArt
            </Button>
            
            <p className="text-sm text-gray-400 mt-4">
              Please hear my story. Hear my family's voice. We're not alone, are we?
            </p>
          </div>

          {/* Footer */}
          <div className="fade-element opacity-0">
            <div className="w-24 h-0.5 bg-purple-600/30 mx-auto mb-4"></div>
            <p className="text-gray-400 text-sm">
              "My father's debts have broken me, but I haven't lost hope. I fight for my daughter's smile, for my wife's peace."
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 $FEEL Token • Built with a desperate father's heart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}