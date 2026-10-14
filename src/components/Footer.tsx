import React from 'react';
import { ShieldCheck, Printer, ArrowUp, AlertCircle, FileText } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenTipLine: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onOpenTipLine }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t-4 border-red-700 py-12 px-4 text-xs font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <h2 className="font-headline text-2xl font-black text-white uppercase tracking-tight mb-2">
              KUZEY GÜNDEM
            </h2>
            <p className="text-stone-400 font-editorial text-sm leading-relaxed mb-4 max-w-lg">
              Bağımsız Araştırmacı Gazetecilik Ağı. Kurumsal ve organize suçları, kamu kaynaklarının yağmalanmasını, e-ticaret ve finansal yolsuzlukları hiçbir siyasi zırha boyun eğmeden kamu yararı adına soruşturur.
            </p>
            <div className="flex items-center space-x-2 text-stone-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Basın Ahlak Yasası ve Uluslararası Araştırmacı Gazetecilik Konsorsiyumu (ICIJ) İlkelerine Bağlıdır.</span>
            </div>
          </div>

          {/* Quick Dossier Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-red-500 font-bold mb-3">
              ÖZEL DOSYA BAŞLIKLARI
            </h3>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li><a href="#bolum-1" className="hover:text-white transition">1. Vitrindeki İpek & Gölge Sepetler</a></li>
              <li><a href="#bolum-2" className="hover:text-white transition">2. Dokunulmazlık Kalkanı Krizi</a></li>
              <li><a href="#bolum-3" className="hover:text-white transition">3. 8 Saatte Buharlaşan İmparatorluk</a></li>
              <li><a href="#bolum-4" className="hover:text-white transition">4. Kara Borsacı Akrebi'ye Geceyarısı Satışı</a></li>
              <li><a href="#bolum-5" className="hover:text-white transition">5. Rumeli Feneri Sinyali ve Firar Rotaları</a></li>
              <li><a href="#bolum-6" className="hover:text-white transition">6. Atölye Emekçileri ve Kuryelerin Çilesi</a></li>
            </ul>
          </div>

          {/* Legal / Ethics & Actions */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-stone-400 font-bold mb-3">
              YASAL BİLDİRİM & BASKI
            </h3>
            <p className="text-stone-500 text-[11px] leading-relaxed mb-4">
              Bu soruşturma dosyasındaki tüm veriler, MASAK raporları, Sulh Ceza Hakimliği tutanakları ve EGM KOM Dairesi fezlekelerinden derlenmiş olup kamuoyu haber alma hakkı çerçevesindedir.
            </p>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => window.print()}
                className="flex items-center space-x-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 px-3 py-1.5 rounded transition text-xs border border-stone-800 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Dosyayı Yazdır / PDF Kaydet</span>
              </button>
              <button
                onClick={onOpenTipLine}
                className="flex items-center space-x-1.5 bg-red-700 hover:bg-red-600 text-white px-3 py-1.5 rounded transition text-xs font-bold cursor-pointer"
              >
                <span>Güvenli İhbar Bırak</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-stone-500 text-[11px] font-mono gap-4">
          <div>
            © 2026 KUZEY GÜNDEM ARAŞTIRMA MERKEZİ • TÜM HAKLARI SAKLIDIR
          </div>

          <button
            onClick={onScrollToTop}
            className="flex items-center space-x-1 text-stone-400 hover:text-white transition cursor-pointer"
          >
            <span>Sayfa Başına Dön</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
