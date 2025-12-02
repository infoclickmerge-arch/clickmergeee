import React, { useState } from 'react';
import { generateAdCopy } from '../services/geminiService';
import { Sparkles, Loader2, Copy } from 'lucide-react';

const AdCopyGenerator: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [audience, setAudience] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [generatedCopy, setGeneratedCopy] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName || !audience) return;

    setLoading(true);
    setGeneratedCopy('');
    
    const copy = await generateAdCopy(productName, audience, platform);
    setGeneratedCopy(copy);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-2xl p-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="text-yellow-400" size={32} />
        <div>
          <h2 className="text-2xl font-bold">Free AI Ad Copy Generator</h2>
          <p className="text-blue-200 text-sm">Experience the power of our digital tools.</p>
        </div>
      </div>

      <form onSubmit={handleGenerate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-blue-200">Product / Service</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="e.g. Luxury Sneakers"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-blue-500/30 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-blue-200">Target Audience</label>
          <input
            type="text"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="e.g. Gen Z, Fashion Enthusiasts"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-blue-500/30 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-blue-200">Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-blue-500/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 [&>option]:text-black"
          >
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Google Ads">Google Ads</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} /> Generating...
            </>
          ) : (
            <>
              Generate Copy <Sparkles size={18} />
            </>
          )}
        </button>
      </form>

      {generatedCopy && (
        <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20 relative animate-fade-in">
            <h3 className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">Generated Result</h3>
            <p className="text-gray-100 whitespace-pre-wrap">{generatedCopy}</p>
            <button 
                onClick={() => navigator.clipboard.writeText(generatedCopy)}
                className="absolute top-2 right-2 p-2 hover:bg-white/10 rounded-full transition-colors"
                title="Copy to clipboard"
            >
                <Copy size={16} className="text-blue-300" />
            </button>
        </div>
      )}
    </div>
  );
};

export default AdCopyGenerator;