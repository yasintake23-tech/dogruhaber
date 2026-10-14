import React from 'react';
import { Bookmark, Eye, EyeOff, BookOpen, Volume2, VolumeX, CheckCircle } from 'lucide-react';
import { CHAPTERS } from '../data/dossierData';

interface ReadingToolbarProps {
  progressPercentage: number;
  currentChapterId: string;
  onSelectChapter: (id: string) => void;
  showAllRedactions: boolean;
  onToggleRedactions: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const ReadingToolbar: React.FC<ReadingToolbarProps> = ({
  progressPercentage,
  currentChapterId,
  onSelectChapter,
  showAllRedactions,
  onToggleRedactions,
  isAudioPlaying,
  onToggleAudio,
  isBookmarked,
  onToggleBookmark
}) => {
  const currentChapter = CHAPTERS.find(c => c.id === currentChapterId) || CHAPTERS[0];

  return (
    <aside aria-label="Okuma Çubuğu" className="sticky top-[108px] z-40 bg-stone-900/95 backdrop-blur border-b border-stone-800 text-stone-200 text-xs py-2 px-4 shadow">
      {/* Progress line */}
      <div className="absolute top-0 left-0 h-1 bg-red-600 transition-all duration-200" style={{ width: `${progressPercentage}%` }} />

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Current position */}
        <div className="flex items-center space-x-2">
          <BookOpen className="w-4 h-4 text-red-500" />
          <span className="font-mono text-stone-400 hidden sm:inline">Okuma İlerlemesi:</span>
          <span className="font-bold font-mono text-red-400">%{Math.round(progressPercentage)}</span>
          <span className="text-stone-600 hidden md:inline">|</span>
          <div className="hidden md:flex items-center space-x-1">
            <span className="text-stone-400">Şu Anki Bölüm:</span>
            <span className="font-semibold text-stone-100 truncate max-w-[200px] lg:max-w-[320px]">
              {currentChapter.number}. {currentChapter.title}
            </span>
          </div>
        </div>

        {/* Chapter quick switcher pills */}
        <div className="hidden lg:flex items-center space-x-1">
          {CHAPTERS.map(c => (
            <button
              key={c.id}
              onClick={() => onSelectChapter(c.id)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${currentChapterId === c.id ? 'bg-red-700 text-white font-bold' : 'bg-stone-800 text-stone-400 hover:text-white'}`}
              title={`Bölüm ${c.number}: ${c.title}`}
            >
              B.{c.number}
            </button>
          ))}
        </div>

        {/* Action toggles */}
        <div className="flex items-center space-x-2 text-[11px]">
          {/* Audio narration */}
          <button
            onClick={onToggleAudio}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded transition border ${isAudioPlaying ? 'bg-amber-600/20 text-amber-300 border-amber-600' : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white'}`}
            title="Dosya Seslendirme Simülasyonu"
          >
            {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isAudioPlaying ? 'Ses Yayında' : 'Sesli Dinle'}</span>
          </button>

          {/* Redactions reveal toggle */}
          <button
            onClick={onToggleRedactions}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded transition border ${showAllRedactions ? 'bg-red-950 text-red-200 border-red-700' : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white'}`}
            title="Soruşturma Dosyalarındaki Karartılmış Kısımları Aç/Kapat"
          >
            {showAllRedactions ? <Eye className="w-3.5 h-3.5 text-red-400" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span>{showAllRedactions ? 'Karartmaları Gizle' : 'Karartmaları Aç'}</span>
          </button>

          {/* Bookmark */}
          <button
            onClick={onToggleBookmark}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded transition border ${isBookmarked ? 'bg-blue-900/30 text-blue-300 border-blue-600' : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white'}`}
            title="Kaldığın Yeri Kaydet"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-blue-400 text-blue-400' : ''}`} />
            <span className="hidden sm:inline">{isBookmarked ? 'Kaydedildi' : 'Kaydet'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
