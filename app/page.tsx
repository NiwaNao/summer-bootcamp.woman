import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Clock, MapPin, Calendar } from "lucide-react"

export default function TowaBootcampLP() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
=======
    <div className="min-h-screen bg-slate-50">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden">
        {/* Header */}
        <header className="relative z-20 pt-4 pb-2 md:pt-6 md:pb-4">
<<<<<<< HEAD
          <div className="container mx-auto px-4 max-w-full">
=======
          <div className="container mx-auto px-4">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
            <div className="flex items-center justify-between">
              {/* TOWA Logo */}
              <div className="text-xl md:text-2xl font-bold text-white">TOWA</div>
              
              {/* Navigation Buttons */}
              <div className="flex items-center gap-1 md:gap-4">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 text-xs md:text-sm px-2 py-1 md:px-4 md:py-2" asChild>
<<<<<<< HEAD
                  <a href="https://summer-bootcamp-women.towa-ai.com/about">
=======
                  <a href="https://summer-bootcamp.towa-ai.com/about" target="_blank" rel="noopener noreferrer">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                    <span className="hidden sm:inline">TOWAについて</span>
                    <span className="sm:hidden">TOWA</span>
                  </a>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 text-xs md:text-sm px-2 py-1 md:px-4 md:py-2" asChild>
<<<<<<< HEAD
                  <a href="https://summer-bootcamp-women.towa-ai.com/team">
=======
                  <a href="https://summer-bootcamp.towa-ai.com/team" target="_blank" rel="noopener noreferrer">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                    <span className="hidden sm:inline">About Us</span>
                    <span className="sm:hidden">About</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28ugo_httpss.mj.runNFLrqq70WPY_In_summer_a_young_East_Asian_w_dee49871-51de-4a7d-aa99-a4a7e5852568_2-PRvgCEKv90UqVyAsV0NHJmcAT14Ycl.png')",
          }}
        ></div>

        {/* Mobile Title - Only visible on mobile */}
        <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 z-20 text-center">
          <h1 className="text-2xl font-bold text-white drop-shadow-lg whitespace-nowrap">
            AI×実践スキル 1日完結講座
          </h1>
        </div>

<<<<<<< HEAD
        <div className="container mx-auto px-4 py-8 md:py-16 relative z-10 min-h-screen flex items-end md:items-center max-w-full">
=======
        <div className="container mx-auto px-4 py-8 md:py-16 relative z-10 min-h-screen flex items-end md:items-center">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
          <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 lg:w-1/2 xl:w-2/5 mb-8 md:mb-0">
            {/* Text overlay for better readability */}
            <div className="relative">
              <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
              <div className="relative z-10 p-4 md:p-8 lg:p-12">

                {/* Desktop Title - Only visible on desktop */}
                <h1 className="hidden md:block text-3xl lg:text-4xl font-bold mb-8 leading-tight text-white text-left whitespace-nowrap">
                  AI×実践スキル 1日完結講座
            </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-8 text-white leading-relaxed text-center md:text-left">
                  <span className="text-amber-200">「AIって難しそう...」</span>そんな不安を1日で解消。
<<<<<<< HEAD
              <br className="hidden sm:block" />
=======
              <br />
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
              SNS運用も業務自動化も、AIと一緒なら驚くほど簡単に。
            </p>

                <div className="text-white px-3 md:px-8 py-2 md:py-4 rounded-full inline-block mb-4 md:mb-8 shadow-2xl text-center w-full md:w-auto" style={{ backgroundColor: '#CC554F' }}>
                  <span className="text-xs sm:text-sm md:text-lg font-bold">
                選べる2コース！1日で実践スキル＋
<<<<<<< HEAD
                <br className="hidden sm:block" />
=======
                <br />
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                すぐ使える成果物を持ち帰り
              </span>
            </div>

                <div className="text-base sm:text-lg md:text-2xl lg:text-4xl mb-4 md:mb-8 font-bold leading-tight text-center md:text-left">
                  <span className="text-amber-200">「AIって難しそう...」</span>
              <span className="text-white">から</span>
<<<<<<< HEAD
              <br className="hidden sm:block" />
=======
              <br />
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                  <span className="text-amber-200">「AIって便利！」</span>
              <span className="text-white">へ</span>
            </div>

                <p className="mb-6 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed text-center md:text-left">
                  <span className="text-amber-200 font-bold">初心者歓迎</span>×
                  <span className="text-amber-200 font-bold">超少人数制</span>×
                  <span className="text-amber-200 font-bold">講師2名体制</span>
<<<<<<< HEAD
              <br className="hidden sm:block" />
=======
              <br />
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
              札幌の夏、1日でAIスキルを味方につけよう
            </p>

                <div className="text-center md:text-left">
                  <Button className="text-white px-4 md:px-10 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-xl font-bold shadow-2xl button-hover w-full md:w-auto animate-float" style={{ backgroundColor: '#CC554F' }} asChild>
                    <a href="#course-details">
                      8月開催｜選べる2コース詳細を見る
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-4 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-white/70 rounded-full mt-1 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
<<<<<<< HEAD
      <section className="py-24 overflow-hidden" style={{ backgroundColor: '#F9F6F2' }}>
        <div className="container mx-auto px-4 max-w-full">
=======
      <section className="py-24" style={{ backgroundColor: '#F9F6F2' }}>
        <div className="container mx-auto px-4">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
          <div className="text-center mb-16">
            <div className="inline-block">
              <svg width="300" height="30" viewBox="0 0 300 30" className="mb-12 animate-pulse">
                <path d="M15 15 Q75 7.5 150 15 T285 15" stroke="#333" strokeWidth="3" fill="none" />
              </svg>
            </div>
<<<<<<< HEAD
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 animate-fade-in">こんなお悩み、ありませんか？</h2>
            <p className="text-lg sm:text-2xl mb-4 animate-slide-up">SNS投稿が思うように続かない...</p>
            <p className="text-lg sm:text-2xl mb-12 animate-slide-up">毎日の業務に追われて効率化できない...</p>
            <p className="text-lg sm:text-2xl mb-6 animate-slide-up">
              「<span style={{ color: '#CC554F' }}>AIを使って楽になりたい</span>」けれど
              <br className="hidden sm:block" />
              何から始めればいいかわからない。
            </p>
            <p className="text-lg sm:text-2xl mb-6 animate-slide-up">
              そんなあなたに<span style={{ color: '#CC554F' }}>1日で実践的なスキル</span>を
              <br className="hidden sm:block" />
              身につけられる機会をご用意しました。
            </p>
            <p className="text-lg sm:text-2xl animate-slide-up">AIは難しくない。正しい使い方を知れば、強力な味方になります。</p>
=======
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">こんなお悩み、ありませんか？</h2>
            <p className="text-2xl mb-4 animate-slide-up">SNS投稿が思うように続かない...</p>
            <p className="text-2xl mb-12 animate-slide-up">毎日の業務に追われて効率化できない...</p>
            <p className="text-2xl mb-6 animate-slide-up">
              「<span style={{ color: '#CC554F' }}>AIを使って楽になりたい</span>」けれど
              <br />
              何から始めればいいかわからない。
            </p>
            <p className="text-2xl mb-6 animate-slide-up">
              そんなあなたに<span style={{ color: '#CC554F' }}>1日で実践的なスキル</span>を
              <br />
              身につけられる機会をご用意しました。
            </p>
            <p className="text-2xl animate-slide-up">AIは難しくない。正しい使い方を知れば、強力な味方になります。</p>
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
          </div>

          <div className="text-center mb-20">
            <h3 className="text-3xl font-bold mb-8 animate-fade-in">「AIスキルを身につけて、もっと楽に仕事したい」</h3>
            <p className="text-2xl mb-8 whitespace-nowrap animate-slide-up">そんな想いを、1日で現実にしませんか？</p>
            <p className="text-3xl mb-16 animate-slide-up" style={{ color: '#CC554F' }}>実践的なスキル＋すぐ使える成果物をお持ち帰り</p>
          </div>

<<<<<<< HEAD
          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 max-w-5xl mx-auto">
=======
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
            <div className="flex items-center gap-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-2xl p-4 group">
              <div className="w-24 h-24 transform group-hover:rotate-12 transition-transform duration-300">
                <Image src="/images/1.png" alt="SNS投稿のネタ切れ" width={96} height={96} className="animate-bounce-slow" />
              </div>
<<<<<<< HEAD
              <div className="rounded-full px-8 py-4 flex-1 text-base sm:text-lg transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl" style={{ backgroundColor: '#EDE6DF' }}>SNS投稿のネタ切れ・継続の難しさ</div>
=======
              <div className="rounded-full px-8 py-4 flex-1 text-lg transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl" style={{ backgroundColor: '#EDE6DF' }}>SNS投稿のネタ切れ・継続の難しさ</div>
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
            </div>

            <div className="flex items-center gap-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-2xl p-4 group">
              <div className="w-24 h-24 transform group-hover:rotate-12 transition-transform duration-300">
                <Image src="/images/2.png" alt="手作業での業務管理・スケジュール調整の負担" width={96} height={96} className="animate-bounce-slow" />
              </div>
<<<<<<< HEAD
              <div className="rounded-full px-8 py-4 flex-1 text-base sm:text-lg transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl" style={{ backgroundColor: '#EDE6DF' }}>
                手作業での業務管理・
                <br className="hidden sm:block" />
=======
              <div className="rounded-full px-8 py-4 flex-1 text-lg transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl" style={{ backgroundColor: '#EDE6DF' }}>
                手作業での業務管理・
                <br />
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                スケジュール調整の負担
              </div>
            </div>

            <div className="flex items-center gap-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-2xl p-4 group">
              <div className="w-24 h-24 transform group-hover:rotate-12 transition-transform duration-300">
                <Image src="/images/4.png" alt="AIツールはあるけれど、効果的な使い方がわからない" width={96} height={96} className="animate-bounce-slow" />
              </div>
<<<<<<< HEAD
              <div className="rounded-full px-8 py-4 flex-1 text-base sm:text-lg transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl" style={{ backgroundColor: '#EDE6DF' }}>
                AIツールはあるけれど、
                <br className="hidden sm:block" />
=======
              <div className="rounded-full px-8 py-4 flex-1 text-lg transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl" style={{ backgroundColor: '#EDE6DF' }}>
                AIツールはあるけれど、
                <br />
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                効果的な使い方がわからない
              </div>
            </div>

            <div className="flex items-center gap-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl rounded-2xl p-4 group">
              <div className="w-24 h-24 transform group-hover:rotate-12 transition-transform duration-300">
                <Image src="/images/5.png" alt="学習時間が取れず、いつまでも非効率なまま" width={96} height={96} className="animate-bounce-slow" />
              </div>
<<<<<<< HEAD
              <div className="rounded-full px-8 py-4 flex-1 text-base sm:text-lg transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl" style={{ backgroundColor: '#EDE6DF' }}>
                学習時間が取れず、
                <br className="hidden sm:block" />
=======
              <div className="rounded-full px-8 py-4 flex-1 text-lg transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl" style={{ backgroundColor: '#EDE6DF' }}>
                学習時間が取れず、
                <br />
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                いつまでも非効率なまま
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <p className="text-3xl font-bold mb-6 animate-fade-in">これらの課題、1日で解決できます。</p>
            <p className="text-2xl mb-4 animate-slide-up">この講座では、</p>
            <p className="text-2xl animate-slide-up">実際に使えるスキルと成果物を持ち帰れます。</p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
<<<<<<< HEAD
      <section className="py-16 overflow-hidden" style={{ backgroundColor: '#f0eae5' }}>
        <div className="container mx-auto px-4 max-w-full">
=======
      <section className="py-16" style={{ backgroundColor: '#f0eae5' }}>
        <div className="container mx-auto px-4">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
          <div className="text-center mb-12">
            <svg width="200" height="20" viewBox="0 0 200 20" className="mb-8 mx-auto animate-pulse">
              <path d="M10 10 Q50 5 100 10 T190 10" stroke="#333" strokeWidth="2" fill="none" />
            </svg>
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">こんな方におすすめです</h2>
            <p className="text-lg mb-8 animate-slide-up">あなたの状況に合わせて丁寧にサポートします。</p>
            <p className="text-xl mb-12 animate-slide-up" style={{ color: '#CC554F' }}>1日で、あなたの「やりたい」を"カタチ"にします。</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-center justify-center hover-lift p-4 rounded-lg transition-all duration-300">
              <div className="w-2 h-2 bg-black rounded-full mr-4 animate-pulse"></div>
              <p className="text-xl">SNS運用を効率化したい方</p>
            </div>
            <div className="flex items-center justify-center hover-lift p-4 rounded-lg transition-all duration-300">
              <div className="w-2 h-2 bg-black rounded-full mr-4 animate-pulse"></div>
              <p className="text-xl">業務を自動化してもっと楽にしたい方</p>
            </div>
            <div className="flex items-center justify-center hover-lift p-4 rounded-lg transition-all duration-300">
              <div className="w-2 h-2 bg-black rounded-full mr-4 animate-pulse"></div>
              <p className="text-xl">AIスキルを実践的に身につけたい方</p>
            </div>
            <div className="flex items-center justify-center hover-lift p-4 rounded-lg transition-all duration-300">
              <div className="w-2 h-2 bg-black rounded-full mr-4 animate-pulse"></div>
              <p className="text-xl">コーディング未経験でもシステム化したい方</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Course Options */}
<<<<<<< HEAD
      <section id="course-details" className="py-16 overflow-hidden" style={{ backgroundColor: '#F9F6F2' }}>
        <div className="container mx-auto px-4 max-w-full">
=======
      <section id="course-details" className="py-16" style={{ backgroundColor: '#F9F6F2' }}>
        <div className="container mx-auto px-4">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in">選べる2つの実践講座</h2>
            <p className="text-xl mb-6 animate-slide-up" style={{ color: '#CC554F' }}>1日で、未来の"仕事効率化"が手に入る</p>
            <p className="text-xl mb-3 animate-slide-up">1日集中/超少人数/その場で成果物を持ち帰り</p>
            <p className="text-xl mb-3 animate-slide-up">実質6時間の実践講座</p>
            <p className="text-xl animate-slide-up">PC初心者も安心、2人の講師のサポートあり</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Course 1: AI × SNS */}
            <Card className="bg-white border-2 border-gray-200 shadow-lg card-hover">
              <CardContent className="p-8">
                <div className="text-white px-6 py-3 rounded-full inline-block mb-6 animate-pulse-glow" style={{ backgroundColor: '#f0eae5', color: '#8B4513' }}>
                  ① AI × SNS運用講座（1日）
                </div>

                <p className="text-xl mb-6">
                  ChatGPTとCanva
                  AIで投稿作成を劇的に効率化。継続できる仕組みを1日で構築し、成果の出るSNS運用を実現します。
                </p>

                <div className="space-y-4">
                  <div className="flex items-center hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 animate-bounce-slow" style={{ backgroundColor: '#f0eae5' }}>
                      <span className="text-sm" style={{ color: '#8B4513' }}>✓</span>
                    </div>
                    <p className="text-lg">SNS発信に迷わない「投稿テーマテンプレート」</p>
                  </div>
                  <div className="flex items-center hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 animate-bounce-slow" style={{ backgroundColor: '#f0eae5' }}>
                      <span className="text-sm" style={{ color: '#8B4513' }}>✓</span>
                    </div>
                    <p className="text-lg">Canva AIによる画像・投稿文の一括作成</p>
                  </div>
                  <div className="flex items-center hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 animate-bounce-slow" style={{ backgroundColor: '#f0eae5' }}>
                      <span className="text-sm" style={{ color: '#8B4513' }}>✓</span>
                    </div>
                    <p className="text-lg">反応が取れる投稿構成の習得</p>
                  </div>
                  <div className="flex items-center hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 animate-bounce-slow" style={{ backgroundColor: '#f0eae5' }}>
                      <span className="text-sm" style={{ color: '#8B4513' }}>✓</span>
                    </div>
                    <p className="text-lg">継続できるAI活用の仕組み作り</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course 2: AI × GAS */}
            <Card className="bg-white border-2 border-gray-200 shadow-lg card-hover">
              <CardContent className="p-8">
                <div className="text-white px-6 py-3 rounded-full inline-block mb-6 animate-pulse-glow" style={{ backgroundColor: '#dfc3a6', color: '#8B4513' }}>
                  ② AI × GAS自動化講座（1日）
                </div>

                <p className="text-xl mb-6">
                  コーディング未経験でも大丈夫。生成AIとGAS（Google Apps Script）で予約・在庫管理などの業務を自動化し、自分専用システムを構築します。
                </p>

                <div className="space-y-4">
                  <div className="flex items-center hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 animate-bounce-slow" style={{ backgroundColor: '#dfc3a6' }}>
                      <span className="text-sm" style={{ color: '#8B4513' }}>✓</span>
                    </div>
                    <p className="text-lg">コピペで応用できる「自動化プロンプト集」</p>
                  </div>
                  <div className="flex items-center hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 animate-bounce-slow" style={{ backgroundColor: '#dfc3a6' }}>
                      <span className="text-sm" style={{ color: '#8B4513' }}>✓</span>
                    </div>
                    <p className="text-lg">フォーム〜カレンダー連携の自動化技術</p>
                  </div>
                  <div className="flex items-center hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 animate-bounce-slow" style={{ backgroundColor: '#dfc3a6' }}>
                      <span className="text-sm" style={{ color: '#8B4513' }}>✓</span>
                    </div>
                    <p className="text-lg">AIにコードを生成させる思考法を習得</p>
                  </div>
                  <div className="flex items-center hover-lift p-2 rounded transition-all duration-300">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 animate-bounce-slow" style={{ backgroundColor: '#dfc3a6' }}>
                      <span className="text-sm" style={{ color: '#8B4513' }}>✓</span>
                    </div>
                    <p className="text-lg">自分専用の自動化システムを構築できる</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-8 animate-fade-in" style={{ color: '#CC554F' }}>講座別・1日で手に入る成果物</h3>
      </div>

      <div className="mb-12">
        <h4 className="text-2xl font-bold text-center mb-6 text-black animate-slide-up">① AI × SNS運用講座の成果物</h4>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <Image
                src="/images/Templates.png"
                alt="投稿テーマテンプレート集"
                width={200}
                height={200}
                className="mx-auto mb-4 animate-float"
              />
              <h4 className="text-xl font-bold mb-2 animate-fade-in">投稿テーマテンプレート集</h4>
              <p className="text-lg animate-slide-up">もう投稿ネタに困らないテーマテンプレート</p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <Image
                src="/images/manual.png"
                alt="Canva AI活用マニュアル"
                width={200}
                height={200}
                className="mx-auto mb-4 animate-float"
              />
              <h4 className="text-xl font-bold mb-2 animate-fade-in">Canva AI活用マニュアル</h4>
              <p className="text-lg animate-slide-up">画像・投稿文を一括作成する実践的手順書</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <h4 className="text-2xl font-bold text-center mb-6 text-black animate-slide-up">② AI × GAS自動化講座の成果物</h4>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="card-hover">
            <CardContent className="p-6 text-center">
<<<<<<< HEAD
                                      <Image
                          src="/images/prompt.png"
                          alt="自動化プロンプト集"
                          width={200}
                          height={200}
                          className="mx-auto mb-4 animate-float"
                        />
=======
              <Image
                src="/images/Prompt.png"
                alt="自動化プロンプト集"
                width={200}
                height={200}
                className="mx-auto mb-4 animate-float"
              />
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
              <h4 className="text-xl font-bold mb-2 animate-fade-in">自動化プロンプト集</h4>
              <p className="text-lg animate-slide-up">コピペで使える業務自動化プロンプト</p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6 text-center">
              <Image
                src="/images/system-mockup.png"
                alt="あなた専用自動化システム"
                width={200}
                height={200}
                className="mx-auto mb-4 animate-float"
              />
              <h4 className="text-xl font-bold mb-2 animate-fade-in">あなた専用自動化システム</h4>
              <p className="text-lg animate-slide-up">フォーム連携・スケジュール管理の自動化システム</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonial */}
      <section className="py-16" style={{ backgroundColor: '#f0eae5' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <svg width="200" height="20" viewBox="0 0 200 20" className="mb-8 mx-auto">
              <path d="M10 10 Q50 5 100 10 T190 10" stroke="#333" strokeWidth="2" fill="none" />
            </svg>

            <div className="flex items-center justify-between mb-4">
              <div className="flex-1 pr-8">
                <h3 className="text-3xl font-bold mb-6 leading-relaxed">
                  <span style={{ color: '#CC554F' }}>「PCやAIが苦手な私にもできた！</span>
                  <br />
                                      <span style={{ color: '#CC554F' }}>札幌の夏を味方に、1日で新しい可能</span>
                  <br />
                                      <span style={{ color: '#CC554F' }}>性ひらこう。」</span>
                </h3>
              </div>
              <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/images/woman1.png" alt="Testimonial" width={256} height={256} />
              </div>
            </div>

            <div className="space-y-4 text-xl">
              <p className="font-semibold text-slate-700">「私には無理かも…」<span className="font-bold" style={{ color: '#CC554F' }}>そんな不安、ここでサヨナラ。</span></p>
                              <p className="font-semibold text-slate-700">「夏休みこそ、<span className="font-bold" style={{ color: '#CC554F' }}>スキルと仲間が新しい扉を開く絶好のタイミング。</span>」</p>
                              <p className="font-semibold text-slate-700">「AIって実は味方！<span className="font-bold" style={{ color: '#CC554F' }}>"やってみたい"を、もっと楽しく、もっと簡単に。</span>」</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
<<<<<<< HEAD
      <section className="py-12 overflow-hidden" style={{ backgroundColor: '#F9F6F2' }}>
        <div className="container mx-auto px-4 max-w-full">
=======
      <section className="py-12" style={{ backgroundColor: '#F9F6F2' }}>
        <div className="container mx-auto px-4">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-6">価値以上の価値を、この1日で。</h2>
            <p className="text-xl">なぜ、この講座が最高の自己投資になるのか？その理由を様々な角度からご説明します。</p>
          </div>

          {/* 他の講座との比較 */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">他の講座と比べると、こんなに違います</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* 長期スクール */}
              <Card className="bg-white shadow-lg card-hover">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-3 text-slate-700">長期スクール（3ヶ月・30万円～）</h3>
                  <p className="text-sm text-slate-600">
                    SNS戦略やLP構築など幅広く学べるが、期間も費用も大きい。多くはオンライン中心で、個別対応は限定的。
                </p>
              </CardContent>
            </Card>

              {/* 副業向けAI講座 */}
              <Card className="bg-white shadow-lg card-hover">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-3 text-slate-700">副業向けAI講座（1ヶ月・5万～15万円程度）</h3>
                  <p className="text-sm text-slate-600">
                    ChatGPT活用の基本が中心で、業務効率化やSNS運用まで網羅しているケースは少ない。
                  </p>
                </CardContent>
              </Card>

              {/* デザイン講座 */}
              <Card className="bg-white shadow-lg card-hover">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-3 text-slate-700">デザイン講座（1日完結・3万～5万円程度）</h3>
                  <p className="text-sm text-slate-600">
                    Canvaなどデザインに特化した内容で、業務自動化やAI活用まではカバーされない。
                </p>
              </CardContent>
            </Card>
          </div>

            {/* この講座の特徴 */}
            <Card className="bg-white border-2 border-gray-200 shadow-lg card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 animate-fade-in" style={{ color: '#c7564f' }}>それに対して、この講座は…</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start hover-lift p-2 rounded transition-all duration-300">
                      <span className="text-xl mr-3 animate-bounce-slow">✅</span>
                      <p className="text-base">1日完結・買い切り型だから効率的</p>
                    </div>
                    <div className="flex items-start hover-lift p-2 rounded transition-all duration-300">
                      <span className="text-xl mr-3 animate-bounce-slow">✅</span>
                      <p className="text-base">SNS運用 × GAS業務自動化 × AI実践スキルをまとめて習得できるオールインワン</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start hover-lift p-2 rounded transition-all duration-300">
                      <span className="text-xl mr-3 animate-bounce-slow">✅</span>
                      <p className="text-base">超少人数制・対面型だから、その場で質問・解決できる</p>
                    </div>
                    <div className="flex items-start hover-lift p-2 rounded transition-all duration-300">
                      <span className="text-xl mr-3 animate-bounce-slow">✅</span>
                      <p className="text-base">固定カリキュラムではなく、講座中に自分のテーマに合わせて実践可能</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>





          {/* 最後に */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">最後に</h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl leading-relaxed">
                本来なら、それぞれ別々に学び、外注すれば<span className="font-bold" style={{ color: '#c7564f' }}>20万円以上</span>かかる内容を、
<<<<<<< HEAD
              <br className="hidden sm:block" />
=======
              <br />
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                今回は「1日であなたの仕事・活動を効率化する仕組みを一気に構築」というテーマで、すべてセットでご提供します。
              </p>
              
              <p className="text-xl leading-relaxed">
                これは単なる講座ではなく、<span className="font-bold">"自分で再現できる仕組み"を持ち帰れる実践型プログラム。</span>
              </p>
              
              <p className="text-xl leading-relaxed">
                業務効率化やSNS運用、AIスキルを短期間で身につけたい方、
<<<<<<< HEAD
              <br className="hidden sm:block" />
=======
              <br />
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                副業・自営業に踏み出す方にこそ受けてほしい、<span className="font-bold text-xl" style={{ color: '#c7564f' }}>未来への投資になる1日です。</span>
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Schedule & Pricing */}
<<<<<<< HEAD
      <section className="py-16 bg-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 max-w-full">
=======
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8


          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Regular Price */}
            <Card className="bg-white border-2 border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">通常価格</h3>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2">¥29,800</div>
                  <div className="text-lg text-gray-600">/ コース</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="text-pink-500 mr-2">👥</span>
                      <span className="font-bold">ペア割</span>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">お一人様¥5,000 OFF</div>
                      <div className="text-sm text-gray-600">(¥24,800 / 人)</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="text-blue-500 mr-2">📚</span>
                      <span className="font-bold">2日間セット割</span>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">合計¥13,000 OFF</div>
                      <div className="text-sm text-gray-600">(合計¥46,600)</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#6e5c4b' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-lg">1日集中講座（7-8時間）</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#6e5c4b' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-lg">講師2名による手厚いサポート</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#6e5c4b' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-lg">講座資料・テンプレート集</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#6e5c4b' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-lg">事前ヒアリングで課題に合わせた内容</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#6e5c4b' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-lg">各回8名の超少人数制</span>
                  </div>
                </div>

                <div className="text-center text-lg text-gray-600">8月1日以降のお申し込み</div>
              </CardContent>
            </Card>

            {/* Early Bird Price */}
            <Card className="bg-white border-4 shadow-lg relative animate-early-bird-pulse animate-border-glow" style={{ borderColor: '#c7564f' }}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse hover-glow" style={{ backgroundColor: '#c7564f' }}>⏰ 早割実施中</div>
              </div>

              <CardContent className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-center mb-6 animate-fade-in" style={{ color: '#c7564f' }}>早割価格</h3>

                <div className="text-center mb-6">
                  <div className="text-sm text-gray-500 line-through mb-1 animate-slide-up">通常 ¥29,800</div>
                                      <div className="px-3 py-1 rounded-full inline-block mb-2 animate-pulse" style={{ backgroundColor: '#CC554F', color: 'white' }}>
                    <span className="text-sm">⏰ 早割（7月末までのお申込）</span>
                  </div>
                                      <div className="text-2xl font-bold mb-2 animate-float" style={{ color: '#CC554F' }}>¥8,000 OFF</div>
                                      <div className="text-4xl font-bold mb-2 animate-float" style={{ color: '#CC554F' }}>¥21,800</div>
                  <div className="text-lg text-gray-600 animate-slide-up">/ コース</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="text-pink-500 mr-2">👥</span>
                      <span className="font-bold">ペア割</span>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">お一人様¥5,000 OFF</div>
                      <div className="text-sm text-gray-600">(¥16,800 / 人)</div>
                    </div>
                  </div>

                                      <div className="p-4 rounded-lg" style={{ backgroundColor: '#CC554F' }}>
                    <div className="flex items-center mb-2">
                      <span className="mr-2" style={{ color: '#CC554F' }}>📚</span>
                      <span className="font-bold">2日間セット割</span>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">合計¥13,000 OFF</div>
                      <div className="text-sm text-gray-600">(合計¥30,600)</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#6e5c4b' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-lg">1日集中講座（7-8時間）</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#6e5c4b' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-lg">講師2名による手厚いサポート</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#6e5c4b' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-lg">講座資料・テンプレート集</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#6e5c4b' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-lg">事前ヒアリングで課題に合わせた内容</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#6e5c4b' }}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-lg">各回8名の超少人数制</span>
                  </div>
                </div>

                <div className="text-center text-lg text-red-600 font-bold">7月末までのお申し込み限定</div>
              </CardContent>
            </Card>
          </div>

          {/* Schedule */}
          <Card className="max-w-6xl mx-auto mb-12">
            <CardContent className="p-4 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-blue-500" />
                <h3 className="text-xl md:text-2xl font-bold">開催日程</h3>
              </div>

              <div className="text-white text-center py-2 md:py-3 rounded-t-lg mb-4 md:mb-6" style={{ backgroundColor: '#c7564f' }}>
                <h4 className="text-base md:text-lg font-bold">8月開催スケジュール</h4>
              </div>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 p-3 md:p-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" style={{ color: '#c7564f' }} />
                    <span className="font-bold text-sm md:text-base">8月11日（月・祝）</span>
                  </div>
                  <div className="text-left md:text-center">
                    <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: '#6e5c4b', color: 'white' }}>AI×GAS自動化講座</span>
                  </div>
                  <div className="flex items-center justify-start md:justify-end">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" style={{ color: '#6e5c4b' }} />
                    <span className="font-medium text-sm md:text-base" style={{ color: '#c7564f' }}>10:00~17:50</span>
                  </div>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 p-3 md:p-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" style={{ color: '#c7564f' }} />
                    <span className="font-bold text-sm md:text-base">8月12日（火）</span>
                  </div>
                  <div className="text-left md:text-center">
                    <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: '#c7564f', color: 'white' }}>AI×SNS運用講座</span>
                  </div>
                  <div className="flex items-center justify-start md:justify-end">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" style={{ color: '#6e5c4b' }} />
                    <span className="font-medium text-sm md:text-base" style={{ color: '#c7564f' }}>10:00~16:50</span>
                  </div>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4 p-3 md:p-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" style={{ color: '#c7564f' }} />
                    <span className="font-bold text-sm md:text-base">8月16日（土）</span>
                  </div>
                  <div className="text-left md:text-center">
                    <span className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm" style={{ backgroundColor: '#c7564f', color: 'white' }}>AI×SNS運用講座</span>
                  </div>
                  <div className="flex items-center justify-start md:justify-end">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" style={{ color: '#6e5c4b' }} />
                    <span className="font-medium text-sm md:text-base" style={{ color: '#c7564f' }}>10:00~16:50</span>
                  </div>
                </div>


              </div>

              {/* Venue Information */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 mr-3 text-amber-600" />
                    <h4 className="text-xl font-bold text-amber-800">会場情報</h4>
                </div>

                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="font-bold text-amber-700 min-w-16">会場：</span>
                    <span>札幌駅近郊セミナールーム（主にEZOHUB SAPPORO）</span>
                  </div>

                  <div className="flex items-start">
                    <span className="font-bold text-amber-700 min-w-16">定員：</span>
                    <span>各回8名（超少人数制）</span>
                  </div>

                  <div className="flex items-start">
                    <span className="font-bold text-amber-700 min-w-16">講師：</span>
                    <span>2名体制で手厚くサポート</span>
                  </div>

                  <div className="flex items-start">
                    <span className="font-bold text-amber-700 min-w-16">持ち物：</span>
                    <span>ノートPC、筆記用具</span>
                  </div>

                  <div className="flex items-start">
                    <span className="font-bold text-amber-700 min-w-16">昼食：</span>
                    <span>各自持参（近隣にコンビニ・飲食店あり）</span>
                  </div>

                  <div className="mt-4 p-3 bg-amber-100 rounded border-l-4 border-amber-400">
                    <p className="text-sm text-amber-800">※ 申し込み後、詳細な場所をご連絡します</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
<<<<<<< HEAD
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-full">
=======
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
          <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>

          <div className="max-w-4xl mx-auto space-y-4">
            <details className="bg-slate-50 rounded-lg p-6">
              <summary className="font-bold text-xl cursor-pointer flex items-center justify-between">
                本当に1日間でWebサイトやSNS投稿が作れるようになりますか？
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="mt-4 text-gray-700">
                <p className="text-lg">
                  はい、大丈夫です。当ブートキャンプでは、初心者の方でも分かりやすいテンプレートやAIツールを活用し、講師が丁寧にサポートします。1日間で基本的な操作方法から、実際に発信できる成果物まで作成できるよう設計されています。
                </p>
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg p-6">
              <summary className="font-bold text-xl cursor-pointer flex items-center justify-between">
                PCの持参は必須ですか？また、どのようなスペックが必要ですか？
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="mt-4 text-gray-700">
                <p className="text-lg">
                  ご自身のPCをご持参いただくことを推奨しています。ご自宅に戻ってからもスムーズに作業を継続できます。スペックについては、インターネットに接続でき、基本的なブラウザ操作（Google
                  Chrome推奨）ができれば問題ありません。特別なソフトウェアの事前インストールは不要です。
                </p>
              </div>
            </details>

<<<<<<< HEAD
            <details className="bg-slate-50 rounded-lg p-6">
              <summary className="font-bold text-xl cursor-pointer flex items-center justify-between">
=======
                        <details className="bg-slate-50 rounded-lg p-6">
              <summary className="font-bold text-xl cursor-pointer flex items-center justify-between" style={{ color: '#CC554F' }}>
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                支払い方法は何がありますか？分割払いは可能ですか？
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="mt-4 text-gray-700">
                <p className="text-lg">
                  お支払い方法は銀行振込またはクレジットカード払いに対応しています。詳細はお申し込み後ご案内いたします。分割払いについては、クレジットカード会社の分割サービスをご利用いただける場合がございます。
                </p>
              </div>
            </details>

<<<<<<< HEAD
            <details className="bg-slate-50 rounded-lg p-6">
              <summary className="font-bold text-xl cursor-pointer flex items-center justify-between">
=======
                        <details className="bg-slate-50 rounded-lg p-6">
              <summary className="font-bold text-xl cursor-pointer flex items-center justify-between" style={{ color: '#CC554F' }}>
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                ブートキャンプ後も質問できるようなサポートはありますか？
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="mt-4 text-gray-700">
                <p className="text-lg">
                  はい、ご安心ください。ブートキャンプ終了後1ヶ月間のLINEサポートがついています。また、卒業生限定のオンラインコミュニティにご招待しますので、仲間と交流したり、情報を交換したりすることができます。
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Company Info */}
<<<<<<< HEAD
      <section className="py-16 bg-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 max-w-full">
=======
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">TOWAの想い ー "好き"と"AIスキル"で、伴走する</h2>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  私たちは、北海道を拠点に活動する小さなチームです。「個人の輝きが、もっと自由に、もっと楽しく花開くお手伝いをしたい」そんな想いから、このブートキャンプは生まれました。AIは、難解なものではなく、あなたの可能性を広げる強力な味方です。
                </p>

                <p className="text-lg">
                  松永（AIアドバイザー/講師）と丹羽（AIアドバイザー/講師）は、それぞれ異なる分野で活動してきましたが、「もっと多くのAIの力で自分らしい発信をしてほしい」という共通の目標を持っています。この1日が、あなたの新しい一歩を踏み出すきっかけになることを心から願っています。
                </p>

                <p className="text-lg">
                  このブートキャンプは、単なるスキル習得の場ではありません。参加者同士が刺激し合い、学び合い、そして未来に向けて共に成長できる「共創の場」を目指しています。札幌の地で、あなたと一緒に新しい物語を紡ぐことを楽しみにしています。
                </p>
              </div>

              <div className="text-center mt-8">
                <Button className="text-white px-8 py-3 rounded-full" style={{ backgroundColor: '#CC554F' }} asChild>
<<<<<<< HEAD
                  <a href="https://summer-bootcamp-women.towa-ai.com/team">
=======
                  <a href="https://summer-bootcamp.towa-ai.com/team" target="_blank" rel="noopener noreferrer">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                    講師について詳しく知る
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
<<<<<<< HEAD
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-full">
=======
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in" style={{ color: '#CC554F' }}>
              この夏、あなたの"できる"をブートキャンプで加速しませんか？
            </h2>
            <p className="text-xl font-bold animate-slide-up">残数わずか｜夏限定開催</p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
            <Card className="card-hover" style={{ backgroundColor: '#CC554F' }}>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4 animate-fade-in">お申込みフォーム</h3>
                <p className="text-lg mb-6 animate-slide-up">
                  講座の詳細を確認し、
                  <br />
                  参加を決めた方はこちら
                </p>
                <Button className="text-white w-full rounded-full button-hover animate-float" style={{ backgroundColor: '#CC554F' }} asChild>
<<<<<<< HEAD
                  <a href="/apply">
=======
                  <a href="https://summer-bootcamp.towa-ai.com/apply" target="_blank" rel="noopener noreferrer">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                    →お申込みフォームへ
                  </a>
                </Button>
              </CardContent>
            </Card>



            <Card className="text-white card-hover" style={{ backgroundColor: '#00C300' }}>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4 animate-fade-in">LINE相談</h3>
                <p className="text-lg mb-6 animate-slide-up">
                  LINEで気軽に質問
                  <br />
                  →相談したい方
                </p>
                <Button className="text-white w-full rounded-full button-hover animate-float" style={{ backgroundColor: '#00C300' }} asChild>
<<<<<<< HEAD
                  <a href="https://summer-bootcamp-women.towa-ai.com/line-consultation">
=======
                  <a href="https://summer-bootcamp.towa-ai.com/line-consultation" target="_blank" rel="noopener noreferrer">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                    📱 無料相談を予約する
                  </a>
                </Button>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
                      <Button className="text-white px-6 py-3 rounded-full shadow-lg button-hover animate-pulse-glow" style={{ backgroundColor: '#CC554F' }} asChild>
<<<<<<< HEAD
          <a href="/apply">
=======
          <a href="https://summer-bootcamp.towa-ai.com/apply" target="_blank" rel="noopener noreferrer">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
            🎯 申し込む
          </a>
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-gray-300 py-12">
<<<<<<< HEAD
        <div className="container mx-auto px-4 max-w-full">
=======
        <div className="container mx-auto px-4">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left side - Company Info */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-200 mb-4">TOWA</h3>
              <div className="space-y-2 text-sm">
                <p>運営会社：株式会社アクロス</p>
                <p>〒107-0061 東京都港区北青山1-3-1 アールキューブ青山 3F</p>
                <p>運営拠点：東京・札幌</p>
                <p>Email：info@towa-ai.com</p>
              </div>
            </div>
            
            {/* Right side - Navigation Links */}
            <div className="flex flex-col space-y-2 animate-slide-up">
<<<<<<< HEAD
              <a href="https://summer-bootcamp-women.towa-ai.com/terms" className="text-sm hover:text-white transition-colors hover-lift">
                利用規約
              </a>
              <a href="https://summer-bootcamp-women.towa-ai.com/privacy" className="text-sm hover:text-white transition-colors hover-lift">
                プライバシーポリシー
              </a>
              <a href="https://summer-bootcamp-women.towa-ai.com/about" className="text-sm hover:text-white transition-colors hover-lift">
=======
              <a href="https://summer-bootcamp.towa-ai.com/terms" className="text-sm hover:text-white transition-colors hover-lift">
                利用規約
              </a>
              <a href="https://summer-bootcamp.towa-ai.com/privacy" className="text-sm hover:text-white transition-colors hover-lift">
                プライバシーポリシー
              </a>
              <a href="https://summer-bootcamp.towa-ai.com/about" className="text-sm hover:text-white transition-colors hover-lift">
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
                TOWAについて
              </a>
            </div>
          </div>
          
          {/* Separator line */}
          <div className="border-t border-gray-600 mb-6"></div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-400 animate-fade-in">© 2025 TOWA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
