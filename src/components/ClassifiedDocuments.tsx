import React, { useState } from 'react';
import { CLASSIFIED_DOCUMENTS } from '../data/dossierData';
import { FileText, ShieldAlert, Eye, EyeOff, Copy, Check, Printer, AlertTriangle } from 'lucide-react';

interface ClassifiedDocumentsProps {
  showAllRedactions: boolean;
  onToggleAllRedactions: () => void;
}

export const ClassifiedDocuments: React.FC<ClassifiedDocumentsProps> = ({
  showAllRedactions,
  onToggleAllRedactions
}) => {
  const [selectedDocId, setSelectedDocId] = useState<string>(CLASSIFIED_DOCUMENTS[0].id);
  const [revealedSpecificPhrases, setRevealedSpecificPhrases] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const activeDoc = CLASSIFIED_DOCUMENTS.find(d => d.id === selectedDocId) || CLASSIFIED_DOCUMENTS[0];

  const togglePhrase = (phrase: string) => {
    setRevealedSpecificPhrases(prev => ({
      ...prev,
      [phrase]: !prev[phrase]
    }));
  };

  const isPhraseRevealed = (phrase: string) => {
    return showAllRedactions || !!revealedSpecificPhrases[phrase];
  };

  const copyDocText = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${activeDoc.title}\n${activeDoc.docNumber}\n\n${activeDoc.rawText}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="gizli-belgeler" className="py-12 border-b border-stone-300 dark:border-stone-800 bg-stone-900 text-stone-100 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-red-500 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>GİZLİ BELGE MASASI & ELE GEÇİRİLEN TUTANAKLAR</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-black text-stone-100 tracking-tight">
              MASAK VE EMNİYETİN SIZAN DELİL DOSYALARI
            </h2>
            <p className="font-editorial text-stone-400 text-base sm:text-lg mt-1">
              Savcılık klasörlerindeki gizli ibareli raporlar, tape dökümleri ve geceyarısı devir protokolleri.
            </p>
          </div>

          {/* Redaction toggle & actions */}
          <div className="flex items-center space-x-2 text-xs">
            <button
              onClick={onToggleAllRedactions}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded font-mono font-bold transition border ${
                showAllRedactions ? 'bg-red-700 text-white border-red-600' : 'bg-stone-800 text-stone-300 border-stone-700 hover:text-white'
              }`}
            >
              {showAllRedactions ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{showAllRedactions ? 'Tüm Karartmaları Gizle' : 'Tüm Karartmaları Aç'}</span>
            </button>

            <button
              onClick={copyDocText}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded font-mono bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition"
              title="Metni Kopyala"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kopyalandı' : 'Metni Al'}</span>
            </button>
          </div>
        </div>

        {/* Document Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
          {CLASSIFIED_DOCUMENTS.map(doc => {
            const isSelected = doc.id === selectedDocId;
            return (
              <button
                key={doc.id}
                onClick={() => setSelectedDocId(doc.id)}
                className={`p-3 rounded text-left border transition cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-800 border-red-500 text-white shadow-lg ring-1 ring-red-500'
                    : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold bg-stone-900 px-1.5 py-0.5 rounded text-red-400">
                    {doc.agency}
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">{doc.date.split(' - ')[0]}</span>
                </div>
                <div className="text-xs font-bold line-clamp-2 text-stone-100">{doc.title}</div>
                <div className="text-[10px] font-mono text-stone-500 mt-2 truncate">{doc.docNumber}</div>
              </button>
            );
          })}
        </div>

        {/* Document Physical Viewer Simulation */}
        <div className="bg-[#fcfbf7] text-[#1c1917] rounded-lg p-6 sm:p-10 shadow-2xl border-4 border-stone-800 relative font-mono text-xs sm:text-sm">
          {/* Top Confidential Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-stone-900 pb-4 mb-6">
            <div>
              <div className="font-bold text-base text-stone-900">{activeDoc.agency} RESMİ KAYDI</div>
              <div className="text-xs text-stone-600">DOSYA REF: {activeDoc.docNumber}</div>
              <div className="text-xs text-stone-600">TARİH: {activeDoc.date}</div>
            </div>

            <div className="text-right">
              <span className="classified-stamp text-xs sm:text-sm">
                {activeDoc.classification}
              </span>
              <div className="text-[10px] text-stone-500 mt-1">İFŞA EDİLEMEZ • KOVUŞTURMA DOSYASI</div>
            </div>
          </div>

          {/* Document Summary */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-3 mb-6 text-stone-800 font-sans text-xs sm:text-sm leading-relaxed">
            <strong>Belge Özeti:</strong> {activeDoc.summary}
          </div>

          {/* Raw Text with Interactive Redactions */}
          <div className="whitespace-pre-wrap leading-relaxed font-mono bg-white p-6 rounded border border-stone-300 shadow-inner text-xs sm:text-sm text-stone-900">
            {activeDoc.rawText.split('\n').map((line, lIdx) => {
              // Check if line contains any redacted phrases
              let processedContent: React.ReactNode = line;

              for (const phrase of activeDoc.redactedPhrases) {
                if (line.includes(phrase)) {
                  const parts = line.split(phrase);
                  const isRev = isPhraseRevealed(phrase);
                  processedContent = (
                    <span key={phrase}>
                      {parts[0]}
                      <button
                        type="button"
                        onClick={() => togglePhrase(phrase)}
                        className={`redacted inline-block align-middle cursor-pointer font-bold ${isRev ? 'revealed' : ''}`}
                        title="Tıklayarak karartılmış metni açın veya kapatın"
                      >
                        {phrase}
                      </button>
                      {parts[1]}
                    </span>
                  );
                  break;
                }
              }

              return <div key={lIdx} className="min-h-[1.25rem]">{processedContent}</div>;
            })}
          </div>

          {/* Official Footnote */}
          <div className="mt-6 pt-4 border-t border-stone-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-stone-600">
            <div>
              <strong>Kriminal Şube Notu:</strong> {activeDoc.notes}
            </div>
            <div className="font-mono text-red-700 font-bold">
              [ELE GEÇİRİLEN ISLAK İMZALI NÜSHA]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
