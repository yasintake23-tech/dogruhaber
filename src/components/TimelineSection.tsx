import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/dossierData';
import { TimelineEvent } from '../types/news';
import { Clock, Calendar, AlertCircle, FileCheck, Filter } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredEvents = filterCategory === 'all'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter(e => e.category === filterCategory);

  const categoryLabels: Record<string, string> = {
    all: 'Tüm Olaylar (12)',
    ticaret: 'Butik & E-Ticaret',
    yargi: 'İddianame & Dokunulmazlık',
    cokus: 'Kıyamet Gecesi Çöküşü',
    devir: 'Kara Borsacıya Devir',
    firar: 'Firar & Sır Kayboluş'
  };

  const getImpactBadge = (level: TimelineEvent['impactLevel']) => {
    switch (level) {
      case 'kritik':
        return <span className="bg-red-700 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase">KRİTİK DÖNÜM NOKTASI</span>;
      case 'yuksek':
        return <span className="bg-amber-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase">YÜKSEK ETKİ</span>;
      default:
        return <span className="bg-stone-500 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase">KAYIT</span>;
    }
  };

  return (
    <section id="kronoloji" className="py-12 border-b border-stone-300 dark:border-stone-800 bg-[#fbfbf9] dark:bg-stone-950 transition-colors">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950 px-2.5 py-1 rounded">
            ADIM ADIM ÇÖKÜŞ VE FİRAR
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-black mt-3 text-stone-900 dark:text-stone-100 tracking-tight">
            RESMİ KRONOLOJİ: 2018'DEN BUGÜNE
          </h2>
          <p className="font-editorial text-stone-600 dark:text-stone-400 text-base sm:text-lg mt-2">
            İlk butiğin açılışından, dokunulmazlık tahliyesine, 8 Ekim'deki 8 saatlik çöküşe ve Rumeli Feneri'ndeki son sinyale kadar tüm safhalar.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {Object.entries(categoryLabels).map(([catKey, label]) => (
            <button
              key={catKey}
              onClick={() => setFilterCategory(catKey)}
              className={`px-3 py-1.5 rounded-full text-xs font-sans transition cursor-pointer ${
                filterCategory === catKey
                  ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-bold shadow'
                  : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-stone-300 dark:border-stone-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
          {filteredEvents.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-stone-950 shadow ${
                item.impactLevel === 'kritik' ? 'bg-red-600 ring-4 ring-red-600/20' : 'bg-stone-700'
              }`} />

              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-sm hover:shadow-md transition">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2 text-stone-500 dark:text-stone-400 text-xs font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5 text-red-600" />
                    <span>{item.date}</span>
                  </div>
                  <div>
                    {getImpactBadge(item.impactLevel)}
                  </div>
                </div>

                <h3 className="font-headline text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                  {item.title}
                </h3>

                <p className="font-editorial text-stone-700 dark:text-stone-300 text-base leading-relaxed mb-3">
                  {item.description}
                </p>

                {item.evidenceRef && (
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-stone-500 dark:text-stone-400 border-t border-stone-100 dark:border-stone-800 pt-2">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Resmi Kaynak: {item.evidenceRef}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
