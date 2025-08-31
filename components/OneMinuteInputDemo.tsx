"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { CloudRain, Sun, Cloud, Zap } from "lucide-react";

const moodLabels = ["😔", "😐", "🙂", "😊", "🤩"];
const weatherIcons = {
  stormy: CloudRain,
  cloudy: Cloud, 
  sunny: Sun,
  energetic: Zap
};

const sampleTags = [
  "数学が楽しかった", "友達と協力", "新しい発見", "集中できた", 
  "質問ができた", "理解が深まった", "チャレンジした", "助け合った"
];

const aiInsights = {
  stormy: { quote: "雨の日も、成長の種を蒔いている", analysis: "困難に向き合う姿勢が見えます" },
  cloudy: { quote: "雲の隙間から、光が差し込む", analysis: "安定した取り組みが継続されています" },
  sunny: { quote: "今日の笑顔が、明日の力になる", analysis: "積極的な学習姿勢が表れています" },
  energetic: { quote: "君の情熱が、クラスを照らす", analysis: "高い意欲と集中力が発揮されています" }
};

export default function OneMinuteInputDemo() {
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState([70]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [weather, setWeather] = useState<keyof typeof weatherIcons>("sunny");
  const [showResults, setShowResults] = useState(false);

  const generateWeather = () => {
    const moodValue = mood[0];
    const tagCount = selectedTags.length;
    
    if (moodValue > 80 && tagCount >= 3) setWeather("energetic");
    else if (moodValue > 60) setWeather("sunny");
    else if (moodValue > 40) setWeather("cloudy");
    else setWeather("stormy");
  };

  const handleComplete = () => {
    generateWeather();
    setShowResults(true);
  };

  const WeatherIcon = weatherIcons[weather];
  const insight = aiInsights[weather];

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-4">
            1分で学びの天気を作ろう
          </h2>
          <p className="text-lg text-storm-600">
            今日の気持ちと体験を記録すると、AIがあなただけの天気図を描きます
          </p>
        </div>

        <Card className="p-8 shadow-[0_10px_30px_rgba(2,132,199,.12)]">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-semibold text-storm-900 mb-4">
                    今日の気分はどうでしたか？
                  </h3>
                  <div className="space-y-4">
                    <Slider
                      value={mood}
                      onValueChange={setMood}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-2xl">
                      {moodLabels.map((emoji, i) => (
                        <span 
                          key={i} 
                          className={`transition-all duration-300 ${
                            Math.floor(mood[0] / 25) === i ? "scale-125" : "opacity-50"
                          }`}
                        >
                          {emoji}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-storm-900 mb-4">
                    今日の体験にタグをつけてみよう
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sampleTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer transition-all duration-200 ${
                          selectedTags.includes(tag) 
                            ? "bg-sky-600 text-white hover:bg-sky-700" 
                            : "hover:bg-sky-50"
                        }`}
                        onClick={() => {
                          setSelectedTags(prev => 
                            prev.includes(tag) 
                              ? prev.filter(t => t !== tag)
                              : [...prev, tag]
                          );
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={handleComplete}
                  disabled={selectedTags.length === 0}
                  className="w-full bg-gradient-to-r from-sky-600 to-sun-600 text-white py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  天気図を作成する
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex justify-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-sun-400 rounded-full flex items-center justify-center">
                      <WeatherIcon className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-storm-900">
                    今日の天気：{weather === "energetic" ? "エネルギッシュ" : 
                                weather === "sunny" ? "晴れ" :
                                weather === "cloudy" ? "曇り" : "雨"}
                  </h3>
                  
                  <blockquote className="text-lg italic text-storm-700 border-l-4 border-sky-400 pl-4">
                    "{insight.quote}"
                  </blockquote>
                  
                  <p className="text-storm-600">{insight.analysis}</p>
                </div>

                <div className="bg-sky-50 rounded-xl p-6">
                  <h4 className="font-semibold text-storm-900 mb-2">今日のタグ</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedTags.map((tag) => (
                      <Badge key={tag} className="bg-sky-200 text-sky-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => {setShowResults(false); setStep(0); setSelectedTags([]);}}
                  variant="outline"
                  className="rounded-full px-6"
                >
                  もう一度試す
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </section>
  );
}