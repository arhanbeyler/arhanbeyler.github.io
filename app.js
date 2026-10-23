(() => {
  const S = window.SITE, P = window.PROJECTS || [];
  const $ = (s, r = document) => r.querySelector(s);
  const root = document.documentElement;
  const desktop = $('#desktop');
  const isMobile = () => matchMedia('(max-width: 700px)').matches;

  // köşedeki dişli çifti (14:7, i = 2): müzik çalınca büyük saat yönünde, küçük iki kat hızla ters döner
  function gearPath(n, ro, ri, cx, cy) {
    const s = Math.PI / n, pt = (r, a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
    let d = '';
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 2 * Math.PI;
      d += `${i ? 'L' : 'M'}${pt(ri, a - 0.6 * s)}L${pt(ro, a - 0.32 * s)}L${pt(ro, a + 0.32 * s)}L${pt(ri, a + 0.6 * s)}`;
    }
    return d + 'Z';
  }
  const holes = (n, r, rh, cx, cy) => Array.from({ length: n }, (_, i) => {
    const a = (i / n) * 2 * Math.PI;
    return `<circle cx="${(cx + r * Math.cos(a)).toFixed(1)}" cy="${(cy + r * Math.sin(a)).toFixed(1)}" r="${rh}"/>`;
  }).join('');
  const GEARS = `<svg viewBox="0 0 245 232" aria-hidden="true" fill="var(--icon-fill)" stroke="var(--icon-ink)" stroke-width="2">
    <g class="g-big" style="transform-origin:96px 96px"><path d="${gearPath(14, 86, 72, 96, 96)}"/><g fill="var(--bg)">${holes(5, 46, 12, 96, 96)}<circle cx="96" cy="96" r="18"/></g><circle cx="96" cy="96" r="7"/></g>
    <g class="g-small" style="transform-origin:186px 172px"><g transform="rotate(13 186 172)"><path d="${gearPath(7, 46, 33, 186, 172)}"/><circle cx="186" cy="172" r="10" fill="var(--bg)"/></g></g>
    <path d="M96 0v192M0 96h192M186 116v112M130 172h112" fill="none" stroke-width=".8" stroke-dasharray="14 4 2 4" opacity=".5"/>
  </svg>`;
  // renkler: index.html ilk boyamadan önce data-palette'i koyar; burada yalnızca değiştirici
  const PALETTES = { paper: { tr: 'Beyaz', en: 'White' }, blue: { tr: 'Mavi', en: 'Blue' }, dark: { tr: 'Siyah', en: 'Black' } };

  const UI = {
    tr: { start: 'Başla', about: 'Hakkımda', projects: 'Tüm projeler', contact: 'İletişim', music: 'Müzik',
          year: 'Yıl', status: 'Durum', tech: 'Teknoloji', noMedia: 'Görsel yakında.', close: 'Kapat',
          drawn: 'ÇİZEN', sheet: 'PAFTA', scale: 'ÖLÇEK', date: 'TARİH', palette: 'Renk', nextTrack: 'Sonraki parça', prevTrack: 'Başa sar / önceki parça', zoom: 'Büyüt', weatherBy: 'Hava durumu', prevImg: 'Önceki görsel', nextImg: 'Sonraki görsel', musicBy: 'Müzik' },
    en: { start: 'Start', about: 'About', projects: 'All projects', contact: 'Contact', music: 'Music',
          year: 'Year', status: 'Status', tech: 'Tech', noMedia: 'Visuals coming soon.', close: 'Close',
          drawn: 'DRAWN', sheet: 'SHEET', scale: 'SCALE', date: 'DATE', palette: 'Color', nextTrack: 'Next track', prevTrack: 'Restart / previous track', zoom: 'Enlarge', weatherBy: 'Weather data', prevImg: 'Previous image', nextImg: 'Next image', musicBy: 'Music' }
  };

  // localStorage yalnızca kolaylık (dil, renk, ikon yerleri); erişilemezse varsayılanla çalışır
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };

  let lang = store.get('lang', (navigator.language || 'tr').startsWith('tr') ? 'tr' : 'en');
  const t = (v) => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[lang] ?? v.tr ?? v.en) : v;
  const ui = (k) => UI[lang][k];
  const el = (tag, attrs = {}, ...kids) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') e.className = v; else if (k === 'text') e.textContent = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else e.setAttribute(k, v);
    }
    for (const c of kids.flat()) if (c != null) e.append(c);
    return e;
  };

  /* ---------- çubuklar ---------- */
  function renderChrome() {
    root.lang = lang;
    $('#lang').textContent = lang.toUpperCase();
    $('#mb-name').textContent = S.name;
    $('#bg-name').textContent = S.name;
    $('#bg-role').textContent = t(S.role);
    $('#start-label').textContent = ui('start');
    $('#links').replaceChildren(
      ...S.links.filter((l) => l.url).map((l) => el('a', { href: l.url, target: '_blank', rel: 'noopener', title: l.label, text: l.short })),
      el('button', { type: 'button', text: ui('contact'), onclick: openAbout })
    );
    renderPalette();
    tickClock();
  }

  function renderPalette() {
    const box = $('#palette');
    box.setAttribute('aria-label', ui('palette'));
    box.replaceChildren(...Object.entries(PALETTES).map(([id, name]) =>
      el('button', { type: 'button', class: 'sw sw-' + id, title: t(name), 'aria-label': t(name),
        'aria-pressed': String(root.dataset.palette === id),
        onclick: () => {
          root.dataset.palette = id;
          // index.html okusun diye ham metin (JSON değil)
          try { localStorage.setItem('palette', id); } catch {}
          renderPalette();
        } })));
  }

  function tickClock() {
    const now = new Date(), loc = lang === 'tr' ? 'tr-TR' : 'en-US';
    $('#date').textContent = now.toLocaleDateString(loc, { month: 'short', day: 'numeric', year: 'numeric' });
    $('#time').textContent = now.toLocaleTimeString(loc, { hour: 'numeric', minute: '2-digit' });
  }
  setInterval(tickClock, 15000);

  async function loadWeather() {
    const w = $('#weather');
    w.href = S.city.map;
    w.textContent = S.city.name;
    try {
      const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${S.city.lat}&longitude=${S.city.lon}&current=temperature_2m`);
      const j = await r.json();
      w.textContent = `${S.city.name} ${Math.round(j.current.temperature_2m)}°C`;
    } catch { /* hava gelmezse yalnız şehir adı kalır */ }
  }

  // alt çubukta CAD gibi imleç koordinatı (mm)
  const coords = $('#coords');
  const showXY = (x, y) => { coords.textContent = `X ${(x * 0.2646).toFixed(1)}   Y ${(y * 0.2646).toFixed(1)}`; };
  showXY(0, 0);
  desktop.addEventListener('pointermove', (e) => { const r = desktop.getBoundingClientRect(); showXY(e.clientX - r.left, r.bottom - e.clientY); });

  /* ---------- müzik ---------- */
  // çalma listesi: biten parçadan sonraki başlar; çalarken dişlinin altında parça adı + "sonraki"
  const music = $('#music'), tracks = S.music || [];
  const gear = $('#gear'), gbox = $('#gear-box'), next = $('#next'), prev = $('#prev');
  $('#gear-svg').innerHTML = GEARS;
  let playing = false, track = 0;
  const gearLabel = () => { $('#gear-label').textContent = '♪ ' + (playing && tracks.length ? tracks[track].title : ui('music')); };
  const load = (i) => { track = (i + tracks.length) % tracks.length; music.src = tracks[track].src; gearLabel(); };
  // her ziyarette farklı parçayla başlasın
  if (tracks.length) load(Math.floor(Math.random() * tracks.length));
  $('#track-ctl').hidden = !tracks.length;
  gear.addEventListener('click', () => {
    playing = !playing;
    root.classList.toggle('music-on', playing);
    gear.setAttribute('aria-pressed', String(playing));
    gearLabel();
    // dosya yoksa da dişli döner/durur; ses yalnızca dosya varsa gelir
    if (playing) music.play().catch(() => {}); else music.pause();
  });
  const skip = () => { load(track + 1); if (playing) music.play().catch(() => {}); };
  music.addEventListener('ended', skip);
  next.addEventListener('click', skip);
  // ⏮: parçanın ortasındaysa baştan çalar (yeniden dinlemek için), ilk 3 sn içindeyse bir öncekine döner
  prev.addEventListener('click', () => {
    load(music.currentTime > 3 ? track : track - 1);
    if (playing) music.play().catch(() => {});
  });

  /* ---------- ikonlar ---------- */
  const FOLDER = '<svg class="folder" viewBox="0 0 64 50" aria-hidden="true"><path class="tab" d="M2 7a4 4 0 0 1 4-4h17l6 6h29a4 4 0 0 1 4 4v3H2z"/><path class="body" d="M2 14h60v29a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/></svg>';
  const ABOUT_ICON = '<svg class="doc" viewBox="0 0 64 50" aria-hidden="true"><rect class="body" x="14" y="2" width="36" height="46" rx="3"/><circle class="ink" cx="32" cy="18" r="7"/><path class="ink" d="M20 39c2-8 7-11 12-11s10 3 12 11z"/></svg>';
  const LIST_ICON = '<svg class="doc" viewBox="0 0 64 50" aria-hidden="true"><rect class="body" x="6" y="4" width="52" height="42" rx="4"/><g class="ink"><rect x="14" y="14" width="36" height="3.5" rx="1.75"/><rect x="14" y="23" width="36" height="3.5" rx="1.75"/><rect x="14" y="32" width="24" height="3.5" rx="1.75"/></g></svg>';
  // 'pos2': yerleşim değişti, eski sürükleme kayıtları geçersiz
  let positions = store.get('pos2', {});

  // sabit tohumlu rastgele sayı (mulberry32): her açılışta aynı yerleşim
  const rng = (seed) => () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  // Hakkımda + Tüm projeler dişlinin yanında; projeler dağılır (en iyi aday: diğerlerine en uzak nokta).
  // Telefonda dişli üstte ortada, Hakkımda solunda, Tüm projeler sağında; projeler aşağı uzayan paftaya dağılır.
  function layout(ids, W, H, mobile) {
    const gl = gbox.offsetLeft, gt = gbox.offsetTop, gw = gbox.offsetWidth, gh = gbox.offsetHeight;
    let out, x0, x1, y0, y1, blocked = () => false;
    if (mobile) {
      const cy = gt + gh / 2 - 45;
      out = { __about: [Math.max(6, gl / 2 - 60), cy], __all: [Math.min(W - 126, gl + gw + (W - gl - gw) / 2 - 60), cy] };
      x0 = 6; x1 = W - 126; y0 = gt + gh + 70; y1 = y0 + Math.ceil(ids.length / 2) * 170;
    } else {
      const gx = gl + gw + 14;
      out = { __about: [gx, gt + 70], __all: [gx, gt + 175] };
      const keepX = gx + 130, keepY = Math.max(gt + gh, gt + 265) + 40;
      x0 = 24; x1 = W - 144; y0 = 20; y1 = H - 104;
      // sağ alttaki rol notu da boş kalsın
      blocked = (x, y) => (x < keepX && y < keepY) || (x > W - 420 && y > H - 150);
    }
    const rand = rng(11), placed = [out.__about, out.__all, [gl, gt]];
    for (const id of ids) {
      let best = [(x0 + x1) / 2, (y0 + y1) / 2], bestD = -1;
      for (let k = 0; k < 60; k++) {
        const x = x0 + rand() * (x1 - x0), y = y0 + rand() * (y1 - y0);
        if (blocked(x, y)) continue;
        const d = Math.min(...placed.map(([px, py]) => Math.hypot((px - x) / 1.5, py - y)));
        if (d > bestD) { bestD = d; best = [x, y]; }
      }
      placed.push(best);
      out[id] = best;
    }
    return out;
  }

  // telefonda kaydırılabilir yükseklik: mutlak konumlu ikonların altına biraz pay
  const spacer = desktop.appendChild(el('div', { class: 'spacer', 'aria-hidden': 'true' }));

  function placeIcons() {
    const mobile = isMobile(), W = desktop.clientWidth, H = desktop.clientHeight;
    const def = layout(P.map((p) => p.slug), W, H, mobile);
    let bottom = 0;
    desktop.querySelectorAll('.icon').forEach((ic) => {
      const id = ic.dataset.id, saved = !mobile && positions[id];
      let [x, y] = saved ? [saved[0] * W, saved[1] * H] : def[id];
      x = Math.max(0, Math.min(W - 120, x));
      if (!mobile) y = Math.max(0, Math.min(H - 80, y));
      ic.style.left = x + 'px';
      ic.style.top = y + 'px';
      bottom = Math.max(bottom, y + 130);
    });
    spacer.style.height = mobile ? bottom + 30 + 'px' : '0';
  }

  function makeIcon(id, label, glyph, open) {
    const ic = el('button', { class: 'icon', type: 'button', 'data-id': id });
    ic.innerHTML = glyph;
    ic.append(el('span', { class: 'lbl', text: label }));
    let sx, sy, ox, oy, moved = false;
    ic.addEventListener('pointerdown', (e) => {
      if (isMobile() || e.button !== 0) return;
      sx = e.clientX; sy = e.clientY; ox = ic.offsetLeft; oy = ic.offsetTop; moved = false;
      ic.setPointerCapture(e.pointerId);
    });
    ic.addEventListener('pointermove', (e) => {
      if (sx == null) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (!moved && Math.hypot(dx, dy) < 5) return;
      moved = true; ic.classList.add('dragging');
      const W = desktop.clientWidth, H = desktop.clientHeight;
      ic.style.left = Math.max(0, Math.min(W - 120, ox + dx)) + 'px';
      ic.style.top = Math.max(0, Math.min(H - 80, oy + dy)) + 'px';
    });
    const end = (e) => {
      if (sx == null) return;
      sx = null; ic.classList.remove('dragging');
      if (e.type === 'pointercancel') moved = false;
      if (moved) {
        positions[id] = [ic.offsetLeft / desktop.clientWidth, ic.offsetTop / desktop.clientHeight];
        store.set('pos2', positions);
      }
    };
    ic.addEventListener('pointerup', end);
    ic.addEventListener('pointercancel', end);
    ic.addEventListener('click', (e) => { if (moved) { e.preventDefault(); moved = false; return; } open(); });
    return ic;
  }

  function renderIcons() {
    desktop.querySelectorAll('.icon').forEach((n) => n.remove());
    gearLabel();
    gear.setAttribute('aria-label', ui('music'));
    next.setAttribute('aria-label', ui('nextTrack'));
    next.title = ui('nextTrack');
    prev.setAttribute('aria-label', ui('prevTrack'));
    prev.title = ui('prevTrack');
    desktop.append(makeIcon('__about', ui('about'), ABOUT_ICON, openAbout), makeIcon('__all', ui('projects'), LIST_ICON, openList),
      ...P.map((p) => makeIcon(p.slug, t(p.label) || t(p.title), FOLDER, () => openProject(p))));
    placeIcons();
  }

  /* ---------- pencereler ---------- */
  let z = 10, cascade = 0;
  const wins = new Map();

  function placeWin(w) {
    const W = desktop.clientWidth, H = desktop.clientHeight;
    const x = Math.min(W - w.offsetWidth - 8, 40 + (cascade % 6) * 32 + (W > 1100 ? W * 0.18 : 0));
    const y = Math.min(H - w.offsetHeight - 8, 16 + (cascade % 6) * 28);
    w.style.left = Math.max(8, x) + 'px'; w.style.top = Math.max(8, y) + 'px';
    cascade++;
  }

  // telefonda pencere tam ekran: arkadaki ikonlar sekme sırasından çıksın
  function syncInert() {
    const hide = isMobile() && wins.size > 0;
    desktop.querySelectorAll('.icon, #gear-box').forEach((n) => { n.inert = hide; });
  }

  function openWindow(id, title, body) {
    if (wins.has(id)) { const w = wins.get(id); w.style.zIndex = ++z; w.querySelector('.win-close').focus(); return w; }
    const hid = 'h-' + id;
    const w = el('section', { class: 'win', role: 'dialog', 'aria-labelledby': hid, 'data-id': id });
    const bar = el('div', { class: 'win-bar' },
      el('h2', { id: hid, text: title }),
      el('button', { class: 'win-close', type: 'button', 'aria-label': ui('close'), text: '×', onclick: () => closeWin(id) }));
    w.append(bar, el('div', { class: 'win-body' }, body));
    w.style.zIndex = ++z;
    w.opener = document.activeElement;
    desktop.append(w);
    if (!isMobile()) placeWin(w);
    const raise = () => { w.style.zIndex = ++z; };
    w.addEventListener('pointerdown', raise);
    w.addEventListener('focusin', raise);
    dragBy(bar, w);
    wins.set(id, w);
    syncInert();
    w.querySelector('.win-close').focus();
    return w;
  }

  function closeWin(id) {
    const w = wins.get(id); if (!w) return;
    w.querySelectorAll('video').forEach((v) => v.pause());
    w.remove(); wins.delete(id);
    syncInert();
    if (id === 'about') $('#start').setAttribute('aria-expanded', 'false');
    if (w.opener?.isConnected) w.opener.focus();
  }

  function dragBy(handle, w) {
    let sx, sy, ox, oy;
    handle.addEventListener('pointerdown', (e) => {
      if (isMobile() || e.target.closest('button')) return;
      sx = e.clientX; sy = e.clientY; ox = w.offsetLeft; oy = w.offsetTop;
      handle.setPointerCapture(e.pointerId);
    });
    handle.addEventListener('pointermove', (e) => {
      if (sx == null) return;
      const W = desktop.clientWidth, H = desktop.clientHeight;
      w.style.left = Math.max(-w.offsetWidth + 80, Math.min(W - 80, ox + e.clientX - sx)) + 'px';
      w.style.top = Math.max(0, Math.min(H - 30, oy + e.clientY - sy)) + 'px';
    });
    const end = () => { sx = null; };
    handle.addEventListener('pointerup', end);
    handle.addEventListener('pointercancel', end);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !wins.size) return;
    const focused = document.activeElement?.closest?.('.win');
    if (focused) return closeWin(focused.dataset.id);
    const top = [...wins.entries()].sort((a, b) => b[1].style.zIndex - a[1].style.zIndex)[0];
    closeWin(top[0]);
  });

  /* ---------- büyütme: görsele/videoya tıklayınca tam ekran, ‹ › ile aynı projenin görselleri arasında ---------- */
  const lb = el('div', { class: 'lightbox', role: 'dialog', 'aria-modal': 'true', hidden: '' });
  document.body.append(lb);
  let lbList = [], lbIdx = 0, lbTitle = '', lbOpener = null;

  function lbShow() {
    const m = lbList[lbIdx];
    let node;
    if (/\.(mp4|webm)$/i.test(m)) {
      node = el('video', { src: m, playsinline: '', autoplay: '' });
      if (m.endsWith('.loop.mp4')) { node.loop = true; node.muted = true; } else node.controls = true;
    } else node = el('img', { src: m, alt: lbTitle, class: m.endsWith('.px.webp') ? 'px' : '' });
    const many = lbList.length > 1;
    lb.setAttribute('aria-label', lbTitle);
    lb.replaceChildren(
      el('div', { class: 'lb-stage', onclick: (e) => { if (e.target === e.currentTarget) lbClose(); } }, node),
      el('button', { class: 'lb-close', type: 'button', 'aria-label': ui('close'), text: '×', onclick: lbClose }),
      many ? el('button', { class: 'lb-nav lb-prev', type: 'button', 'aria-label': ui('prevImg'), text: '‹', onclick: () => lbGo(-1) }) : null,
      many ? el('button', { class: 'lb-nav lb-next', type: 'button', 'aria-label': ui('nextImg'), text: '›', onclick: () => lbGo(1) }) : null,
      many ? el('span', { class: 'lb-count', text: `${lbIdx + 1} / ${lbList.length}` }) : null);
    lb.querySelector('.lb-close').focus();
  }
  function lbOpen(list, i, title) {
    lbList = list; lbIdx = i; lbTitle = title; lbOpener = document.activeElement;
    lb.hidden = false;
    lbShow();
  }
  function lbClose() {
    lb.hidden = true;
    lb.replaceChildren(); // açık video sussun
    if (lbOpener?.isConnected) lbOpener.focus();
  }
  const lbGo = (d) => { lbIdx = (lbIdx + d + lbList.length) % lbList.length; lbShow(); };
  // pencerelerin Escape'inden önce yakalansın (capture)
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') lbClose();
    else if (e.key === 'ArrowRight') lbGo(1);
    else if (e.key === 'ArrowLeft') lbGo(-1);
    else return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }, true);
  // telefonda yana kaydırarak geçiş
  let tx = null;
  lb.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (tx == null || lbList.length < 2) return;
    const dx = e.changedTouches[0].clientX - tx;
    tx = null;
    if (Math.abs(dx) > 50) lbGo(dx < 0 ? 1 : -1);
  });

  function openProject(p) {
    const all = p.media || [];
    const media = all.map((m, i) => {
      const zoom = () => lbOpen(all, i, t(p.title));
      if (m.endsWith('.loop.mp4')) {
        const v = el('video', { src: m, autoplay: '', loop: '', playsinline: '', preload: 'metadata', 'aria-label': t(p.title), class: 'zoomable', onclick: zoom });
        v.muted = true;
        return v;
      }
      if (/\.(mp4|webm)$/i.test(m)) {
        // kontrollü videoda tıklama oynat/durdur demek: büyütme ayrı düğmede
        return el('div', { class: 'm' },
          el('video', { src: m, controls: '', muted: '', playsinline: '', preload: 'metadata' }),
          el('button', { class: 'm-zoom', type: 'button', 'aria-label': ui('zoom'), title: ui('zoom'), text: '⤢', onclick: zoom }));
      }
      return el('img', { src: m, alt: t(p.title), loading: 'lazy', class: 'zoomable' + (m.endsWith('.px.webp') ? ' px' : ''), onclick: zoom });
    });
    const n = String(P.indexOf(p) + 1).padStart(2, '0');
    const body = [
      el('div', { class: 'chips' }, el('span', { class: 'chip', text: t(p.category) }), el('span', { class: 'chip', text: p.year }), el('span', { class: 'chip', text: t(p.status) })),
      el('p', { class: 'tagline', text: t(p.tagline) }),
      el('p', { class: 'desc', text: t(p.description) }),
      el('dl', { class: 'credits' },
        // teknoloji adları İngilizce: tr büyük harf kuralı "SCRİPTİNG" yapmasın
        el('dt', { text: ui('tech') }), el('dd', { lang: 'en', text: (t(p.tech) || []).join(', ') }),
        el('dt', { text: ui('status') }), el('dd', { text: t(p.status) }),
        el('dt', { text: ui('year') }), el('dd', { text: p.year })),
      (t(p.highlights) || []).length ? el('ul', { class: 'hl' }, t(p.highlights).map((h) => el('li', { text: h }))) : null,
      media.length ? el('div', { class: 'media' }, media) : el('p', { class: 'empty-media', text: ui('noMedia') }),
      p.credit ? el('p', { class: 'credit proj-credit' }, t(p.credit) + ' ', p.credit.url ? el('a', { href: p.credit.url, target: '_blank', rel: 'noopener', text: p.credit.url.replace(/^https?:\/\//, '') }) : null) : null,
      // çizim masası temasında görünen antet; diğer temalarda CSS gizler
      el('dl', { class: 'tblock', 'aria-hidden': 'true' },
        el('div', {}, el('dt', { text: ui('drawn') }), el('dd', { text: 'A. BEYLER' })),
        el('div', {}, el('dt', { text: ui('sheet') }), el('dd', { text: `${n}/${String(P.length).padStart(2, '0')}` })),
        el('div', {}, el('dt', { text: ui('scale') }), el('dd', { text: '1:1' })),
        el('div', {}, el('dt', { text: ui('date') }), el('dd', { text: p.year })))
    ];
    openWindow('p-' + p.slug, t(p.title), body);
  }

  function openAbout() {
    $('#start').setAttribute('aria-expanded', 'true');
    const links = S.links.filter((l) => l.url).map((l) => el('a', { href: l.url, target: '_blank', rel: 'noopener', text: l.label }));
    openWindow('about', S.name, [
      el('div', { class: 'chips' }, el('span', { class: 'chip', text: t(S.role) })),
      el('p', { class: 'desc', text: t(S.bio) }),
      links.length ? el('div', { class: 'about-links' }, links) : null,
      S.musicCredit ? el('p', { class: 'credit', text: `${ui('musicBy')}: ${S.musicCredit}` }) : null,
      // Open-Meteo CC BY 4.0: kaynak gösterilmesi şart
      el('p', { class: 'credit' }, `${ui('weatherBy')}: `, el('a', { href: 'https://open-meteo.com/', target: '_blank', rel: 'noopener', text: 'Open-Meteo.com' }), ' (CC BY 4.0)')
    ]);
  }

  function openList() {
    openWindow('list', ui('projects'), el('ul', { class: 'plist' },
      P.map((p) => el('li', {}, el('button', { type: 'button', onclick: () => openProject(p) },
        el('span', { text: t(p.title) }), el('span', { class: 'meta', text: `${t(p.category)} · ${p.year}` }))))));
  }

  $('#start').addEventListener('click', () => (wins.has('about') ? closeWin('about') : openAbout()));
  $('#lang').addEventListener('click', () => {
    lang = lang === 'tr' ? 'en' : 'tr'; store.set('lang', lang);
    [...wins.keys()].forEach(closeWin);
    renderChrome(); renderIcons();
  });

  let wasMobile = isMobile(), rt;
  addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      if (isMobile() === wasMobile) return placeIcons();
      wasMobile = isMobile();
      renderIcons();
      syncInert();
      // telefonda açılıp masaüstüne geçen pencerelerin yeri yok: köşeye yığılmasın
      if (!wasMobile) wins.forEach((w) => { if (!w.style.left) placeWin(w); });
    }, 120);
  });

  renderChrome();
  renderIcons();
  loadWeather();
})();
