import { Download, Users, Chrome, AlertCircle, CheckCircle2, ArrowRight, Languages, Copy, Share2, FileText } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState } from 'react';
import appLogo from '../assets/5e51f4bb9f92755118d2d3f75e42783d31be32a5.png';
import graphic from '../assets/graphic_white_phone.png';
import googleGroupJoinScreen from '../assets/6a3e72c1f3ab595698e3eafd27771039fa71bdf0.png';
import appScreenshot1 from '../assets/9cdb8b5ffc6f161cf4f706d8a04efb3bc3aefed6.png';
import appScreenshot2 from '../assets/3e70eb464b6752d0a9dd431e71e3d240af761756.png';
import groupPermissionScreen from '../assets/732499850d02caa95209e2f6777a03ea3acc4b8d.png';
import playStoreNotFound from '../assets/6e19e12c548e1a63a47f753599f624b2bb41d7cc.png';

type Language = 'gu' | 'en';

interface Translation {
  gu: string;
  en: string;
}

export default function App() {
  const [language, setLanguage] = useState<Language>('gu');

  const t = (gu: string, en: string): string => {
    return language === 'gu' ? gu : en;
  };

  const exampleText = `આ એપ્લિકેશન ANC PNC ની તારીખ ને સરળ બનવા સાથ આપસે છેલ્લે ઉદાહરણ એપેલ છે

પહેલા નીચે આપેલ ગ્રુપ ની લિંક માં ક્લિક કરી Join Group પર ક્લિક કરો પછી એની નીચે આપેલ એપ્લિકેશન download ની લિંક પર ક્લિક કરી download કરી લેવી. જો ગ્રુપ જોઇન કરો જીમેલ લોગીન બ્રાઉઝરમાં કોઈ વિકલ્પ નથી.

ગ્રુપ join કરવા માટે ની લિંક:
https://groups.google.com/g/anc-pnc-visit-calculation-app/

એપ્લિકેશન Download કરવા માટે ની લિંક:
https://play.google.com/store/apps/details?id=com.app.anc_date_calculator

LMP તારીખ: 02/03/2026, સોમવાર

→ અંદાજિત પ્રસૂતિ તારીખ (EDD)
07/12/2026, સોમવાર

→ અર્લી ANC નોંધણી (12 અઠવાડિયા સુધી)
24/05/2026, રવિવાર

→ પ્રથમ ANC મુલાકાત (12 અઠવાડિયા)
02/03/2026, સોમવાર
થી
31/05/2026, રવિવાર

→ બીજી ANC મુલાકાત (20 અઠવાડિયા)
01/06/2026, સોમવાર
થી
20/07/2026, સોમવાર

→ ત્રીજી ANC મુલાકાત (26 અઠવાડિયા)
21/07/2026, મંગળવાર
થી
31/08/2026, સોમવાર

→ ચોથી ANC મુલાકાત (30 અઠવાડિયા)
01/09/2026, મંગળવાર
થી
28/09/2026, સોમવાર

→ પાંચમી ANC મુલાકાત (34 અઠવાડિયા)
29/09/2026, મંગળવાર
થી
26/10/2026, સોમવાર

→ છઠ્ઠી ANC મુલાકાત (36 અઠવાડિયા)
27/10/2026, મંગળવાર
થી
09/11/2026, સોમવાર

→ સાતમી ANC મુલાકાત (38 અઠવાડિયા)
10/11/2026, મંગળવાર
થી
23/11/2026, સોમવાર

→ આઠમી ANC મુલાકાત (40 અઠવાડિયા)
24/11/2026, મંગળવાર
થી
07/12/2026, સોમવાર`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exampleText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={appLogo} alt="App Logo" className="w-12 h-12 rounded-full" />
            <span className="text-xl font-semibold">
              {t('ANC PNC વિઝિટ તારીખ કેલ્ક્યુલેટર', 'ANC PNC Visit Dates Calculator')}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-300">
              {t('બીટા ટેસ્ટિંગ', 'Beta Testing')}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'gu' ? 'en' : 'gu')}
              className="flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === 'gu' ? 'English' : 'ગુજરાતી'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Hero */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl mb-6">
            {t('અમારા બીટા ટેસ્ટિંગ પ્રોગ્રામમાં જોડાઓ', 'Join Our Beta Testing Program')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t(
              'આ એપ્લિકેશન ANC PNC ની તારીખની ગણતરીને સરળ બનાવવા સાથે આપે છે. છેલ્લે ઉદાહરણ એપેલ છે.',
              'This application simplifies ANC PNC visit date calculations. Here is an example application.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open('https://groups.google.com/g/anc-pnc-visit-calculation-app/', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              {t('Google Group માં જોડાઓ', 'Join Google Group')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.app.anc_date_calculator', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              {t('એપ ડાઉનલોડ કરો', 'Download App')}
            </Button>
          </div>
          <ImageWithFallback
             src={graphic}
            alt="App Testing"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Important Notice */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Alert className="border-amber-300 bg-amber-50">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">
              {t('ટેસ્ટિંગ મોડ સક્રિય', 'Testing Mode Active')}
            </AlertTitle>
            <AlertDescription className="text-amber-700">
              {t(
                'પહેલા નીચે આપેલ ગ્રુપની લિંકમાં ક્લિક કરી Join Group પર ક્લિક કરો પછી એની નીચે આપેલ એપ્લિકેશન download ની લિંક પર ક્લિક કરી download કરી લેવી.',
                'First click on the group link below and click Join Group, then click on the application download link below to download.'
              )}
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12">
            {t('શરૂઆત કરવી', 'Getting Started')}
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xl text-blue-700">1</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {t('Google Group માં જોડાઓ', 'Join the Google Group')}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t(
                        'અમારા Google Group માં જોડાઈને ટેસ્ટિંગ પ્રોગ્રામની ઍક્સેસ મેળવો',
                        'Get access to the testing program by joining our Google Group'
                      )}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-20">
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>{t('નીચે "Google Group માં જોડાઓ" બટન પર ક્લિક કરો', 'Click the "Join Google Group" button below')}</li>
                  <li>{t('તમારા Google એકાઉન્ટ સાથે સાઇન ઇન કરો', 'Sign in with your Google account')}</li>
                  <li>{t('Google Groups પેજ પર "Join Group" પર ક્લિક કરો', 'Click "Join Group" on the Google Groups page')}</li>
                  <li>{t('મંજૂરી માટે રાહ જુઓ (સામાન્ય રીતે 24 કલાકની અંદર)', 'Wait for approval (usually within 24 hours)')}</li>
                  <li>{t('મંજૂર થયા પછી તમને ઇમેઇલ કન્ફર્મેશન મળશે', 'You\'ll receive an email confirmation once approved')}</li>
                </ol>
                <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                  <Users className="w-4 h-4 mr-2" />
                  {t('Google Group માં જોડાઓ', 'Join Google Group')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

           

            {/* Step 2 */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xl text-purple-700">2</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {t('Google Group જોઇન કરવાની વિગતવાર સૂચનાઓ', 'Detailed Google Group Join Instructions')}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t(
                        'સ્ક્રીનશોટ સાથે સ્ટેપ બાય સ્ટેપ સૂચનાઓ',
                        'Step by step instructions with screenshots'
                      )}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-20">
                <ol className="space-y-4 list-decimal list-inside text-gray-700">
                  <li className="space-y-2">
                    <span>{t('Google Group લિંક પર ક્લિક કરો', 'Click on the Google Group link')}</span>
                    <div className="mt-2 ml-6">
                      <img src={groupPermissionScreen} alt="Group Link" className="w-full max-w-md rounded-lg border shadow-sm" />
                    </div>
                  </li>
                  <li className="space-y-2">
                    <span>{t('"Join group" બટન પર ક્લિક કરો', 'Click the "Join group" button')}</span>
                    <div className="mt-2 ml-6">
                      <img src={googleGroupJoinScreen} alt="Join Group Screen" className="w-full max-w-md rounded-lg border shadow-sm" />
                    </div>
                  </li>
                  <li>{t('તમારું ડિસ્પ્લે નામ દાખલ કરો (વૈકલ્પિક)', 'Enter your display name (optional)')}</li>
                  <li>{t('સબ્સ્ક્રિપ્શન પસંદગીઓ પસંદ કરો', 'Choose subscription preferences')}</li>
                  <li>{t('"Join group" બટન પર ક્લિક કરો', 'Click "Join group" button')}</li>
                  <li>{t('મંજૂરી માટે રાહ જુઓ (સામાન્ય રીતે 24 કલાકની અંદર)', 'Wait for approval (usually within 24 hours)')}</li>
                </ol>
                <Button
                  className="mt-6 bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://groups.google.com/g/anc-pnc-visit-calculation-app/', '_blank')}
                >
                  <Users className="w-4 h-4 mr-2" />
                  {t('હવે Google Group માં જોડાઓ', 'Join Google Group Now')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xl text-green-700">3</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {t('એપ ડાઉનલોડ અને ઇન્સ્ટોલ કરો', 'Download & Install the App')}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t(
                        'મંજૂર થયા પછી, તમે ટેસ્ટિંગ વર્ઝન ડાઉનલોડ કરી શકો છો',
                        'Once approved, you can download the testing version'
                      )}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-20">
                <ol className="space-y-3 list-decimal list-inside text-gray-700 mb-6">
                  <li>{t('ગ્રુપ મંજૂર થયા પછી, ડાઉનલોડ લિંક માટે તમારું ઇમેઇલ ચેક કરો', 'After group approval, check your email for the download link')}</li>
                  <li>{t('"એપ ડાઉનલોડ કરો" લિંક પર ક્લિક કરો', 'Click the "Download App" link')}</li>
                  <li>{t('Android પર: સેટિંગ્સમાં "અજ્ઞાત સ્ત્રોતોમાંથી ઇન્સ્ટોલ કરો" સક્ષમ કરો', 'On Android: Enable "Install from Unknown Sources" in Settings')}</li>
              
                  <li>{t('ડાઉનલોડ કરેલી ફાઇલ ખોલો અને ઇન્સ્ટોલેશન સૂચનાઓને અનુસરો', 'Open the downloaded file and follow installation prompts')}</li>
                  <li>{t('સૂચના આપવામાં આવે ત્યારે જરૂરી પરવાનગીઓ આપો', 'Grant necessary permissions when prompted')}</li>
                </ol>
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.app.anc_date_calculator', '_blank')}>
                  <Download className="w-4 h-4 mr-2" />
                  {t('ટેસ્ટ એપ ડાઉનલોડ કરો', 'Download Test App')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                  
                </Button>
                {/* <div className="mt-6">
                  <ImageWithFallback
                    src={graphic}
                    alt="Install App"
                    className="w-full rounded-lg"
                  />
                </div> */}
              </CardContent>
            </Card>

            {/* Step 4 - Play Store Account Switch */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xl text-orange-700">4</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {t('Play Store માં એકાઉન્ટ સ્વિચ કરો', 'Switch Account in Play Store')}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t(
                        'જો એપ્લિકેશન Play Store માં દેખાતી નથી',
                        'If the application is not showing in Play Store'
                      )}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-20">
                <Alert className="mb-4 border-orange-300 bg-orange-50">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  <AlertDescription className="text-orange-700">
                    {t(
                      'જો તમે Google Group માં જોડાયા પછી Play Store માં એપ દેખાતી નથી, તો તમે બીજા Google એકાઉન્ટથી ગ્રુપમાં જોડાયા હશો. નીચેની સૂચનાઓ અનુસરો:',
                      'If the app is not showing in Play Store after joining the Google Group, you may have joined with a different Google account. Follow these instructions:'
                    )}
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="mb-4">
                    <img src={playStoreNotFound} alt="App Not Found in Play Store" className="w-full max-w-md rounded-lg border shadow-sm" />
                    <p className="text-sm text-gray-600 mt-2">
                      {t('જો તમને આ સ્ક્રીન દેખાય છે:', 'If you see this screen:')}
                    </p>
                  </div>

                  <h4 className="text-lg font-semibold text-orange-700">
                    {t('Play Store માં એકાઉન્ટ બદલવાની સૂચનાઓ:', 'Instructions to change account in Play Store:')}
                  </h4>

                  <ol className="space-y-3 list-decimal list-inside text-gray-700">
                    <li>{t('Play Store એપ ખોલો', 'Open the Play Store app')}</li>
                    <li>{t('ઉપર જમણી બાજુએ તમારી પ્રોફાઇલ આઇકન પર ટેપ કરો', 'Tap on your profile icon in the top right')}</li>
                    <li>{t('તમારા નામની બાજુમાં નીચે તીર પર ટેપ કરો', 'Tap the down arrow next to your name')}</li>
                    <li>{t('એ Google એકાઉન્ટ પસંદ કરો જેનાથી તમે Google Group માં જોડાયા હતા', 'Select the Google account you used to join the Google Group')}</li>
                    <li>{t('હવે ફરીથી એપ શોધો', 'Now search for the app again')}</li>
                  </ol>

                  <Alert className="mt-4 border-blue-200 bg-blue-50">
                    <AlertTitle className="text-blue-800">
                      {t('યાદ રાખો:', 'Remember:')}
                    </AlertTitle>
                    <AlertDescription className="text-blue-700">
                      {t(
                        'તમારે એ જ Google એકાઉન્ટથી Play Store માં લોગ ઇન કરવું પડશે જેનાથી તમે Google Group માં જોડાયા છો.',
                        'You must be logged into Play Store with the same Google account you used to join the Google Group.'
                      )}
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Share Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-4">
            {t('શેર અને એક્સપોર્ટ કરો', 'Share and Export')}
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            {t('ગણતરી પરિણામો કેવી રીતે શેર કરવા તેનું ઉદાહરણ', 'Example of how to share calculation results')}
          </p>

          <Card className="border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">
                  {t('ઉદાહરણ આઉટપુટ', 'Example Output')}
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="w-4 h-4 mr-2" />
                    {t('કોપી કરો', 'Copy')}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    {t('શેર કરો', 'Share')}
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    {t('PDF એક્સપોર્ટ કરો', 'Export PDF')}
                  </Button>
                </div>
              </div>
              <CardDescription>
                {t('આ એપ્લિકેશન દ્વારા જનરેટ થયેલ ઉદાહરણ આઉટપુટ', 'Example output generated by the application')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg border font-mono text-sm whitespace-pre-wrap">
                {exampleText}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <img src={appScreenshot1} alt="" className="w-8 h-8 rounded" />
                    {t('ANC મુલાકાત સ્ક્રીન', 'ANC Visit Screen')}
                  </h4>
                  <img src={appScreenshot1} alt="ANC Calculator Screen" className="w-full rounded-lg border shadow-sm" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <img src={appScreenshot2} alt="" className="w-8 h-8 rounded" />
                    {t('PNC મુલાકાત સ્ક્રીન', 'PNC Visit Screen')}
                  </h4>
                  <img src={appScreenshot2} alt="PNC Calculator Screen" className="w-full rounded-lg border shadow-sm" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Screenshots Section */}
      {/* <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-4">
            {t('એપ સ્ક્રીનશોટ્સ', 'App Screenshots')}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {t('તમે શું ટેસ્ટ કરશો તેનું પૂર્વાવલોકન જુઓ', 'Preview what you\'ll be testing')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500">{t('સ્ક્રીનશોટ 1', 'Screenshot 1')}</span>
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {t('હોમ સ્ક્રીન', 'Home Screen')}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  {t('સ્વચ્છ અને સહજ ઇન્ટરફેસ', 'Clean and intuitive interface')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500">{t('સ્ક્રીનશોટ 2', 'Screenshot 2')}</span>
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {t('મુખ્ય વિશેષતાઓ', 'Main Features')}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  {t('બધા સાધનો એક જગ્યાએ', 'All tools in one place')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500">{t('સ્ક્રીનશોટ 3', 'Screenshot 3')}</span>
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {t('સેટિંગ્સ', 'Settings')}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  {t('તમારા અનુભવને કસ્ટમાઇઝ કરો', 'Customize your experience')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>*/}

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl text-center mb-12">
            {t('વારંવાર પૂછાતા પ્રશ્નો', 'Frequently Asked Questions')}
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  {t('ગ્રુપ મંજૂરીમાં કેટલો સમય લાગે છે?', 'How long does group approval take?')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {t(
                    'સામાન્ય રીતે 24 કલાકની અંદર. તમને મંજૂર થયા પછી ઇમેઇલ સૂચના મળશે.',
                    'Typically within 24 hours. You\'ll receive an email notification once you\'re approved.'
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {t('શું એપ ઇન્સ્ટોલ કરવી સુરક્ષિત છે?', 'Is the app safe to install?')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {t(
                    'હા! એપ સુરક્ષિત છે પરંતુ ખાસ ઇન્સ્ટોલેશન પરવાનગીઓની જરૂર છે કારણ કે તે ટેસ્ટિંગ વર્ઝન છે, અધિકૃત એપ સ્ટોરમાંથી નથી.',
                    'Yes! The app is safe but requires special installation permissions because it\'s a testing version, not from the official app store.'
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {t('જો મને બગ્સ મળે તો શું?', 'What if I find bugs?')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {t(
                    'કૃપા કરીને તેને અમારા Google Group માં જાણ કરો! તમારો પ્રતિસાદ અમૂલ્ય છે અને અમને એપ સુધારવામાં મદદ કરે છે.',
                    'Please report them in our Google Group! Your feedback is invaluable and helps us improve the app.'
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {t('શું હું એપ બીજાઓ સાથે શેર કરી શકું?', 'Can I share the app with others?')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {t(
                    'કૃપા કરીને તેમને Google Group માં જોડાવા માટે નિર્દેશિત કરો. એપની ઍક્સેસ માટે તેઓએ મંજૂર ટેસ્ટર્સ હોવા જરૂરી છે.',
                    'Please direct them to join the Google Group instead. They need to be approved testers to access the app.'
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none">
            <CardContent className="p-12 text-center text-white">
              <h2 className="text-4xl mb-4">
                {t('શરૂ કરવા તૈયાર છો?', 'Ready to Get Started?')}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {t(
                  'આજે જ અમારા ટેસ્ટિંગ સમુદાયમાં જોડાઓ અને ભવિષ્યને આકાર આપવામાં મદદ કરો',
                  'Join our testing community today and help shape the future'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Users className="w-5 h-5 mr-2" />
                  {t('હમણાં Google Group માં જોડાઓ', 'Join Google Group Now')}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Download className="w-5 h-5 mr-2" />
                  {t('ડાઉનલોડ સૂચનાઓ જુઓ', 'View Download Instructions')}
                </Button>
              </div>
              <div className="mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765278537074-7e3cf6ea129c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjb2xsાબોરાતિઓનJTIwY2ામ્મુનિટ્યJTIwગ્રોઉપ8ZW58MXx8fHwxNzc0NDE3MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Community"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Important Links Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-8">
            {t('ઝડપી લિંક્સ', 'Quick Links')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              className="border-2 border-blue-200 hover:border-blue-400 transition-colors cursor-pointer"
              onClick={() => window.open('https://groups.google.com/g/anc-pnc-visit-calculation-app/', '_blank')}
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Google Group</h3>
                  <p className="text-xs text-gray-600 break-all">https://groups.google.com/g/anc-pnc-visit-calculation-app/</p>
                  <CheckCircle2 className="w-4 h-4 text-green-600 inline mr-1 mt-2" />
                  <span className="text-xs text-green-700">
                    {t('ઍક્સેસ માટે આવશ્યક', 'Required for access')}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-2 border-green-200 hover:border-green-400 transition-colors cursor-pointer"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.app.anc_date_calculator', '_blank')}
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <Download className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {t('એપ ડાઉનલોડ કરો', 'Download App')}
                  </h3>
                  <p className="text-xs text-gray-600 break-all">https://play.google.com/store/apps/details?id=com.app.anc_date_calculator</p>
                  <CheckCircle2 className="w-4 h-4 text-green-600 inline mr-1 mt-2" />
                  <span className="text-xs text-green-700">
                    {t('ગ્રુપ મંજૂર થયા પછી', 'After group approval')}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Alert className="mt-8 border-blue-200 bg-blue-50">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-800">
              {t('નોંધ: મહત્વપૂર્ણ લિંક્સ', 'Note: Important Links')}
            </AlertTitle>
            <AlertDescription className="text-blue-700">
              {t(
                'ઉપરોક્ત લિંક્સ પર ક્લિક કરીને સીધા Google Group અને Play Store પર જાઓ.',
                'Click on the above links to go directly to Google Group and Play Store.'
              )}
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 border-t">
        <p>
          {t('© 2026 ANC PNC Visit Calculator. બધા હક્કો અનામત. | બીટા ટેસ્ટિંગ પ્રોગ્રામ', '© 2026 ANC PNC Visit Calculator. All rights reserved. | Beta Testing Program')}
        </p>
        <p className="text-sm mt-2">
          {t('પ્રશ્નો? Google Group દ્વારા અમારો સંપર્ક કરો', 'Questions? Contact us through the Google Group')}
        </p>
      </footer>
    </div>
  );
}