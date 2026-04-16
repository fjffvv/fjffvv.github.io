"use client"
import Link from "next/link";
import {useState} from "react";

export default function Home() {

  const [miaow_flag, set_miaow_flag] = useState(true)

  function onMiaowModeSwitch(){
    set_miaow_flag(!miaow_flag)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-pink-600 bg-clip-text text-transparent">
            王者荣耀
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-200">
            单挑传奇
          </h2>

          {/* Story Intro */}
          <p className="text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed font-light">
            一个关于经济、技术与尊严的故事
            <br />
            <span className="text-sm text-gray-400 mt-4 block">
              「他靠经济太高获胜」「你就继续开大招逃跑吧」
            </span>
          </p>

          {/* Character Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* FJF Card */}
            <Link href="/characters/fjf">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-600/30 rounded-lg p-8 h-64 flex flex-col items-center justify-center hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="text-6xl mb-4">👤</div>
                  <h3 className="text-2xl font-bold mb-2">FJF</h3>
                  <p className="text-gray-400 text-sm text-center">
                    「讨厌我吧 我不在乎」
                  </p>
                  <p className="text-gray-500 text-xs mt-3">经济高一大截的废物</p>
                </div>
              </div>
            </Link>

            {/* 741 Card */}
            <Link href="/characters/qsy">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 border border-red-600/30 rounded-lg p-8 h-64 flex flex-col items-center justify-center hover:border-red-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                  <div className="text-6xl mb-4">👑</div>
                  <h3 className="text-2xl font-bold mb-2">741 / QSY</h3>
                  <p className="text-gray-400 text-sm text-center">
                    「我还是让了他一个」
                  </p>
                  <p className="text-gray-500 text-xs mt-3">2:1 的绝对胜利</p>
                </div>
              </div>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/characters/fjf">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                查看 FJF
              </button>
            </Link>
            <Link href="/characters/qsy">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors">
                查看 741
              </button>
            </Link>
            <Link href="#story">
              <button className="px-8 py-3 border border-purple-400 hover:bg-purple-600/20 rounded-lg font-semibold transition-colors">
                看全部聊天记录
              </button>
            </Link>
          </div>

          {/* Story Section */}
          <div id="story" className="mt-20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-purple-300">📝 完整故事</h3>
            <div className="bg-black/50 border border-purple-600/30 rounded-lg p-6 text-left space-y-3 text-gray-300 text-sm font-mono">
              <p>
                <span className="text-purple-400">other:</span> 你单挑输给741了吗
              </p>
              <p>
                <span className="text-red-400">741:</span> 兄弟，你经济比我高，还打不过我
              </p>
              <p>
                <span className="text-purple-400">other:</span> 根据741报道741还是让了fjf一个
              </p>
              <p>
                <span className="text-red-400">741:</span> 他靠经济太高获胜的，因为到时间的话就是靠经济高，谁经济高谁赢
              </p>
              <p>
                <span className="text-purple-400">other:</span> 被741酱味大鸡了
              </p>
              <p>
                <span className="text-purple-400">other:</span> 流水的fjf铁打的741来了
              </p>
              <p>
                <span className="text-red-400">741:</span> 兄弟，我送你一个呀，准确来说是2:1
              </p>
              <p>
                <span className="text-red-400">741:</span> 有本事看回放，看我第一个是不是直接送他
              </p>
              <p>
                <span className="text-red-400">741:</span> 经济高一大截还打不过我，哎
              </p>
              <p>
                <span className="text-blue-400">fjf:</span> 讨厌我吧 我不在乎你们的评价
              </p>
              <p>
                <span className="text-blue-400">fjf:</span> 闹剧结束了
              </p>
              <p>
                <span className="text-blue-400">fjf:</span> 浪花淘尽 唯有我屹立不倒
              </p>
              <p>
                <span className="text-red-400">741:</span> 你就继续开大招逃跑吧
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-gray-500 text-sm">
            {miaow_flag ? <span>唏破</span> : <span>喵</span>}   <button className="inline-flex items-center align-middle px-4 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium rounded-full shadow-md hover:from-pink-600 hover:to-purple-600 hover:shadow-lg focus:outline-none focus:ring-2 transition-all duration-200 ease-in-out active:scale-95 cursor-pointer" onClick={onMiaowModeSwitch}>切换{miaow_flag? "唏破" : "喵"}模式</button>
          </div>
          <div className={"h-10"}></div>
        </div>
      </div>
    </div>
  );
}
