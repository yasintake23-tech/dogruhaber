import React, { useState } from 'react';
import { ShieldAlert, Moon, Sun, Type, Share2, AlertCircle, FileSearch, Flame, Clock } from 'lucide-react';
import { LIVE_BULLETINS } from '../data/dossierData';

interface HeaderProps {
  themeMode: 'light' | 'dark' | 'sepia';
  setThemeMode: (mode: 'light' | 'dark' | 'sepia') => void;
  fontSize: 'sm' | 'base' | 'lg';
  setFontSize: (size: 'sm' | 'base' | 'lg') => void;
  onOpenTipLine: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  themeMode,
  setThemeMode,
  fontSize,
  setFontSize,
  onOpenTipLine,
  activeSection,
  onNavigate
}) => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);

  const currentBulletin = LIVE_BULLETINS[tickerIndex % LIVE_BULLETINS.length];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    }
  };

  return (
    <header className="border-b-2 border-stone-800 bg-stone-900 text-stone-100 sticky top-0 z-50 shadow-md">
      {/* Top utility bar */}
      <div className="bg-red-700 text-white text-xs font-mono py-1 px-4 flex flex-wrap items-center justify-between border-b border-red-800">
        <div className="flex items-center space-x-3 overflow-hidden">
          <span className="flex items-center font-bold tracking-wider uppercase bg-black px-2 py-0.5 rounded text-[11px] animate-pulse">
            <Flame className="w-3.5 h-3.5 mr-1 text-red-500" />
            CANLI GELİŞME
          </span>
          <span className="truncate max-w-md md:max-w-2xl font-sans text-xs">
            <strong>[{currentBulletin.urgency}]</strong> {currentBulletin.headline} — {currentBulletin.summary}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[11px]">
          <button 
            onClick={() => setTickerIndex(prev => (prev + 1) % LIVE_BULLETINS.length)} 
            className="hover:underline text-stone-200 cursor-pointer"
            title="Sonraki gelişme"
          >
            Sonraki Haber &rarr;
          </button>
          <span className="text-red-300">|</span>
          <span className="hidden sm:inline font-mono">14 Ekim 2026 • 15:42 TSİ</span>
        </div>
      </div>

      {/* Masthead */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <span className="bg-red-600 text-white font-mono text-[10px] uppercase font-bold px-1.5 py-0.5 tracking-widest rounded-xs">
                ÖZEL ARAŞTIRMA
              </span>
              <span className="text-xs text-stone-400 font-mono">DOSYA NO: 2026/842-ÖZ</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl tracking-tight text-stone-100 uppercase font-black cursor-pointer" onClick={() => onNavigate('bolum-1')}>
              KUZEY GÜNDEM
            </h1>
            <p className="text-[11px] tracking-widest font-mono text-stone-400 uppercase">
              Bağımsız Araştırmacı Gazetecilik Ağı • Yıl: 18 • Sayı: 6.428
            </p>
          </div>
        </div>

        {/* Reader controls */}
        <div className="flex items-center flex-wrap gap-2 text-xs">
          {/* Theme toggles */}
          <div className="flex items-center bg-stone-800 rounded p-1 border border-stone-700">
            <button
              onClick={() => setThemeMode('light')}
              className={`px-2 py-1 rounded transition-colors ${themeMode === 'light' ? 'bg-stone-200 text-stone-900 font-bold' : 'text-stone-300 hover:text-white'}`}
              title="Açık Mod"
            >
              <Sun className="w-3.5 h-3.5 inline mr-1" /> Gündüz
            </button>
            <button
              onClick={() => setThemeMode('sepia')}
              className={`px-2 py-1 rounded transition-colors ${themeMode === 'sepia' ? 'bg-amber-100 text-amber-950 font-bold' : 'text-stone-300 hover:text-white'}`}
              title="Gazete Kağıdı (Sepya)"
            >
              Kağıt
            </button>
            <button
              onClick={() => setThemeMode('dark')}
              className={`px-2 py-1 rounded transition-colors ${themeMode === 'dark' ? 'bg-stone-700 text-white font-bold' : 'text-stone-300 hover:text-white'}`}
              title="Gece Modu"
            >
              <Moon className="w-3.5 h-3.5 inline mr-1" /> Gece
            </button>
          </div>

          {/* Font size */}
          <div className="flex items-center bg-stone-800 rounded p-1 border border-stone-700">
            <span className="text-stone-400 px-1"><Type className="w-3 h-3" /></span>
            <button
              onClick={() => setFontSize('sm')}
              className={`px-1.5 py-0.5 rounded ${fontSize === 'sm' ? 'bg-red-700 text-white font-bold' : 'text-stone-300'}`}
              title="Küçük Yazı"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('base')}
              className={`px-1.5 py-0.5 rounded ${fontSize === 'base' ? 'bg-red-700 text-white font-bold' : 'text-stone-300'}`}
              title="Normal Yazı"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-1.5 py-0.5 rounded ${fontSize === 'lg' ? 'bg-red-700 text-white font-bold' : 'text-stone-300'}`}
              title="Büyük Yazı"
            >
              A+
            </button>
          </div>

          {/* Share */}
          <button
            onClick={handleShare}
            className="flex items-center space-x-1 bg-stone-800 hover:bg-stone-700 text-stone-200 px-2.5 py-1.5 rounded border border-stone-700 transition"
            title="Dosyayı Paylaş / Bağlantıyı Kopyala"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Paylaş</span>
          </button>

          {/* Whistleblower Tip button */}
          <button
            onClick={onOpenTipLine}
            className="flex items-center space-x-1.5 bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1.5 rounded transition shadow-sm animate-bounce"
            title="Anonim İhbar ve Belge Gönder"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Gizli İhbar Masası</span>
          </button>
        </div>
      </div>

      {/* Share Toast */}
      {showShareToast && (
        <div className="bg-emerald-600 text-white text-xs font-mono py-1 px-4 text-center">
          ✓ Dosya bağlantısı panoya kopyalandı.
        </div>
      )}

      {/* Navigation menu */}
      <nav className="bg-stone-950 border-t border-stone-800 text-xs overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-1 sm:space-x-4 py-2">
          <button
            onClick={() => onNavigate('bolum-1')}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition ${activeSection.startsWith('bolum') ? 'bg-stone-800 text-red-400 font-bold' : 'text-stone-300 hover:text-white'}`}
          >
            Büyük Soruşturma (6 Bölüm)
          </button>
          <button
            onClick={() => onNavigate('aklama-semasi')}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition ${activeSection === 'aklama-semasi' ? 'bg-stone-800 text-red-400 font-bold' : 'text-stone-300 hover:text-white'}`}
          >
            E-Ticaret Aklama Şeması
          </button>
          <button
            onClick={() => onNavigate('kronoloji')}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition ${activeSection === 'kronoloji' ? 'bg-stone-800 text-red-400 font-bold' : 'text-stone-300 hover:text-white'}`}
          >
            Çöküş Kronolojisi
          </button>
          <button
            onClick={() => onNavigate('gizli-belgeler')}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition ${activeSection === 'gizli-belgeler' ? 'bg-stone-800 text-red-400 font-bold' : 'text-stone-300 hover:text-white'}`}
          >
            MASAK & Gizli Tutanaklar
          </button>
          <button
            onClick={() => onNavigate('firar-rotalari')}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition ${activeSection === 'firar-rotalari' ? 'bg-stone-800 text-red-400 font-bold' : 'text-stone-300 hover:text-white'}`}
          >
            Maraz Nerede? (5 Firar Rotası)
          </button>
          <button
            onClick={() => onNavigate('ses-tapesi')}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition ${activeSection === 'ses-tapesi' ? 'bg-stone-800 text-red-400 font-bold' : 'text-stone-300 hover:text-white'}`}
          >
            Kalamış Dinleme Tapesi
          </button>
          <button
            onClick={() => onNavigate('kose-yazilari')}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition ${activeSection === 'kose-yazilari' ? 'bg-stone-800 text-red-400 font-bold' : 'text-stone-300 hover:text-white'}`}
          >
            Uzman Analizleri
          </button>
          <button
            onClick={() => onNavigate('yorumlar')}
            className={`whitespace-nowrap px-2.5 py-1 rounded transition ${activeSection === 'yorumlar' ? 'bg-stone-800 text-red-400 font-bold' : 'text-stone-300 hover:text-white'}`}
          >
            Okur Tartışması
          </button>
        </div>
      </nav>
    </header>
  );
};
