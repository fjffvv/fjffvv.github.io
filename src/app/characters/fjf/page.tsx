import Link from "next/link";

export default function FJFPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
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
          <Link href="/characters/qsy">
            <button className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors font-semibold">
              查看741 →
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
            <div className="text-8xl mb-6 inline-block">👤</div>
            <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              FJF
            </h1>
            <p className="text-2xl text-gray-400 mb-2">「流水的fjf」</p>
            <p className="text-gray-500 text-lg">王者荣耀单挑传奇人物</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-blue-900/30 border border-blue-600/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400">1/2/0</div>
              <div className="text-sm text-gray-400">战绩</div>
            </div>
            <div className="bg-blue-900/30 border border-blue-600/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400">📈</div>
              <div className="text-sm text-gray-400">经济优势</div>
            </div>
            <div className="bg-blue-900/30 border border-blue-600/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400">🎯</div>
              <div className="text-sm text-gray-400">大招技能</div>
            </div>
            <div className="bg-blue-900/30 border border-blue-600/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400">💪</div>
              <div className="text-sm text-gray-400">意志力</div>
            </div>
          </div>

          {/* Biography */}
          <div className="bg-black/50 border border-blue-600/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">人物简介</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                FJF，一位充满传奇色彩的王者荣耀单挑高手。在与741的决战中，他展现了超人的经济管理能力和果敢的战斗精神。
              </p>
              <p>
                虽然最终以2:1的战绩落败，但他的故事激励了无数玩家。正如他自己所说：「讨厌我吧 我不在乎你们的评价」，这种无畏的精神成为了他最闪亮的光芒。
              </p>
              <p>
                「浪花淘尽 唯有我屹立不倒」 — 这句话完美诠释了FJF虽败犹荣的精神境界。
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-900/20 border border-blue-600/40 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-300">🎮 游戏特点</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ 优秀的经济积累</li>
                <li>✓ 稳健的对线能力</li>
                <li>✓ 灵活的逃脱技巧</li>
                <li>✓ 精准的大招释放</li>
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-600/40 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-300">📊 经济分析</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ 经济高于对手一大截</li>
                <li>✓ 装备质量优势明显</li>
                <li>✓ 击杀经济模型完整</li>
                <li>✓ 资源转化效率高</li>
              </ul>
            </div>
          </div>

          {/* Famous Quotes */}
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-600/40 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">🗣️ 经典语录</h3>
            <div className="space-y-4">
              <blockquote className="text-lg text-gray-300 italic border-l-4 border-blue-500 pl-6">
                「讨厌我吧 我不在乎你们的评价」
              </blockquote>
              <blockquote className="text-lg text-gray-300 italic border-l-4 border-blue-500 pl-6">
                「闹剧结束了」
              </blockquote>
              <blockquote className="text-lg text-gray-300 italic border-l-4 border-blue-500 pl-6">
                「浪花淘尽 唯有我屹立不倒」
              </blockquote>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-black/50 border border-blue-600/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">🏆 成就解锁</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💰</div>
                <p className="text-sm font-semibold">经济大户</p>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-sm font-semibold">精准大招</p>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚔️</div>
                <p className="text-sm font-semibold">单挑勇士</p>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🧠</div>
                <p className="text-sm font-semibold">意志坚定</p>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎪</div>
                <p className="text-sm font-semibold">整活传奇</p>
              </div>
              <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎨</div>
                <p className="text-sm font-semibold">诗意败者</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
