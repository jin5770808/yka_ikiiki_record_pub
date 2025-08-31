"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Brain, Edit3 } from "lucide-react";

const sampleAnalysis = {
  summary: "積極的な学習姿勢と協調性が見られ、特に数学分野での理解度向上が顕著です。",
  evidence: [
    { text: "友達と協力", weight: 0.8, category: "協調性" },
    { text: "質問ができた", weight: 0.9, category: "積極性" },
    { text: "数学が楽しかった", weight: 0.7, category: "理解度" },
    { text: "新しい発見", weight: 0.6, category: "探究心" }
  ],
  confidence: 87
};

export default function ExplainableAI() {
  const [showEvidence, setShowEvidence] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-storm-900 mb-4">
            透明なAI、信頼できる分析
          </h2>
          <p className="text-lg text-storm-600">
            なぜその結論に至ったのか。すべての根拠を、あなたの目で確認できます。
          </p>
        </div>

        <Card className="p-8 shadow-[0_10px_30px_rgba(2,132,199,.12)]">
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <Brain className="w-5 h-5 text-sky-600" />
                  <span className="font-semibold text-storm-900">AI分析結果</span>
                  <Badge variant="outline" className="text-xs">
                    信頼度 {sampleAnalysis.confidence}%
                  </Badge>
                </div>
                
                <p className="text-storm-700 leading-relaxed mb-4">
                  {sampleAnalysis.summary}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowEvidence(!showEvidence)}
                  className="rounded-full"
                >
                  {showEvidence ? (
                    <>
                      <EyeOff className="w-4 h-4 mr-2" />
                      根拠を隠す
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 mr-2" />
                      根拠を表示
                    </>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                  className="rounded-full"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  編集
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {showEvidence && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <h4 className="font-semibold text-storm-900">分析の根拠</h4>
                  <div className="space-y-3">
                    {sampleAnalysis.evidence.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-sky-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-storm-700">"{item.text}"</span>
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-sky-200 rounded-full h-2">
                            <div 
                              className="bg-sky-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${item.weight * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-storm-500 w-8">
                            {Math.round(item.weight * 100)}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {isEditing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-sun-50 border border-sun-200 rounded-lg p-4"
              >
                <p className="text-sm text-storm-600 mb-3">
                  分析結果を調整して、より正確な記録にしましょう
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">AI提案を採用</Button>
                  <Button size="sm" variant="outline">手動で調整</Button>
                  <Button size="sm" variant="outline">保存</Button>
                </div>
              </motion.div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}