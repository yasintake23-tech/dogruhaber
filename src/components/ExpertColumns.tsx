import React, { useState } from 'react';
import { COLUMNISTS } from '../data/dossierData';
import { ColumnistArticle } from '../types/news';
import { Feather, BookOpen, Clock, ArrowRight, UserCheck } from 'lucide-react';

export const ExpertColumns: React.FC = () => {
  const [selectedColumnId, setSelectedColumnId] = useState<string | null>(null);

  const columnDetails: Record<string, string[]> = {
    'col-1': [
      "Türkiye'de organize suç örgütlerinin siyasete ve yargıya sızma girişimleri yeni değildir. Ancak Maraz vakasında gördüğümüz tablo, bugüne kadar tanık olduklarımızın çok ötesindedir.",
      "Vitrinde 100 bin liralık takım elbiseler satılırken, arkada 4.2 milyar liralık yasadışı sermayenin dolaştığı bir tezgâh kurulmuş. MASAK müfettişleri dosyayı tamamlamış, savcılık 462 sayfa iddianame yazmış, ama nöbetçi hâkim şüpheliyi tutuklayamıyor. Neden? Çünkü şahsın elinde bir Afrika ülkesinin 'Fahri Başkonsolosluk' beratı ve geçmiş dönem fezleke kalkanı var.",
      "Anayasa'nın 83. maddesi, milletvekiline veya temsilciye suç işleme, hele hele organize mafya faaliyeti yürütme özgürlüğü tanımaz. Eğer dokunulmazlık bir suç örgütü liderini adaletten kaçırma aracına dönüştüyse, Meclis o fezlekeyi bir saat bile bekletmeden kaldırmalıydı. Bekletildi; sonuç ortada: Şahıs bir gecede tüm varlıklarını kara borsacıya devredip sırra kadem bastı."
    ],
    'col-2': [
      "Geleneksel kara para aklama yöntemleri geride kaldı. Eskiden İsviçre'ye bavullarla para taşınır veya oteller satın alınırdı. Şimdi ise her şey algoritmaların ardında gizleniyor.",
      "Maraz şebekesinin kullandığı yöntem ders kitaplarına girecek nitelikte: 'Hayalet Sepet' (Ghost Cart). Günde 12 bin sahte sipariş... Hiç kargolanmayan, ama kargo takip sistemlerinde 'teslim edildi/iade edildi' gösterilen ipek elbiseler. Kartlardan çekilen paralar yabancı hesaplara, iadeler ise Kapalıçarşı'daki döviz bürolarına temiz ciro olarak havale ediliyor.",
      "Bankacılık Düzenleme ve Denetleme Kurumu (BDDK) ve e-ticaret pazaryerlerinin denetim algoritmaları bu tür mikro-siparişleri fark etmekte neden bu kadar gecikti? Çünkü Maraz, sisteme her ay milyonlarca liralık komisyon kazandıran bir 'VIP satıcı' olarak konumlandırılmıştı."
    ],
    'col-3': [
      "Kalamış Marina'daki o gizli gece buluşması, Türkiye yeraltı dünyasının güç dengelerinin nasıl değiştiğinin kanıtıdır. Karşımızdaki figür: 'Akrebi'.",
      "Akrebi sıradan bir tefeci veya borsa spekülatörü değil; Balkanlar, Beyrut ve İstanbul üçgeninde zor durumdaki mafya baronlarının varlıklarını yok pahasına toplayan bir tasfiye memurudur. 850 milyon liralık gayrimenkul ve gümrük konteynerini 3 milyon dolara kapatması bir tesadüf değildir.",
      "Maraz gibi isimler sahneden silinirken, Akrebi gibi figürler onların ardında bıraktığı kirli sermayeyi emerek büyümeye devam ediyor. Asıl soru şu: Akrebi'ye kimler izin verdi ve Maraz'ın kaçış koridorunu hangi güçler açık tuttu?"
    ]
  };

  return (
    <section id="kose-yazilari" className="py-12 border-b border-stone-300 dark:border-stone-800 bg-[#fbfbf9] dark:bg-stone-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950 px-2.5 py-1 rounded">
            UZMAN GÖRÜŞÜ & ANALİZ
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-black mt-3 text-stone-900 dark:text-stone-100 tracking-tight">
            KÖŞE YAZILARI VE SUÇ ANALİZLERİ
          </h2>
          <p className="font-editorial text-stone-600 dark:text-stone-400 text-base sm:text-lg mt-2">
            Dokunulmazlık zırhının anayasal boyutu, e-ticarette yeni nesil aklama mekanizmaları ve kara borsacı Akrebi'nin rolü.
          </p>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLUMNISTS.map(col => {
            const isExpanded = selectedColumnId === col.id;
            const fullText = columnDetails[col.id] || [];

            return (
              <div
                key={col.id}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4 border-b border-stone-100 dark:border-stone-800 pb-3">
                    <div className="w-10 h-10 rounded-full bg-stone-800 text-red-400 font-headline font-bold flex items-center justify-center text-sm">
                      {col.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-stone-900 dark:text-stone-100">
                        {col.author}
                      </h4>
                      <p className="text-[11px] font-mono text-stone-500">
                        {col.role}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-headline font-bold text-lg text-stone-900 dark:text-stone-100 mb-2 leading-snug">
                    {col.title}
                  </h3>

                  <p className="font-editorial text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                    {col.summary}
                  </p>

                  {/* Expanded full essay */}
                  {isExpanded && (
                    <div className="border-t border-stone-100 dark:border-stone-800 pt-3 space-y-3 font-editorial text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {fullText.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between mt-4">
                  <span className="text-[11px] font-mono text-stone-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {col.readTime} okuma
                  </span>

                  <button
                    onClick={() => setSelectedColumnId(isExpanded ? null : col.id)}
                    className="text-xs font-bold font-sans text-red-600 hover:text-red-700 dark:text-red-400 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Yazıyı Kapat' : 'Yazının Tamamını Oku'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transform transition ${isExpanded ? '-rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
