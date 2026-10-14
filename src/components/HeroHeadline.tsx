import React from 'react';
import { DOSSIER_META } from '../data/dossierData';
import { AlertTriangle, Clock, Scale, DollarSign, ShieldAlert, ArrowDown, FileText, CheckCircle2 } from 'lucide-react';

interface HeroHeadlineProps {
  onScrollToChapters: () => void;
  onExploreDiagram: () => void;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  onScrollToChapters,
  onExploreDiagram
}) => {
  return (
    <section className="border-b border-stone-300 dark:border-stone-800 bg-[#fbfbf9] dark:bg-stone-950 py-8 lg:py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newspaper Category & Confidential Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <span className="bg-red-700 text-white font-mono text-xs font-bold uppercase px-2.5 py-1 tracking-wider">
              ÖZEL DOSYA / BÜYÜK SORUŞTURMA
            </span>
            <span className="text-xs font-mono text-stone-500 uppercase tracking-widest hidden sm:inline">
              ARŞİV KODU: #KZ-2026-MARAZ-41
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="confidential-stamp text-xs">
              RESMİ FEZLEKE & MASAK KAYDI
            </span>
            <span className="text-xs font-mono text-stone-500">
              Yayım: {DOSSIER_META.datePublished}
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mb-6">
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 dark:text-stone-100 tracking-tight leading-[1.1] mb-4">
            MARAZ DOSYASI: TEKSTİL BARONLUĞUNDAN BİR GECEDE SIR FİRARA
          </h1>
          <p className="font-editorial text-lg sm:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed max-w-5xl">
            {DOSSIER_META.subtitle}
          </p>
        </div>

        {/* Metadata Byline & Reading Time Warning */}
        <div className="flex flex-wrap items-center justify-between border-y border-stone-300 dark:border-stone-800 py-3 mb-8 text-xs font-mono text-stone-600 dark:text-stone-400 gap-3">
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4">
            <span><strong>Araştırma Masası:</strong> {DOSSIER_META.leadReporter}</span>
            <span>•</span>
            <span className="flex items-center text-red-600 dark:text-red-400 font-bold">
              <Clock className="w-3.5 h-3.5 mr-1" />
              Kapsamlı İnceleme: {DOSSIER_META.totalReadingTime} (6 Bölüm + 12 Belge)
            </span>
            <span>•</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
              Son Güncelleme: {DOSSIER_META.lastUpdated}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onScrollToChapters}
              className="bg-stone-900 hover:bg-black text-white dark:bg-stone-800 dark:hover:bg-stone-700 px-3 py-1.5 rounded text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
            >
              <span>Okumaya Başla</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Crime Dossier Quick Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <div className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-3 rounded">
            <div className="flex items-center text-stone-500 dark:text-stone-400 text-[11px] font-mono mb-1">
              <DollarSign className="w-3.5 h-3.5 text-red-600 mr-1" />
              AKLANAN MEBLAĞ
            </div>
            <div className="text-lg font-black font-mono text-red-700 dark:text-red-400">
              {DOSSIER_META.totalLaunderedAmount}
            </div>
            <div className="text-[10px] text-stone-500 font-sans mt-0.5">14 E-ticaret sitesiyle</div>
          </div>

          <div className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-3 rounded">
            <div className="flex items-center text-stone-500 dark:text-stone-400 text-[11px] font-mono mb-1">
              <Scale className="w-3.5 h-3.5 text-amber-600 mr-1" />
              HAPİS İSTEMİ
            </div>
            <div className="text-sm font-black font-mono text-stone-900 dark:text-stone-100">
              38 - 64 YIL
            </div>
            <div className="text-[10px] text-stone-500 font-sans mt-0.5">462 sayfalık iddianame</div>
          </div>

          <div className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-3 rounded">
            <div className="flex items-center text-stone-500 dark:text-stone-400 text-[11px] font-mono mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-blue-600 mr-1" />
              YASAL ENGEL
            </div>
            <div className="text-xs font-black font-mono text-blue-700 dark:text-blue-400">
              DOKUNULMAZLIK
            </div>
            <div className="text-[10px] text-stone-500 font-sans mt-0.5">Fahri konsolosluk şerhi</div>
          </div>

          <div className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-3 rounded">
            <div className="flex items-center text-stone-500 dark:text-stone-400 text-[11px] font-mono mb-1">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600 mr-1" />
              ÇÖKÜŞ SÜRESİ
            </div>
            <div className="text-lg font-black font-mono text-stone-900 dark:text-stone-100">
              8 SAAT
            </div>
            <div className="text-[10px] text-stone-500 font-sans mt-0.5">1 gecede sıfırlanan servet</div>
          </div>

          <div className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-3 rounded">
            <div className="flex items-center text-stone-500 dark:text-stone-400 text-[11px] font-mono mb-1">
              <FileText className="w-3.5 h-3.5 text-purple-600 mr-1" />
              SON DEVİR
            </div>
            <div className="text-xs font-black font-mono text-purple-700 dark:text-purple-400">
              'AKREBİ'YE DEVİR
            </div>
            <div className="text-[10px] text-stone-500 font-sans mt-0.5">850M TL'lik varlık satışı</div>
          </div>

          <div className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-3 rounded">
            <div className="flex items-center text-stone-500 dark:text-stone-400 text-[11px] font-mono mb-1">
              <Clock className="w-3.5 h-3.5 text-red-600 mr-1" />
              MEVCUT KONUM
            </div>
            <div className="text-xs font-black font-mono text-red-600 dark:text-red-400 animate-pulse">
              BİLİNMİYOR (FİRAR)
            </div>
            <div className="text-[10px] text-stone-500 font-sans mt-0.5">Son sinyal: Sarıyer 05:14</div>
          </div>
        </div>

        {/* Evidence Board Composite Card */}
        <div className="bg-stone-900 text-stone-100 rounded-lg p-6 border-2 border-stone-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-4 rotate-12 pointer-events-none opacity-20 text-red-500 font-mono text-7xl font-black">
            FİRARİ
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-start justify-between relative z-10">
            {/* Suspect profile summary */}
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <span className="classified-stamp text-xs">ŞÜPHELİ PROFİLİ: KOD MARAZ</span>
                <span className="text-xs font-mono text-amber-400">#EGM-KOM-ARANANLAR-114</span>
              </div>
              <p className="text-stone-300 text-sm leading-relaxed mb-4 font-sans">
                <strong>Resmi Kimlik:</strong> Tekstil İhracatçısı, Maraz Moda Holding YK Başkanı.<br />
                <strong>Gerçek Rolü:</strong> Organize suç örgütü finansörü, sahte e-ticaret ağları üzerinden kara para aklama koordinatörü.<br />
                <strong>Paradoks:</strong> Ağırlaştırılmış müebbet ve 38 yıl hapis talebine rağmen elindeki diplomatik/fahri konsolosluk şerhi nedeniyle gözaltına alınamadı. Ancak devletin dokunamadığı şahıs, ortağı olduğu yeraltı konsorsiyumu tarafından bir gecede tasfiye edildi.
              </p>
              
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-stone-800 text-stone-300 px-2 py-1 rounded font-mono">
                  Depo Kundaklaması: 12.000 m² Esenyurt
                </span>
                <span className="bg-stone-800 text-stone-300 px-2 py-1 rounded font-mono">
                  Sıfırlanan Kripto: 185M USDT
                </span>
                <span className="bg-stone-800 text-stone-300 px-2 py-1 rounded font-mono">
                  Kayıp Tekne: 'Vespera' Kalamış
                </span>
              </div>
            </div>

            {/* Quick interactive call to action card */}
            <div className="bg-stone-950 border border-stone-800 rounded p-4 w-full lg:w-80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
                  <span>AĞ ŞEMASI ANALİZİ</span>
                  <span className="text-red-400 font-bold">İNTERAKTİF</span>
                </div>
                <h2 className="font-bold text-stone-100 text-sm mb-2">
                  E-Ticaret Kara Para Tezgâhı Nasıl Çalışıyordu?
                </h2>
                <p className="text-xs text-stone-400 mb-3">
                  12.000 sahte iade, kargo sahteciliği ve dokunulmazlık kalkanının şemasını adım adım inceleyin.
                </p>
              </div>

              <button
                onClick={onExploreDiagram}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-xs transition cursor-pointer text-center"
              >
                Aklama Şemasını Aç &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
