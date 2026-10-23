// Kişisel ayarlar: adın, şehrin, bağlantıların, kayan yazı. Boş url'li bağlantılar görünmez.
window.SITE = {
  name: 'Arhan Beyler',
  role: {
    tr: 'Makine mühendisliği öğrencisi · geliştirici · üretici',
    en: 'Mechanical engineering student · developer · maker'
  },
  bio: {
    tr: 'Merhaba, ben Arhan. Yaşar Üniversitesi\'nde makine mühendisliği okuyorum. Robotlardan masaüstü uygulamalarına, oyunlardan 3B sahnelere kadar aklıma takılan her şeyi yapıyorum. Çoğunu yapay zeka ajanlarından oluşan kendi ekibimle birlikte geliştiriyorum. Masaüstündeki klasörleri sürükle, aç ve keşfet.',
    en: 'Hi, I\'m Arhan. I study mechanical engineering at Yaşar University. I build whatever catches my mind, from robots and desktop apps to games and 3D scenes, mostly together with my own team of AI agents. Drag the folders around, open them and explore.'
  },
  city: { name: 'İzmir', lat: 38.42, lon: 27.14, map: 'https://maps.google.com/?q=Izmir' },
  // çalma listesi: { title, src }. Boşsa dişli yine döner, ses gelmez.
  // HoliznaCC0 "Chill Beats" (opengameart.org/content/chill-beats-collection), CC0: atıf zorunlu değil, yine de anıyoruz.
  music: [
    { title: 'City In The Rearview', src: 'assets/music/01-city-in-the-rearview.mp3' },
    { title: 'Autumn', src: 'assets/music/02-autumn.mp3' },
    { title: 'Dream Pop', src: 'assets/music/03-dream-pop.mp3' },
    { title: 'Families', src: 'assets/music/04-families.mp3' },
    { title: 'Opinions', src: 'assets/music/05-opinions.mp3' },
    { title: 'Old Age', src: 'assets/music/06-old-age.mp3' }
  ],
  musicCredit: 'HoliznaCC0 (CC0)',
  links: [
    { short: 'GH', label: 'GitHub', url: 'https://github.com/arhanbeyler' },
    { short: 'LI', label: 'LinkedIn', url: '' },
    { short: 'IG', label: 'Instagram', url: '' },
    { short: 'YT', label: 'YouTube', url: '' },
    { short: '@', label: 'arhanbeyler@gmail.com', url: 'mailto:arhanbeyler@gmail.com' }
  ]
};
