"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function LineConsultationPage() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = '/'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span className="text-xl font-bold">← TOWA</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            講座についてのご質問やご相談は、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* LINE相談 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">LINEで相談する</CardTitle>
              <p className="text-gray-600">
                気軽に質問できるLINE相談
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6">
                講座の内容や料金について、お気軽にご質問ください。
                専門スタッフが丁寧にお答えします。
              </p>
              <div className="space-y-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  無料相談
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  24時間受付
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  即座に回答
                </Badge>
              </div>
              <div className="mt-6">
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                  LINEで相談する
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* メール相談 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">メールで相談する</CardTitle>
              <p className="text-gray-600">
                詳細なご相談はメールで
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6">
                詳しい内容やご要望がある場合は、
                メールでお気軽にお問い合わせください。
              </p>
              <div className="space-y-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  詳細相談
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  無料相談
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  24時間以内返信
                </Badge>
              </div>
              <div className="mt-6">
                <Link href="mailto:info@towa-ai.com">
                  <Button variant="outline" className="w-full">
                    メールで相談する
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* よくある質問 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-blue-600" />
              よくある質問
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Q. 初心者でも参加できますか？
                </h4>
                <p className="text-gray-600">
                  A. はい、初心者の方でも安心して参加できるよう、基礎から丁寧に説明します。
                  パソコンの基本操作ができれば問題ありません。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Q. 講座の持ち物は何ですか？
                </h4>
                <p className="text-gray-600">
                  A. ノートパソコン（Windows/Macどちらでも可）をお持ちください。
                  その他の資料はこちらでご用意いたします。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Q. キャンセルは可能ですか？
                </h4>
                <p className="text-gray-600">
                  A. 講座の7日前までであれば、全額返金いたします。
                  それ以降のキャンセルについては、個別にご相談ください。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 営業時間 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-green-600" />
              営業時間・対応時間
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">LINE相談</h4>
                <p className="text-gray-600">24時間受付（回答は営業時間内）</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">メール相談</h4>
                <p className="text-gray-600">24時間受付（回答は営業時間内）</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">電話相談</h4>
                <p className="text-gray-600">平日 9:00-18:00</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">定休日</h4>
                <p className="text-gray-600">土日祝日</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}