"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Heart } from "lucide-react";

interface AudienceContent {
  title: string;
  description: string;
  benefits: string[];
}

const audienceData: Record<string, AudienceContent> = {
  teacher: {
    title: "先生向け",
    description: "1分で\"今日の気づき\"。週末には、語れるデータ。",
    benefits: [
      "生徒の変化を客観的に把握",
      "保護者面談での具体的な根拠",
      "クラス全体の傾向分析"
    ]
  },
  student: {
    title: "生徒向け", 
    description: "君の一歩が、クラスの空を明るくする。",
    benefits: [
      "自分の成長が見える化",
      "友達との健全な比較",
      "達成感の積み重ね"
    ]
  },
  parent: {
    title: "保護者向け",
    description: "ちゃんと見ている。だから、安心できる。",
    benefits: [
      "学校での様子を定期的に把握",
      "子どもの成長を数値で確認",
      "先生との連携強化"
    ]
  }
};

export default function ToggleAudience() {
  const [activeAudience, setActiveAudience] = useState<string>("teacher");

  const icons = {
    teacher: GraduationCap,
    student: Users,
    parent: Heart
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-4">
            みんなで育てる学びの環境
          </h2>
          <p className="text-lg text-storm-600 max-w-2xl mx-auto">
            立場が変われば、見える景色も変わる。それぞれの視点から価値を実感してください。
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg">
            {Object.entries(audienceData).map(([key, data]) => {
              const Icon = icons[key as keyof typeof icons];
              return (
                <button
                  key={key}
                  onClick={() => setActiveAudience(key)}
                  className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                    activeAudience === key 
                      ? "text-white" 
                      : "text-storm-600 hover:text-sky-600"
                  }`}
                >
                  {activeAudience === key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sun-600 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div className="relative flex items-center space-x-2">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{data.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={activeAudience}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(2,132,199,.12)] max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-storm-900 mb-4">
            {audienceData[activeAudience].title}
          </h3>
          <p className="text-lg text-storm-700 mb-6 leading-relaxed">
            {audienceData[activeAudience].description}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {audienceData[activeAudience].benefits.map((benefit, index) => (
              <div key={index} className="p-4 bg-sky-50 rounded-xl">
                <p className="text-storm-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}