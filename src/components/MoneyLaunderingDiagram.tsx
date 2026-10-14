import React, { useState } from 'react';
import { ShoppingBag, DollarSign, RefreshCw, ShieldCheck, Flame, ArrowRight, CheckCircle2, ShieldAlert, Cpu, AlertTriangle } from 'lucide-react';

export const MoneyLaunderingDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "step-1",
      title: "1. Kirli Nakit Enjeksiyonu",
      subtitle: "Sokaktan ve Kaçakçılıktan Gelen Kayıt Dışı Fon",
      icon: DollarSign,
      color: "text-red-500",
      amount: "Haftalık ~80 Milyon ₺",
      mechanism: "Yasadışı bahis şebekeleri, liman kaçakçılığı ve tefeci havuzlarından toplanan fiziki nakit paralar, Merter ve Laleli'deki gizli depolara bavullarla taşınıyordu.",
      evidence: "EGM KOM fezlekesi Sayfa 84: 'Depolarda bulunan para sayma makineleri ve Kapalıçarşı kurye kayıtları.'"
    },
    {
      id: "step-2",
      title: "2. Butik Vitrini & 'Hayalet Sepet' Yazılımı",
      subtitle: "14 Farklı E-Ticaret Sitesinde Sanal Trafik",
      icon: ShoppingBag,
      color: "text-blue-500",
      amount: "Günde 12.000 - 14.500 Sipariş",
      mechanism: "Nişantaşı ve Bağdat Caddesi'ndeki lüks butikler meşruiyet perdesiydi. Asıl operasyon, Doğu Avrupa ve Balkan botları üzerinden 50 bin - 120 bin TL'lik lüks ipek elbise siparişleriyle yapılıyordu.",
      evidence: "Siber Suçlar İncelemesi: 'Kullanılan IP bloklarının %88'i Ukrayna ve Romanya proxy sunucularına aitti.'"
    },
    {
      id: "step-3",
      title: "3. Sahte Kargo & Otomatik İade Döngüsü",
      subtitle: "Depodan Çıkmayan Kumaş, Sahte Barkod",
      icon: RefreshCw,
      color: "text-amber-500",
      amount: "%94.8 İptal / İade Oranı",
      mechanism: "Ürünler hiçbir zaman kargoya verilmiyor, PTT ve anlaşmalı kargo kodları sistemde 'gönderildi' gösteriliyordu. 48 saat sonra otomatik 'beden uyuşmazlığı' iadesi oluşturularak kirli para, yasal kurumsal iade parası olarak paravan şahıslara havale ediliyordu.",
      evidence: "MASAK Raporu Ek-4: 'Aynı adreslere kesilen ve hiç teslim edilmeyen 42.000 kargo fişi ele geçirildi.'"
    },
    {
      id: "step-4",
      title: "4. Kripto Mikser & Temiz Şirket Cirosu",
      subtitle: "185 Milyon USDT Soğuk Cüzdan Havuzları",
      icon: Cpu,
      color: "text-emerald-500",
      amount: "Toplam 4.24 Milyar ₺ Aklama",
      mechanism: "Temizlenen gelirlerin bir kısmı lüks araç filoları ve Merter arsa tapularına, geri kalanı ise Tornado benzeri gizli kripto mikserleri üzerinden soğuk cüzdan havuzlarına aktarıldı.",
      evidence: "Maliye Başmüfettişliği: 'Şirketlerin vergi matrahı sıfır gösterilirken kasadaki temettü 4.2 milyar TL'ye ulaştı.'"
    },
    {
      id: "step-5",
      title: "5. Dokunulmazlık Zırhı & Yargı Kalkanı",
      subtitle: "Fahri Konsolosluk ve Meclis Fezleke Labirenti",
      icon: ShieldCheck,
      color: "text-indigo-500",
      amount: "462 Sayfalık İddianameye Rağmen Serbest",
      mechanism: "Savcılığın 38 yıl hapis istemiyle hazırladığı iddianameye rağmen, Maraz'ın elindeki diplomatik misyon şerhi ve Meclis komisyonundaki bekleyen fezlekesi nedeniyle tutuklama yapılamadı. Şüpheli adliyeden serbest çıktı.",
      evidence: "İstanbul Sulh Ceza Hakimliği Kararı No: 2024/602 D.İş (Dokunulmazlık şerhi nedeniyle tahliye)."
    },
    {
      id: "step-6",
      title: "6. Bir Gecede Çöküş & Kara Borsacıya Devir",
      subtitle: "Kalamış Marina'da Akrebi ile Geceyarısı Pazarlığı",
      icon: Flame,
      color: "text-red-600",
      amount: "850 Milyon ₺ Varlık Devredildi, Maraz Firarda",
      mechanism: "Banka hesaplarına gelen ani bloke, kundaklanan depolar ve cüzdanların içeriden boşaltılmasıyla Maraz bir gecede sıfırlandı. Kalan 38 gümrük konteyneri ve arsaları kara borsacı Akrebi'ye 3 milyon dolar ve kaçış rotası karşılığı devredip sırra kadem bastı.",
      evidence: "KOM Tape No: 114 ve Sarıyer Rumeli Feneri'nde bulunan terk edilmiş zırhlı cip."
    }
  ];

  return (
    <section id="aklama-semasi" className="py-12 border-b border-stone-300 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950 px-2.5 py-1 rounded">
            ADLİ MALİ ANALİZ
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-black mt-3 text-stone-900 dark:text-stone-100 tracking-tight">
            E-TİCARET KARA PARA AKLAMA DÖNGÜSÜ
          </h2>
          <p className="font-editorial text-stone-600 dark:text-stone-400 text-base sm:text-lg mt-2">
            MASAK ve Siber Suçlar fezlekesine göre tekstil butiklerinden başlayıp diplomatik dokunulmazlığa ve bir gecelik çöküşe uzanan 6 aşamalı mekanizma.
          </p>
        </div>

        {/* Steps Pills Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {steps.map((s, index) => {
            const Icon = s.icon;
            const isSelected = activeStep === index;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStep(index)}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white dark:bg-stone-800 border-red-600 shadow-md ring-2 ring-red-600/30'
                    : 'bg-white dark:bg-stone-950 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-stone-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`p-1.5 rounded-full ${isSelected ? 'bg-red-600 text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-600'}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono font-bold">0{index + 1}</span>
                </div>
                <div className="font-bold text-xs line-clamp-1">{s.title.split('. ')[1]}</div>
                <div className="text-[10px] text-stone-500 dark:text-stone-400 mt-1 truncate">
                  {s.amount}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspector Card for Selected Step */}
        <div className="bg-white dark:bg-stone-950 border-2 border-stone-300 dark:border-stone-800 rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
            <div>
              <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-xs font-mono font-bold mb-1">
                <span>AŞAMA 0{activeStep + 1} / 06</span>
                <span>•</span>
                <span>TEKNİK İNCELEME DOSYASI</span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100">
                {steps[activeStep].title}
              </h3>
              <p className="font-editorial text-stone-500 dark:text-stone-400 text-base mt-1 italic">
                {steps[activeStep].subtitle}
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 px-4 py-3 rounded-lg text-right shrink-0">
              <div className="text-[11px] font-mono uppercase text-stone-500 dark:text-stone-400">
                Hacim / Büyüklük
              </div>
              <div className="text-xl sm:text-2xl font-mono font-black text-red-600 dark:text-red-400">
                {steps[activeStep].amount}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-500 mb-2 flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5" />
                Nasıl İşliyordu? (Mekanizma)
              </h4>
              <p className="font-editorial text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed">
                {steps[activeStep].mechanism}
              </p>
            </div>

            <div className="bg-stone-100 dark:bg-stone-900 p-4 rounded-lg border border-stone-200 dark:border-stone-800">
              <h4 className="font-mono text-xs uppercase tracking-wider text-red-700 dark:text-red-400 font-bold mb-2 flex items-center">
                <ShieldAlert className="w-4 h-4 mr-1.5" />
                Resmi Soruşturma & MASAK Tutanak Notu
              </h4>
              <p className="text-xs sm:text-sm font-mono text-stone-700 dark:text-stone-300 leading-relaxed">
                {steps[activeStep].evidence}
              </p>
            </div>
          </div>

          {/* Navigation between steps */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-stone-200 dark:border-stone-800 text-xs">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              className="px-3 py-1.5 rounded bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 disabled:opacity-30 cursor-pointer font-bold"
            >
              &larr; Önceki Aşama
            </button>

            <span className="font-mono text-stone-500">
              {activeStep + 1} / {steps.length}
            </span>

            <button
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              className="px-3 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white disabled:opacity-30 cursor-pointer font-bold"
            >
              Sonraki Aşama &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
