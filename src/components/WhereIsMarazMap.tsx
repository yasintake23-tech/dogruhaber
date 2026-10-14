import React, { useState } from 'react';
import { ESCAPE_ROUTES } from '../data/dossierData';
import { EscapeRoute } from '../types/news';
import { MapPin, Navigation, Compass, AlertOctagon, ShieldAlert, ArrowRight, Radio, Search } from 'lucide-react';

interface WhereIsMarazMapProps {
  onOpenTipLine: () => void;
}

export const WhereIsMarazMap: React.FC<WhereIsMarazMapProps> = ({ onOpenTipLine }) => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>(ESCAPE_ROUTES[0].id);

  const activeRoute = ESCAPE_ROUTES.find(r => r.id === selectedRouteId) || ESCAPE_ROUTES[0];

  const getStatusColor = (status: EscapeRoute['status']) => {
    switch (status) {
      case 'Yüksek İhtimal':
        return 'bg-red-700 text-white';
      case 'Soruşturuluyor':
        return 'bg-amber-600 text-white';
      case 'Sahte İz İhtimali':
        return 'bg-stone-600 text-white';
      default:
        return 'bg-blue-600 text-white';
    }
  };

  return (
    <section id="firar-rotalari" className="py-12 border-b border-stone-300 dark:border-stone-800 bg-[#fbfbf9] dark:bg-stone-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950 px-2.5 py-1 rounded">
            ULUSLARARASI FİRARİ TAKİBİ
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-black mt-3 text-stone-900 dark:text-stone-100 tracking-tight">
            MARAZ ŞU AN NEREDE? 5 KAÇIŞ ROTASI
          </h2>
          <p className="font-editorial text-stone-600 dark:text-stone-400 text-base sm:text-lg mt-2">
            Rumeli Feneri'nde kesilen son cep telefonu baz sinyalinin ardından MİT, Emniyet ve Interpol'ün takip ettiği firar senaryoları.
          </p>
        </div>

        {/* Route Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {ESCAPE_ROUTES.map(route => {
            const isSelected = route.id === selectedRouteId;
            return (
              <button
                key={route.id}
                onClick={() => setSelectedRouteId(route.id)}
                className={`p-3.5 rounded-lg border text-left transition cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white dark:bg-stone-800 border-red-600 ring-2 ring-red-600/30 shadow-lg'
                    : 'bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-800 hover:border-stone-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-red-500">
                      %{route.probabilityScore} İHTİMAL
                    </span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${getStatusColor(route.status)}`}>
                      {route.status}
                    </span>
                  </div>
                  <div className="font-bold text-xs line-clamp-2">{route.name.split(': ')[1]}</div>
                </div>

                <div className="text-[10px] text-stone-500 dark:text-stone-400 font-mono mt-3">
                  Hedef: {route.destination}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Route Deep Dive Inspector */}
        <div className="bg-stone-900 text-stone-100 rounded-xl p-6 sm:p-8 border-2 border-stone-800 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-stone-800">
            <div>
              <div className="flex items-center space-x-2 text-red-400 text-xs font-mono font-bold mb-1">
                <Radio className="w-4 h-4 animate-pulse text-red-500" />
                <span>SON BAZ İSTASYONU TESPİTİ: SARIYER RUMELİ FENERİ (05:14 TSİ)</span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-black text-stone-100">
                {activeRoute.name}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400 font-mono mt-2">
                <span><strong>Son İz:</strong> {activeRoute.lastKnownSignalDate}</span>
                <span>•</span>
                <span><strong>Nakil Aracı:</strong> {activeRoute.transitMethod}</span>
              </div>
            </div>

            {/* Probability Score Gauge */}
            <div className="bg-stone-950 border border-stone-800 p-4 rounded-lg text-center shrink-0 w-full sm:w-auto">
              <div className="text-[11px] font-mono text-stone-400 uppercase">İstihbarat Güvenilirlik Skoru</div>
              <div className="text-3xl font-mono font-black text-red-500 mt-1">
                %{activeRoute.probabilityScore}
              </div>
              <div className="w-36 bg-stone-800 h-2 rounded-full overflow-hidden mx-auto mt-2">
                <div
                  className="bg-red-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${activeRoute.probabilityScore}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Intelligence Narrative */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center">
                  <Search className="w-3.5 h-3.5 mr-1" />
                  MİT & Emniyet İstihbarat Notu
                </h4>
                <p className="font-editorial text-base sm:text-lg text-stone-200 leading-relaxed">
                  {activeRoute.intelligenceReport}
                </p>
              </div>

              {/* Transit Checkpoints */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Tespit Edilen / Olası Transit Noktaları
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {activeRoute.checkpoints.map((pt, pIdx) => (
                    <span
                      key={pIdx}
                      className="bg-stone-800 border border-stone-700 text-stone-200 text-xs px-2.5 py-1 rounded flex items-center space-x-1"
                    >
                      <MapPin className="w-3 h-3 text-red-400" />
                      <span>{pt}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Diplomatic & Extradition Risk */}
            <div className="bg-stone-950 border border-stone-800 p-4 rounded-lg flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center">
                  <AlertOctagon className="w-3.5 h-3.5 mr-1 text-red-500" />
                  İade ve Diplomatik Engel
                </h4>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {activeRoute.riskFactor}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800">
                <button
                  onClick={onOpenTipLine}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-xs transition cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Bu Rotayla İlgili İhbar Bırak</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
