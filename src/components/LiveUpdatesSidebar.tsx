import React from 'react';
import { LIVE_BULLETINS } from '../data/dossierData';
import { Flame, Clock, Radio, ShieldAlert } from 'lucide-react';

export const LiveUpdatesSidebar: React.FC = () => {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-5 shadow-sm">
      <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3 mb-4">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
          <h3 className="font-headline font-bold text-sm text-stone-900 dark:text-stone-100 uppercase tracking-wider">
            CANLI GELİŞMELER
          </h3>
        </div>
        <span className="text-[10px] font-mono text-red-600 dark:text-red-400 font-bold">
          ANLIK AKIŞ
        </span>
      </div>

      <div className="space-y-4">
        {LIVE_BULLETINS.map(bulletin => (
          <div key={bulletin.id} className="border-b border-stone-100 dark:border-stone-800/80 pb-3 last:border-b-0 last:pb-0">
            <div className="flex items-center justify-between text-[11px] font-mono mb-1">
              <span className="bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 font-bold px-1.5 py-0.5 rounded">
                {bulletin.urgency}
              </span>
              <span className="text-stone-400">{bulletin.timestamp}</span>
            </div>

            <h4 className="font-sans font-bold text-xs text-stone-900 dark:text-stone-100 hover:text-red-600 transition cursor-pointer">
              {bulletin.headline}
            </h4>

            <p className="font-editorial text-xs text-stone-600 dark:text-stone-400 mt-1 leading-snug">
              {bulletin.summary}
            </p>

            <div className="text-[10px] text-stone-400 font-mono mt-1">
              Kaynak: {bulletin.source}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
