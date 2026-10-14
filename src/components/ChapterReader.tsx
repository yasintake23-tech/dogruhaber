import React, { useState } from 'react';
import { Chapter } from '../types/news';
import { CHAPTERS } from '../data/dossierData';
import { Clock, ShieldAlert, FileText, ChevronLeft, ChevronRight, Share2, Eye, EyeOff, Check, BookOpen } from 'lucide-react';

interface ChapterReaderProps {
  currentChapterId: string;
  onSelectChapter: (id: string) => void;
  fontSize: 'sm' | 'base' | 'lg';
  themeMode: 'light' | 'dark' | 'sepia';
  showAllRedactions: boolean;
  onJumpToModule: (moduleId: string) => void;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  currentChapterId,
  onSelectChapter,
  fontSize,
  themeMode,
  showAllRedactions,
  onJumpToModule
}) => {
  const [revealedInlineRedactions, setRevealedInlineRedactions] = useState<Record<string, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  const currentChapter = CHAPTERS.find(c => c.id === currentChapterId) || CHAPTERS[0];
  const currentIndex = CHAPTERS.findIndex(c => c.id === currentChapter.id);

  const prevChapter = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const nextChapter = currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  const toggleInline = (key: string) => {
    setRevealedInlineRedactions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isRevealed = (key: string) => {
    return showAllRedactions || !!revealedInlineRedactions[key];
  };

  const copyChapterLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}#${currentChapter.id}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Font size classes
  const fontClass = {
    sm: 'text-base sm:text-lg leading-relaxed',
    base: 'text-lg sm:text-xl leading-relaxed',
    lg: 'text-xl sm:text-2xl leading-relaxed',
  }[fontSize];

  // Theme styling for the reading container
  const themeClass = {
    light: 'bg-[#fbfbf9] text-[#1a1a1a]',
    sepia: 'bg-[#f4ecd8] text-[#2b251f]',
    dark: 'bg-[#121212] text-[#e0e0e0]'
  }[themeMode];

  const cardBorderClass = {
    light: 'border-stone-300 bg-stone-50',
    sepia: 'border-[#dfd3bd] bg-[#fbf5e8]',
    dark: 'border-stone-800 bg-stone-900'
  }[themeMode];

  return (
    <article id={currentChapter.id} className={`py-10 px-4 sm:px-6 transition-colors ${themeClass}`}>
      <div className="max-w-4xl mx-auto">
        {/* Chapter Header Banner */}
        <div className="border-b-2 border-stone-800 dark:border-stone-700 pb-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
              SORUŞTURMA BÖLÜMÜ 0{currentChapter.number} / 06
            </span>

            <div className="flex items-center space-x-3 text-xs font-mono text-stone-500 dark:text-stone-400">
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1" />
                {currentChapter.readingTimeMinutes} Dakika Okuma
              </span>
              <span>•</span>
              <button
                onClick={copyChapterLink}
                className="flex items-center space-x-1 hover:text-red-600 dark:hover:text-red-400 transition cursor-pointer"
                title="Bölüm Bağlantısını Kopyala"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Kopyalandı' : 'Bölümü Paylaş'}</span>
              </button>
            </div>
          </div>

          <h2 className="font-headline text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-3">
            {currentChapter.title}
          </h2>

          <p className="font-editorial text-lg sm:text-xl text-stone-600 dark:text-stone-400 italic">
            {currentChapter.subtitle}
          </p>
        </div>

        {/* Lead Paragraph with Drop Cap */}
        <div className="mb-8">
          <p className={`font-editorial ${fontClass} font-medium text-stone-800 dark:text-stone-200 border-l-4 border-red-600 pl-4 py-1 italic`}>
            {currentChapter.leadParagraph}
          </p>
        </div>

        {/* Key Highlight Statistic Box (if present) */}
        {currentChapter.highlightStat && (
          <div className={`my-6 p-4 rounded-lg border ${cardBorderClass} flex items-center justify-between`}>
            <div>
              <div className="text-xs font-mono uppercase text-stone-500 tracking-wider">
                Resmi İnceleme Tespiti
              </div>
              <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                {currentChapter.highlightStat.label}
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-red-600 dark:text-red-400">
              {currentChapter.highlightStat.value}
            </div>
          </div>
        )}

        {/* Main Body Paragraphs */}
        <div className="space-y-6">
          {currentChapter.content.map((paragraph, idx) => {
            return (
              <p key={idx} className={`font-editorial ${fontClass} tracking-normal text-justify`}>
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Pull Quotes */}
        {currentChapter.keyQuotes.length > 0 && (
          <div className="my-10 space-y-4">
            {currentChapter.keyQuotes.map((quote, qIdx) => (
              <blockquote
                key={qIdx}
                className="bg-stone-900 text-stone-100 p-6 rounded border-l-8 border-red-600 relative overflow-hidden"
              >
                <span className="text-5xl text-stone-700 font-serif absolute -top-2 left-2 pointer-events-none">
                  “
                </span>
                <p className="font-editorial text-lg sm:text-xl italic relative z-10 leading-relaxed mb-2">
                  {quote}
                </p>
                <div className="font-mono text-xs text-red-400 uppercase tracking-widest text-right">
                  — Soruşturma Dosyası Tape & Tutanak Alıntısı
                </div>
              </blockquote>
            ))}
          </div>
        )}

        {/* Evidence Note Footnote Card */}
        {currentChapter.evidenceNote && (
          <div className="my-8 p-4 rounded border-2 border-dashed border-red-400/50 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 text-xs font-mono">
            <div className="flex items-center space-x-2 text-red-800 dark:text-red-300 font-bold mb-1">
              <FileText className="w-4 h-4" />
              <span>DELİL KAYDI: [{currentChapter.evidenceNote.code}]</span>
            </div>
            <p className="text-stone-700 dark:text-stone-300">
              {currentChapter.evidenceNote.description}
            </p>
          </div>
        )}

        {/* Inline Redaction Interactive Exploration Example */}
        <div className={`mt-8 p-4 rounded border ${cardBorderClass}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-stone-500 uppercase flex items-center">
              <ShieldAlert className="w-3.5 h-3.5 mr-1 text-amber-500" />
              Soruşturma Gizliliği: Karartılmış Delil Parçası
            </span>
            <span className="text-[11px] text-stone-400 font-mono">
              (Görmek için tıklayın)
            </span>
          </div>

          <p className="font-editorial text-sm sm:text-base leading-relaxed text-stone-800 dark:text-stone-200">
            Mali şubenin yaptığı baskında, şüphelinin arka kasasından çıkan defterde şu ibare yazıyordu:{' '}
            <button
              type="button"
              onClick={() => toggleInline(`ch-${currentChapter.id}`)}
              className={`redacted text-left cursor-pointer transition ${isRevealed(`ch-${currentChapter.id}`) ? 'revealed' : ''}`}
              title="Karartmayı aç / gizle"
            >
              "Dokunulmazlık fezlekesi Meclis'te 14 ay daha tutulacak, komisyon üyelerine teslim edilen tutar 4.5 milyon avrodur."
            </button>
          </p>
        </div>

        {/* Chapter Navigation Footer */}
        <div className="mt-12 pt-6 border-t border-stone-300 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevChapter ? (
            <button
              onClick={() => onSelectChapter(prevChapter.id)}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2.5 rounded bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 font-sans text-xs font-bold transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Önceki: Bölüm {prevChapter.number} ({prevChapter.title.slice(0, 24)}...)</span>
            </button>
          ) : <div />}

          {nextChapter ? (
            <button
              onClick={() => onSelectChapter(nextChapter.id)}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-2.5 rounded bg-red-600 hover:bg-red-700 text-white font-sans text-xs font-bold transition cursor-pointer shadow"
            >
              <span>Sonraki: Bölüm {nextChapter.number} ({nextChapter.title.slice(0, 24)}...)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => onJumpToModule('aklama-semasi')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-2.5 rounded bg-stone-900 hover:bg-black text-white dark:bg-stone-700 dark:hover:bg-stone-600 font-sans text-xs font-bold transition cursor-pointer shadow"
            >
              <span>Dosyayı Tamamladınız: Aklama Şemasını İnceleyin</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
