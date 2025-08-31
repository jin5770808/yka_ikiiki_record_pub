"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import CalloutCTA from "@/components/CalloutCTA";
import { Heart, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "誇りを育む",
    description: "一人ひとりの小さな成長を、確かな誇りに変える。記録は単なるデータではなく、君の歩んだ道のり。"
  },
  {
    icon: Target,
    title: "透明性を大切に",
    description: "なぜその評価なのか。AIの判断根拠をすべて開示し、先生も生徒も納得できる分析を提供する。"
  },
  {
    icon: Users,
    title: "みんなで育てる",
    description: "先生、生徒、保護者。立場は違えど、子どもたちの成長を願う気持ちは同じ。連携で支える。"
  },
  {
    icon: Lightbulb,
    title: "未来への種まき",
    description: "今日の記録が、明日の可能性を広げる。点ではなく線で、成長の物語を描いていく。"
  }
];

export default function VisionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-sky-100 to-sun-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-storm-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              記録は、<span className="text-sky-600">誇り</span>だ。
            </motion.h1>
            <motion.p 
              className="text-xl text-storm-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              点ではなく、空を見よう。<br />
              誰かの"よくやった"に、根拠を。日々の微細な変化を、未来へつなぐ。
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-4">
                私たちが大切にする想い
              </h2>
              <p className="text-lg text-storm-600">
                教育の現場で感じた課題から生まれた、4つの価値観
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white to-sky-50 p-8 rounded-2xl shadow-[0_10px_30px_rgba(2,132,199,.08)] hover:shadow-[0_15px_35px_rgba(2,132,199,.15)] transition-all duration-300 group-hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-sun-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-storm-900 mb-4">{value.title}</h3>
                    <p className="text-storm-700 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CalloutCTA />
      </main>
    </div>
  );
}