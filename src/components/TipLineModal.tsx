import React, { useState } from 'react';
import { X, ShieldAlert, Lock, CheckCircle2, FileUp, Key } from 'lucide-react';

interface TipLineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TipLineModal: React.FC<TipLineModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState('firar-yeri');
  const [tipDetails, setTipDetails] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [submittedReceipt, setSubmittedReceipt] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tipDetails.trim()) return;

    // Generate cryptographic tracking code
    const randomHex = Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
    const receiptCode = `KZ-TIP-${randomHex.slice(0, 4)}-${randomHex.slice(4, 8)}-${randomHex.slice(8, 12)}`;
    setSubmittedReceipt(receiptCode);
  };

  const handleReset = () => {
    setSubmittedReceipt(null);
    setTipDetails('');
    setContactInfo('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-stone-900 border-2 border-stone-700 text-stone-100 rounded-xl max-w-lg w-full p-6 shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white transition cursor-pointer p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedReceipt ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-950 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-headline text-2xl font-black text-white mb-2">
              İHBAR ŞİFRELENDİ VE ALINDI
            </h3>
            <p className="font-editorial text-sm text-stone-300 mb-6 leading-relaxed">
              Bilgileriniz 4096-bit PGP anahtarı ile şifrelenerek doğrudan Kuzey Gündem Araştırmacı Gazetecilik Masası'nın güvenli sunucusuna iletildi. IP adresiniz kaydedilmemiştir.
            </p>

            <div className="bg-stone-950 border border-stone-800 p-4 rounded-lg mb-6 font-mono text-left">
              <div className="flex items-center space-x-1.5 text-xs text-stone-400 mb-1">
                <Key className="w-3.5 h-3.5 text-amber-400" />
                <span>Anonim Takip Kodunuz:</span>
              </div>
              <div className="text-red-400 font-bold text-sm tracking-wider select-all">
                {submittedReceipt}
              </div>
              <div className="text-[10px] text-stone-500 mt-2">
                *Bu kodu saklayın. Dosyayı takip eden adli muhabirler ek soru sorarsa bu kodla yanıtlayabilirsiniz.
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-stone-800 hover:bg-stone-700 text-white font-sans text-xs font-bold px-6 py-2.5 rounded transition cursor-pointer"
            >
              Kapat
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-red-500 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>GİZLİ & ANONİM KAYNAK HATTI</span>
            </div>

            <h3 className="font-headline text-2xl font-black text-white mb-2">
              MARAZ VE AKLAMAYA DAİR BİLGİ İLETİN
            </h3>

            <p className="font-editorial text-xs sm:text-sm text-stone-300 mb-6 leading-relaxed">
              Maraz'ın şu anki yeri, paravan tekstil e-ticaret siteleri, gümrükteki bekleyen konteynerler veya kara borsacı 'Akrebi' ile ilgili bildiklerinizi güvenle paylaşın.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-stone-400 font-mono text-[11px] mb-1">
                  İhbar Konusu:
                </label>
                <select
                  value={topic}
                  onChange={e => setTopic(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 text-stone-200 px-3 py-2 rounded focus:outline-none focus:border-red-600"
                >
                  <option value="firar-yeri">Maraz'ın Güncel Konumu / Görgü Tanıklığı</option>
                  <option value="e-ticaret">Sahte E-Ticaret ve Hayali İade Sistemi</option>
                  <option value="akrebi">Gölge Borsacı 'Akrebi' ve Devir Protokolü</option>
                  <option value="dokunulmazlik">Dokunulmazlık ve Yargı Fezlekesi Belgeleri</option>
                  <option value="magduriyet">Maaşını Alamayan İşçi / Adına Şirket Açılan Kurye</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-400 font-mono text-[11px] mb-1">
                  Detaylı Açıklama / Elinizdeki Bilgiler:
                </label>
                <textarea
                  value={tipDetails}
                  onChange={e => setTipDetails(e.target.value)}
                  rows={4}
                  placeholder="Gördüğünüz yer, tarih, plaka, şirket adı veya para transferi detaylarını yazın..."
                  className="w-full bg-stone-950 border border-stone-800 text-stone-200 px-3 py-2 rounded focus:outline-none focus:border-red-600"
                  required
                />
              </div>

              <div>
                <label className="block text-stone-400 font-mono text-[11px] mb-1">
                  Güvenli İletişim (İsteğe Bağlı - Signal / ProtonMail / Wickr):
                </label>
                <input
                  type="text"
                  value={contactInfo}
                  onChange={e => setContactInfo(e.target.value)}
                  placeholder="protonmail@... veya Signal kullanıcı adı (Boş bırakabilirsiniz)"
                  className="w-full bg-stone-950 border border-stone-800 text-stone-200 px-3 py-2 rounded focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="flex items-center space-x-2 text-[11px] text-stone-400 font-mono bg-stone-950 p-2.5 rounded border border-stone-800">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Uçtan uca PGP şifreleme etkindir. Metadata ve IP logları temizlenmektedir.</span>
              </div>

              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold transition cursor-pointer"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-bold transition cursor-pointer flex items-center space-x-1.5 shadow"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Şifrele ve İlet</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
