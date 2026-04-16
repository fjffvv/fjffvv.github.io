import Link from "next/link";

export default function QSYPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between p-6 md:p-8">
          <Link href="/">
            <button className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-900/30 transition-colors">
              ← 返回
            </button>
          </Link>
          <Link href="/characters/fjf">
            <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-semibold">
              查看FJF →
            </button>
          </Link>
        </header>

        <header className="flex items-center justify-between p-6 md:p-8">
          <div></div>
          <h1 className="text-2xl md:text-4xl font-bold">角色档案</h1>
          <div></div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Character Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 inline-block">👑</div>
            <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              741 / QSY
            </h1>
            <p className="text-2xl text-gray-400 mb-2">「铁打的741」</p>
            <p className="text-gray-500 text-lg">王者荣耀单挑传奇冠军</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-red-900/30 border border-red-600/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-400">2/1/0</div>
              <div className="text-sm text-gray-400">战绩</div>
            </div>
            <div className="bg-red-900/30 border border-red-600/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-400">⚔️</div>
              <div className="text-sm text-gray-400">战斗技巧</div>
            </div>
            <div className="bg-red-900/30 border border-red-600/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-400">🎖️</div>
              <div className="text-sm text-gray-400">单挑之王</div>
            </div>
            <div className="bg-red-900/30 border border-red-600/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-400">🏆</div>
              <div className="text-sm text-gray-400">最终赢家</div>
            </div>
          </div>

          {/* Biography */}
          <div className="bg-black/50 border border-red-600/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-red-300">人物简介</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                741，真名QSY，一位技艺高超的王者荣耀单挑高手。在与FJF的决战中，他凭借过硬的操作技术和敏锐的游戏意识，以绝对的实力赢得了最终的胜利。
              </p>
              <p>
                2:1的战绩说明一切。虽然FJF拥有经济优势，但741用实际行动证明了「经济不是一切」。他甚至还谦虚地表示「我还是让了他一个」，展现了一位真正冠军的气度。
              </p>
              <p>
                「经济高一大截还打不过我，哎」— 这不是嘲讽，而是一位技术大师对游戏本质的深刻理解。
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-900/20 border border-red-600/40 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-red-300">⚔️ 战术特点</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ 操作精准度极高</li>
                <li>✓ 技能释放时机完美</li>
                <li>✓ 走位预测一流</li>
                <li>✓ 伤害计算精确</li>
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-600/40 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-red-300">🧠 游戏理解</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ 深刻的游戏理解</li>
                <li>✓ 对节奏的掌控</li>
                <li>✓ 心理博弈能力</li>
                <li>✓ 应变能力超强</li>
              </ul>
            </div>
          </div>

          {/* Famous Quotes */}
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-600/40 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-red-300">🗣️ 经典语录</h3>
            <div className="space-y-4">
              <blockquote className="text-lg text-gray-300 italic border-l-4 border-red-500 pl-6">
                「兄弟，你经济比我高，还打不过我」
              </blockquote>
              <blockquote className="text-lg text-gray-300 italic border-l-4 border-red-500 pl-6">
                「我还是让了他一个」
              </blockquote>
              <blockquote className="text-lg text-gray-300 italic border-l-4 border-red-500 pl-6">
                「有本事看回放，看我第一个是不是直接送他」
              </blockquote>
              <blockquote className="text-lg text-gray-300 italic border-l-4 border-red-500 pl-6">
                「经济高一大截还打不过我，哎」
              </blockquote>
              <blockquote className="text-lg text-gray-300 italic border-l-4 border-red-500 pl-6">
                「你就继续开大招逃跑吧」
              </blockquote>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-black/50 border border-red-600/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-300">🏆 成就解锁</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-red-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">👑</div>
                <p className="text-sm font-semibold">单挑冠军</p>
              </div>
              <div className="bg-red-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚔️</div>
                <p className="text-sm font-semibold">技术大师</p>
              </div>
              <div className="bg-red-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-sm font-semibold">精准击杀</p>
              </div>
              <div className="bg-red-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🧠</div>
                <p className="text-sm font-semibold">游戏大神</p>
              </div>
              <div className="bg-red-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎖️</div>
                <p className="text-sm font-semibold">克敌机锋</p>
              </div>
              <div className="bg-red-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💯</div>
                <p className="text-sm font-semibold">完美胜利</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
