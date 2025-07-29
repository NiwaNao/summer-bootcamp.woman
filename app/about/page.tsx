"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TOWAについて</h1>
          <p className="text-lg text-gray-600">
            実践的なAIスキルで、あなたの仕事と生活を効率化することを目指しています
          </p>
        </div>

        {/* ミッション */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-600" />
              私たちのミッション
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              TOWAは、AI技術を活用して仕事と生活を効率化することを目指しています。
              複雑な技術を分かりやすく、実践的に学べる環境を提供し、
              誰もがAIを活用してより豊かな生活を送れる社会の実現を目指しています。
            </p>
          </CardContent>
        </Card>

        {/* 特徴 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold">実践重視の学習</h3>
              </div>
              <p className="text-gray-600">
                座学だけでなく、実際に手を動かしてスキルを身につけられる
                実践的なカリキュラムを提供しています。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-semibold">専門家による指導</h3>
              </div>
              <p className="text-gray-600">
                各分野の専門家が、分かりやすく丁寧に指導します。
                初心者でも安心して学習を進められます。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">継続的なサポート</h3>
              </div>
              <p className="text-gray-600">
                講座後もLINEで質問できるので、学習を継続できます。
                一人ひとりの成長をサポートします。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-semibold">成果重視</h3>
              </div>
              <p className="text-gray-600">
                学んだスキルをすぐに実践できるよう、
                具体的な成果物を持ち帰れる講座を提供しています。
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 実績 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>受講生の声</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-700 italic">
                  "AIツールの使い方が分からず困っていましたが、この講座で一気に理解できました。
                  今では毎日の業務が格段に効率化されています。"
                </p>
                <p className="text-sm text-gray-500 mt-2">- 30代女性・会社員</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-gray-700 italic">
                  "SNS運用に時間がかかっていましたが、GASで自動化して時間を大幅に短縮できました。
                  講座で学んだスキルは本当に実用的です。"
                </p>
                <p className="text-sm text-gray-500 mt-2">- 40代女性・自営業</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            あなたも一緒に学びませんか？
          </h2>
          <p className="text-gray-600 mb-6">
            実践的なスキルを身につけて、仕事と生活を効率化しましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                講座に申し込む
              </Button>
            </Link>
            <Link href="/line-consultation">
              <Button variant="outline" className="px-8 py-3">
                詳しく相談する
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}