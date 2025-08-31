"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ToggleAudience from "@/components/ToggleAudience";
import CalloutCTA from "@/components/CalloutCTA";
import { Card } from "@/components/ui/card";
import { 
  BarChart3, 
  Clock, 
  Shield, 
  Smartphone, 
  Cloud, 
  MessageSquare,
  Users,
  Settings,
  FileText
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "1分間記録",
    description: "気分と体験を簡単入力。継続しやすい短時間設計。"
  },
  {
    icon: BarChart3,
    title: "天気図分析", 
    description: "AIが学習データを天気として可視化。直感的に理解。"
  },
  {
    icon: Shield,
    title: "透明なAI",
    description: "判断根拠を全て開示。なぜその結論になったかが分かる。"
  },
  {
    icon: Smartphone,
    title: "マルチデバイス",
    description: "スマホ、タブレット、PCどこからでも記録・確認可能。"
  },
  {
    icon: Cloud,
    title: "クラウド同期",
    description: "データは安全にクラウドに保存。いつでもアクセス。"
  },
  {
    icon: MessageSquare,
    title: "保護者連携",
    description: "学校での様子を保護者と共有。安心の架け橋。"
  },
  {
    icon: Users,
    title: "チーム分析",
    description: "クラス全体の傾向把握。集団指導に活用。"
  },
  {
    icon: Settings,
    title: "カスタマイズ",
    description: "学校独自のタグや評価軸を設定可能。"
  },
  {
    icon: FileText,
    title: "レポート生成",
    description: "週次・月次レポートを自動作成。面談資料に最適。"
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-sky-100 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-storm-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              すべての機能が、<span className="text-sky-600">学びを支える</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-storm-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              シンプルな操作で、深い洞察を。教育現場のリアルな課題に応える機能設計。
            </motion.p>
          </div>
        </section>

        <ToggleAudience />

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-4">
                充実の機能セット
              </h2>
              <p className="text-lg text-storm-600">
                日々の記録から未来の可能性まで、学びのすべてを支えます
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-white to-sky-50 shadow-[0_10px_30px_rgba(2,132,199,.08)] hover:shadow-[0_15px_35px_rgba(2,132,199,.15)] transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-sun-600 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-storm-900 mb-3">{feature.title}</h3>
                    <p className="text-storm-700 leading-relaxed">{feature.description}</p>
                  </Card>
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