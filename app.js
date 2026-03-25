/* ── i18n ── */
let lang = 'gu';

const i18n = {
  appTitle:       ['ANC PNC વિઝિટ તારીખ કેલ્ક્યુલેટર', 'ANC PNC Visit Dates Calculator'],
  badgeBeta:      ['બીટા ટેસ્ટિંગ', 'Beta Testing'],
  langToggle:     ['English', 'ગુજરાતી'],
  heroH1:         ['અમારા બીટા ટેસ્ટિંગ પ્રોગ્રામમાં જોડાઓ', 'Join Our Beta Testing Program'],
  heroP:          ['આ એપ્લિકેશન ANC PNC ની તારીખની ગણતરીને સરળ બનાવવા સાથે આપે છે.', 'This application simplifies ANC PNC visit date calculations.'],
  btnJoin:        ['Google Group માં જોડાઓ', 'Join Google Group'],
  btnDownload:    ['એપ ડાઉનલોડ કરો', 'Download App'],
  alertTitle:     ['ટેસ્ટિંગ મોડ સક્રિય', 'Testing Mode Active'],
  alertDesc:      ['પહેલા ગ્રુપ લિંકમાં ક્લિક કરી Join Group પર ક્લિક કરો, પછી એપ ડાઉનલોડ કરો.', 'First click the group link and click Join Group, then download the app.'],
  gsTitle:        ['શરૂઆત કરવી', 'Getting Started'],
  s1Title:        ['Google Group માં જોડાઓ', 'Join the Google Group'],
  s1Desc:         ['ટેસ્ટિંગ પ્રોગ્રામની ઍક્સેસ મેળવો', 'Get access to the testing program'],
  s1Steps:        [
    ['નીચે "Google Group માં જોડાઓ" બટન પર ક્લિક કરો', 'Click the "Join Google Group" button below'],
    ['તમારા Google એકાઉન્ટ સાથે સાઇન ઇન કરો', 'Sign in with your Google account'],
    ['Google Groups પેજ પર "Join Group" પર ક્લિક કરો', 'Click "Join Group" on the Google Groups page'],
    ['મંજૂરી માટે રાહ જુઓ (સામાન્ય રીતે 24 કલાકની અંદર)', 'Wait for approval (usually within 24 hours)'],
    ['મંજૂર થયા પછી ઇમેઇલ કન્ફર્મેશન મળશે', 'You\'ll receive an email confirmation once approved'],
  ],
  s1Btn:          ['Google Group માં જોડાઓ', 'Join Google Group'],
  s2Title:        ['Google Group જોઇન કરવાની વિગતવાર સૂચનાઓ', 'Detailed Google Group Join Instructions'],
  s2Desc:         ['સ્ક્રીનશોટ સાથે સ્ટેપ બાય સ્ટેપ સૂચનાઓ', 'Step by step instructions with screenshots'],
  s2Li1:          ['Google Group લિંક પર ક્લિક કરો', 'Click on the Google Group link'],
  s2Li2:          ['"Join group" બટન પર ક્લિક કરો', 'Click the "Join group" button'],
  s2Li3:          ['તમારું ડિસ્પ્લે નામ દાખલ કરો (વૈકલ્પિક)', 'Enter your display name (optional)'],
  s2Li4:          ['સબ્સ્ક્રિપ્શન પસંદગીઓ પસંદ કરો', 'Choose subscription preferences'],
  s2Li5:          ['"Join group" બટન પર ક્લિક કરો', 'Click "Join group" button'],
  s2Li6:          ['મંજૂરી માટે રાહ જુઓ (24 કલાકની અંદર)', 'Wait for approval (within 24 hours)'],
  s2Btn:          ['હવે Google Group માં જોડાઓ', 'Join Google Group Now'],
  s3Title:        ['એપ ડાઉનલોડ અને ઇન્સ્ટોલ કરો', 'Download & Install the App'],
  s3Desc:         ['મંજૂર થયા પછી ટેસ્ટિંગ વર્ઝન ડાઉનલોડ કરો', 'Once approved, download the testing version'],
  s3Steps:        [
    ['ગ્રુપ મંજૂર થયા પછી ઇમેઇલ ચેક કરો', 'After group approval, check your email'],
    ['"એપ ડાઉનલોડ કરો" લિંક પર ક્લિક કરો', 'Click the "Download App" link'],
    ['Android: "અજ્ઞાત સ્ત્રોતોમાંથી ઇન્સ્ટોલ" સક્ષમ કરો', 'Android: Enable "Install from Unknown Sources"'],
    ['ડાઉનલોડ ફાઇલ ખોલો અને ઇન્સ્ટોલ કરો', 'Open the downloaded file and install'],
    ['જરૂરી પરવાનગીઓ આપો', 'Grant necessary permissions when prompted'],
  ],
  s3Btn:          ['ટેસ્ટ એપ ડાઉનલોડ કરો', 'Download Test App'],
  s4Title:        ['Play Store માં એકાઉન્ટ સ્વિચ કરો', 'Switch Account in Play Store'],
  s4Desc:         ['જો Play Store માં એપ દેખાતી નથી', 'If the app is not showing in Play Store'],
  s4Alert:        ['જો Google Group જોઇન કર્યા પછી Play Store માં એપ ન દેખાય, તો ખોટા Google એકાઉન્ટથી જોઇન થયા હશો.', 'If the app is not showing after joining, you may have joined with a different Google account.'],
  s4ImgCaption:   ['જો આ સ્ક્રીન દેખાય:', 'If you see this screen:'],
  s4SubTitle:     ['Play Store માં એકાઉન્ટ બદલવાની સૂચનાઓ:', 'Instructions to change account in Play Store:'],
  s4Steps:        [
    ['Play Store એપ ખોલો', 'Open the Play Store app'],
    ['ઉપર જમણી બાજુ પ્રોફાઇલ આઇકન ટેપ કરો', 'Tap your profile icon in the top right'],
    ['નામ પાસે નીચે તીર ટેપ કરો', 'Tap the down arrow next to your name'],
    ['Google Group જોઇન કરેલ એકાઉન્ટ પસંદ કરો', 'Select the account you used to join the Group'],
    ['ફરીથી એપ શોધો', 'Search for the app again'],
  ],
  s4RememberTitle:['યાદ રાખો:', 'Remember:'],
  s4RememberDesc: ['Play Store માં એ જ Google એકાઉન્ટ હોવું જોઈએ જેનાથી Group જોઇન કર્યું.', 'You must be logged into Play Store with the same account used to join the Group.'],
  featuresTitle:  ['એપ્લિકેશન ફીચર્સ', 'App Features'],
  featuresDesc:   ['ANC PNC વિઝિટ કેલ્ક્યુલેટર એપ્લિકેશનની મુખ્ય સુવિધાઓ', 'Key features of the ANC PNC Visit Calculator application'],
  fCopyTitle:     ['કોપી કરો', 'Copy Results'],
  fCopyDesc:      ['ગણતરી કરેલ ANC/PNC તારીખો એક ટેપ વડે ક્લિપબોર્ડ પર કોપી કરો અને ગમે ત્યાં પેસ્ટ કરો.', 'Copy all calculated ANC/PNC dates to clipboard with a single tap and paste anywhere.'],
  fShareTitle:    ['શેર કરો', 'Share Results'],
  fShareDesc:     ['WhatsApp, SMS અથવા અન્ય એપ્સ દ્વારા સીધા જ ગણતરી પરિણામો શેર કરો.', 'Share calculation results directly via WhatsApp, SMS, or any other app instantly.'],
  fPdfTitle:      ['PDF એક્સપોર્ટ', 'Export as PDF'],
  fPdfDesc:       ['ANC/PNC વિઝિટ શેડ્યૂલ PDF ફોર્મેટમાં સેવ કરો અને ઓફલાઇન ઉપયોગ કરો.', 'Save the ANC/PNC visit schedule as a PDF for offline use and easy printing.'],
  fAncTitle:      ['ANC વિઝિટ ગણતરી', 'ANC Visit Calculation'],
  fAncDesc:       ['LMP તારીખ આધારે તમામ 8 ANC મુલાકાતોની ચોક્કસ તારીખ શ્રેણી આપોઆપ ગણે છે.', 'Automatically calculates the exact date range for all 8 ANC visits based on LMP date.'],
  fPncTitle:      ['PNC વિઝિટ ગણતરી', 'PNC Visit Calculation'],
  fPncDesc:       ['પ્રસૂતિ પછીની PNC મુલાકાતોની તારીખો આપોઆપ ગણે છે અને રિમાઇન્ડર આપે છે.', 'Automatically calculates postnatal PNC visit dates and provides timely reminders.'],
  fLangTitle:     ['વેબસાઇટ પર ઉપયોગ કરો', 'Use on Website'],
  fLangDesc:      ['એપ ઇન્સ્ટોલ કર્યા વિના સીધા વેબ બ્રાઉઝરમાં ઉપયોગ કરો. અહીં ક્લિક કરો:', 'Use directly in your web browser without installing the app. Click here:'],
  fDarkTitle:     ['ડાર્ક / લાઇટ મોડ', 'Dark / Light Mode'],
  fDarkDesc:      ['આંખ માટે આરામદાયક ડાર્ક મોડ અને ઉજ્જવળ લાઇટ મોડ વચ્ચે સરળતાથી સ્વિચ કરો.', 'Easily switch between eye-friendly dark mode and bright light mode anytime.'],
  webBannerLabel: ['એપ વગર ઉપયોગ કરો', 'Use without the app'],
  webBannerTitle: ['વેબ બ્રાઉઝરમાં સીધા ANC PNC કેલ્ક્યુલેટર ઉપયોગ કરો', 'Use the ANC PNC Calculator directly in your web browser'],
  faqTitle:       ['વારંવાર પૂછાતા પ્રશ્નો', 'Frequently Asked Questions'],
  faqItems:       [
    ['ગ્રુપ મંજૂરીમાં કેટલો સમય?', 'How long does group approval take?',
     'સામાન્ય રીતે 24 કલાકની અંદર. મંજૂર થયા પછી ઇમેઇલ સૂચના મળશે.', 'Typically within 24 hours. You\'ll receive an email notification once approved.'],
    ['શું એપ ઇન્સ્ટોલ કરવી સુરક્ષિત છે?', 'Is the app safe to install?',
     'હા! ટેસ્ટિંગ વર્ઝન હોવાથી ખાસ પરવાનગી જોઈએ, પણ સુરક્ષિત છે.', 'Yes! It requires special permissions as it\'s a testing version, but it\'s safe.'],
    ['જો બગ્સ મળે તો?', 'What if I find bugs?',
     'Google Group માં જાણ કરો. તમારો પ્રતિસાદ અમૂલ્ય છે.', 'Report them in our Google Group. Your feedback is invaluable.'],
    ['એપ બીજાઓ સાથે શેર કરી શકાય?', 'Can I share the app with others?',
     'તેમને Google Group માં જોડાવા કહો. ઍક્સેસ માટે મંજૂર ટેસ્ટર હોવું જરૂરી છે.', 'Direct them to join the Google Group. They need to be approved testers.'],
  ],
  qlTitle:        ['ઝડપી લિંક્સ', 'Quick Links'],
  qlAccess:       ['ઍક્સેસ માટે આવશ્યક', 'Required for access'],
  qlDlLabel:      ['Play Store ડાઉનલોડ', 'Play Store Download'],
  qlDlAccess:     ['ગ્રુપ મંજૂર થયા પછી ઉપલબ્ધ', 'Available after group approval'],
  footerText:     ['ANC PNC વિઝિટ ડેટ કેલ્ક્યુલેટર — બીટા ટેસ્ટિંગ', 'ANC PNC Visit Date Calculator — Beta Testing'],
  scTitle:        ['Chrome ને ડિફોલ્ટ બ્રાઉઝર સેટ કરો', 'Set Chrome as Default Browser'],
  scDesc:         ['Google Group જોઇન કરવા Chrome બ્રાઉઝર જરૂરી છે', 'Chrome browser is required to join the Google Group'],
  scAlert:        ['જો Google Group ખોલો ત્યારે Gmail login નો વિકલ્પ ન દેખાય, તો Chrome ડિફોલ્ટ બ્રાઉઝર નથી. નીચેની સૂચના અનુસરો.', 'If you don\'t see a Gmail login option when opening the Google Group, Chrome is not your default browser. Follow the steps below.'],
  scAndroidTitle: ['Android માટે:', 'For Android:'],
  scAndroidSteps: [
    ['Settings (સેટિંગ્સ) ખોલો', 'Open Settings'],
    ['"Apps" અથવા "Default Apps" પર ટેપ કરો', 'Tap "Apps" or "Default Apps"'],
    ['"Browser App" પસંદ કરો', 'Select "Browser App"'],
    ['Chrome પસંદ કરો', 'Choose Chrome'],
  ],

};

function t(key) {
  const v = i18n[key];
  return Array.isArray(v[0]) ? v : v[lang === 'gu' ? 0 : 1];
}

/* ── URLs ── */
const GROUP_URL = 'https://groups.google.com/g/anc-pnc-visit-calculation-app/';
const APP_URL   = 'https://play.google.com/store/apps/details?id=com.app.anc_date_calculator';

/* ── Example text ── */
const EXAMPLE_TEXT = `આ એપ્લિકેશન ANC PNC ની તારીખ ને સરળ બનવા સાથ આપસે છેલ્લે ઉદાહરણ એપેલ છે

ગ્રુપ join કરવા માટે ની લિંક:
https://groups.google.com/g/anc-pnc-visit-calculation-app/

એપ્લિકેશન Download કરવા માટે ની લિંક:
https://play.google.com/store/apps/details?id=com.app.anc_date_calculator

LMP તારીખ: 02/03/2026, સોમવાર

→ અંદાજિત પ્રસૂતિ તારીખ (EDD): 07/12/2026, સોમવાર
→ અર્લી ANC નોંધણી (12 અઠ.): 24/05/2026, રવિવાર
→ પ્રથમ ANC (12 અઠ.): 02/03/2026 – 31/05/2026
→ બીજી ANC (20 અઠ.): 01/06/2026 – 20/07/2026
→ ત્રીજી ANC (26 અઠ.): 21/07/2026 – 31/08/2026
→ ચોથી ANC (30 અઠ.): 01/09/2026 – 28/09/2026
→ પાંચમી ANC (34 અઠ.): 29/09/2026 – 26/10/2026
→ છઠ્ઠી ANC (36 અઠ.): 27/10/2026 – 09/11/2026
→ સાતમી ANC (38 અઠ.): 10/11/2026 – 23/11/2026
→ આઠમી ANC (40 અઠ.): 24/11/2026 – 07/12/2026`;

/* ── SVG icons ── */
const ICONS = {
  users:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  download: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  arrow:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  copy:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  share:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  file:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  globe:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  alert:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  check:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  chevron:  `<svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
};

/* ── Render helpers ── */
function setText(id, key) {
  const el = document.getElementById(id);
  if (el) el.textContent = t(key);
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function buildStepList(items) {
  return items.map(pair => `<li>${lang === 'gu' ? pair[0] : pair[1]}</li>`).join('');
}

/* ── Main render ── */
function render() {
  // Header
  setText('app-title', 'appTitle');
  setText('badge-beta', 'badgeBeta');
  setHTML('lang-btn', ICONS.globe + ' ' + (lang === 'gu' ? i18n.langToggle[0] : i18n.langToggle[1]));

  // Hero
  setText('hero-h1', 'heroH1');
  setText('hero-p', 'heroP');
  setHTML('btn-join-hero', ICONS.users + ' ' + t('btnJoin'));
  setHTML('btn-download-hero', ICONS.download + ' ' + t('btnDownload'));

  // Alert
  setText('alert-title', 'alertTitle');
  setText('alert-desc', 'alertDesc');

  // Getting started
  setText('gs-title', 'gsTitle');

  // Step 1
  setText('s1-title', 's1Title');
  setText('s1-desc', 's1Desc');
  setHTML('s1-list', buildStepList(i18n.s1Steps));
  setHTML('s1-btn', ICONS.users + ' ' + t('s1Btn') + ' ' + ICONS.arrow);

  // Chrome default browser
  setText('sc-title', 'scTitle');
  setText('sc-desc', 'scDesc');
  setText('sc-alert', 'scAlert');
  setText('sc-android-title', 'scAndroidTitle');
  setHTML('sc-android-list', buildStepList(i18n.scAndroidSteps));


  // Step 2
  setText('s2-title', 's2Title');
  setText('s2-desc', 's2Desc');
  setText('s2-li1', 's2Li1');
  setText('s2-li2', 's2Li2');
  setText('s2-li3', 's2Li3');
  setText('s2-li4', 's2Li4');
  setText('s2-li5', 's2Li5');
  setText('s2-li6', 's2Li6');
  setHTML('s2-btn', ICONS.users + ' ' + t('s2Btn') + ' ' + ICONS.arrow);

  // Step 3
  setText('s3-title', 's3Title');
  setText('s3-desc', 's3Desc');
  setHTML('s3-list', buildStepList(i18n.s3Steps));
  setHTML('s3-btn', ICONS.download + ' ' + t('s3Btn') + ' ' + ICONS.arrow);

  // Step 4
  setText('s4-title', 's4Title');
  setText('s4-desc', 's4Desc');
  setText('s4-alert', 's4Alert');
  setText('s4-img-caption', 's4ImgCaption');
  setText('s4-sub-title', 's4SubTitle');
  setHTML('s4-list', buildStepList(i18n.s4Steps));
  setText('s4-remember-title', 's4RememberTitle');
  setText('s4-remember-desc', 's4RememberDesc');

  // Features
  setText('features-title', 'featuresTitle');
  setText('features-desc', 'featuresDesc');
  setText('f-copy-title', 'fCopyTitle');
  setText('f-copy-desc', 'fCopyDesc');
  setText('f-share-title', 'fShareTitle');
  setText('f-share-desc', 'fShareDesc');
  setText('f-pdf-title', 'fPdfTitle');
  setText('f-pdf-desc', 'fPdfDesc');
  setText('f-anc-title', 'fAncTitle');
  setText('f-anc-desc', 'fAncDesc');
  setText('f-pnc-title', 'fPncTitle');
  setText('f-pnc-desc', 'fPncDesc');
  setText('f-lang-title', 'fLangTitle');
  setText('f-lang-desc', 'fLangDesc');
  setText('f-dark-title', 'fDarkTitle');
  setText('f-dark-desc', 'fDarkDesc');
  setText('web-banner-label', 'webBannerLabel');
  setText('web-banner-title', 'webBannerTitle');

  // FAQ
  setText('faq-title', 'faqTitle');
  const faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.innerHTML = i18n.faqItems.map((item, i) => `
      <div class="card faq-item" data-index="${i}">
        <div class="faq-question">
          <span>${lang === 'gu' ? item[0] : item[1]}</span>
          ${ICONS.chevron}
        </div>
        <div class="faq-answer">${lang === 'gu' ? item[2] : item[3]}</div>
      </div>`).join('');
    faqList.querySelectorAll('.faq-item').forEach(el => {
      el.addEventListener('click', () => el.classList.toggle('open'));
    });
  }

  // Quick links
  setText('ql-title', 'qlTitle');
  setText('ql-access', 'qlAccess');
  setText('ql-dl-label', 'qlDlLabel');
  setText('ql-dl-access', 'qlDlAccess');

  // Footer
  setText('footer-text', 'footerText');
}

/* ── Toggle language ── */
function toggleLang() {
  lang = lang === 'gu' ? 'en' : 'gu';
  render();
}

/* ── Copy to clipboard ── */
function copyText() {
  // reserved for future use
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  render();
});
