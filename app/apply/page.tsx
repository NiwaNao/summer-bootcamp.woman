import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ApplyPage() {
  const router = useRouter();

  const handleBack = () => {
    console.log('TOWA button clicked!');
    if (typeof window !== 'undefined' && window.history.length > 1) {
      console.log('Going back in history...');
      window.history.back();
    } else {
      console.log('Navigating to home page...');
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* TOWA Logo with back functionality */}
            <button 
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-bold text-xl">TOWA</span>
            </button>
            
            {/* Early Bird Banner */}
            <div className="flex items-center space-x-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121c-.584.584-1.293.786-1.879 1.371.5.5 1 1.25 1 2.25 0 1.621-.5 2.5-.5 2.5z" clipRule="evenodd" />
              </svg>
              <span>早割実施中 (7月末まで)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121c-.584.584-1.293.786-1.879 1.371.5.5 1 1.25 1 2.25 0 1.621-.5 2.5-.5 2.5z" clipRule="evenodd" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900">お申し込み</h1>
          </div>
          <p className="text-lg text-gray-600">札幌限定サマーブートキャンプへのお申し込み</p>
        </div>

        {/* Section 1: Price Type Selection */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
            <h2 className="text-xl font-bold text-gray-900">料金タイプ選択</h2>
          </div>

          <div className="space-y-4">
            {/* Early Bird Price */}
            <Card className="border-2 border-red-500 relative">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <input type="radio" name="priceType" id="earlyBird" className="mt-1" />
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-gray-900">早割価格 (7月末まで)</span>
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121c-.584.584-1.293.786-1.879 1.371.5.5 1 1.25 1 2.25 0 1.621-.5 2.5-.5 2.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-red-600 mb-1">¥21,800</div>
                      <div className="text-sm text-gray-500">¥8,000 OFF</div>
                    </div>
                  </div>
                  <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">おすすめ</div>
                </div>
              </CardContent>
            </Card>

            {/* Regular Price */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <input type="radio" name="priceType" id="regular" className="mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">通常価格</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">¥29,800</div>
                    <div className="text-sm text-gray-500">8月1日以降</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 2: Discount Option Selection */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
            <h2 className="text-xl font-bold text-gray-900">割引オプション選択</h2>
          </div>

          <div className="space-y-4">
            {/* Pair Discount */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <input type="checkbox" id="pairDiscount" className="mt-1" />
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-pink-500">👥</span>
                      <span className="font-semibold text-gray-900">ペア割</span>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">お一人様¥5,000 OFF</div>
                      <div className="text-sm text-gray-600">(¥24,800 / 人)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2-Day Set Discount */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <input type="checkbox" id="twoDayDiscount" className="mt-1" />
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-blue-500">📚</span>
                      <span className="font-semibold text-gray-900">2日間セット割</span>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">合計¥13,000 OFF</div>
                      <div className="text-sm text-gray-600">(合計¥46,600)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-bold">
            次へ進む
          </Button>
        </div>
      </main>
    </div>
  )
} 