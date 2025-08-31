"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import CalloutCTA from "@/components/CalloutCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Compass, Lightbulb, Handshake, Scaling as Seedling, Sparkles, Quote, MessageCircle, Eye, Award, Users } from "lucide-react";

const storyPoints = [
  {
    icon: Eye,
    title: "ノートに書き残せなかった\"まなざし\"",
    description: "授業中の集中した表情、友達を気遣う優しい視線"
  },
  {
    icon: Award,
    title: "成績には出てこない\"声なき勇気\"", 
    description: "手を挙げる前の一瞬の迷い、それでも発言した勇気"
  },
  {
    icon: Users,
    title: "誰かに褒められずとも続けた\"挑戦\"",
    description: "小さな努力の積み重ね、諦めずに向き合う姿勢"
  }
];

const features = [
  {
    title: "感情のゆれやテーマごとの言葉をAIが自動で分類",
    description: "複雑な感情も、AIが丁寧に読み取り整理します"
  },
  {
    title: "天気・名言・出来事なども合わせて\"物語\"として蓄積",
    description: "データではなく、その子だけの成長ストーリーを紡ぎます"
  },
  {
    title: "教師の教育目標や振り返りと紐づいたアウトプットを自動生成",
    description: "先生の想いと生徒の記録が、意味のある形で結びつきます"
  }
];

const trialBenefits = [
  {
    title: "教師の負担は増やさず、むしろ\"想いが言語化される\"サポートに",
    description: "日々感じていることが、具体的な言葉として形になります"
  },
  {
    title: "生徒にとっても「自分を振り返る日記」として心に残る記録に", 
    description: "自分の成長を客観視し、自信につながる振り返りができます"
  },
  {
    title: "保護者や管理職にも\"ストーリー付きの成長\"を届けられるツールに",
    description: "数値だけでない、豊かな成長の物語を共有できます"
  }
];

export default function StoriesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sky-100 to-sun-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-storm-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              あの子の<span className="text-sky-600">"何気ない一言"</span>を、<br />
              もう見逃さないために。
            </motion.h1>
          </div>
        </section>

        {/* Story Opening */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 md:p-12 bg-gradient-to-br from-sky-50 to-white shadow-[0_10px_30px_rgba(2,132,199,.12)]">
                <div className="space-y-6 text-lg leading-relaxed text-storm-700">
                  <p>ある日の放課後。<br />黒板のチョークを消していた先生が、ふとつぶやいたのです。</p>
                  
                  <blockquote className="border-l-4 border-sky-400 pl-6 py-4 bg-sky-50 rounded-r-xl">
                    <Quote className="w-6 h-6 text-sky-600 mb-2" />
                    <p className="text-storm-800 font-medium italic">
                      「今日、◯◯くんが"オレ、朝がんばって起きたんだよ"って言ったんですよ。<br />
                      　それ、誰にも伝わらないけど、私にとってはすごく大事な言葉でした。」
                    </p>
                  </blockquote>
                  
                  <p>その瞬間、私は思いました。<br />
                    <strong className="text-storm-900">この「生きた言葉」を、教育の証にできないだろうか？</strong>と。
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Education Philosophy */}
        <section className="py-20 bg-gradient-to-b from-white to-sky-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Compass className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-4">
                  教育は"記録されない感動"でできている
                </h2>
                <p className="text-lg text-storm-600 max-w-3xl mx-auto">
                  私たちが目指すのは、単なるデータの蓄積ではありません。<br />
                  「今日あった、ほんの小さな変化」に、ちゃんと意味を見出せる教育。
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {storyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-white to-sky-50 shadow-[0_10px_30px_rgba(2,132,199,.08)] hover:shadow-[0_15px_35px_rgba(2,132,199,.15)] transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-sun-600 rounded-xl flex items-center justify-center mb-4">
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-storm-900 mb-3">{point.title}</h3>
                    <p className="text-storm-700 leading-relaxed">{point.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Card className="p-8 bg-gradient-to-br from-sun-50 to-white max-w-3xl mx-auto">
                <p className="text-lg text-storm-700 leading-relaxed">
                  それらが見えるようになったら──<br />
                  子どもたちも、先生たちも、<strong className="text-storm-900">「自分って、ちゃんと育ってるんだ」</strong>と気づける。
                </p>
                <p className="text-storm-600 mt-4">
                  それを形にするために、私たちはこのプロダクトをつくっています。
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Product Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Lightbulb className="w-12 h-12 text-sun-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-4">
                  「iki-ikiレコード」が目指すもの
                </h2>
                <p className="text-lg text-storm-600 max-w-3xl mx-auto">
                  「iki-ikiレコード」は、生徒の記録を<strong>1日1分・自由記述で残す</strong>だけの仕組み。<br />
                  その裏で、AIとデザインが静かに動きます。
                </p>
              </motion.div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 bg-gradient-to-r from-sky-50 to-white">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-storm-900 mb-2">{feature.title}</h3>
                        <p className="text-storm-700">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-12"
            >
              <Card className="p-8 bg-gradient-to-br from-magenta-50 to-white max-w-3xl mx-auto">
                <p className="text-lg text-storm-700 leading-relaxed">
                  記録されるのは"テストの点"ではありません。<br />
                  <strong className="text-storm-900">その子自身が「今日、何を感じたか」</strong>です。
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Development Philosophy */}
        <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <Handshake className="w-12 h-12 text-sky-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-6">
                これは、完成品ではありません
              </h2>
            </motion.div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-white to-sky-50 shadow-[0_10px_30px_rgba(2,132,199,.12)]">
              <div className="space-y-6 text-lg leading-relaxed text-storm-700">
                <p>
                  私たちのプロダクトは、まだ未完成です。<br />
                  でも、それは<strong className="text-storm-900">「育てる余白を残したUX」</strong>でもあります。
                </p>
                
                <p>
                  教育とは、常に対話の中で進化するもの。<br />
                  だからこそ、「先生や学校とともに育てていく」という前提で設計しています。
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Trial Recruitment */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Seedling className="w-12 h-12 text-leaf-500 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-6">
                  最初の5校、募集しています。
                </h2>
                <p className="text-lg text-storm-600 max-w-3xl mx-auto">
                  もしあなたが、日々の教室で「言葉にならない育ち」に出会っているなら──<br />
                  私たちと一緒に、それを記録に変えてみませんか？
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {trialBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-white to-leaf-50 shadow-[0_10px_30px_rgba(34,197,94,.08)] hover:shadow-[0_15px_35px_rgba(34,197,94,.15)] transition-all duration-300">
                    <h3 className="text-lg font-bold text-storm-900 mb-3 leading-tight">{benefit.title}</h3>
                    <p className="text-storm-700 leading-relaxed">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <Card className="p-8 bg-gradient-to-br from-leaf-50 to-white max-w-3xl mx-auto">
                <p className="text-lg text-storm-700 leading-relaxed mb-6">
                  少人数・限定でのトライアル導入となりますが、<br />
                  その分、深く伴走しながら一緒に記録文化を育てていきます。
                </p>
                <div className="flex items-center justify-center space-x-2 text-storm-600">
                  <MessageCircle className="w-5 h-5" />
                  <span>詳しくは、お気軽にDMまたはフォームよりご連絡ください。</span>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Final Message */}
        <section className="py-20 bg-gradient-to-br from-sky-50 to-sun-50">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-8">
                <Sparkles className="w-12 h-12 text-sun-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-6">
                  合言葉は「記録は、誇りになる」
                </h2>
              </div>

              <Card className="p-8 md:p-12 bg-white shadow-[0_10px_30px_rgba(2,132,199,.12)]">
                <p className="text-xl text-storm-700 leading-relaxed mb-6">
                  子どもたちが、数年後にこう言ってくれたら嬉しいのです。
                </p>
                
                <blockquote className="border-l-4 border-sun-400 pl-6 py-4 bg-sun-50 rounded-r-xl">
                  <Quote className="w-6 h-6 text-sun-600 mb-2" />
                  <p className="text-storm-800 font-medium italic text-lg">
                    「ねえ、これが私の記録。<br />
                    　ただの成績じゃなくて、"私ががんばって生きてきた証"だよ。」
                  </p>
                </blockquote>

                <div className="mt-8">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-sky-600 to-sun-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/contact">
                      一緒に物語を始める
                    </Link>
                  </Button>
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