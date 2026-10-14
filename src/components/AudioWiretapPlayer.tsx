import React, { useState, useEffect, useRef } from 'react';
import { WIRETAP_TAPE } from '../data/dossierData';
import { Play, Pause, RotateCcw, Volume2, VolumeX, ShieldAlert, Radio, Clock, Mic } from 'lucide-react';

export const AudioWiretapPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRadioNoiseActive, setIsRadioNoiseActive] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  // Time milestones for each transcript line
  const timeOffsets = [0, 8, 22, 36, 54, 74, 92, 108, 121]; // in seconds
  const totalDurationSeconds = 138; // 02:18

  // Playback timer loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setSecondsElapsed(prev => {
          if (prev >= totalDurationSeconds) {
            setIsPlaying(false);
            return 0;
          }
          const nextSec = prev + 1;
          // Find matching transcript line
          for (let i = timeOffsets.length - 1; i >= 0; i--) {
            if (nextSec >= timeOffsets[i]) {
              setCurrentLineIndex(i);
              break;
            }
          }
          return nextSec;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Web Audio subtle police radio crackle effect
  const toggleRadioNoise = () => {
    if (!isRadioNoiseActive) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // White noise generator
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.015; // very quiet subtle ambient hiss
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.04;

        whiteNoise.connect(gainNode);
        gainNode.connect(ctx.destination);
        whiteNoise.start(0);

        noiseNodeRef.current = whiteNoise;
        setIsRadioNoiseActive(true);
      } catch (err) {
        console.error('Web Audio error:', err);
      }
    } else {
      if (noiseNodeRef.current) {
        try {
          (noiseNodeRef.current as AudioBufferSourceNode).stop();
        } catch {
          // ignore
        }
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
      setIsRadioNoiseActive(false);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setSecondsElapsed(0);
    setCurrentLineIndex(0);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="ses-tapesi" className="py-12 border-b border-stone-300 dark:border-stone-800 bg-stone-900 text-stone-100 transition-colors">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-red-500 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>EMNİYET KOM ORTAM DİNLEME TAPESİ</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl font-black text-stone-100 tracking-tight">
              KALAMIŞ'TAKİ GECEYARISI PAZARLIĞI (TAPE #114)
            </h2>
            <p className="font-editorial text-stone-400 text-sm sm:text-base mt-1">
              9 Ekim 03:42 • Maraz ile 'Akrebi' lakaplı kara borsacı arasındaki 850 milyon TL'lik mülk devri ve firar pazarlığı.
            </p>
          </div>

          {/* Radio noise synthesizer button */}
          <button
            onClick={toggleRadioNoise}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded font-mono text-xs transition border ${
              isRadioNoiseActive ? 'bg-amber-600/30 text-amber-300 border-amber-500' : 'bg-stone-800 text-stone-400 border-stone-700 hover:text-white'
            }`}
            title="Telsiz ortam hışırtısını aç / kapat"
          >
            {isRadioNoiseActive ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{isRadioNoiseActive ? 'Telsiz Hışırtısı: AÇIK' : 'Telsiz Efektini Aç'}</span>
          </button>
        </div>

        {/* Audio Player Deck Console */}
        <div className="bg-stone-950 border-2 border-stone-800 rounded-xl p-6 sm:p-8 shadow-2xl mb-8">
          {/* Deck Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-800 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <Mic className="w-4 h-4 text-red-500" />
              <span className="text-stone-300 font-bold">KAYIT: {WIRETAP_TAPE.tapeCode}</span>
              <span className="text-stone-500">|</span>
              <span className="text-stone-400">{WIRETAP_TAPE.location}</span>
            </div>

            <div className="flex items-center space-x-2 text-stone-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(secondsElapsed)} / {WIRETAP_TAPE.audioDuration}</span>
            </div>
          </div>

          {/* Waveform Visualization Bars */}
          <div className="py-6 flex items-center justify-center space-x-1.5 overflow-hidden">
            {Array.from({ length: 42 }).map((_, barIdx) => {
              // Simulated waveform height variation
              const baseHeight = 12 + Math.sin(barIdx * 0.4) * 16 + (barIdx % 3) * 6;
              const isBarActive = isPlaying && (barIdx / 42) <= (secondsElapsed / totalDurationSeconds);
              return (
                <div
                  key={barIdx}
                  className={`w-1.5 rounded-full transition-all duration-300 ${
                    isBarActive ? 'bg-red-500 h-10' : 'bg-stone-800 h-4'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(8, baseHeight * (0.8 + Math.random() * 0.4))}px` : `${Math.max(6, baseHeight * 0.3)}px`
                  }}
                />
              );
            })}
          </div>

          {/* Player controls */}
          <div className="flex items-center justify-center space-x-4 pt-2">
            <button
              onClick={handleReset}
              className="p-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 transition cursor-pointer"
              title="Başa Sar"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={handlePlayPause}
              className="p-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold transition cursor-pointer shadow-lg transform hover:scale-105"
              title={isPlaying ? 'Durdur' : 'Kaydı Dinle'}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>
          </div>
        </div>

        {/* Live Synchronized Transcript */}
        <div className="bg-stone-950 border border-stone-800 rounded-xl p-6 font-mono text-xs sm:text-sm">
          <div className="text-stone-400 text-xs uppercase tracking-wider mb-4 border-b border-stone-800 pb-2 flex items-center justify-between">
            <span>RESMİ SES TRANSKRİPTİ VE KONUŞMA DÖKÜMÜ</span>
            <span className="text-red-400 font-bold">{isPlaying ? '● CANLI OYNATILIYOR' : 'DURAKLATILDI'}</span>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            {WIRETAP_TAPE.transcript.map((line, idx) => {
              const isActive = idx === currentLineIndex;
              const isMaraz = line.speaker === 'Maraz';
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border transition ${
                    isActive
                      ? 'bg-stone-900 border-red-500 text-white ring-1 ring-red-500 shadow'
                      : 'bg-stone-950/60 border-stone-800 text-stone-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isMaraz ? 'text-blue-400' : 'text-amber-400'}`}>
                      [{line.timeOffset}] {line.speaker}:
                    </span>
                    {isActive && (
                      <span className="text-[10px] text-red-500 font-bold uppercase animate-pulse">
                        Şu anki ses
                      </span>
                    )}
                  </div>
                  <p className="text-stone-200 font-editorial text-sm sm:text-base leading-relaxed">
                    "{line.text}"
                  </p>
                </div>
              );
            })}
          </div>

          {/* Footnote */}
          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-500">
            <strong>Masa Şefi Mütalaası:</strong> {WIRETAP_TAPE.officerNote}
          </div>
        </div>
      </div>
    </section>
  );
};
