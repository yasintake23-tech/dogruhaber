export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  readingTimeMinutes: number;
  leadParagraph: string;
  content: string[];
  keyQuotes: string[];
  evidenceNote?: {
    code: string;
    description: string;
  };
  highlightStat?: {
    value: string;
    label: string;
  };
}

export interface TimelineEvent {
  id: string;
  date: string;
  time?: string;
  title: string;
  category: 'ticaret' | 'yargi' | 'cokus' | 'devir' | 'firar';
  description: string;
  impactLevel: 'yuksek' | 'kritik' | 'orta';
  evidenceRef?: string;
}

export interface ClassifiedDocument {
  id: string;
  title: string;
  docNumber: string;
  date: string;
  agency: 'MASAK' | 'EGM KOM' | 'TBMM ADALET' | 'İST. BAŞSAVCILIK' | 'SAHİL GÜVENLİK';
  classification: 'ÇOK GİZLİ' | 'GİZLİ' | 'KOVUŞTURMA GİZLİLİĞİ' | 'ÖZEL İSTİHBARAT';
  summary: string;
  rawText: string;
  redactedPhrases: string[];
  notes: string;
}

export interface EscapeRoute {
  id: string;
  name: string;
  destination: string;
  transitMethod: string;
  probabilityScore: number; // 0 - 100
  lastKnownSignalDate: string;
  status: 'Yüksek İhtimal' | 'Soruşturuluyor' | 'Sahte İz İhtimali' | 'Doğrulandı';
  intelligenceReport: string;
  checkpoints: string[];
  riskFactor: string;
}

export interface WiretapTape {
  id: string;
  tapeCode: string;
  recordedAt: string;
  participants: string[];
  location: string;
  audioDuration: string;
  transcript: {
    speaker: string;
    text: string;
    timeOffset: string;
  }[];
  officerNote: string;
}

export interface LiveBulletin {
  id: string;
  timestamp: string;
  urgency: 'FLAŞ' | 'SON DAKİKA' | 'GELİŞME' | 'KULİS';
  headline: string;
  summary: string;
  source: string;
}

export interface ColumnistArticle {
  id: string;
  author: string;
  role: string;
  title: string;
  summary: string;
  readTime: string;
}

export interface ReaderComment {
  id: string;
  author: string;
  location: string;
  timestamp: string;
  text: string;
  likes: number;
  isVerifiedJournalist?: boolean;
}
