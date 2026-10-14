import React, { useState } from 'react';
import { INITIAL_COMMENTS } from '../data/dossierData';
import { ReaderComment } from '../types/news';
import { MessageSquare, ThumbsUp, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const DiscussionComments: React.FC = () => {
  const [comments, setComments] = useState<ReaderComment[]>(INITIAL_COMMENTS);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newText, setNewText] = useState('');
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [submittedToast, setSubmittedToast] = useState(false);

  const handleLike = (id: string) => {
    if (likedMap[id]) return;
    setLikedMap(prev => ({ ...prev, [id]: true }));
    setComments(prev =>
      prev.map(c => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newComm: ReaderComment = {
      id: `comm-${Date.now()}`,
      author: newAuthor.trim(),
      location: newLocation.trim() || 'Türkiye',
      timestamp: 'Az önce',
      text: newText.trim(),
      likes: 1
    };

    setComments(prev => [newComm, ...prev]);
    setNewAuthor('');
    setNewLocation('');
    setNewText('');
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 3500);
  };

  return (
    <section id="yorumlar" className="py-12 border-b border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section title */}
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
              <MessageSquare className="w-4 h-4" />
              <span>KAMUOYU TARTIŞMASI & OKUR MEKTUPLARI</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100">
              OKUR YORUMLARI VE TEPKİLER ({comments.length})
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-500 hidden sm:inline">
            Moderatör Onaylı Canlı Tartışma
          </span>
        </div>

        {/* Comment submission form */}
        <form onSubmit={handleSubmit} className="bg-stone-50 dark:bg-stone-950 p-5 rounded-lg border border-stone-200 dark:border-stone-800 mb-8 shadow-sm">
          <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-3">
            Soruşturmaya Dair Yorumunuzu Yazın
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Adınız Soyadınız veya Mahlas"
              value={newAuthor}
              onChange={e => setNewAuthor(e.target.value)}
              className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 px-3 py-2 rounded text-xs focus:outline-none focus:border-red-600"
              required
            />
            <input
              type="text"
              placeholder="Şehir / Meslek (Örn: Merter / Tekstilci)"
              value={newLocation}
              onChange={e => setNewLocation(e.target.value)}
              className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 px-3 py-2 rounded text-xs focus:outline-none focus:border-red-600"
            />
          </div>

          <textarea
            placeholder="Dokunulmazlık zırhı, mağduriyetler veya dosyanın seyrine dair düşünceleriniz..."
            value={newText}
            onChange={e => setNewText(e.target.value)}
            rows={3}
            className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 px-3 py-2 rounded text-xs focus:outline-none focus:border-red-600 mb-3"
            required
          />

          <div className="flex items-center justify-between">
            <span className="text-[11px] text-stone-500 font-mono">
              *Hakaret içermeyen tüm kamu yararı görüşleri yayınlanır.
            </span>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded text-xs transition cursor-pointer flex items-center space-x-1.5 shadow"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Yorumu Gönder</span>
            </button>
          </div>

          {submittedToast && (
            <div className="mt-3 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 p-2 rounded text-xs flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Yorumunuz başarıyla yayınlandı. Teşekkürler.</span>
            </div>
          )}
        </form>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map(c => (
            <div
              key={c.id}
              className="bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 p-4 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-bold font-sans text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                    {c.author}
                  </span>
                  {c.isVerifiedJournalist && (
                    <span className="bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-mono px-1.5 py-0.2 rounded flex items-center space-x-0.5">
                      <ShieldCheck className="w-3 h-3 mr-0.5" />
                      Doğrulanmış
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-stone-500 flex items-center">
                    <MapPin className="w-3 h-3 mr-0.5" />
                    {c.location}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-stone-400">
                  {c.timestamp}
                </span>
              </div>

              <p className="font-editorial text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed mb-3">
                {c.text}
              </p>

              <div className="flex items-center space-x-4 text-xs font-mono">
                <button
                  onClick={() => handleLike(c.id)}
                  className={`flex items-center space-x-1.5 transition cursor-pointer ${
                    likedMap[c.id] ? 'text-red-600 font-bold' : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
                  }`}
                  title="Katılıyorum"
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${likedMap[c.id] ? 'fill-red-600' : ''}`} />
                  <span>{c.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
