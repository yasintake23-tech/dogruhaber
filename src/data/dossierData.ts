import { Chapter, TimelineEvent, ClassifiedDocument, EscapeRoute, WiretapTape, LiveBulletin, ColumnistArticle, ReaderComment } from '../types/news';

export const DOSSIER_META = {
  title: "MARAZ DOSYASI: TEKSTİL BARONLUĞUNDAN BİR GECEDE SIR FİRARA",
  subtitle: "E-ticaret ve lüks butik paravanıyla aklanan 4.2 milyar TL, dokunulmazlık zırhı, 24 saatte buharlaşan bir imparatorluk ve gölge borsacıya devredilip kaybolan bir mafya liderinin anatomisi.",
  leadReporter: "Kuzey Gündem Özel Soruşturma Masası",
  datePublished: "14 Ekim 2026",
  lastUpdated: "15 dakika önce (CANLI GELİŞME)",
  totalReadingTime: "42 Dakika",
  dossierNumber: "SORUŞTURMA NO: 2026/842-ÖZ",
  totalLaunderedAmount: "4.240.000.000 ₺",
  requestedSentence: "38 Yıldan 64 Yıla Kadar Hapis",
  currentLegalStatus: "Dokunulmazlık Nedeniyle Tutuksuz / Firari Şüpheli",
  interpolStatus: "Kırmızı Bülten Başvurusu Değerlendirmede",
};

export const CHAPTERS: Chapter[] = [
  {
    id: "bolum-1",
    number: 1,
    title: "Vitrindeki İpek, Bodrumdaki Kasa: Bir Butikten Milyar Dolarlık Ağa",
    subtitle: "Nişantaşı ve Bağdat Caddesi'nin ışıltılı pencereleri arkasında işletilen 'Gölge Sepetler' ve fason iade tezgâhı nasıl kuruldu?",
    readingTimeMinutes: 7,
    leadParagraph: "İstanbul’un en pahalı caddelerinde 'Maraz Haute Couture' ve 'Maraz Luxury Wear' tabelalarını görenler, burayı sadece cemiyet hayatının uğrak noktası olan şık birer tekstil butiği zannediyordu. Fakat arka planda Türkiye'nin gördüğü en sofistike e-ticaret kara para aklama makinelerinden biri tıkır tıkır işliyordu.",
    content: [
      "2018 yılında mütevazı bir Merter atölyesi olarak yola çıkan Maraz K., kısa sürede baş döndürücü bir sermaye sıçraması yaşadı. Görünürde İtalya ve Fransa’dan ithal edilen ipek kumaşlar, özel dikim smokinler ve tasarım gece elbiseleri satılıyordu. Ancak Mali Suçları Araştırma Kurulu (MASAK) müfettişlerinin 18 aylık teknik takibi, vitrindeki mankenlerin arkasında bambaşka bir dünyanın döndüğünü ortaya koydu.",
      "Butikler sadece birer 'fiziki meşruiyet cephesi'ydi. Asıl devasa nakit akışı, Maraz’ın kurduğu 14 farklı e-ticaret portalı ve pazaryeri entegrasyonu üzerinden pompalanıyordu. Soruşturma dosyasına giren teknik analize göre; sistem 'Hayalet Sepet' (Ghost Cart) ve 'Sanal İade Döngüsü' taktiğiyle çalışıyordu. Günün her dakikasında, Doğu Avrupa ve Balkan IP'lerinden otomatik bot hesaplar aracılığıyla tanesi 45.000 TL ile 120.000 TL arasında değişen lüks kaban, kürk ve ipek elbise siparişleri veriliyordu.",
      "İşin can alıcı noktası şuydu: Bu ürünler hiçbir zaman depolardan çıkmıyor, fiziki kargoya verilmiyordu. Sipariş onaylandıktan 48 saat sonra 'müşteri beden uyuşmazlığı' veya 'kargo teslim edilemedi' gerekçesiyle iptal ediliyor, ancak para iadesi sipariş veren kaynağa değil, Maraz’ın offshore hesaplarına bağlı 'müşteri iade cüzdanları' ve paravan üçüncü şahıslara nakit havale olarak aktarılıyordu. Böylece sokaktan, yasadışı bahis baronlarından ve liman kaçakçılığından gelen kirli nakit para, saniyeler içinde 'yasal e-ticaret cirosu' ve 'kurumsal iade tazminatı' kılıfına bürünüyordu.",
      "Eski bir sistem yazılımcısının savcılığa verdiği gizli ifadede şu çarpıcı cümleler yer alıyordu: 'Bize verilen talimat şuydu: Sitede günde en az 12 bin sahte sipariş dönecek. Kargo takip kodları PTT ve özel kargo şirketlerinin sahte barkod havuzundan üretiliyordu. Kumaş deposunda fareler cirit atarken, ekranda günde 40 milyon liralık ciro akıyordu. Maraz Bey haftada iki gün gelip sunucuların log kayıtlarının silinmesini bizzat izlerdi.'"
    ],
    keyQuotes: [
      "Kumaş deposunda fareler cirit atarken, sistem ekranında günde 40 milyon liralık lüks giyim satışı akıyordu.",
      "Vitrindeki 100 bin liralık smokinler sadece birer maskedir; asıl servet kodların ve iade iadelerinin arasında aklandı."
    ],
    evidenceNote: {
      code: "MASAK-2024-EK4",
      description: "14 paravan e-ticaret sitesine ait günlük 12.400 hayali işlem log dökümü."
    },
    highlightStat: {
      value: "14.200+",
      label: "Günlük Hayali Sipariş Adedi"
    }
  },
  {
    id: "bolum-2",
    number: 2,
    title: "Yargı Kıskacı ve 'Dokunulmazlık Zırhı': Neden Tutuklanamadı?",
    subtitle: "Savcılığın 462 sayfalık organize suç iddianamesine ve 38 yıl hapis talebine rağmen Maraz nasıl serbestçe dolaşabildi?",
    readingTimeMinutes: 8,
    leadParagraph: "İstanbul Cumhuriyet Başsavcılığı Kaçakçılık ve Örgütlü Suçlar Soruşturma Bürosu, operasyon düğmesine bastığında dosya o kadar sağlamdı ki, mahkemenin tutuklama kararı vermesi dakikalar meselesi olarak görülüyordu. Fakat mahkeme koridorlarında yaşananlar, hukuk devletinin hafızasına kazınacak bir skandala dönüştü.",
    content: [
      "Hazırlanan 462 sayfalık iddianamede Maraz hakkında 'Suç işlemek amacıyla silahlı örgüt kurmak ve yönetmek', 'Suçtan kaynaklanan malvarlığı değerlerini aklama' ve 'Nitelikli dolandırıcılık' suçlarından 38 yıldan 64 yıla kadar ağır hapis cezası talep ediliyordu. Emniyet Genel Müdürlüğü KOM Daire Başkanlığı ekipleri, eş zamanlı 28 adrese baskın düzenleyerek onlarca kasaya, soğuk kripto donanımlarına ve tapu senetlerine el koymuştu.",
      "Maraz gözaltına alındı. Elleri kelepçeli vaziyette Vatan Emniyet'e götürüldüğünde herkes dönemin kapandığını sanıyordu. Ancak adliyeye sevk edildiği saatlerde Ankara ve uluslararası diplomasi koridorlarında akıl almaz bir trafik işlemeye başladı. Maraz’ın avukatları, nöbetçi sulh ceza hâkimliğinin önüne tek bir kırmızı mühürlü dosya koydu: Bir Afrika ülkesinin 'Fahri Başkonsolosluk ve Özel Diplomatik Misyon Şerhi' ile bağlantılı diplomatik pasaport ve daha önemlisi, geçmiş bir dönemden kalan ve fezlekesi henüz Meclis Karma Komisyonu'nda bekletilen milletvekilliği dokunulmazlığı statüsü emsali.",
      "Hukukçuların 'tam bir hukuki kurnazlık ve bürokratik kalkan' olarak nitelediği bu karmaşık kılıf nedeniyle mahkeme heyeti, Anayasa'nın 83. maddesi ve Viyana Sözleşmesi hükümlerini gerekçe göstererek gözaltı kararını durdurmak zorunda kaldı. Savcılığın tutuklama talebi reddedildi, yurt dışı çıkış yasağı ve adli kontrol hükümleri konulmaya çalışıldıysa da dokunulmazlık kapsamındaki itirazlar süreci kilitledi.",
      "Maraz, adliyenin protokol kapısından siyah camlı zırhlı Maybach aracına binerken yüzünde soğuk bir tebessüm vardı. Basın mensuplarının 'Hüküm giyecek misiniz? MASAK raporları hakkındaki cevabınız nedir?' sorularına yalnızca şu cevabı verdi: 'Ben Türk tekstilini dünyaya ihraç eden bir iş insanıyım. Dokunulmazlığım şahsımın değil, milletimin bana tanıdığı haktır. Herkes işine baksın.'"
    ],
    keyQuotes: [
      "Savcılık kürsüsünde 462 sayfalık delil klasörü dururken, şüpheli kırmızı plakalı diplomatik dokunulmazlık zırhıyla elini kolunu sallayarak kapıdan çıktı.",
      "Ben Türk tekstilini dünyaya ihraç eden bir iş insanıyım. Dokunulmazlığım şahsımın değil, milletimin hakkıdır."
    ],
    evidenceNote: {
      code: "İST-CBS-2024/9182",
      description: "Sulh Ceza Hâkimliği dokunulmazlık itiraz tutanağı ve tahliye şerhi."
    },
    highlightStat: {
      value: "462 Sayfa",
      label: "Resmi İddianame ve Suçlama Metni"
    }
  },
  {
    id: "bolum-3",
    number: 3,
    title: "Kıyamet Gecesi: Bir Gecede Buharlaşan İmparatorluk",
    subtitle: "8 Ekim gecesi saat 22:00 ile sabah 06:00 arasında ne oldu? Banka blokeleri, silahlı depolar ve organize çöküşün kronolojisi.",
    readingTimeMinutes: 9,
    leadParagraph: "Dokunulmazlık kalkanı Maraz'ı demir parmaklıklardan korumuştu ama yeraltı dünyasının ve finans baronlarının acımasız kurallarına karşı hiçbir koruma sağlayamazdı. 8 Ekim'i 9 Ekim'e bağlayan o meşum gecede, Maraz'ın sekiz yılda inşa ettiği tüm finans kalesi tam sekiz saat içinde yerle bir oldu.",
    content: [
      "Her şey saat 22:15'te başladı. MASAK'ın acil koduyla BDDK üzerinden gönderdiği tedbir kararı, gece nöbetçi mahkeme tarafından aniden yürürlüğe sokuldu. Maraz'ın kontrolündeki 18 paravan şirketin yurt içi bankalardaki toplam 1.4 milyar TL tutarındaki mevduatı tek bir tuşla bloke edildi. Ancak asıl darbe devletten değil, arkasındaki suç konsorsiyumundan geldi.",
      "Saat 23:40 sularında, Maraz’ın Esenyurt’taki 12 bin metrekarelik merkez tekstil ve lojistik antreposuna plakasız 5 minibüsle gelen silahlı şahıslar girdi. Güvenlik kameralarına yansıyan görüntülerde, içerideki 'Gölge Sunucu Odası'nın balyozlarla parçalandığı, kasalardaki nakit paraların ve kıymetli evrakların valizlere doldurulduğu görüldü. Olaydan yarım saat sonra depoda büyük bir yangın çıktı; kumaş balyaları tutuşurken yüz binlerce liralık sahte fatura arşivi küle döndü.",
      "Aynı dakikalarda sanal alemde de kanlı bir tasfiye yaşanıyordu. Maraz'ın offshore kripto havuzlarında tutulan ve toplam değeri 185 milyon USDT (yaklaşık 6.5 milyar TL) olan cüzdanların özel anahtarları (private keys), içeriden bir köstebek tarafından boşaltıldı. Kripto analistleri, cüzdan bakiyelerinin 14 dakika içinde 'Tornado Cash' benzeri mikserler üzerinden 450 farklı anonim adrese bölündüğünü tespit etti.",
      "Sabaha karşı saat 03:00'te Maraz'ın lüks giyim siteleri çöktü; mağazaların camlarına haciz memurlarının değil, alacaklı mafya gruplarının 'Bu mülk rehindir' tehdit notları asıldı. 8 yıl süren debdebe, sadece sekiz saat içinde sıfırlandı. Maraz, elinde kalan tek sermayenin canı ve gizli bir çantadaki son devir belgeleri olduğunu o gece anladı."
    ],
    keyQuotes: [
      "Saat 22:15'te bankalar kilitlendi; 23:40'ta depolar basıldı; 03:00'te ise kripto cüzdanları 14 dakika içinde tamamen sıfırlandı.",
      "Devletin dokunulmazlık sebebiyle el süremediği adama, kendi ortakları sabaha kadar tek kuruş bırakmadı."
    ],
    evidenceNote: {
      code: "İTFAİYE-RAPOR-110",
      description: "Esenyurt lojistik merkezindeki şüpheli kimyasal yangın ve kundaklama raporu."
    },
    highlightStat: {
      value: "8 Saat",
      label: "Tüm İmparatorluğun Çöküş Süresi"
    }
  },
  {
    id: "bolum-4",
    number: 4,
    title: "Gölge Borsacıya Geceyarısı Devri: Son Kırıntıların Satışı",
    subtitle: "Kalamış Marina açıklarındaki lüks yatta gerçekleşen gizli pazarlık: Kalan son gayrimenkuller, gümrük konteynerleri ve şirket hisseleri kime devredildi?",
    readingTimeMinutes: 7,
    leadParagraph: "Her şeyini kaybeden bir adam ya teslim olur ya da elinde kalan son kanlı paraları satıp kaçış bileti satın alır. Maraz ikincisini seçti. Gece saat 03:40'ta Kadıköy Kalamış açıklarında demirli 'Vespera' isimli lüks motoryatta, yeraltı dünyasının en karanlık figürlerinden biriyle masaya oturdu.",
    content: [
      "Karşısındaki isim, Balkanlar ve Ortadoğu hattında 'Akrebi' lakabıyla tanınan, uluslararası kara para ve silah kaçakçılığı koridorunun gizli kasası olarak bilinen uluslararası bir kara borsacıydı. Akrebi, zor durumdaki suç örgütü liderlerinin sıkışmış mülklerini yok pahasına kapatmasıyla nam salmıştı.",
      "Soruşturma birimlerinin ele geçirdiği el yazısı 'Gizli İntikal Protokolü'ne göre pazarlık tam 55 dakika sürdü. Maraz, devletin henüz el koyamadığı veya üçüncü derece akrabaları üzerine kayıtlı olan; Merter’deki 2 tekstil fabrikası arsasını, gümrük antrepolarında bekleyen ve içinde kayıt dışı lüks kumaş bulunan 38 konteynerin konşimento haklarını, Dubai'deki bir serbest bölge şirketinin hisselerini ve elindeki 4 adet 'soğuk donanım cüzdan' erişim şifresini Akrebi’ye devretti.",
      "Bunun karşılığında Maraz’a ne verildi? İstihbarat kaynaklarına göre Akrebi, bu devir karşılığında Maraz’a piyasa değeri yaklaşık 850 milyon TL olan varlıklar için yalnızca 3 milyon Amerikan doları nakit, 4 adet farklı ülkelere ait sahte biyometrik pasaport ve Karadeniz üzerinden güvenli bir tahliye koridoru taahhüt etti.",
      "Devir sözleşmesi hiçbir resmi noterde yapılmadı. İki tarafın da parmak izleri ve kanlı mühürleriyle imzalanan protokol, bir kurye aracılığıyla İsviçre'deki gizli bir emanet kasasına yollandı. Maraz masadan kalktığında artık ne bir mağaza sahibiydi ne de bir iş insanı; sadece sırtında hedef tahtası olan çıplak bir firariydi."
    ],
    keyQuotes: [
      "850 milyon liralık gayrimenkul ve gümrük konteyneri hakları, üç bavul dolusu dolar ve bir sahte pasaport karşılığında bir gecede el değiştirdi.",
      "Akrebi ona sadece bir kaçış koridoru satmadı; Maraz'ın geçmişini de satın alıp sildi."
    ],
    evidenceNote: {
      code: "MİT-ASAYİŞ-TAPE-88",
      description: "Kalamış Marina açıklarındaki yatta yapılan pazarlığa ait ses kaydı tapesi dökümü."
    },
    highlightStat: {
      value: "850 Milyon ₺",
      label: "Gölge Borsacıya Aktarılan Son Varlık"
    }
  },
  {
    id: "bolum-5",
    number: 5,
    title: "Hayalet Sinyal: Maraz Şu An Nerede?",
    subtitle: "Rumeli Feneri'nde kesilen son cep telefonu baz istasyonu sinyali, terk edilmiş zırhlı cipler ve 5 olası kaçış rotası.",
    readingTimeMinutes: 6,
    leadParagraph: "9 Ekim sabahı saat 05:14'te Maraz'ın kullandığı kriptolu telefonun son sinyali, İstanbul Boğazı'nın kuzey çıkışında, Sarıyer Rumeli Feneri yakınlarındaki ıssız bir koydan alındı. Ondan sonra Maraz, sanki yeryüzünden tamamen silindi.",
    content: [
      "Jandarma ve Sahil Güvenlik ekipleri sabah saat 07:00 sularında kayalıkların kenarında motoru hâlâ sıcak olan siyah renkli, kurşun geçirmez Mercedes G-Wagon marka bir araç buldu. Aracın içinde Maraz'a ait üç farklı takım elbise, kırılmış SIM kartlar, yakılmış bir dizüstü bilgisayarın anakartı ve torpido gözünde yarısı içilmiş bir şişe İtalyan şarabı vardı. Ancak şahsın kendisine dair hiçbir biyolojik ize rastlanmadı.",
      "Şu an Emniyet Genel Müdürlüğü, MİT ve Interpol’ün masasında 5 farklı kaçış senaryosu bulunuyor. Birinci ve en güçlü senaryo; Akrebi'nin ayarladığı Gürcistan bandıralı bir yük gemisiyle Karadeniz'e açılarak Batum veya Abhazya kıyılarına ulaştığı yönünde. Batum'daki bazı kumarhane çevrelerinde Maraz'a çok benzeyen bir kişinin zırhlı bir konvoy eşliğinde görüldüğü iddia edildi.",
      "İkinci senaryo ise Ege üzerinden bir sürat teknesiyle Yunanistan’ın Sisam adasına, oradan da sahte Malta pasaportuyla Karadağ veya Sırbistan'a geçtiği yönünde. Karadağ, son yıllarda Türk organize suç örgütü liderlerinin en yoğun sığındığı adreslerin başında geliyor.",
      "Üçüncü ihtimal ise Dubai: Kara borsacı Akrebi'nin sağladığı özel jet koridoruyla Birleşik Arap Emirlikleri'ne giriş yaptığı ve altın borsasında yeni bir kimlikle saklandığı iddia ediliyor. Savcılık, dosyadaki dokunulmazlık engeline rağmen 'Kırmızı Bülten' çıkarılması için Adalet Bakanlığı Uluslararası Hukuk Genel Müdürlüğü'ne acil başvuru yaptı. Ancak dosya bürokratik masalarda bekletilmeye devam ediyor."
    ],
    keyQuotes: [
      "Rumeli Feneri'ndeki terk edilmiş kurşun geçirmez cipin motoru hâlâ sıcaktı; sanki sahibi birkaç saniye önce havanın içinde eriyip gitmişti.",
      "Ne sınır kapısında kayıt var ne havalimanında. Maraz, ardında milyarlarca liralık enkaz bırakıp bir hayalete dönüştü."
    ],
    evidenceNote: {
      code: "SG-RADAR-2024-KUZEY",
      description: "05:22'de Sarıyer açıklarından kuzeye seyreden kayıtsız sürat teknesi radar izi."
    },
    highlightStat: {
      value: "05:14",
      label: "Maraz'ın Alınan Son Telefon Sinyali Saati"
    }
  },
  {
    id: "bolum-6",
    number: 6,
    title: "Geriye Kalan Enkaz: Atölye Emekçileri, Kuryeler ve Sahte Esnaf",
    subtitle: "Milyarlar buharlaşırken aylardır maaş alamayan 480 tekstil işçisi ve kimlikleri çalınarak şirket açılan genç kuryelerin dramı.",
    readingTimeMinutes: 5,
    leadParagraph: "Manşetler lüks butiklerden, mafya hesaplaşmalarından ve diplomatik dokunulmazlıktan bahsederken; vitrinlerin ardındaki gerçek kurbanlar Merter ve Güngören'in bodrum katlarındaki dikiş makinelerinin başındaydı.",
    content: [
      "Maraz Tekstil'in fason üretimini yapan atölyelerde çalışan 480 işçi, son üç aydır tek kuruş maaş alamamıştı. Şirketin bir gecede çökmesi ve depoların kundaklanmasıyla birlikte, işçilerin kıdem tazminatları ve içeride kalan milyonlarca liralık alacakları bir anda yok hükmüne geçti. Bir tekstil ustası, gazetemize yaptığı açıklamada: 'Bize her gün İtalyan markalarına elbise diktiğimizi söylüyorlardı. Gece gündüz çalıştık. Meğer biz elbise değil, kara paranın paravan kumaşını dikiyormuşuz' diyerek gözyaşlarına boğuldu.",
      "Daha da vahimi, 'Hayalet E-Ticaret' ağında kimlikleri kullanılan yüzlerce genç motokurye ve üniversite öğrencisinin başına gelenlerdi. Maraz'ın avukatları ve insan kaynakları birimi, işe alım bahanesiyle topladıkları kimlik fotokopileri üzerinden 85 farklı sahte limited şirket ve şahıs şirketi kurmuştu. Şirketlerin çöküşüyle birlikte, hayatında hiç şirket yönetmemiş 20'li yaşlardaki gençlerin kapısına milyonlarca liralık vergi cezaları, sahte fatura tebligatları ve haciz ihbarnameleri yağmaya başladı.",
      "Savcılık koridorları şimdi bu mağdur gençlerin suç duyurularıyla dolup taşıyor. Ancak karşılarında ne muhatap alacakları bir Maraz var, ne el konulacak bir şirket hesabı... Tekstil baronunun arkasında bıraktığı enkaz, sadece organize suçun değil, kontrolsüz bir vicdansızlığın da resmi olarak tarihe geçti."
    ],
    keyQuotes: [
      "Bize İtalyan markalarına fason diktiğimizi söylüyorlardı. Meğer biz elbise değil, mafyanın kara para tezgâhını dikiyormuşuz.",
      "22 yaşında bir üniversite öğrencisinin adına 140 milyon liralık naylon fatura şirketi açmışlar; çocuk şimdi icra memurlarıyla boğuşuyor."
    ],
    evidenceNote: {
      code: "SGK-ŞİKAYET-2024/77",
      description: "480 tekstil işçisi ve 85 kuryenin ortak dolandırıcılık ve gasp şikayet dilekçesi."
    },
    highlightStat: {
      value: "480 İşçi",
      label: "Maaşsız ve Güvencesiz Kalan Emekçi Sayısı"
    }
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "tl-1",
    date: "12 Mart 2018",
    title: "İlk Butik Açılışı: Nişantaşı 'Maraz Haute Couture'",
    category: "ticaret",
    description: "Cemiyet hayatından ünlü isimlerin katılımıyla Nişantaşı Abdi İpekçi Caddesi'nde ilk lüks giyim mağazası açıldı. Şirket sermayesi 500 bin TL olarak gösterildi.",
    impactLevel: "orta",
    evidenceRef: "Ticaret Sicil Gazetesi Sayı: 9541"
  },
  {
    id: "tl-2",
    date: "4 Kasım 2020",
    title: "E-Ticaret Ağının Kuruluşu ve 'Gölge Sepet' Yazılımı",
    category: "ticaret",
    description: "14 farklı lüks giyim alan adı tescil edildi. Romanya ve Ukrayna merkezli sunucularda çalışan otomatik sahte sipariş ve hayali iade yazılımı devreye sokuldu.",
    impactLevel: "yuksek",
    evidenceRef: "BTK ve Siber Suçlar IP Log Kayıtları"
  },
  {
    id: "tl-3",
    date: "18 Haziran 2022",
    title: "Fahri Konsolosluk ve Dokunulmazlık Kalkanının Edinilmesi",
    category: "yargi",
    description: "Maraz, bir Batı Afrika ülkesinin İstanbul Fahri Başkonsolosu unvanını alarak diplomatik pasaport edindi. Eski siyasi temasları üzerinden dokunulmazlık zırhını sağlamlaştırdı.",
    impactLevel: "kritik",
    evidenceRef: "Dışişleri ve Konsolosluk Sicil Belgesi"
  },
  {
    id: "tl-4",
    date: "15 Ocak 2024",
    title: "MASAK İlk Kırmızı Alarmı Verdi: 2.8 Milyar TL Şüpheli Hareket",
    category: "yargi",
    description: "Mali Suçları Araştırma Kurulu, butiklerin banka hesaplarında günlük ciro ile fiziksel stok girişi arasında %1800'lük tutarsızlık saptadı.",
    impactLevel: "yuksek",
    evidenceRef: "MASAK Rapor No: 2024/MK-119"
  },
  {
    id: "tl-5",
    date: "20 Eylül 2024",
    title: "462 Sayfalık İddianame Hazırlandı, Gözaltı Kararı Çıktı",
    category: "yargi",
    description: "İstanbul Cumhuriyet Başsavcılığı örgütlü suçlar ve kara para aklama suçlamasıyla 38 yıl hapis istemli iddianameyi mahkemeye sundu.",
    impactLevel: "kritik",
    evidenceRef: "İstanbul 14. Ağır Ceza Mahkemesi Dosya: 2024/774"
  },
  {
    id: "tl-6",
    date: "22 Eylül 2024",
    title: "Dokunulmazlık Krizi: Maraz Adliye Kapısından Serbest Bırakıldı",
    category: "yargi",
    description: "Avukatların sunduğu diplomatik şerh ve Meclis karma komisyonu fezleke itirazı nedeniyle Sulh Ceza Hakimliği tutuklama talebini reddetti. Maraz serbest kaldı.",
    impactLevel: "kritik",
    evidenceRef: "Sulh Ceza Karar Tutanağı No: 2024/602 D.İş"
  },
  {
    id: "tl-7",
    date: "8 Ekim 2024 - 22:15",
    title: "Banka Hesaplarına Ani Bloke: Çöküşün Fitili Ateşlendi",
    category: "cokus",
    description: "Nöbetçi mahkeme MASAK'ın acil talebiyle Maraz'ın 18 paravan şirketinin 1.4 milyar TL mevduatına tedbir koydu.",
    impactLevel: "kritik",
    evidenceRef: "BDDK & TCMB Acil Bloke Bildirimi"
  },
  {
    id: "tl-8",
    date: "8 Ekim 2024 - 23:40",
    title: "Esenyurt Lojistik Depolarında Silahlı Baskın ve Şüpheli Yangın",
    category: "cokus",
    description: "Alacaklı mafya grupları ve konsorsiyum ortakları sunucu odalarını bastı. Kısa süre sonra ana antrepoda kimyasal yangın başlatıldı, tüm arşiv yandı.",
    impactLevel: "kritik",
    evidenceRef: "Emniyet Olay Yeri İnceleme Tutanak No: 884"
  },
  {
    id: "tl-9",
    date: "9 Ekim 2024 - 01:10",
    title: "185 Milyon USDT Kripto Cüzdanı 14 Dakikada Boşaltıldı",
    category: "cokus",
    description: "Merkeziyetsiz soğuk cüzdanlardaki varlıklar mikser havuzlarına transfer edilerek 450 anonim cüzdana dağıtıldı. İçeriden bir köstebek şüphesi doğdu.",
    impactLevel: "yuksek",
    evidenceRef: "Zincir Üstü Blockchain Analiz Raporu"
  },
  {
    id: "tl-10",
    date: "9 Ekim 2024 - 03:40",
    title: "Kalamış'ta Geceyarısı Pazarlığı: Kalan Her Şey 'Akrebi'ye Devredildi",
    category: "devir",
    description: "Maraz, Kalamış açıklarındaki yatta kara borsacı Akrebi ile buluştu. Fabrika arsaları, gümrükteki 38 konteyner ve offshore hisseler 3 milyon dolar ve kaçış rotası karşılığı devredildi.",
    impactLevel: "kritik",
    evidenceRef: "Gizli El Yazısı İntikal Protokolü"
  },
  {
    id: "tl-11",
    date: "9 Ekim 2024 - 05:14",
    title: "Son Sinyal: Rumeli Feneri'nde Terk Edilmiş Zırhlı Cip",
    category: "firar",
    description: "Kriptolu telefonun baz sinyali Sarıyer açıklarında kesildi. Plakasız zırhlı Mercedes G-Wagon motoru çalışır vaziyette kayalıklarda bulundu. Maraz sırra kadem bastı.",
    impactLevel: "kritik",
    evidenceRef: "Sarıyer İlçe Jandarma Komutanlığı Tutanak"
  },
  {
    id: "tl-12",
    date: "14 Ekim 2024 (Şu Anda)",
    title: "Interpol Kırmızı Bülten Beklemede, Rotalar Taranıyor",
    category: "firar",
    description: "Batum, Dubai, Belgrad ve Beyrut hattında istihbarat çalışmaları sürüyor. Dokunulmazlık tartışmaları TBMM gündeminde infial yaratmaya devam ediyor.",
    impactLevel: "yuksek",
    evidenceRef: "EGM Dış İlişkiler Dairesi Talep Yazısı"
  }
];

export const CLASSIFIED_DOCUMENTS: ClassifiedDocument[] = [
  {
    id: "doc-masak-01",
    title: "MASAK Mali İstihbarat Değerlendirme Raporu",
    docNumber: "MASAK-2024/MK-891-GİZ",
    date: "19 Eylül 2024",
    agency: "MASAK",
    classification: "ÇOK GİZLİ",
    summary: "E-Ticaret portallarındaki sanal sipariş ve iade trafiğinin kara para aklama amaçlı kullanıldığına dair ayrıntılı mali akış şeması ve tespitler.",
    rawText: `MALİ SUÇLARI ARAŞTIRMA KURULU BAŞKANLIĞI
SORUŞTURMA VE İSTİHBARAT DAİRESİ
SAYI: 2024/MK-891-GİZ
KONU: Maraz Tekstil & E-Ticaret A.Ş. ve İltisaklı Hesaplar

1. Yapılan incelemelerde şüpheli Maraz K. adına kayıtlı ve paravan üçüncü şahıslar üzerine kurulu 14 e-ticaret alan adında son 12 ay içerisinde toplam 4.240.000.000 TL tutarında sanal kart çekimi yapıldığı saptanmıştır.
2. İşlemlerin %94.8'i sipariş verildikten 48 saat sonra "iade/iptal" olarak kaydedilmiş, ancak para iadeleri siparişi veren yabancı kaynaklı kartlara değil, İstanbul Kapalıçarşı ve Merter kaynaklı 18 paravan döviz bürosu ve altın hesabına yönlendirilmiştir.
3. [KARARTILMIŞ BÖLÜM: Şüphelinin elinde bulundurduğu diplomatik dokunulmazlık şerhi ve konsolosluk dokunulmazlığı nedeniyle banka teftiş memurlarının yerinde denetim yapmasına izin verilmemiştir.]
4. NETİCE: Söz konusu ciro hareketlerinin reel tekstil ihracatı veya perakende giyim faaliyetiyle bağdaşmadığı, organize suç örgütlerinin yasadışı bahis ve kaçakçılık gelirlerinin aklanması mahiyetinde olduğu mütalaa olunur.`,
    redactedPhrases: [
      "Şüphelinin elinde bulundurduğu diplomatik dokunulmazlık şerhi ve konsolosluk dokunulmazlığı nedeniyle banka teftiş memurlarının yerinde denetim yapmasına izin verilmemiştir.",
      "Kapalıçarşı'daki gizli altın mahzenleri ve Akrebi kod adlı aracının hesap numaraları"
    ],
    notes: "Raporun altındaki resmi MASAK müfettişi imzası ve mühürleri soruşturma dosyasına intikal ettirilmiştir."
  },
  {
    id: "doc-kom-tape-02",
    title: "EGM KOM Dairesi Ortam Dinleme ve Tape Çözümü",
    docNumber: "KOM-TAPE-2024-KOD:114",
    date: "9 Ekim 2024 - Saat 03:42",
    agency: "EGM KOM",
    classification: "KOVUŞTURMA GİZLİLİĞİ",
    summary: "Kalamış Marina açıklarındaki lüks yatta Maraz ile kara borsacı 'Akrebi' arasında geçen son devir pazarlığının ses kaydı.",
    rawText: `T.C. İÇİŞLERİ BAKANLIĞI
EMNİYET GENEL MÜDÜRLÜĞÜ KAÇAKÇILIK VE ORGANİZE SUÇLARLA MÜCADELE DAİRESİ
ORTAM DİNLEME KAYIT TUTANAĞI
KOD ADI: İPEK KAPANI / HEDEF ŞAHIS: MARAZ K.

TARİH / SAAT: 09.10.2024 / 03:42 - 04:08
YER: Kalamış Marina Açıkları, 'Vespera' İsimli Özel Motoryat
KATILIMCILAR: [X1] Maraz K., [X2] 'Akrebi' Kod adlı Ş.B., [X3] Kimliği Meçhul Silahlı Şahıs

[03:42:15] X1 (Maraz): "Depoları ateşe vermişler Akrep. Bankalar kilitli. Masak sabahı beklemedi, savcı düğmeye basmış."
[03:43:02] X2 (Akrebi): "Ben sana dedim Maraz, o dokunulmazlık seni sokakta korur, bizimkilerin gazabından korumaz. 185 milyonluk coin havuzunu kim boşalttı biliyor musun? Senin o çok güvendiğin yazılımcı çocuk."
[03:44:20] X1 (Maraz): "Bana akıl verme, bana çıkış ver! Elimde Merter'deki iki fabrika arazisinin vekaleti var. Gümrükte 38 konteyner mal bekliyor, her birinin içi 2 milyon dolar. Dubai'deki şirketin anahtarları burada."
[03:45:50] X2 (Akrebi): "Hepsini alırım. Ama o dediğin konteynerler şu an devletin radarında. Ben onları gümrükten çekmek için yarısını rüşvete dağıtacağım. Sana temiz 3 milyon nakit veririm, üç tane de temiz çipli pasaport. Biri Paraguay, biri Gürcü, biri Karadağ."
[03:47:10] X1 (Maraz): "3 milyon ne demek lan?! Sadece kumaşların astarı 10 milyon eder!"
[03:48:00] X2 (Akrebi): "İster al ister sabahı bekle Sarıyer'de ensene binsinler. Karadeniz'de bekleyen kömür kosteri sabah beşte demir alıyor. Bindin bindin, binmedin Vatan Emniyet'in bodrumunda çürürsün o dokunulmazlık belgenle."
[03:49:15] X1 (Maraz): "...Tamam. Protokolü yaz. Konşimentoları çantaya koydum. Çantayı al, beni Fener'deki koya bırakın."`,
    redactedPhrases: [
      "Senin o çok güvendiğin yazılımcı çocuk.",
      "Gümrükten çekmek için yarısını rüşvete dağıtacağım.",
      "Sarıyer'de ensene binsinler. Karadeniz'de bekleyen kömür kosteri sabah beşte demir alıyor."
    ],
    notes: "Kayıt deniz polisinin sinyal bozucuya rağmen sınırda yakaladığı lazer mikrofon dinlemesiyle deşifre edilmiştir."
  },
  {
    id: "doc-tbmm-03",
    title: "TBMM Adalet-Anayasa Karma Komisyonu Fezleke Şerhi",
    docNumber: "TBMM-FZL-2024/412",
    date: "25 Eylül 2024",
    agency: "TBMM ADALET",
    classification: "GİZLİ",
    summary: "Maraz'ın geçmiş dönem ve uluslararası diplomatik fahri unvanlarına istinaden yargılama ve gözaltı işlemlerinin durdurulması mütalaası.",
    rawText: `TÜRKİYE BÜYÜK MİLLET MECLİSİ BAŞKANLIĞI
ANAYASA VE ADALET KARMA KOMİSYONU
FEZLEKE İNCELEME ŞERHİ NO: 2024/412

Hakkında "Silahlı Örgüt Kurma ve Kara Para Aklama" isnadıyla dosya tanzim edilen şüpheli Maraz K.'nın, Viyana Diplomatik İlişkiler Sözleşmesi 31. Maddesi kapsamındaki muafiyet iddiaları ve ilgili devletle akdedilen fahri konsolosluk statüsü gereğince;
Karma Komisyon tarafından dokunulmazlığın kaldırılmasına dair nihai Genel Kurul kararı ittihaz olununcaya değin, Ceza Muhakemesi Kanunu'nun 100. maddesindeki tutuklama ve adli kontrol tedbirlerinin tatbik edilemeyeceği, şahsın zorla getirme kararlarından muaf tutulması gerektiği bildirilmiştir.`,
    redactedPhrases: [
      "ilgili devletle akdedilen fahri konsolosluk statüsü gereğince;",
      "şahsın zorla getirme kararlarından muaf tutulması gerektiği bildirilmiştir."
    ],
    notes: "Bu fezleke kararı, kamuoyunda infial uyandıran tahliye ve kaçış sürecinin en kritik yasal dayanağını teşkil etti."
  },
  {
    id: "doc-protokol-04",
    title: "Geceyarısı Gayriresmi Varlık Devir Sözleşmesi",
    docNumber: "GİZLİ-DEVİR-2024-09",
    date: "9 Ekim 2024 - Saat 04:15",
    agency: "İST. BAŞSAVCILIK",
    classification: "ÖZEL İSTİHBARAT",
    summary: "Kalamış açıklarındaki yatta ıslak imzayla el yazısıyla düzenlenen ve kriminal polisin ele geçirdiği mülk devir protokolü.",
    rawText: `PROTOKOL VE İNTİKAL SENEDİ (GİZLİDİR)

İşbu protokol, 9 Ekim 2024 gecesi taraflar arasında akdedilmiştir.
DEVREDEN: Maraz K.
DEVRALAN: 'Akrebi' namıyla maruf Ş.B.

1. Devreden Maraz K., Merter Ada 412 Parsel 8'de kain 4 katlı tekstil fabrikasını ve Esenyurt'taki 12 dönüm antrepo hissesini gayrikabili rücu olarak Ş.B.'ye terk ve ferağ etmiştir.
2. Ambarlı ve Haydarpaşa Limanı'nda bekleyen 38 adet 40'lık tekstil ve ipek konteynerinin konşimento senetleri bila-bedel devredilmiştir.
3. Devralan Ş.B., işbu devirler karşılığında nakden ve elden 3.000.000 (Üç Milyon) ABD Doları teslim etmiş olup, Karadeniz hattında emniyetli geçişi ve 3 adet pasaport teminini taahhüt eylemiştir.
4. Bu protokolün ifşası halinde taraflar yeraltı ahkamı mucibince sorumlu olacaktır.
[İMZALAR VE PARMAK İZLERİ]`,
    redactedPhrases: [
      "gayrikabili rücu olarak Ş.B.'ye terk ve ferağ etmiştir.",
      "Karadeniz hattında emniyetli geçişi ve 3 adet pasaport teminini taahhüt eylemiştir.",
      "taraflar yeraltı ahkamı mucibince sorumlu olacaktır."
    ],
    notes: "Protokolün aslı, baskın yapılan bir Avcılar rezidansındaki çelik kasadan ele geçirilmiştir."
  }
];

export const ESCAPE_ROUTES: EscapeRoute[] = [
  {
    id: "route-batumi",
    name: "Rota 1: Karadeniz - Batum / Tiflis Koridoru",
    destination: "Batum, Gürcistan & Tiflis",
    transitMethod: "Kayıtdışı Kömür Kosteri / Sürat Teknesi",
    probabilityScore: 78,
    lastKnownSignalDate: "9 Ekim 2024 - 05:22",
    status: "Yüksek İhtimal",
    intelligenceReport: "Rumeli Feneri açıklarında sinyali kesilen sürat teknesinin Karadeniz'e açılan Ukrayna/Gürcistan bandıralı bir yük gemisiyle buluştuğu radar kayıtlarına girdi. Batum'daki lüks bir kumarhane otelinde Maraz'a tıpatıp benzeyen bir şahsın görüldüğü yönünde Türk Emniyeti'ne 4 ayrı ihbar ulaştı.",
    checkpoints: ["Rumeli Feneri Koyu", "Karadeniz Uluslararası Suları", "Poti Limanı Dış Açıkları", "Batum VIP Sınır Koridoru"],
    riskFactor: "Gürcistan ile suçluların iadesi anlaşması var ancak yerel rüşvet çarkı iade sürecini yıllarca sürüncemede bırakabiliyor."
  },
  {
    id: "route-balkans",
    name: "Rota 2: Ege - Yunan Adaları & Karadağ (Montenegro)",
    destination: "Budva & Podgorica, Karadağ",
    transitMethod: "Lüks Yat & Sahte Malta Biyometrik Pasaportu",
    probabilityScore: 64,
    lastKnownSignalDate: "10 Ekim 2024 - 14:00",
    status: "Soruşturuluyor",
    intelligenceReport: "Akrebi'nin kontrolündeki Balkan klanlarının Budva ve Kotor'daki gayrimenkullerine son 48 saatte olağanüstü koruma takviyesi yapıldığı belirlendi. Sahte kimlikle Yunanistan'ın Sakız adasına çıkış yapılıp oradan özel charter uçuşla Karadağ'a ulaşıldığı iddiası araştırılıyor.",
    checkpoints: ["Çeşme / Alaçatı Gizli Marina", "Sisam / Sakız Transit", "Atina Havalimanı Özel Terminal", "Tivat / Kotor Limanı"],
    riskFactor: "Karadağ, son yıllarda kırmızı bültenli Türk organize suç örgütü liderlerinin en yoğun sığındığı adres haline geldi."
  },
  {
    id: "route-dubai",
    name: "Rota 3: Dubai Altın & Serbest Bölge Koridoru",
    destination: "Dubai & Abu Dabi, BAE",
    transitMethod: "Özel Kargo Jeti & Altın İhracatı Kuryesi",
    probabilityScore: 52,
    lastKnownSignalDate: "11 Ekim 2024",
    status: "Soruşturuluyor",
    intelligenceReport: "Maraz'ın daha önce Dubai DMCC Serbest Bölgesi'nde kurduğu tekstil ve külçe altın aracılık şirketine son günlerde yüklü miktarda kripto fon girişi saptandı. Akrebi'nin özel bir kargo uçağıyla şahsı Dubai'ye aktarmış olabileceği değerlendiriliyor.",
    checkpoints: ["Beyrut Refik Hariri Transit", "Şarika Kargo Havalimanı", "DMCC Finans Kuleleri"],
    riskFactor: "Dubai emirlik makamları uluslararası diplomatik kriz çıkmadıkça yerel serbest bölge yatırımlarını koruma eğiliminde."
  },
  {
    id: "route-beirut",
    name: "Rota 4: Doğu Akdeniz & Beyrut Hattı",
    destination: "Beyrut, Lübnan",
    transitMethod: "Balıkçı Teknesi & Suriye Sınır Geçişi",
    probabilityScore: 35,
    lastKnownSignalDate: "Belirsiz",
    status: "Sahte İz İhtimali",
    intelligenceReport: "İskenderun ve Mersin limanlarında Maraz adına kayıtlı paravan ihracat şirketlerinin hareketlendiği bildirildi. Ancak istihbarat birimleri bu bilginin polisi şaşırtmak amacıyla Akrebi tarafından kasıtlı olarak sızdırılmış bir dezenformasyon olabileceğini düşünüyor.",
    checkpoints: ["Mersin Serbest Bölge", "Lazkiye Kıyı Şeridi", "Beyrut Bekaa Vadisi"],
    riskFactor: "Bölgedeki istikrarsızlık nedeniyle resmi teyit almak son derece güç."
  },
  {
    id: "route-latam",
    name: "Rota 5: Güney Amerika (Paraguay / Montevideo)",
    destination: "Asunción, Paraguay",
    transitMethod: "Üçüncü Ülke Aktarmalı Diplomatik Kurye",
    probabilityScore: 41,
    lastKnownSignalDate: "İddia Aşamasında",
    status: "Soruşturuluyor",
    intelligenceReport: "Akrebi ile yapılan geceyarısı pazarlığında ele geçen 'Paraguay diplomatik pasaportu' ayrıntısı bu rotayı canlandırdı. Suçluların iadesinin neredeyse imkansız olduğu Latin Amerika üçgenine kaçmış olma ihtimali İnterpol tarafından masada tutuluyor.",
    checkpoints: ["Belgrad Nikola Tesla", "Sao Paulo Guarulhos", "Ciudad del Este"],
    riskFactor: "Kıtalararası firarda kimlik değiştirmek en kolay seçeneklerden biri."
  }
];

export const WIRETAP_TAPE: WiretapTape = {
  id: "tape-kalamis-full",
  tapeCode: "KOM-TAPE-2024-KOD:114",
  recordedAt: "9 Ekim 2024, 03:42 TSİ",
  participants: ["Maraz K. (Tekstil Patronu / Firari)", "Akrebi (Gölge Kara Borsacı)", "Yat Kaptanı"],
  location: "Kadıköy Kalamış Marina 2 Mil Açıkları - 'Vespera' Yatı",
  audioDuration: "02:18",
  transcript: [
    { speaker: "Maraz", text: "Depoları ateşe vermişler Akrep! Bankalar kilitli. MASAK sabahı beklemedi, savcı düğmeye basmış.", timeOffset: "00:08" },
    { speaker: "Akrebi", text: "Ben sana dedim Maraz... O dokunulmazlık seni sokakta korur, bizimkilerin gazabından korumaz.", timeOffset: "00:22" },
    { speaker: "Akrebi", text: "185 milyonluk coin havuzunu kim boşalttı biliyor musun? Senin o çok güvendiğin yazılımcı çocuk.", timeOffset: "00:36" },
    { speaker: "Maraz", text: "Bana akıl verme, bana çıkış ver! Elimde Merter'deki iki fabrika arazisinin vekaleti var. Gümrükte 38 konteyner mal bekliyor!", timeOffset: "00:54" },
    { speaker: "Akrebi", text: "Hepsini alırım. Ama o konteynerler şu an devletin radarında. Ben onları gümrükten çekmek için yarısını rüşvete dağıtacağım.", timeOffset: "01:14" },
    { speaker: "Akrebi", text: "Sana temiz 3 milyon nakit veririm, üç tane de temiz çipli pasaport. Biri Paraguay, biri Gürcü, biri Karadağ.", timeOffset: "01:32" },
    { speaker: "Maraz", text: "3 milyon ne demek lan?! Sadece kumaşların astarı 10 milyon eder!", timeOffset: "01:48" },
    { speaker: "Akrebi", text: "İster al ister sabahı bekle Sarıyer'de ensene binsinler. Karadeniz'de koster sabah beşte demir alıyor.", timeOffset: "02:01" },
    { speaker: "Maraz", text: "...Tamam. Protokolü yaz. Çantayı al, beni Fener'deki koya bırakın.", timeOffset: "02:12" }
  ],
  officerNote: "Dinleme Lazer Mikrofon ve Sahil Güvenlik dinleme şamandırası vasıtasıyla kayda geçirilmiştir. Şahısların fiziki takibi denizde çıkan yoğun sis ve telsiz karartması sebebiyle kaybedilmiştir."
};

export const LIVE_BULLETINS: LiveBulletin[] = [
  {
    id: "bl-1",
    timestamp: "10 Dakika Önce",
    urgency: "FLAŞ",
    headline: "Adalet Bakanlığı'ndan Kırmızı Bülten Açıklaması",
    summary: "Bakanlık kaynakları, Maraz hakkında hazırlanan Kırmızı Bülten dosyasının Interpol Genel Sekreterliği'ne ulaştırıldığını ancak dokunulmazlık itirazı incelemesinin devam ettiğini bildirdi.",
    source: "Ankara Yargı Muhabirleri"
  },
  {
    id: "bl-2",
    timestamp: "32 Dakika Önce",
    urgency: "SON DAKİKA",
    headline: "Batum Emniyeti'nden 'Gizli Lüks Villa' Baskını İddiası",
    summary: "Gürcistan polisinin Batum sahilindeki bir lüks rezidansa gece yarısı baskın düzenlediği, adreste Türk menşeili kripto donanımları bulunduğu öne sürüldü.",
    source: "Tiflis Ajans Muhabiri"
  },
  {
    id: "bl-3",
    timestamp: "1 Saat Önce",
    urgency: "GELİŞME",
    headline: "Merter'de Kumaşçılar Çarşısı Ayakta: 'Paramızı İstiyoruz'",
    summary: "Maraz'ın karşılıksız çek verdiği 40'tan fazla kumaş toptancısı dernek binasında toplanarak savcılığa toplu dolandırıcılık şikayetinde bulundu.",
    source: "İstanbul Ekonomi Masası"
  },
  {
    id: "bl-4",
    timestamp: "3 Saat Önce",
    urgency: "KULİS",
    headline: "TBMM Kulisi: Fezleke Haftaya Karma Komisyona İnebilir",
    summary: "Muhalefet partilerinin ortak baskısı sonucu, Maraz'ın dosyasının bulunduğu dokunulmazlık fezlekesinin Salı günü komisyon gündemine alınabileceği öğrenildi.",
    source: "Parlamento Büro"
  }
];

export const COLUMNISTS: ColumnistArticle[] = [
  {
    id: "col-1",
    author: "Murat Güvenç",
    role: "Kıdemli Yargı ve Güvenlik Yazarı",
    title: "Dokunulmazlık Bir Firar Lisansı mı?",
    summary: "Hakkında 462 sayfalık suç örgütü iddianamesi bulunan bir şahsın, elini kolunu sallayarak adliyeden çıkıp servetini kara borsacıya devretmesi hukuk tarihimizin en ağır sınavıdır.",
    readTime: "5 dk"
  },
  {
    id: "col-2",
    author: "Doç. Dr. Selin Erdem",
    role: "Adli Bilişim ve Mali Suçlar Uzmanı",
    title: "E-Ticarette 'Gölge Sepetler': Yeni Nesil Aklama",
    summary: "Eskiden bavullarla taşınan kara para artık 50 bin liralık sahte ipek elbise iadeleriyle dijital dünyada yıkanıyor. Maraz olayı sadece buzdağının görünen tepesi.",
    readTime: "6 dk"
  },
  {
    id: "col-3",
    author: "Cenk Vural",
    role: "Organize Suç ve İstihbarat Araştırmacısı",
    title: "Akrebi: Batık Mafya Varlıklarının Akbabası",
    summary: "Kalamış Marina'da Maraz'ın son 850 milyonluk mülkünü 3 milyona kapatan Akrebi kimdir? Balkanlar ile İstanbul arasındaki bu karanlık köprüyü kim koruyor?",
    readTime: "7 dk"
  }
];

export const INITIAL_COMMENTS: ReaderComment[] = [
  {
    id: "comm-1",
    author: "Av. Selim Taner",
    location: "İstanbul Barosu",
    timestamp: "28 dakika önce",
    text: "Dokunulmazlık şerhi adı altında böylesi bir suç örgütü dosyasında gözaltının kaldırılması tam bir hukuk cinayetidir. Viyana Sözleşmesi kişisel suçları ve kara para aklamayı asla himaye etmez.",
    likes: 342,
    isVerifiedJournalist: true
  },
  {
    id: "comm-2",
    author: "Halil İbrahim K.",
    location: "Merter Tekstil Esnafı",
    timestamp: "45 dakika önce",
    text: "Biz bu adama 6 TIR birinci sınıf ipek ve kaşmir verdik. Karşılığında verdiği 18 milyonluk çeklerin hepsi sahte çıktı. Şimdi depoları yaktı, kendisi kaçtı. Bizim batışımızın hesabını kim verecek?",
    likes: 519
  },
  {
    id: "comm-3",
    author: "Zeynep B.",
    location: "Eski Butik Satış Temsilcisi",
    timestamp: "1 saat önce",
    text: "Nişantaşı mağazasında 2 yıl çalıştım. Gelen müşterilerin hiçbiri o elbiseleri giymiyordu. Her gün yüzlerce kutu kargolanıyor gibi yapılıp aynı gün iptal giriliyordu. Bize soru sormayı yasaklamışlardı.",
    likes: 420
  },
  {
    id: "comm-4",
    author: "Emekli Emniyet Müdürü F.A.",
    location: "Ankara",
    timestamp: "2 saat önce",
    text: "O gece Kalamış açıklarında Akrebi ile yapılan buluşma engellenemiyorsa, içeride çok büyük bir istihbarat sızıntısı var demektir. Bu adam Batum'da kalmaz, oradan aktarmayla Karadağ'a geçer.",
    likes: 288,
    isVerifiedJournalist: true
  }
];
