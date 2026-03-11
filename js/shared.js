/* =====================================================
   ZEAL GAME STUDIO — SHARED JS v2
   ===================================================== */

/* ─── I18N DATA ──────────────────────────────────── */
const i18n = {
  vi: {
    // NAV
    nav_home: 'Trang Chủ', nav_about: 'Về Chúng Tôi', nav_products: 'Sản Phẩm',
    nav_contact: 'Liên Hệ', nav_zealquest: 'Zeal Quest', nav_zealscan: 'ZealScan',
    // HERO
    hero_badge: '🎮 Studio Game Mobile Hàng Đầu',
    hero_h1_a: 'FORGE YOUR', hero_h1_b: 'LEGEND',
    hero_sub: 'Zeal Game Studio — nơi những trải nghiệm chơi game đỉnh cao được tạo ra. Chúng tôi phát triển game mobile RPG nhập vai và ứng dụng tra cứu thẻ bài Pokémon.',
    hero_cta1: 'Khám Phá Ngay', hero_cta2: 'Về Chúng Tôi',
    stat_players: 'Người Chơi', stat_countries: 'Quốc Gia', stat_awards: 'Giải Thưởng', stat_rating: 'Điểm Đánh Giá',
    scroll_hint: 'Cuộn Xuống',
    // ABOUT
    about_chip: 'Về Chúng Tôi', about_t1: 'Đam Mê Tạo Ra', about_t2: 'Thế Giới Mới',
    about_d1: 'Thành lập năm 2019 tại TP. Hồ Chí Minh, <strong>Zeal Game Studio</strong> là studio game mobile của những người trẻ Việt Nam đầy nhiệt huyết.',
    about_d2: 'Với đội ngũ hơn 60 chuyên gia trong lĩnh vực thiết kế, lập trình và âm nhạc, chúng tôi cam kết mang đến những tựa game chất lượng AAA.',
    p1_t: 'Sứ Mệnh', p1_d: 'Đưa sản phẩm Việt lên bản đồ thế giới với chất lượng không nhân nhượng.',
    p2_t: 'Tầm Nhìn', p2_d: 'Trở thành studio game và app mobile hàng đầu Đông Nam Á vào năm 2027.',
    fc1_t: 'Game Engine', fc2_t: 'Phát Hành', fc3_t: 'Top Charts',
    // PRODUCTS
    prod_chip: 'Sản Phẩm', prod_t1: 'Hai Sản Phẩm,', prod_t2: 'Một Tiêu Chí Đỉnh Cao',
    prod_desc: 'Từ thế giới game RPG hùng tráng đến công cụ tra cứu thẻ bài chuyên nghiệp — Zeal Studio mang đến những trải nghiệm đỉnh cao.',
    zq_badge: 'Mobile RPG', zq_t: 'Zeal Quest',
    zq_desc: 'Bước vào thế giới Aethoria hùng vĩ — chiến đấu với hàng trăm loài quái vật, thu thập trang bị huyền thoại và viết nên câu chuyện của riêng bạn.',
    zq_t1: 'RPG', zq_t2: 'Nhập Vai', zq_t3: 'PvP', zq_cta: 'Xem Chi Tiết',
    zs_badge: 'Card Scanner', zs_t: 'ZealScan',
    zs_desc: 'Quét ảnh bất kỳ thẻ Pokémon TCG hoặc OCG — nhận giá thị trường tức thì từ 10+ sàn giao dịch quốc tế. Quản lý bộ sưu tập thẻ bài chuyên nghiệp.',
    zs_t1: 'Pokemon TCG', zs_t2: 'OCG', zs_t3: 'Tra Giá', zs_cta: 'Xem Chi Tiết',
    // TEAM
    team_chip: 'Đội Ngũ', team_t1: 'Những Con Người', team_t2: 'Tạo Ra Huyền Thoại',
    role_ceo: 'Founder & CEO', role_art: 'Art Director', role_dev: 'Lead Developer', role_design: 'Game Designer',
    // CONTACT
    contact_chip: 'Liên Hệ', contact_t1: 'Kết Nối Với', contact_t2: 'Zeal Game Studio',
    contact_desc: 'Chúng tôi luôn sẵn sàng lắng nghe bạn',
    ci_addr: 'Địa Chỉ', ci_email: 'Email', ci_phone: 'Điện Thoại',
    f_name: 'Họ và Tên', f_name_ph: 'Nguyễn Văn A', f_email: 'Email', f_email_ph: 'email@example.com',
    f_subj: 'Chủ Đề', f_subj_ph: 'Chọn chủ đề...',
    f_o1: 'Hợp Tác', f_o2: 'Truyền Thông / Báo Chí', f_o3: 'Hỗ Trợ Game', f_o4: 'ZealScan Support', f_o5: 'Tuyển Dụng', f_o6: 'Khác',
    f_msg: 'Tin Nhắn', f_msg_ph: 'Nội dung tin nhắn...', f_submit: 'Gửi Tin Nhắn',
    // FOOTER
    footer_desc: 'Chúng tôi tạo ra những trải nghiệm game mobile và ứng dụng tiện ích không thể quên được.',
    fc_co: 'Công Ty', fc_prod: 'Sản Phẩm', fc_legal: 'Pháp Lý',
    f_about: 'Về Chúng Tôi', f_contact: 'Liên Hệ', f_careers: 'Tuyển Dụng', f_news: 'Tin Tức',
    f_indev: 'Đang Phát Triển', f_road: 'Lộ Trình', f_terms: 'Điều Khoản', f_privacy: 'Bảo Mật', f_eula: 'EULA',
    footer_cr: '© 2024 Zeal Game Studio. Tất cả quyền được bảo lưu.',
    footer_made: 'Made with ❤️ in Việt Nam 🇻🇳',
    // STORE
    s_get: 'Tải Trên', s_gplay: 'Google Play', s_astore: 'App Store',
    // TOAST
    toast_sending: 'Đang gửi...', toast_sent: 'Tin nhắn đã được gửi! Chúng tôi sẽ phản hồi sớm.',
    toast_coming: 'sẽ sớm có trên',
    // PRODUCT PAGES
    back: '← Quay Lại Trang Chủ',
    // ZQ
    zq_tagline: 'Tựa game nhập vai đỉnh cao chinh phục hàng triệu người chơi khắp thế giới',
    zq_hw1_t: 'Tạo Nhân Vật', zq_hw1_d: 'Chọn 1 trong 8 lớp nhân vật với hàng trăm kỹ năng độc đáo.',
    zq_hw2_t: 'Khám Phá Thế Giới', zq_hw2_d: 'Phiêu lưu qua 500+ vùng đất trong thế giới mở Aethoria khổng lồ.',
    zq_hw3_t: 'Chinh Phục Đỉnh Cao', zq_hw3_d: 'Thi đấu PvP toàn cầu và trở thành huyền thoại bất diệt.',
    zq_f_sec_t1: 'Tại Sao Chọn', zq_f_sec_t2: 'Zeal Quest?',
    zq_f1: 'Chiến Đấu Thời Gian Thực', zq_f1d: 'Hệ thống combat mượt mà với hàng trăm combo chiêu thức độc đáo. Phản ứng nhanh để giành chiến thắng!',
    zq_f2: 'Thế Giới Mở Khổng Lồ', zq_f2d: 'Khám phá 500+ khu vực độc đáo với hệ sinh thái sống động và thời tiết thay đổi.',
    zq_f3: 'Đồ Họa AAA', zq_f3d: 'Unity 3D với ray-tracing mobile lần đầu tiên trên điện thoại.',
    zq_f4: 'Cốt Truyện Sử Thi', zq_f4d: '200+ giờ nội dung cốt truyện chính thống với nhiều kết thúc khác nhau.',
    zq_f5: 'PvP Toàn Cầu', zq_f5d: 'Thách đấu 150+ quốc gia trong bảng xếp hạng thời gian thực.',
    zq_f6: 'Âm Nhạc Sống Động', zq_f6d: '80+ bản nhạc do nhạc sĩ đoạt Oscar sáng tác, thích nghi với mọi tình huống.',
    zq_scr_t1: 'Màn Hình Chính', zq_scr_t2: 'Hệ Thống Chiến Đấu', zq_scr_t3: 'Chọn Nhân Vật',
    zq_dl_t: 'Sẵn Sàng Chiến Đấu?', zq_dl_d: 'Tải xuống miễn phí và nhận gói quà người chơi mới ngay hôm nay!',
    zq_trust1: '✅ Miễn phí', zq_trust2: '✅ Không quảng cáo cưỡng bức', zq_trust3: '✅ Cập nhật liên tục',
    // ZS
    zs_tagline: 'Tra cứu giá thẻ Pokémon TCG & OCG tức thì với công nghệ AI nhận diện thông minh',
    zs_hw1_t: 'Chụp Thẻ Bài', zs_hw1_d: 'Mở app, hướng camera về phía thẻ Pokémon TCG hoặc OCG bất kỳ.',
    zs_hw2_t: 'AI Nhận Diện', zs_hw2_d: 'Công nghệ AI nhận diện tên, bộ bài, độ hiếm và in ấn chỉ trong 0.5 giây.',
    zs_hw3_t: 'Xem Giá Tức Thì', zs_hw3_d: 'Nhận giá tổng hợp từ 10+ sàn giao dịch lớn với biểu đồ lịch sử 1 năm.',
    zs_f_sec_t1: 'Tại Sao Chọn', zs_f_sec_t2: 'ZealScan?',
    zs_f1: 'Quét AI Tức Thì', zs_f1d: 'Nhận diện thẻ Pokémon TCG và OCG chỉ trong 0.5 giây, kể cả khi thẻ bị mờ hay che khuất.',
    zs_f2: 'Giá Thời Gian Thực', zs_f2d: 'Tổng hợp từ TCGPlayer, CardMarket, eBay, Mercari và 10+ sàn giao dịch lớn.',
    zs_f3: 'Lịch Sử Giá 1 Năm', zs_f3d: 'Theo dõi xu hướng 30, 90, 180 ngày và 1 năm để biết khi nào mua, khi nào bán.',
    zs_f4: 'Quản Lý Bộ Sưu Tập', zs_f4d: 'Nhập toàn bộ collection, tự động tính giá trị tổng và chia sẻ với cộng đồng.',
    zs_f5: 'Cảnh Báo Giá', zs_f5d: 'Đặt ngưỡng giá mong muốn và nhận thông báo ngay khi chạm mức đó.',
    zs_f6: 'TCG & OCG Đầy Đủ', zs_f6d: '180,000+ thẻ từ tất cả các set TCG (EN, JP) và OCG (JP, CN).',
    zs_scr_t1: 'Quét Thẻ Tức Thì', zs_scr_t2: 'Giá & Biểu Đồ', zs_scr_t3: 'Bộ Sưu Tập',
    zs_dl_t: 'Bắt Đầu Tra Giá Ngay?', zs_dl_d: 'Miễn phí hoàn toàn. Không cần đăng ký để quét thẻ đầu tiên!',
    zs_trust1: '✅ Miễn phí', zs_trust2: '✅ 100% offline scan', zs_trust3: '✅ Cập nhật giá hàng giờ',
    zs_mkt_lbl: 'Tổng Hợp Giá Từ',
  },
  en: {
    nav_home: 'Home', nav_about: 'About', nav_products: 'Products',
    nav_contact: 'Contact', nav_zealquest: 'Zeal Quest', nav_zealscan: 'ZealScan',
    hero_badge: '🎮 Vietnam\'s Premier Mobile Game Studio',
    hero_h1_a: 'FORGE YOUR', hero_h1_b: 'LEGEND',
    hero_sub: 'Zeal Game Studio — where top-tier mobile experiences are crafted. We build immersive mobile RPGs and a Pokémon card price lookup app that every collector needs.',
    hero_cta1: 'Explore Now', hero_cta2: 'About Us',
    stat_players: 'Players', stat_countries: 'Countries', stat_awards: 'Awards', stat_rating: 'App Rating',
    scroll_hint: 'Scroll Down',
    about_chip: 'About Us', about_t1: 'Passionate About', about_t2: 'Creating New Worlds',
    about_d1: 'Founded in 2019 in Ho Chi Minh City, <strong>Zeal Game Studio</strong> is run by passionate young Vietnamese developers who believe great games can come from anywhere.',
    about_d2: 'With a 60+ person team of designers, engineers and musicians, we deliver AAA-quality mobile games and top-tier utility apps.',
    p1_t: 'Mission', p1_d: 'Putting Vietnamese products on the world map with uncompromising quality.',
    p2_t: 'Vision', p2_d: 'Become Southeast Asia\'s leading mobile game and app studio by 2027.',
    fc1_t: 'Game Engine', fc2_t: 'Platform', fc3_t: 'Top Charts',
    prod_chip: 'Products', prod_t1: 'Two Products,', prod_t2: 'One Standard of Excellence',
    prod_desc: 'From epic RPG worlds to professional card price lookup — Zeal Studio delivers premium experiences.',
    zq_badge: 'Mobile RPG', zq_t: 'Zeal Quest',
    zq_desc: 'Enter the majestic world of Aethoria — battle hundreds of creatures, collect legendary gear, and write your own legend.',
    zq_t1: 'RPG', zq_t2: 'Role-Play', zq_t3: 'PvP', zq_cta: 'Learn More',
    zs_badge: 'Card Scanner', zs_t: 'ZealScan',
    zs_desc: 'Scan any Pokémon TCG or OCG card — get real-time market prices from 10+ global platforms instantly. Manage your collection like a pro.',
    zs_t1: 'Pokemon TCG', zs_t2: 'OCG', zs_t3: 'Price Lookup', zs_cta: 'Learn More',
    team_chip: 'Team', team_t1: 'The People', team_t2: 'Who Forge Legends',
    role_ceo: 'Founder & CEO', role_art: 'Art Director', role_dev: 'Lead Developer', role_design: 'Game Designer',
    contact_chip: 'Contact', contact_t1: 'Connect With', contact_t2: 'Zeal Game Studio',
    contact_desc: 'We\'re always here to listen',
    ci_addr: 'Address', ci_email: 'Email', ci_phone: 'Phone',
    f_name: 'Full Name', f_name_ph: 'John Doe', f_email: 'Email', f_email_ph: 'email@example.com',
    f_subj: 'Subject', f_subj_ph: 'Select a subject...',
    f_o1: 'Partnership', f_o2: 'Media / Press', f_o3: 'Game Support', f_o4: 'ZealScan Support', f_o5: 'Careers', f_o6: 'Other',
    f_msg: 'Message', f_msg_ph: 'Your message...', f_submit: 'Send Message',
    footer_desc: 'We create unforgettable mobile game and app experiences.',
    fc_co: 'Company', fc_prod: 'Products', fc_legal: 'Legal',
    f_about: 'About Us', f_contact: 'Contact', f_careers: 'Careers', f_news: 'News',
    f_indev: 'In Development', f_road: 'Roadmap', f_terms: 'Terms of Service', f_privacy: 'Privacy Policy', f_eula: 'EULA',
    footer_cr: '© 2024 Zeal Game Studio. All rights reserved.',
    footer_made: 'Made with ❤️ in Vietnam 🇻🇳',
    s_get: 'Get It On', s_gplay: 'Google Play', s_astore: 'App Store',
    toast_sending: 'Sending...', toast_sent: 'Message sent! We\'ll get back to you soon.',
    toast_coming: 'coming soon to',
    back: '← Back to Home',
    zq_tagline: 'The ultimate mobile RPG conquering millions of players worldwide',
    zq_hw1_t: 'Create Your Hero', zq_hw1_d: 'Choose from 8 character classes with hundreds of unique skills.',
    zq_hw2_t: 'Explore the World', zq_hw2_d: 'Adventure through 500+ areas in the massive Aethoria open world.',
    zq_hw3_t: 'Conquer Legends', zq_hw3_d: 'Compete in global PvP and become an immortal legend.',
    zq_f_sec_t1: 'Why Choose', zq_f_sec_t2: 'Zeal Quest?',
    zq_f1: 'Real-Time Combat', zq_f1d: 'Smooth combat with hundreds of unique skill combos. React fast to win!',
    zq_f2: 'Massive Open World', zq_f2d: '500+ unique areas with vibrant ecosystems and dynamic weather.',
    zq_f3: 'AAA Graphics', zq_f3d: 'Unity 3D with mobile ray-tracing technology — a first for mobile gaming.',
    zq_f4: 'Epic Storyline', zq_f4d: '200+ hours of main story with multiple endings based on your choices.',
    zq_f5: 'Global PvP', zq_f5d: 'Challenge players from 150+ countries in real-time global leaderboards.',
    zq_f6: 'Dynamic Soundtrack', zq_f6d: '80+ tracks by Oscar-winning composers, adapting to every situation.',
    zq_scr_t1: 'Main Screen', zq_scr_t2: 'Combat System', zq_scr_t3: 'Character Select',
    zq_dl_t: 'Ready to Fight?', zq_dl_d: 'Download for free and claim your new player gift pack today!',
    zq_trust1: '✅ Free to play', zq_trust2: '✅ No forced ads', zq_trust3: '✅ Regular updates',
    zs_tagline: 'Instantly look up Pokémon TCG & OCG card prices with smart AI recognition',
    zs_hw1_t: 'Photograph a Card', zs_hw1_d: 'Open the app and point your camera at any Pokémon TCG or OCG card.',
    zs_hw2_t: 'AI Recognizes It', zs_hw2_d: 'Our AI identifies the name, set, rarity, and print variant in 0.5 seconds.',
    zs_hw3_t: 'See Prices Instantly', zs_hw3_d: 'Get aggregated prices from 10+ major platforms with a 1-year price history chart.',
    zs_f_sec_t1: 'Why Choose', zs_f_sec_t2: 'ZealScan?',
    zs_f1: 'Instant AI Scan', zs_f1d: 'Identifies Pokémon TCG & OCG cards in 0.5s, even when blurry or partially hidden.',
    zs_f2: 'Live Market Prices', zs_f2d: 'Aggregated from TCGPlayer, CardMarket, eBay, Mercari and 10+ major platforms.',
    zs_f3: '1-Year Price History', zs_f3d: 'Track trends over 30, 90, 180 days and 1 year to time your buys and sells.',
    zs_f4: 'Collection Manager', zs_f4d: 'Log your entire collection, auto-calculate total value, and share with the community.',
    zs_f5: 'Price Alerts', zs_f5d: 'Set a target price and get notified instantly when the card drops to that level.',
    zs_f6: 'Full TCG & OCG', zs_f6d: '180,000+ cards across all TCG (EN, JP) and OCG (JP, CN) sets.',
    zs_scr_t1: 'Instant Card Scan', zs_scr_t2: 'Price & Chart', zs_scr_t3: 'Collection',
    zs_dl_t: 'Start Scanning Today?', zs_dl_d: 'Completely free. No sign-up needed to scan your first card!',
    zs_trust1: '✅ Free', zs_trust2: '✅ 100% offline scan', zs_trust3: '✅ Prices updated hourly',
    zs_mkt_lbl: 'Prices Aggregated From',
  }
};

/* ─── LANGUAGE ─────────────────────────────────── */
let lang = localStorage.getItem('zg-lang') || 'vi';

function applyLang(l) {
  lang = l;
  localStorage.setItem('zg-lang', l);
  const t = i18n[l];
  document.querySelectorAll('[data-k]').forEach(el => {
    const k = el.dataset.k;
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.querySelectorAll('[data-kph]').forEach(el => {
    const k = el.dataset.kph;
    if (t[k] !== undefined) el.placeholder = t[k];
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
  document.documentElement.lang = l;
}

/* ─── THEME ─────────────────────────────────────── */
const html = document.documentElement;
html.setAttribute('data-theme', localStorage.getItem('zg-theme') || 'light');
document.querySelectorAll('.theme-tog').forEach(btn =>
  btn.addEventListener('click', () => {
    const n = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', n);
    localStorage.setItem('zg-theme', n);
  })
);

/* ─── NAVBAR ────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
window.addEventListener('scroll', () => navbar?.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
burger?.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks?.classList.toggle('open');
  document.body.style.overflow = navLinks?.classList.contains('open') ? 'hidden' : '';
});
navLinks?.querySelectorAll('.nav-link').forEach(a => a.addEventListener('click', () => {
  burger?.classList.remove('open');
  navLinks?.classList.remove('open');
  document.body.style.overflow = '';
}));

/* ─── LANG BTNS ──────────────────────────────────── */
document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

/* ─── SCROLL SPY ────────────────────────────────── */
function initScrollSpy() {
  const secs = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link[href^="#"]');
  if (!secs.length || !links.length) return;
  const cb = () => {
    let cur = '';
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 90) cur = s.id; });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
  };
  window.addEventListener('scroll', cb, { passive: true });
  cb();
}

/* ─── PARTICLES ─────────────────────────────────── */
function initParticles(id = 'ptk') {
  const c = document.getElementById(id);
  if (!c) return;
  const cols = ['#8b5cf6', '#3b82f6', '#06b6d4', '#f97316', '#ec4899'];
  for (let i = 0; i < 24; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const sz = Math.random() * 5 + 2, col = cols[Math.floor(Math.random() * cols.length)];
    p.style.cssText = `width:${sz}px;height:${sz}px;background:${col};left:${Math.random() * 100}%;box-shadow:0 0 ${sz * 2}px ${col};animation-duration:${Math.random() * 12 + 8}s;animation-delay:${Math.random() * 8}s`;
    c.appendChild(p);
  }
}

/* ─── STAT COUNTER ──────────────────────────────── */
function initCounters() {
  const bar = document.querySelector('.stats-bar');
  if (!bar) return;
  let done = false;
  const run = () => {
    if (done || bar.getBoundingClientRect().top > window.innerHeight) return;
    done = true;
    document.querySelectorAll('.stat-n').forEach(el => {
      const tgt = parseFloat(el.dataset.t);
      const isFloat = el.dataset.t.includes('.');
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / 1800, 1), e = 1 - Math.pow(1 - p, 3), v = tgt * e;
        if (isFloat) el.textContent = v.toFixed(1);
        else if (tgt >= 1e6) el.textContent = (v / 1e6).toFixed(1) + 'M+';
        else if (tgt >= 1e3) el.textContent = Math.floor(v / 1e3) + 'K+';
        else el.textContent = Math.floor(v) + '+';
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };
  window.addEventListener('scroll', run, { passive: true });
  setTimeout(run, 500);
}

/* ─── FADE UP REVEAL ────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const d = parseInt(en.target.dataset.d || 0);
      setTimeout(() => en.target.classList.add('vis'), d);
      obs.unobserve(en.target);
    });
  }, { threshold: .12 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

/* ─── PHONE SWITCHER ────────────────────────────── */
function initPhone(imgId, thumbSel, srcs, interval = 3200) {
  const img = document.getElementById(imgId);
  if (!img) return;
  img.classList.add('on');
  const thumbs = document.querySelectorAll(thumbSel);
  let ci = 0;
  const go = i => {
    img.classList.remove('on');
    setTimeout(() => { img.src = srcs[i]; img.classList.add('on'); }, 320);
    thumbs.forEach((t, j) => t.classList.toggle('on', j === i));
  };
  thumbs.forEach((t, i) => t.addEventListener('click', () => { ci = i; go(i); }));
  const iv = setInterval(() => go(ci = (ci + 1) % srcs.length), interval);
  return iv;
}

/* ─── SLIDER ────────────────────────────────────── */
function initSlider(trackId, prevId, nextId, dotsSel) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const slides = track.querySelectorAll('.slide-item');
  const dots = document.querySelectorAll(dotsSel);
  let cur = 0;
  const perView = () => window.innerWidth < 480 ? 1 : window.innerWidth < 768 ? 2 : 3;
  const go = i => {
    const max = Math.max(0, slides.length - perView());
    cur = Math.max(0, Math.min(i, max));
    const w = slides[0]?.offsetWidth + 16 || 0;
    track.style.transform = `translateX(-${cur * w}px)`;
    dots.forEach((d, j) => d.classList.toggle('on', j === cur));
  };
  document.getElementById(prevId)?.addEventListener('click', () => go(cur - 1));
  document.getElementById(nextId)?.addEventListener('click', () => go(cur + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
  window.addEventListener('resize', () => go(cur));
}

/* ─── TOAST ────────────────────────────────────── */
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
function showToast(msg, icon = '✅') {
  if (!toast) return;
  const ti = toast.querySelector('.t-icon');
  if (ti) ti.textContent = icon;
  if (toastMsg) toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ─── STORE BTNS ─────────────────────────────────── */
function initStoreBtns() {
  document.querySelectorAll('.store-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const app = btn.closest('[data-app]')?.dataset.app || 'App';
      const isApple = btn.classList.contains('sb-apple');
      const t = i18n[lang];
      const store = isApple ? t.s_astore : t.s_gplay;
      showToast(`${app} ${t.toast_coming} ${store}!`, isApple ? '🍎' : '🟢');
    });
  });
}

/* ─── CONTACT FORM ───────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submit = document.getElementById('submitBtn');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = i18n[lang];
    if (submit) { submit.textContent = t.toast_sending; submit.disabled = true; }
    setTimeout(() => {
      if (submit) { submit.innerHTML = `<span data-k="f_submit">${t.f_submit}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="17" height="17"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 19-7z"/></svg>`; submit.disabled = false; }
      form.reset();
      showToast(t.toast_sent);
    }, 1800);
  });
}

/* ─── SMOOTH SCROLL ─────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ─── INIT ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(lang);
  initParticles('ptk');
  initCounters();
  initReveal();
  initScrollSpy();
  initStoreBtns();
  initContactForm();
  console.log('%c🎮 ZEAL GAME STUDIO', 'font-size:20px;font-weight:900;color:#8b5cf6');
  console.log('%c🔍 ZealScan — Pokémon TCG & OCG Price Scanner', 'font-size:12px;color:#f59e0b');
});
