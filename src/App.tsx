/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ReadingToolbar } from './components/ReadingToolbar';
import { HeroHeadline } from './components/HeroHeadline';
import { ChapterReader } from './components/ChapterReader';
import { MoneyLaunderingDiagram } from './components/MoneyLaunderingDiagram';
import { TimelineSection } from './components/TimelineSection';
import { ClassifiedDocuments } from './components/ClassifiedDocuments';
import { WhereIsMarazMap } from './components/WhereIsMarazMap';
import { AudioWiretapPlayer } from './components/AudioWiretapPlayer';
import { LiveUpdatesSidebar } from './components/LiveUpdatesSidebar';
import { ExpertColumns } from './components/ExpertColumns';
import { DiscussionComments } from './components/DiscussionComments';
import { TipLineModal } from './components/TipLineModal';
import { Footer } from './components/Footer';
import { CHAPTERS } from './data/dossierData';

export default function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'sepia'>(() => {
    try {
      return (localStorage.getItem('kz_theme') as 'light' | 'dark' | 'sepia') || 'light';
    } catch {
      return 'light';
    }
  });
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>(() => {
    try {
      return (localStorage.getItem('kz_font_size') as 'sm' | 'base' | 'lg') || 'base';
    } catch {
      return 'base';
    }
  });
  const [currentChapterId, setCurrentChapterId] = useState<string>('bolum-1');
  const [activeNavSection, setActiveNavSection] = useState<string>('bolum-1');
  const [showAllRedactions, setShowAllRedactions] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isTipLineOpen, setIsTipLineOpen] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem('kz_bookmark');
    } catch {
      return false;
    }
  });
  const [readingProgress, setReadingProgress] = useState<number>(0);

  // Apply theme to document element
  useEffect(() => {
    try {
      localStorage.setItem('kz_theme', themeMode);
    } catch {}
    const root = document.documentElement;
    root.classList.remove('dark', 'sepia');
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else if (themeMode === 'sepia') {
      root.classList.add('sepia');
    }
  }, [themeMode]);

  useEffect(() => {
    try {
      localStorage.setItem('kz_font_size', fontSize);
    } catch {}
  }, [fontSize]);

  // Track window scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = (totalScroll / windowHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleBookmark = () => {
    try {
      if (isBookmarked) {
        localStorage.removeItem('kz_bookmark');
        setIsBookmarked(false);
      } else {
        localStorage.setItem('kz_bookmark', JSON.stringify({
          chapterId: currentChapterId,
          date: new Date().toISOString()
        }));
        setIsBookmarked(true);
      }
    } catch {}
  };

  const handleNavigate = (sectionId: string) => {
    setActiveNavSection(sectionId);
    if (sectionId.startsWith('bolum-')) {
      setCurrentChapterId(sectionId);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectChapter = (chapterId: string) => {
    setCurrentChapterId(chapterId);
    setActiveNavSection(chapterId);
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors ${
      themeMode === 'dark' ? 'bg-[#121212] text-stone-100' : themeMode === 'sepia' ? 'bg-[#f4ecd8] text-[#2b251f]' : 'bg-[#fbfbf9] text-[#1a1a1a]'
    }`}>
      {/* Top Header */}
      <Header
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        fontSize={fontSize}
        setFontSize={setFontSize}
        onOpenTipLine={() => setIsTipLineOpen(true)}
        activeSection={activeNavSection}
        onNavigate={handleNavigate}
      />

      {/* Sticky Reader Status & Controls */}
      <ReadingToolbar
        progressPercentage={readingProgress}
        currentChapterId={currentChapterId}
        onSelectChapter={handleSelectChapter}
        showAllRedactions={showAllRedactions}
        onToggleRedactions={() => setShowAllRedactions(prev => !prev)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={() => {
          setIsAudioPlaying(prev => !prev);
          handleNavigate('ses-tapesi');
        }}
        isBookmarked={isBookmarked}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Main Front Page Hero */}
      <main className="flex-1">
        <HeroHeadline
          onScrollToChapters={() => handleNavigate('bolum-1')}
          onExploreDiagram={() => handleNavigate('aklama-semasi')}
        />

        {/* Investigative Long-Form Section with Side Updates */}
        <section className="py-6 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* The Main In-depth Chapter Reading Stream */}
            <div className="lg:col-span-3">
              <ChapterReader
                currentChapterId={currentChapterId}
                onSelectChapter={handleSelectChapter}
                fontSize={fontSize}
                themeMode={themeMode}
                showAllRedactions={showAllRedactions}
                onJumpToModule={handleNavigate}
              />
            </div>

            {/* Sticky Live Developments & Quick Dossier Navigation */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-[160px] space-y-6">
                <LiveUpdatesSidebar />

                {/* Chapter Quick List Box */}
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-4 text-xs">
                  <div className="font-mono uppercase font-bold text-stone-500 mb-3 border-b border-stone-100 dark:border-stone-800 pb-2">
                    DOSYA BÖLÜMLERİ
                  </div>
                  <div className="space-y-1.5 font-sans">
                    {CHAPTERS.map(ch => (
                      <button
                        key={ch.id}
                        onClick={() => handleSelectChapter(ch.id)}
                        className={`w-full text-left p-2 rounded transition cursor-pointer flex items-center justify-between ${
                          currentChapterId === ch.id
                            ? 'bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 font-bold border-l-2 border-red-600'
                            : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                        }`}
                      >
                        <span className="truncate pr-2">
                          {ch.number}. {ch.title.split(':')[0]}
                        </span>
                        <span className="font-mono text-[10px] text-stone-400 shrink-0">
                          {ch.readingTimeMinutes} dk
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Money Laundering Network Diagram */}
        <MoneyLaunderingDiagram />

        {/* Leaked Documents Desk (MASAK, Tape, Fezleke, Devir Protokolü) */}
        <ClassifiedDocuments
          showAllRedactions={showAllRedactions}
          onToggleAllRedactions={() => setShowAllRedactions(prev => !prev)}
        />

        {/* Chronological Timeline: 2018 to Single-Night Collapse */}
        <TimelineSection />

        {/* Where is Maraz? Intelligence Escape Routes */}
        <WhereIsMarazMap onOpenTipLine={() => setIsTipLineOpen(true)} />

        {/* Leaked Wiretap Tape Simulator (KOM Kalamış Audio Deck) */}
        <AudioWiretapPlayer />

        {/* Expert Columns and Opinion Analysis */}
        <ExpertColumns />

        {/* Reader Comments & Community Debate */}
        <DiscussionComments />
      </main>

      {/* Whistleblower Tip Line Modal */}
      <TipLineModal
        isOpen={isTipLineOpen}
        onClose={() => setIsTipLineOpen(false)}
      />

      {/* Footer with Impressum and Legal Notice */}
      <Footer
        onScrollToTop={scrollToTop}
        onOpenTipLine={() => setIsTipLineOpen(true)}
      />
    </div>
  );
}
