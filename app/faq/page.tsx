"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import CalloutCTA from "@/components/CalloutCTA";
import { Card } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Clock, Shield, Users, Smartphone, Database } from "lucide-react";

const faqs = [
  {
    question: "導入にはどのくらいの時間がかかりますか？",
    answer: "基本的な設定は1週間程度で完了します。先生方への研修や生徒への説明を含めても、1ヶ月以内に本格運用を開始できます。段階的な導入も可能ですので、ご相談ください。"
  },
  {
    question: "生徒のプライバシーは守られますか？",
    answer: "はい、最高レベルのセキュリティで保護されています。記録内容は暗号化され、アクセス権限も厳格に管理されています。また、生徒本人がいつでも自分の記録を確認・編集できる仕組みになっています。"
  },
  {
    question: "先生の負担は増えませんか？",
    answer: "むしろ負担軽減を目指しています。1分間の記録入力で、従来の観察記録や面談準備にかかる時間を大幅に短縮できます。AIが自動で分析・要約するため、先生は生徒との対話により多くの時間を使えるようになります。"
  },
  {
    question: "どのデバイスから利用できますか？",
    answer: "スマートフォン、タブレット、PCのすべてに対応しています。特にスマートフォンでの入力体験を重視して設計されており、移動中や休み時間でも簡単に記録できます。"
  },
  {
    question: "既存の学校システムとの連携は可能ですか？",
    answer: "多くの学校管理システムとの連携が可能です。成績管理システムや出席管理システムとのデータ連携により、より包括的な生徒理解を支援します。詳細は個別にご相談ください。"
  },
  {
    question: "料金体系について教えてください",
    answer: "学校規模に応じた3つのプランをご用意しています。Lightプラン（月額500円〜）、Standardプラン（月額3,000円〜）、Advancedプラン（月額20,000円〜）があり、教員数に応じて調整されます。年間契約で10%の割引もあります。"
  },
  {
    question: "無料トライアルはありますか？",
    answer: "はい、1ヶ月間の無料トライアルをご利用いただけます。実際の教室環境で効果を実感していただいてから、導入をご検討ください。トライアル期間中も、フルサポートを提供いたします。"
  },
  {
    question: "サポート体制はどうなっていますか？",
    answer: "専任のカスタマーサクセスチームが導入から運用まで継続的にサポートします。オンライン研修、電話・メールサポート、定期的なフォローアップミーティングを通じて、成功をお手伝いします。"
  }
];

const categories = [
  { icon: Clock, title: "導入・運用", count: 3 },
  { icon: Shield, title: "セキュリティ", count: 1 },
  { icon: Users, title: "利用者", count: 2 },
  { icon: Smartphone, title: "技術", count: 2 }
];

export default function FAQPage() {
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
              よくある<span className="text-sky-600">ご質問</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-storm-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              導入前の疑問や不安にお答えします。他にご質問がございましたら、お気軽にお問い合わせください。
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center bg-gradient-to-br from-sky-50 to-white">
                    <category.icon className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-storm-900 text-sm">{category.title}</h3>
                    <p className="text-xs text-storm-600">{category.count}件</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 shadow-[0_10px_30px_rgba(2,132,199,.12)]">
                <div className="flex items-center space-x-2 mb-6">
                  <HelpCircle className="w-6 h-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-storm-900">FAQ</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-sky-100 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-semibold text-storm-900 hover:text-sky-600 transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-storm-700 leading-relaxed pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Card className="p-8 bg-gradient-to-br from-sun-50 to-white">
                <h3 className="text-xl font-bold text-storm-900 mb-4">
                  他にご質問はありませんか？
                </h3>
                <p className="text-storm-700 mb-6">
                  導入に関するご不明点や、具体的な運用方法について、専門スタッフが丁寧にお答えします。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition-colors"
                  >
                    お問い合わせフォーム
                  </a>
                  <a 
                    href="mailto:hello@ikiiki-record.jp"
                    className="inline-flex items-center justify-center px-6 py-3 border border-sky-600 text-sky-600 rounded-full font-semibold hover:bg-sky-50 transition-colors"
                  >
                    メールで相談
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <CalloutCTA />
      </main>
    </div>
  );
}