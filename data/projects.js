// tools/build.py üretir, elle düzenleme: content/*.json
window.PROJECTS = [
 {
  "slug": "bitirme-projesi",
  "title": "VR-Teleoperated Quadruped Robotic Platform",
  "label": {
   "tr": "Dört Bacaklı Robot (VR)",
   "en": "Quadruped Robot (VR)"
  },
  "year": "2026",
  "category": {
   "tr": "Mühendislik",
   "en": "Engineering"
  },
  "status": {
   "tr": "Geliştiriliyor",
   "en": "In development"
  },
  "tagline": {
   "tr": "ME 4910/4920 bitirme projesi: VR başlıkla kumanda edilen, 12 serbestlik dereceli dört bacaklı robot (Yaşar Üniversitesi).",
   "en": "ME 4910/4920 capstone: a 12-DOF quadruped robot controlled with a VR headset."
  },
  "description": {
   "tr": "Yaşar Üniversitesi Makina Mühendisliği bölümünde ME 4910 ve ME 4920 dersleri kapsamında yürütülen bitirme projesi. Ekip, VR başlıkla uzaktan kumanda edilen, 12 serbestlik dereceli (bacak başına 3 servo) küçük dört bacaklı bir robot tasarlıyor, üretiyor ve test ediyor. Robot yürürken, eğimde ve itildiğinde dengesini koruyacak şekilde planlanıyor. Bacak geometrisi ve gövde sonlu elemanlar analiziyle doğrulanıyor, yürüyüş ve denge davranışı fizik simülasyonunda deneniyor.",
   "en": "Capstone project run in the Mechanical Engineering department at Yaşar University under ME 4910 and ME 4920. The team designs, builds and tests a small 12-DOF quadruped robot (3 servos per leg) teleoperated with a VR headset. The robot is planned to keep its balance while walking, on slopes and when pushed. Leg geometry and the chassis are validated with finite element analysis, and walking and balance behavior are tested in physics simulation."
  },
  "highlights": {
   "tr": [
    "12-DOF dört bacaklı robot: bacak L1=120mm, L2=80mm, uyluk 9mm, omuz çift rulmanlı",
    "FEA güvenlik faktörleri: baldır 1.5, uyluk 2.4, omuz 2.6, şasi 2.3 (servo stall'ta)",
    "PyBullet crawl simülasyonu: 0.105 m/s, ±10° eğimde 1 kg yükle, ZMP tabanlı planlama",
    "Lazer kesim DXF dosyaları, 3D basım rehberi, montaj/kalibrasyon kılavuzu hazır"
   ],
   "en": [
    "12-DOF quadruped: leg L1=120mm, L2=80mm, 9mm thigh, shoulder on double bearings",
    "FEA safety factors: shin 1.5, thigh 2.4, shoulder 2.6, chassis 2.3 (at servo stall)",
    "PyBullet crawl simulation: 0.105 m/s, 1 kg payload on a ±10° slope, ZMP-based planning",
    "Laser-cut DXF files, 3D printing guide and assembly/calibration manual ready"
   ]
  },
  "tech": {
   "tr": [
    "Fusion 360 (parametrik CAD)",
    "Python (FEA, simülasyon, servo boyutlandırma)",
    "PyBullet",
    "gmsh + scikit-fem",
    "ESP32 (Arduino)",
    "Raspberry Pi 5",
    "ROS/RosBridge (planlanan)",
    "VR (planlanan)",
    "Git (yerel)"
   ],
   "en": [
    "Fusion 360 (parametric CAD)",
    "Python (FEA, simulation, servo sizing)",
    "PyBullet",
    "gmsh + scikit-fem",
    "ESP32 (Arduino)",
    "Raspberry Pi 5",
    "ROS/RosBridge (planned)",
    "VR (planned)",
    "Git (local)"
   ]
  },
  "media": [
   "assets/p/bitirme-projesi/01-54abb700.webp",
   "assets/p/bitirme-projesi/02-ae817c2c.webp"
  ]
 },
 {
  "slug": "winnotch",
  "title": "WinNotch",
  "label": "WinNotch",
  "year": "2026",
  "category": {
   "tr": "Uygulama",
   "en": "App"
  },
  "status": {
   "tr": "Geliştiriliyor",
   "en": "In development"
  },
  "tagline": {
   "tr": "Apple Dynamic Island deneyimini Windows'a taşıyan C# .NET 10 WPF masaüstü uygulaması: medya, bildirimler, zamanlayıcı, sistem durumu, raf, sözler ve daha fazlası.",
   "en": "A C# .NET 10 WPF app that brings Apple's Dynamic Island experience to Windows."
  },
  "description": {
   "tr": "MacBook çentiği / iPhone Dynamic Island benzeri Windows 11 üst çubuğu uygulaması. C# .NET 10 WPF ile yazılmış. Özellikleri: medya kontrolleri (Spotify/web), senkron şarkı sözleri (LRCLIB), Windows ses mikseri ve çıkış değiştirici, iPhone/Bluetooth/DualSense bildirim ve pil HUD'ları, Phone Link üzerinden telefon bildirimleri (ada balonu + geçmiş sayfası), zamanlayıcı/kronometre, sistem sayfası (CPU/GPU/RAM/VRAM/ağ/disk NVML ile), dosya rafı (sürükle-bırak), Caps Lock/klavye dili göstergesi, notlar (yapılacaklar listesi), rahatsız etme modu (manuel+zamanlama+Windows DND), duvar kağıdı değiştirme. Sayfa geçişleri yay fiziğiyle (spring), sekme satırı yerine altta sayfa noktaları (iOS tarzı). Ayarlar penceresi Mica arka planlıdır ve değişiklikleri anında uygular; kişisel kullanım içindir, yayınlanmayacaktır.",
   "en": "A Windows 11 top-bar app similar to the MacBook notch / iPhone Dynamic Island. Written in C# .NET 10 WPF. Features: media controls (Spotify/web), synced lyrics (LRCLIB), a Windows volume mixer and output switcher, iPhone/Bluetooth/DualSense notification and battery HUDs, phone notifications over Phone Link (island bubble + history page), timer/stopwatch, a system page (CPU/GPU/RAM/VRAM/network/disk via NVML), a file shelf (drag and drop), Caps Lock/keyboard language indicator, notes (to-do list), Do Not Disturb (manual + scheduled + Windows DND) and wallpaper switching. Page transitions use spring physics, and instead of a tab row there are page dots at the bottom (iOS style). The settings window has a Mica background and applies changes live; it is for personal use and will not be published."
  },
  "highlights": {
   "tr": [
    "Dynamic Island benzeri yay fiziği morph animasyonları (genişlik, yükseklik, köşe, omuz, opaklık, bulanıklık)",
    "Phone Link bildirimlerini Windows veritabanından okuyup iPhone tarzı balon olarak gösterme",
    "LRCLIB ile senkron şarkı sözleri (kompakt adada + genişlemiş sayfada)",
    "NVML ile GPU sıcaklık/güç/VRAM, sistem sayfasında 60 sn grafik",
    "Sayfa noktaları (v0.8): iOS tarzı alt nokta navigasyonu, yeni bildirim mavi nokta, tekerlek/Shift+tekerlek/yatay tekerlek desteği"
   ],
   "en": [
    "Dynamic Island-like morph animations with spring physics (width, height, corners, shoulder, opacity, blur)",
    "Reads Phone Link notifications from the Windows database and shows them as iPhone-style bubbles",
    "Synced lyrics with LRCLIB (in the compact island and on the expanded page)",
    "GPU temperature/power/VRAM via NVML, with 60 s charts on the system page",
    "Page dots (v0.8): iOS-style bottom dot navigation, blue dot for new notifications, wheel/Shift+wheel/horizontal wheel support"
   ]
  },
  "tech": {
   "tr": [
    "C#",
    ".NET 10",
    "WPF",
    "NAudio.Wasapi",
    "Microsoft.Data.Sqlite",
    "NVML (NVIDIA)",
    "WinRT (Bluetooth/DeviceWatcher)",
    "LRCLIB API",
    "Open-Meteo",
    "Ical.Net"
   ],
   "en": [
    "C#",
    ".NET 10",
    "WPF",
    "NAudio.Wasapi",
    "Microsoft.Data.Sqlite",
    "NVML (NVIDIA)",
    "WinRT (Bluetooth/DeviceWatcher)",
    "LRCLIB API",
    "Open-Meteo",
    "Ical.Net"
   ]
  },
  "media": [
   "assets/p/winnotch/01-f653a3ff.webp",
   "assets/p/winnotch/02-376e8221.webp",
   "assets/p/winnotch/03-fc5d7930.webp",
   "assets/p/winnotch/04-aa2e5fe5.webp",
   "assets/p/winnotch/05-b1b56232.webp",
   "assets/p/winnotch/06-eda246f5.webp",
   "assets/p/winnotch/07-6e4f52bc.webp",
   "assets/p/winnotch/08-6ec632e7.webp",
   "assets/p/winnotch/09-ab9efadd.webp",
   "assets/p/winnotch/10-ad5c3d7e.webp"
  ],
  "credit": {
   "tr": "Ses çıkışı sayfasındaki AirPods simgesi Icons8 simgesinden uyarlanmıştır:",
   "en": "The AirPods icon on the output page is adapted from Icons8:",
   "url": "https://icons8.com"
  }
 },
 {
  "slug": "jarvis",
  "title": "Jarvis",
  "label": "Jarvis",
  "year": "2026",
  "category": {
   "tr": "Uygulama",
   "en": "App"
  },
  "status": {
   "tr": "Geliştiriliyor",
   "en": "In development"
  },
  "tagline": {
   "tr": "Beş kodlama ajanını tek pencereden yöneten yerel yapay zekâ kokpiti.",
   "en": "A local AI cockpit that runs five coding agents from a single window."
  },
  "description": {
   "tr": "Jarvis, birden çok yapay zekâ kodlama ajanını tek bir Electron arayüzünde toplayan kişisel bir kontrol panelidir. Her ajanın resmî komut satırı aracı arka planda çalıştırılır; sohbet geçmişi, araç çalıştırmaları, dosya ağacı ve kota çubukları aynı ekranda gösterilir. Yerel WebSocket sunucusu yalnızca bu bilgisayardan erişilebilir ve rastgele bir token ile korunur.Aynı ağdaki telefondan QR kodla erişim, Telegram durumu ve otomatik ajan yönlendirme de eklenmiştir; Obsidian kasası proje haritası olarak okunur ve soru/onay kartlarıyla her adımda onay modu desteklenir.",
   "en": "Jarvis is a personal control panel that brings several AI coding agents into a single Electron interface. Each agent's official command-line tool runs in the background; chat history, tool runs, the file tree and quota bars all appear on one screen. A local WebSocket server is reachable only from this computer and is protected by a random token.Phone access over the same network via QR code, Telegram status and automatic agent routing are also included; an Obsidian vault is read as a project map, and question and approval cards support an approve-every-step mode."
  },
  "highlights": {
   "tr": [
    "Beş kodlama ajanı için tek kokpit ve ortak kota çubuğu",
    "Token korumalı yerel WebSocket protokolü",
    "Groq Whisper ile sesli komut",
    "Aynı ağdan QR ile telefondan erişim",
    "Soru/onay kartları ve hesaba göre ayrılmış oturum geçmişi"
   ],
   "en": [
    "One cockpit and shared quota bar for five coding agents",
    "Token-protected local WebSocket protocol",
    "Voice commands via Groq Whisper",
    "Phone access by QR code over the same network",
    "Question/approval cards and session history split per account"
   ]
  },
  "tech": {
   "tr": [
    "Electron",
    "React",
    "Vite",
    "Node.js",
    "WebSocket",
    "MCP",
    "Azure Speech",
    "Groq Whisper"
   ],
   "en": [
    "Electron",
    "React",
    "Vite",
    "Node.js",
    "WebSocket",
    "MCP",
    "Azure Speech",
    "Groq Whisper"
   ]
  },
  "media": [
   "assets/p/jarvis/01-608e3c87.webp"
  ]
 },
 {
  "slug": "mechanism-assistant",
  "title": "Mechanism Assistant",
  "label": "Mechanism Assistant",
  "year": "2026",
  "category": {
   "tr": "Mühendislik",
   "en": "Engineering"
  },
  "status": {
   "tr": "v1.0 yayında",
   "en": "v1.0 released"
  },
  "tagline": {
   "tr": "Düz cümleden Fusion 360'ta boyutlandırılmış mekanizma çizen yerel sistem.",
   "en": "A local system that turns plain sentences into dimensioned mechanisms in Fusion 360."
  },
  "description": {
   "tr": "Mechanism Assistant, düz dilde tarif edilen bir makine elemanını veya mekanizmayı boyutlandırıp kontrol eden ve Fusion 360'ta döndürülebilen bir montaj olarak çizen bir sistemdir. Cümle önce yerel bir LLM'e (Ollama üzerinde qwen3.5 9B) gider; LLM hiç sayı üretmez, yalnızca cümlede yazılı değerleri JSON şemasına doldurur. Python motorları kinematik, mukavemet, geçme, yorulma ve yerel FEA hesaplarını yapar; sonuç Fusion 360 eklentisine aktarılıp parametrik montaj çizilir. Dört-çubuk, krank-biyel, Geneva, dişliler, redüktörler, kamlar, yaylar, miller, kayış-zincir, cıvata-kaynak ve 3B baskı parçaları dahil geniş bir modül seti vardır. Proje 2026'da MIT lisansıyla GitHub'da v1.0 olarak yayınlanmıştır; 398 birim testi ve Fusion'da 36/36 modül çizimi raporlanmıştır.",
   "en": "Mechanism Assistant is a system that dimensions and checks a machine element or mechanism described in plain language, then draws it in Fusion 360 as a rotatable assembly. The sentence first goes to a local LLM (qwen3.5 9B on Ollama); the LLM never produces numbers, it only fills the values written in the sentence into a JSON schema. Python engines run kinematics, strength, fit, fatigue and local FEA calculations; the result is passed to the Fusion 360 add-in and a parametric assembly is drawn. A broad module set covers four-bar linkages, crank-slider, Geneva mechanisms, gears, reducers, cams, springs, shafts, belt-chain drives, bolt-weld joints and 3D-printed parts. The project was released as v1.0 on GitHub in 2026 under the MIT license; 398 unit tests and 36/36 module drawings in Fusion are reported."
  },
  "highlights": {
   "tr": [
    "LLM sayı üretmez; yalnızca cümledeki değerleri şemaya doldurur",
    "Kinematik, mukavemet ve yerel FEA kontrolleri",
    "Fusion 360'ta döndürülebilir parametrik montaj",
    "398 birim testi, 36/36 modül Fusion'da çiziliyor",
    "MIT lisansıyla GitHub'da v1.0 sürümü"
   ],
   "en": [
    "The LLM produces no numbers; it only fills the sentence's values into a schema",
    "Kinematics, strength and local FEA checks",
    "Rotatable parametric assembly in Fusion 360",
    "398 unit tests, 36/36 modules drawn in Fusion",
    "v1.0 on GitHub under the MIT license"
   ]
  },
  "tech": {
   "tr": [
    "Python",
    "Ollama",
    "Fusion 360 API",
    "pytest",
    "Yerel FEA",
    "LLM"
   ],
   "en": [
    "Python",
    "Ollama",
    "Fusion 360 API",
    "pytest",
    "Local FEA",
    "LLM"
   ]
  },
  "media": [
   "assets/p/mechanism-assistant/01-00a47ac7.loop.mp4",
   "assets/p/mechanism-assistant/02-3cf3ff34.loop.mp4",
   "assets/p/mechanism-assistant/03-f9356816.loop.mp4",
   "assets/p/mechanism-assistant/04-feb7c3b8.loop.mp4",
   "assets/p/mechanism-assistant/05-3caa1668.loop.mp4",
   "assets/p/mechanism-assistant/06-e43157bb.loop.mp4",
   "assets/p/mechanism-assistant/07-0ed6dbfc.webp",
   "assets/p/mechanism-assistant/08-880a6a16.loop.mp4"
  ]
 },
 {
  "slug": "ball-pit-oyunu",
  "title": "Ball Pit",
  "label": "Ball Pit",
  "year": "2026",
  "category": {
   "tr": "Oyun",
   "en": "Game"
  },
  "status": {
   "tr": "Geliştiriliyor",
   "en": "In development"
  },
  "tagline": {
   "tr": "Milyonlarca topu aletlerle temizlediğin, yetenek ağacıyla ilerleyen birinci şahıs oyun.",
   "en": "A first-person game about clearing millions of balls with tools and a skill tree."
  },
  "description": {
   "tr": "Ball Pit, bir milyondan fazla renkli topun bulunduğu dev havuzları elle, kürekle, vakumla ve özel aletlerle boşaltmaya dayanan birinci şahıs bir oyundur. Toplanan toplar teslim makinesinde bilete dönüşür; biletlerle yeni aletler ve çanta yükseltmeleri alınır, toplanan topla da dallara ayrılan yetenek ağacı açılır. Havuzun derinlerinde saklı, görünüşü farklı plaj topları bulunduğunda geçici güçler kazandırır; havuz tamamen boşalınca altın son top ve tebrik ekranı gelir. Yedi ayrı harita (Kiddie Pool, Sunny Pool, The Deep End, Toy Store, Sunset Beach, Gumball Factory, Space Station) kendi görünümü, aleti ve top kaplamasıyla sırayla açılır. Three.js ile tarayıcıda çalışır, Electron ile Windows'a paketlenmiştir; modeller Blender betikleriyle üretilmiştir.",
   "en": "Ball Pit is a first-person game about emptying giant pools filled with more than a million colored balls by hand, with shovels, vacuums and custom tools. Collected balls turn into tickets at the deposit machine; tickets buy new tools and bag upgrades, while collected balls unlock a branching skill tree. Special beach balls hidden deep in the pool grant temporary powers when found, and emptying a pool completely brings a golden final ball and a congratulations screen. Seven maps (Kiddie Pool, Sunny Pool, The Deep End, Toy Store, Sunset Beach, Gumball Factory, Space Station) unlock in order, each with its own look, tool and ball skin. It runs in the browser with Three.js and is packaged for Windows with Electron; models were generated with Blender scripts."
  },
  "highlights": {
   "tr": [
    "Tek havuzda 1.000.000'dan fazla top, gömülü topları gizleyen optimizasyon",
    "11 dallı, yüzlerce seviyeli yetenek ağacı",
    "El, kürek, vakum, kepçe, girdap, bomba gibi aletler",
    "Yedi harita, öğretici, altın son top ve New Pit+ döngüsü",
    "46 Blender modeli ve Steam başarımları için steamworks.js köprüsü"
   ],
   "en": [
    "Over 1,000,000 balls in a single pool, with optimization that hides buried balls",
    "Skill tree with 11 branches and hundreds of levels",
    "Tools such as hands, shovel, vacuum, scoop, vortex and bomb",
    "Seven maps, a tutorial, a golden final ball and a New Pit+ loop",
    "46 Blender models and a steamworks.js bridge for Steam achievements"
   ]
  },
  "tech": {
   "tr": [
    "Three.js",
    "JavaScript",
    "Electron",
    "Blender",
    "steamworks.js",
    "WebAudio"
   ],
   "en": [
    "Three.js",
    "JavaScript",
    "Electron",
    "Blender",
    "steamworks.js",
    "WebAudio"
   ]
  },
  "media": [
   "assets/p/ball-pit-oyunu/01-b0929749.webp",
   "assets/p/ball-pit-oyunu/02-191d76d8.webp",
   "assets/p/ball-pit-oyunu/03-65e527b4.webp",
   "assets/p/ball-pit-oyunu/04-5548229d.webp",
   "assets/p/ball-pit-oyunu/05-2620eeb3.px.webp",
   "assets/p/ball-pit-oyunu/06-2c679298.px.webp"
  ]
 },
 {
  "slug": "phonedeck",
  "title": "PhoneDeck",
  "label": "PhoneDeck",
  "year": "2026",
  "category": {
   "tr": "Uygulama",
   "en": "App"
  },
  "status": {
   "tr": "Geliştiriliyor",
   "en": "In development"
  },
  "tagline": {
   "tr": "Eski iPhone 11 Pro'yu PC için Stream Deck benzeri bir kontrol ve izleme ekranına dönüştüren web tabanlı uygulama.",
   "en": "A web app that turns an old iPhone 11 Pro into a Stream Deck-style PC control panel."
  },
  "description": {
   "tr": "PhoneDeck, kullanmadığı iPhone 11 Pro'yu PC'nin yanında bir Stream Deck alternatifi olarak kullanmayı sağlar. C# .NET 10 ve ASP.NET ile yazılmış sunucu tarafı ve tarayıcı tabanlı istemci (Safari ile ana ekrana eklenerek tam ekran uygulama gibi çalışır) mimarisine sahiptir. Spotify kontrolü, Windows ses mikseri, uygulama kısayolları (Steam, Epic, Xbox, Brave, VS Code, Claude, Codex, Kick, Netflix vb.), Wallpaper Engine duvar kağıtları, Fliqlo tarzı saat ve hava durumu sayfalarını içerir. Ayarlar uygulama içinden yapılabilir, derleme gerektirmez.",
   "en": "PhoneDeck lets an unused iPhone 11 Pro serve as a Stream Deck alternative next to the PC. It has a server side written in C# .NET 10 and ASP.NET plus a browser-based client (added to the home screen with Safari, it runs like a full-screen app). It includes Spotify control, a Windows volume mixer, app shortcuts (Steam, Epic, Xbox, Brave, VS Code, Claude, Codex, Kick, Netflix and more), Wallpaper Engine wallpapers, a Fliqlo-style clock and weather pages. Settings can be changed inside the app, with no rebuild required."
  },
  "highlights": {
   "tr": [
    "iPhone'u Stream Deck benzeri kontrol paneline dönüştürür",
    "Spotify şarkı sözleri (LRCLIB) ve kapak görselleriyle zamanlı söz görünümü",
    "Windows ses mikseri: sistem sesi ve uygulama bazlı kaydırıcılar",
    "245 Wallpaper Engine duvar kağıdını telefon dokunmatığıyla değiştirme",
    "Gece modunda OLED ekran koruması (piksel kaydırma)"
   ],
   "en": [
    "Turns an iPhone into a Stream Deck-like control panel",
    "Timed Spotify lyrics (LRCLIB) with cover art",
    "Windows volume mixer: system volume and per-app sliders",
    "Switch among 245 Wallpaper Engine wallpapers by touch",
    "OLED screen protection in night mode (pixel shifting)"
   ]
  },
  "tech": {
   "tr": [
    "C#",
    ".NET 10",
    "ASP.NET Core",
    "HTML/CSS/JS",
    "Spotify Web API",
    "LRCLIB",
    "Windows Media Session API",
    "NAudio"
   ],
   "en": [
    "C#",
    ".NET 10",
    "ASP.NET Core",
    "HTML/CSS/JS",
    "Spotify Web API",
    "LRCLIB",
    "Windows Media Session API",
    "NAudio"
   ]
  },
  "media": [
   "assets/p/phonedeck/01-7aa91df3.webp",
   "assets/p/phonedeck/02-5e2db4c1.webp",
   "assets/p/phonedeck/03-b7da7437.webp"
  ]
 },
 {
  "slug": "content-machine",
  "title": "Content Machine",
  "label": "Content Machine",
  "year": "2026",
  "category": {
   "tr": "Yapay Zeka",
   "en": "AI"
  },
  "status": {
   "tr": "Geliştiriliyor",
   "en": "In development"
  },
  "tagline": {
   "tr": "Tech ve AI haberlerini dikey YouTube Shorts videolarına çeviren ücretsiz üretim hattı.",
   "en": "A free pipeline that turns tech and AI news into vertical YouTube Shorts videos."
  },
  "description": {
   "tr": "Content Machine, bölümler halinde yazılan bir JSON senaryosunu seslendirilmiş, altyazılı ve 1080x1920 dikey bir videoya dönüştüren yerel bir üretim hattıdır. Metin Kokoro adlı yerel ses sentezleyiciyle seslendirilir, faster-whisper kelime zamanlamalarını çıkarır ve HyperFrames kompozisyonu sahneleri bu zamanlamaya göre kurar. Beş tema ve on görsel anlatım tipiyle (başlık, karşılaştırma, liste, istatistik, terminal, adım, grafik) videolar üretilir; çıktı MP4 olarak render edilip ses -18 dB'ye normalize edilir. İki bölüm hazırdır: MCP'yi anlatan birinci bölüm ve token mantığını anlatan ikinci bölüm. YouTube yükleyicisi hazırdır ancak henüz hiçbir video yüklenmemiştir.",
   "en": "Content Machine is a local pipeline that turns a JSON script written in chapters into a voiced, subtitled 1080x1920 vertical video. Text is voiced by the local Kokoro speech synthesizer, faster-whisper extracts word timings and the HyperFrames composition builds scenes around those timings. Videos are produced with five themes and ten visual storytelling types (title, comparison, list, stat, terminal, step, chart); output is rendered as MP4 and audio is normalized to -18 dB. Two episodes are ready: the first on MCP and the second on how tokens work. The YouTube uploader is ready, but no video has been uploaded yet."
  },
  "highlights": {
   "tr": [
    "Yerel TTS ve whisper ile tamamen ücretsiz üretim",
    "1080x1920 dikey video, altyazı ve ses normalizasyonu",
    "5 tema, 10 görsel anlatım tipi",
    "Tek komutla render",
    "YouTube yükleyici ve özel/private varsayılanı"
   ],
   "en": [
    "Fully free production with local TTS and Whisper",
    "1080x1920 vertical video, subtitles and audio normalization",
    "5 themes, 10 visual storytelling types",
    "One-command render",
    "YouTube uploader with a private-by-default setting"
   ]
  },
  "tech": {
   "tr": [
    "HyperFrames",
    "Kokoro TTS",
    "faster-whisper",
    "Node.js",
    "Python",
    "YouTube Data API"
   ],
   "en": [
    "HyperFrames",
    "Kokoro TTS",
    "faster-whisper",
    "Node.js",
    "Python",
    "YouTube Data API"
   ]
  },
  "media": [
   "assets/p/content-machine/01-4b6bb1c8.mp4",
   "assets/p/content-machine/02-cf5742e6.mp4",
   "assets/p/content-machine/03-db2906df.webp",
   "assets/p/content-machine/04-a3870d75.webp"
  ]
 },
 {
  "slug": "kiz-kulesi-sitesi",
  "title": "Kız Kulesi Sitesi",
  "label": {
   "tr": "Kız Kulesi 3B",
   "en": "Maiden's Tower 3D"
  },
  "year": "2026",
  "category": {
   "tr": "Web",
   "en": "Web"
  },
  "status": {
   "tr": "Geliştiriliyor",
   "en": "In development"
  },
  "tagline": {
   "tr": "Kız Kulesi ve İstanbul'u anlatan, kaydırmalı 3B tanıtım sitesi.",
   "en": "A scroll-driven 3D site about the Maiden's Tower and Istanbul."
  },
  "description": {
   "tr": "Kız Kulesi Sitesi, denizin ortasında yükselen Kız Kulesi ve İstanbul silüetiyle açılan, kaydırmayla ilerleyen bir 3B tanıtım sitesidir. İlk bölümde fotoğraflara göre modellenmiş kule, yansımalı deniz, gün batımı, Sultanahmet, Ayasofya, Süleymaniye ve Galata silüetleri, vapurlar ve martılar bulunur; saat çubuğuyla altın saatten geceye geçilir ve kaydırınca kule parçalanır. İkinci bölümde Galata, Ayasofya, vapur, çay, simit ve lale cam küpler içinde sürükle-tıkla incelenir. Üçüncü bölümde parçacıklar nazar boncuğuna dönüşüp İSTANBUL yazar. Site Three.js ile on iki modül halinde yazılmıştır, modeller Blender betiğiyle üretilmiştir ve sesler WebAudio ile kodla oluşturulur; proje, igloo.inc sitesinin REA ile çözümlenmesinden çıkan tekniklerin ilk gerçek uygulamasıdır.",
   "en": "A scroll-driven 3D showcase site that opens on the Maiden's Tower rising out of the sea against the Istanbul skyline. The first section has the tower modeled from photographs, a reflective sea, a sunset, the silhouettes of Sultanahmet, Hagia Sophia, Süleymaniye and Galata, ferries and seagulls; a time slider moves from golden hour to night, and the tower breaks apart as you scroll. In the second section, Galata, Hagia Sophia, a ferry, tea, sesame rings and tulips can be dragged and clicked inside glass cubes. In the third section, particles turn into an evil eye bead and spell out ISTANBUL. The site is written in twelve modules with Three.js, models are generated by a Blender script and sounds are synthesized in code with WebAudio; it is the first real application of techniques from reverse-engineering the igloo.inc site with REA."
  },
  "highlights": {
   "tr": [
    "Fotoğraflardan modellenmiş Kız Kulesi ve İstanbul silüeti",
    "Kendi ayna kamerasıyla yansımalı deniz",
    "Kaydırınca parçalanan kule ve saat çubuğuyla gün batımı",
    "Cam küpler içinde tıklanabilir İstanbul simgeleri",
    "Parçacıklardan oluşan nazar boncuğu finali"
   ],
   "en": [
    "Maiden's Tower and the Istanbul skyline modeled from photographs",
    "Reflective sea with its own mirror camera",
    "A tower that shatters on scroll and a time slider for sunset",
    "Clickable Istanbul icons inside glass cubes",
    "An evil eye bead finale made of particles"
   ]
  },
  "tech": {
   "tr": [
    "Three.js",
    "JavaScript",
    "Blender",
    "WebAudio",
    "HTML/CSS"
   ],
   "en": [
    "Three.js",
    "JavaScript",
    "Blender",
    "WebAudio",
    "HTML/CSS"
   ]
  },
  "media": [
   "assets/p/kiz-kulesi-sitesi/01-3eb054d6.webp",
   "assets/p/kiz-kulesi-sitesi/02-dc8c1447.webp",
   "assets/p/kiz-kulesi-sitesi/03-40e86b27.webp",
   "assets/p/kiz-kulesi-sitesi/04-197587a3.webp"
  ]
 },
 {
  "slug": "sesli-kitap",
  "title": "Sesli Kitap Uygulaması",
  "label": {
   "tr": "Sesli Kitap",
   "en": "Audiobook Maker"
  },
  "year": "2026",
  "category": {
   "tr": "Uygulama",
   "en": "App"
  },
  "status": {
   "tr": "Geliştiriliyor",
   "en": "In development"
  },
  "tagline": {
   "tr": "PDF kitapları bölümlere ayırıp yerel metin-ses modelleriyle (Türkçe XTTS, İngilizce Kokoro) tek MP3 ve bölüm işaretleriyle sesli kitaba çeviren uygulama.",
   "en": "Splits PDF books into chapters and voices them into one MP3 with chapter markers."
  },
  "description": {
   "tr": "PDF dosyalarını yükleyip bölümlerine ayıran, ardından Türkçe için XTTS v2 (Claribel sesi) ve İngilizce için Kokoro (af_heart sesi) modelleriyle seslendiren masaüstü uygulaması. FastAPI tabanlı yerel bir sunucu üzerinden tarayıcı arayüzüyle çalışır.Çıktılar tek MP3 dosyası ve bölüm işaretleri (chapter markers) olarak alınıyor. iPhone'dan dinlenebilir web arayüzü hedefleniyor.",
   "en": "A desktop app that loads PDF files and splits them into chapters, then narrates them with XTTS v2 (Claribel voice) for Turkish and Kokoro (af_heart voice) for English. It runs as a local FastAPI server with a browser interface.Outputs are a single MP3 file and chapter markers. A web interface for listening from an iPhone is planned."
  },
  "highlights": {
   "tr": [
    "Türkçe (XTTS Claribel) ve İngilizce (Kokoro af_heart) çift motor desteği",
    "PDF'den otomatik bölüm tespiti ve manuel düzeltme",
    "Tek MP3 çıktısı ve bölüm işaretleri üretir",
    "Yerel çalışır, harici API/bulut servisi gerektirmez"
   ],
   "en": [
    "Dual-engine support: Turkish (XTTS Claribel) and English (Kokoro af_heart)",
    "Automatic chapter detection from PDF with manual correction",
    "Produces a single MP3 output with chapter markers",
    "Runs locally, no external API or cloud service required"
   ]
  },
  "tech": {
   "tr": [
    "Python",
    "FastAPI",
    "React",
    "Vite",
    "XTTS v2",
    "Kokoro TTS",
    "pdf.js",
    "pdf-lib",
    "msedge-tts"
   ],
   "en": [
    "Python",
    "FastAPI",
    "React",
    "Vite",
    "XTTS v2",
    "Kokoro TTS",
    "pdf.js",
    "pdf-lib",
    "msedge-tts"
   ]
  },
  "media": [
   "assets/p/sesli-kitap/01-3fbe4b85.webp",
   "assets/p/sesli-kitap/02-6836e9cb.webp"
  ]
 },
 {
  "slug": "kick-vod-digest",
  "title": "Kick VOD Digest",
  "label": "Kick VOD Digest",
  "year": "2026",
  "category": {
   "tr": "Yapay Zeka",
   "en": "AI"
  },
  "status": {
   "tr": "Neredeyse bitti",
   "en": "Almost done"
  },
  "tagline": {
   "tr": "Uzun Kick yayınlarını beş dakikada okunur bir özete çeviren yerel uygulama.",
   "en": "A local app that turns long Kick streams into a five-minute read."
  },
  "description": {
   "tr": "Kick VOD Digest, saatler süren bir Kick yayınını ne olduğunu, hangi oyun ve sohbet aşamalarından geçtiğini ve hangi anların izlenmeye değer olduğunu anlatan kısa bir özete dönüştürür. Yayının 160p sürümü indirilip sesi faster-whisper large-v3-turbo ile yazıya çevrilir; RTX 4070 Super'de sekiz saatlik bir yayın yaklaşık on bir dakikada işlenir. Yirmi saniyede bir alınan kareler CLIP ile sınıflandırılır ve Viterbi ile oyun, sohbet, BRB gibi evrelere ayrılır. Kick sohbet tekrarı ve klip API'si de toplanır; Gemini transkript, evre ve sohbetten zaman damgalı olaylar, bölümler, özet ve karakter listesi çıkarır. Uygulama FastAPI ile yerelde çalışır ve sonucu tarayıcıda gösterir; ilk kez izlenen kanallarda ekranları kullanıcı etiketler.",
   "en": "Kick VOD Digest turns an hours-long Kick stream into a short summary of what happened, which game and chat phases it went through and which moments are worth watching. The 160p version of the stream is downloaded and its audio transcribed with faster-whisper large-v3-turbo; on an RTX 4070 Super an eight-hour stream is processed in about eleven minutes. Frames sampled every twenty seconds are classified with CLIP and split into phases such as gameplay, chat and BRB using Viterbi. The Kick chat replay and clip API are collected too; Gemini derives timestamped events, chapters, a summary and a character list from the transcript, phases and chat. The app runs locally on FastAPI and shows results in the browser; on channels watched for the first time, the user labels the screens."
  },
  "highlights": {
   "tr": [
    "Sekiz saatlik yayın yaklaşık 11 dakikada işleniyor",
    "CLIP + Viterbi ile ekran evrelerini otomatik ayırma",
    "Zaman damgalı olaylar, bölümler ve karakter listesi",
    "Kick sohbet tekrarı ve klip API'si entegrasyonu",
    "Gemini kotası dolunca yedek modele geçiş"
   ],
   "en": [
    "An eight-hour stream is processed in about 11 minutes",
    "Automatic screen phase separation with CLIP + Viterbi",
    "Timestamped events, chapters and a character list",
    "Kick chat replay and clip API integration",
    "Falls back to another model when the Gemini quota runs out"
   ]
  },
  "tech": {
   "tr": [
    "Python",
    "FastAPI",
    "faster-whisper",
    "OpenCLIP",
    "yt-dlp",
    "Gemini API"
   ],
   "en": [
    "Python",
    "FastAPI",
    "faster-whisper",
    "OpenCLIP",
    "yt-dlp",
    "Gemini API"
   ]
  },
  "media": [
   "assets/p/kick-vod-digest/01-72289b63.webp",
   "assets/p/kick-vod-digest/02-6ada930d.webp",
   "assets/p/kick-vod-digest/03-405c5601.webp"
  ]
 },
 {
  "slug": "leaf-sweep",
  "title": "Leaf Sweep",
  "label": "Leaf Sweep",
  "year": "2026",
  "category": {
   "tr": "Oyun",
   "en": "Game"
  },
  "status": {
   "tr": "Geliştiriliyor",
   "en": "In development"
  },
  "tagline": {
   "tr": "Sonbahar yapraklarını temizlediğin, aletler ve seviyelerle ilerleyen birinci şahıs oyun.",
   "en": "A first-person game about clearing autumn leaves with tools and upgrades."
  },
  "description": {
   "tr": "Leaf Sweep, Leaf Blower Revolution'dan esinlenen birinci şahıs sonbahar yaprak temizleme oyunudur. Altı seviyede 56 binden 170 bine kadar yaprak, bölgelere ayrılmış haritalarda tırmık, üfleyici, vakum, sırt çantası, turbo ve mıknatıs gibi aletlerle temizlenir. Yükseklik haritalı yaprak simülasyonu yığılma ve koşunca dağılma davranışı verir; Robo-Raker botlar, kayıp eşya koleksiyonu, kontratlar, bölge ödülleri ve ekonomi sistemi eşlik eder. Oyun HTML/JavaScript ve Three.js r147 ile yazılmış, Windows için Electron ile paketlenmiştir. Blender modelleri, Poly Haven dokuları, prosedürel ses ve müzik ile bloom, AO ve ışık huzmesi gibi son işleme efektleri içerir.",
   "en": "Leaf Sweep is a first-person autumn leaf-clearing game inspired by Leaf Blower Revolution. Across six levels, 56,000 to 170,000 leaves are cleared on maps split into zones with tools such as a rake, blower, vacuum, backpack, turbo and magnet. A height-mapped leaf simulation gives piling and scattering behavior when you run; Robo-Raker bots, a lost-item collection, contracts, zone rewards and an economy system round it out. The game is written in HTML/JavaScript with Three.js r147 and packaged for Windows with Electron. It includes Blender models, Poly Haven textures, procedural sound and music, and post-processing effects such as bloom, AO and light shafts."
  },
  "highlights": {
   "tr": [
    "6 seviye, 56 bin ile 170 bin arası yaprak",
    "6 alet, botlar ve 4 dallı Blender ağacı",
    "Yükseklik haritalı yaprak fiziği ve bölge sistemi",
    "36 kayıp eşya koleksiyonu ve kontratlar",
    "Bloom, AO ve otomatik kalite düşürme"
   ],
   "en": [
    "6 levels, 56,000 to 170,000 leaves",
    "6 tools, bots and a 4-branch Blender tree",
    "Height-mapped leaf physics and a zone system",
    "36 lost-item collection and contracts",
    "Bloom, AO and automatic quality scaling"
   ]
  },
  "tech": {
   "tr": [
    "Three.js",
    "JavaScript",
    "Electron",
    "Blender",
    "HTML/CSS"
   ],
   "en": [
    "Three.js",
    "JavaScript",
    "Electron",
    "Blender",
    "HTML/CSS"
   ]
  },
  "media": [
   "assets/p/leaf-sweep/01-4e819a5a.webp",
   "assets/p/leaf-sweep/02-52155028.webp",
   "assets/p/leaf-sweep/03-913f2d9b.webp",
   "assets/p/leaf-sweep/04-1d47a5e9.webp"
  ]
 },
 {
  "slug": "arctis-ekran",
  "title": "Arctis Ekran",
  "label": {
   "tr": "Arctis Ekran",
   "en": "Arctis Display"
  },
  "year": "2026",
  "category": {
   "tr": "Donanım",
   "en": "Hardware"
  },
  "status": {
   "tr": "Çalışıyor",
   "en": "Active"
  },
  "tagline": {
   "tr": "Arctis baz istasyonunun 128x48 ekranını kişisel bilgi paneline çeviren program.",
   "en": "A program that turns the Arctis base station's 128x48 screen into a personal info panel."
  },
  "description": {
   "tr": "SteelSeries Arctis Pro Wireless kulaklığın baz istasyonundaki küçük ekranı, cihazın yazılımına dokunmadan GameSense API'si üzerinden bitmap göndererek kullanır. Müzik çalmıyorken büyük saat ve Türkçe tarih gösterir; Spotify çalarken şarkı adı, sanatçı, ilerleme çubuğu ve küçük saat görünür. Pil seviyesi USB üzerinden beş kademede okunur ve yalnızca %25 ve altına düştüğünde ekrana gelir. Hava durumu Open-Meteo'dan alınır; ekran koruması ve yavaş yıldız animasyonu da eklenmiştir. Program .NET ile yazılmıştır, pencere açmadan çalışır, Windows başlangıcında kendiliğinden başlar ve tüm düzen 128x48 piksel siyah-beyaz ekran sınırına göre tasarlanmıştır.",
   "en": "Uses the small screen on the SteelSeries Arctis Pro Wireless base station by sending bitmaps through the GameSense API, without touching the device's own software. When no music is playing it shows a large clock and the Turkish date; while Spotify plays, the track name, artist, progress bar and a small clock appear. Battery level is read over USB in five steps and only shows up at 25% or below. Weather comes from Open-Meteo, and a screensaver with a slow star animation is included. The program is written in .NET, runs without opening a window, starts automatically on Windows boot, and every layout is designed for the 128x48 black-and-white display."
  },
  "highlights": {
   "tr": [
    "128x48 siyah-beyaz ekrana özel saat, tarih ve şarkı düzeni",
    "Spotify şarkısı, sanatçı ve ilerleme çubuğu",
    "Pil yalnızca %25 ve altında gösteriliyor",
    "Ekran koruması, yıldız animasyonu ve hava durumu",
    "Windows başlangıcında otomatik çalışan arka plan uygulaması"
   ],
   "en": [
    "Clock, date and track layout built for a 128x48 black-and-white screen",
    "Spotify track, artist and progress bar",
    "Battery shown only at 25% or below",
    "Screensaver, star animation and weather",
    "Background app that starts automatically with Windows"
   ]
  },
  "tech": {
   "tr": [
    "C#",
    ".NET 10",
    "Windows Forms",
    "SteelSeries GameSense",
    "Open-Meteo",
    "Spotify"
   ],
   "en": [
    "C#",
    ".NET 10",
    "Windows Forms",
    "SteelSeries GameSense",
    "Open-Meteo",
    "Spotify"
   ]
  },
  "media": [
   "assets/p/arctis-ekran/01-442237c0.px.webp",
   "assets/p/arctis-ekran/02-e76845ed.px.webp",
   "assets/p/arctis-ekran/03-f10289de.px.webp",
   "assets/p/arctis-ekran/04-2c612fc8.px.webp",
   "assets/p/arctis-ekran/05-fcae22be.px.webp"
  ]
 },
 {
  "slug": "test-projeleri",
  "title": {
   "tr": "Deneme Projeleri",
   "en": "Experiments"
  },
  "label": {
   "tr": "Deneme Projeleri",
   "en": "Experiments"
  },
  "year": "2026",
  "category": {
   "tr": "Uygulama",
   "en": "App"
  },
  "status": {
   "tr": "Beklemede",
   "en": "On hold"
  },
  "tagline": {
   "tr": "Claude'un yeteneklerini test etmek için yapılan küçük deneme projeleri: strateji oyunu, 3B kahve sitesi, stop-motion video, disk temizleyici, IMDb scripti, Tron oyunu, yaprak temizleme oyunu.",
   "en": "Small experiments testing what Claude can do: games, a 3D site, stop-motion and tools."
  },
  "description": {
   "tr": "Yeni araçları ve fikirleri hızlıca denediğim küçük projeler: stop-motion bir kısa film, tarayıcıda oynanan bir strateji oyunu ve bir Windows temizleme aracı. Her biri kısa bir deneme; aşağıda sırasıyla her birinden bir kare var.",
   "en": "Small projects where I quickly try out new tools and ideas: a stop-motion short, a browser strategy game and a Windows cleanup tool. Each one is a short experiment; below is one frame from each, in order."
  },
  "highlights": {
   "tr": [
    "Chester: kodla çizilen karelerle Gemini ile üretilmiş keçe görselleri birleştiren stop-motion kısa film",
    "Toprak Savaşı: OpenFront'tan esinlenen tarayıcı strateji oyunu; botlar, diplomasi, füze ve hava savunma",
    "WinCleaner: geçici dosya ve önbellek temizleyen küçük bir PowerShell aracı"
   ],
   "en": [
    "Chester: a stop-motion short mixing code-drawn frames with Gemini-generated felt cutouts",
    "Toprak Savaşı: a browser strategy game inspired by OpenFront, with bots, diplomacy, missiles and air defense",
    "WinCleaner: a small PowerShell tool that clears temp files and caches"
   ]
  },
  "tech": {
   "tr": [
    "HTML/CSS/JS",
    "Three.js",
    "Electron",
    "Python",
    "PowerShell",
    "Blender",
    "Gemini/Veo",
    "Tampermonkey"
   ],
   "en": [
    "HTML/CSS/JS",
    "Three.js",
    "Electron",
    "Python",
    "PowerShell",
    "Blender",
    "Gemini/Veo",
    "Tampermonkey",
    "Vite",
    "React"
   ]
  },
  "media": [
   "assets/p/test-projeleri/01-12fbec5e.mp4",
   "assets/p/test-projeleri/02-e0b3c0ac.webp",
   "assets/p/test-projeleri/03-e4a5e22b.webp"
  ]
 }
];
